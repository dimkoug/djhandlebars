from django.views.generic import TemplateView
from django.http import JsonResponse
from rest_framework.decorators import api_view
from django.db.models import Q

from todos.models import Category, Tag



class IndexView(TemplateView):
    template_name = "index.html"



@api_view(['GET'])
def get_categories(request):
    """"
    Return Data for  select box 2  plugin
    """
    results = []
    if not request.user.is_authenticated:
        return JsonResponse(results, safe=False)
    data = Category.objects.all().values('id', 'name')
    for d in data:
        results.append({'id':d['id'], "text": d['name']})
    # j_data = serializers.serialize("json", data, fields=('erp_code', 'title'))
    # return JsonResponse(j_data, safe=False)
    return JsonResponse({"results": results}, safe=False)

@api_view(['GET'])
def get_tags(request):
    """"
    Return Data for  select box 2  plugin
    """
    results = []
    if not request.user.is_authenticated:
        return JsonResponse(results, safe=False)
    data = Tag.objects.all().values('id', 'name')
    for d in data:
        results.append({'id':d['id'], "text": d['name']})
    # j_data = serializers.serialize("json", data, fields=('erp_code', 'title'))
    # return JsonResponse(j_data, safe=False)
    return JsonResponse({"results": results}, safe=False)





@api_view(['GET'])
def get_categories_for_sb(request):
    """"
    Return Data for  select box 2  plugin
    """
    results = []
    if not request.user.is_authenticated:
        return JsonResponse(results, safe=False)
    search = request.GET.get('search')
    if search and search != '':
        data = Category.objects.filter(
            Q(name__icontains=search)
        ).values('id', 'name')
        for d in data:
            results.append({'id':d['id'], "text": d['name']})
        # j_data = serializers.serialize("json", data, fields=('erp_code', 'title'))
        # return JsonResponse(j_data, safe=False)
    return JsonResponse({"results": results}, safe=False)

@api_view(['GET'])
def get_tags_for_sb(request):
    """"
    Return Data for  select box 2  plugin
    """
    results = []
    if not request.user.is_authenticated:
        return JsonResponse(results, safe=False)
    search = request.GET.get('search')
    if search and search != '':
        data = Tag.objects.filter(
            Q(name__icontains=search)
        ).values('id', 'name')
        for d in data:
            results.append({'id':d['id'], "text": d['name']})
        # j_data = serializers.serialize("json", data, fields=('erp_code', 'title'))
        # return JsonResponse(j_data, safe=False)
    return JsonResponse({"results": results}, safe=False)