from django.contrib import admin

# Register your models here.
from .models import Category, Tag, Todo



class CategoryAdmin(admin.ModelAdmin):
    pass
admin.site.register(Category, CategoryAdmin)


class TagAdmin(admin.ModelAdmin):
    pass
admin.site.register(Tag, TagAdmin)


class TodoAdmin(admin.ModelAdmin):
    pass
admin.site.register(Todo, TodoAdmin)
