from django.db import models

# Create your models here.
class Timestamped(models.Model):
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        abstract = True


class Category(Timestamped):
    name = models.CharField(max_length=100)

    class Meta:
        default_related_name = 'categories'
        verbose_name = 'category'
        verbose_name_plural = 'categories'

    def __str__(self):
        return f"{self.name}"


class Tag(Timestamped):
    name = models.CharField(max_length=100)

    class Meta:
        default_related_name = 'tags'
        verbose_name = 'tag'
        verbose_name_plural = 'tags'

    def __str__(self):
        return f"{self.name}"


class Todo(Timestamped):
    name = models.CharField(max_length=100)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    tags = models.ManyToManyField(Tag, through='TodoTag', blank=True)

    class Meta:
        default_related_name = 'todos'
        verbose_name = 'todo'
        verbose_name_plural = 'todos'
        ordering = ['-id']

    def __str__(self):
        return f"{self.name}"


class TodoTag(Timestamped):
    todo = models.ForeignKey(Todo, on_delete=models.CASCADE)
    tag = models.ForeignKey(Tag, on_delete=models.CASCADE)

    class Meta:
        default_related_name = 'todotags'
        verbose_name = 'todo tag'
        verbose_name_plural = 'todo tags'
        unique_together = (('todo', 'tag'),)

    def __str__(self):
        return f"{self.todo.name}, {self.tag.name}"
