from django.db import models

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=255)


    class Meta:
        default_related_name = 'categories'
        verbose_name = 'category'
        verbose_name_plural = 'categories'
        ordering = ['-id']
    
    def __str__(self):
        return self.name


class Tag(models.Model):
    name = models.CharField(max_length=255)


    class Meta:
        default_related_name = 'tags'
        verbose_name = 'tag'
        verbose_name_plural = 'tags'
    
    def __str__(self):
        return self.name
    



class Todo(models.Model):
    category = models.ForeignKey("Category", on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    tags = models.ManyToManyField(Tag, through="TodoTag", blank=True)


    class Meta:
        default_related_name = 'todos'
        verbose_name = 'todo'
        verbose_name_plural = 'todos'
        ordering = ['-id']
    
    def __str__(self):
        return self.name
    

class TodoTag(models.Model):
    todo = models.ForeignKey("Todo", on_delete=models.CASCADE)
    tag = models.ForeignKey("Tag", on_delete=models.CASCADE)