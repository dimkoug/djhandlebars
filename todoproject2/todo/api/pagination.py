from rest_framework import permissions, viewsets, status, views, pagination
from rest_framework.response import Response


class CustomPagination(pagination.PageNumberPagination):
    def get_paginated_response(self, data):
        if 'no_page' in self.request.query_params:
            return Response({
                'results': self.get_queryset()
            })
        else:
            return Response({
                'links': {
                    'next': self.get_next_link(),
                    'previous': self.get_previous_link()
                },
                'count': self.page.paginator.count,
                'results': data
            })
