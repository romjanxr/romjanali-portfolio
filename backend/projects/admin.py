from django.contrib import admin
from django.utils.html import format_html
from .models import (
    Project, Technology, ProjectScreenshot,
    CaseStudy, ProjectObjective, ObjectiveGoal,
    ProjectChallenge, ProjectToolCategory, ProjectTool,
    ProjectFeature, ProjectMetric, ProjectAchievement
)


@admin.register(Technology)
class TechnologyAdmin(admin.ModelAdmin):
    search_fields = ['name']


class ObjectiveGoalInline(admin.TabularInline):
    model = ObjectiveGoal
    extra = 1


@admin.register(ProjectObjective)
class ProjectObjectiveAdmin(admin.ModelAdmin):
    inlines = [ObjectiveGoalInline]
    list_display = ['title', 'case_study']


class ProjectChallengeInline(admin.TabularInline):
    model = ProjectChallenge
    extra = 1


class ProjectToolInline(admin.TabularInline):
    model = ProjectTool
    extra = 1


@admin.register(ProjectToolCategory)
class ProjectToolCategoryAdmin(admin.ModelAdmin):
    inlines = [ProjectToolInline]
    list_display = ['title', 'category_type']
    list_filter = ['category_type']


class ProjectFeatureInline(admin.TabularInline):
    model = ProjectFeature
    extra = 1


class ProjectMetricInline(admin.TabularInline):
    model = ProjectMetric
    extra = 1


class ProjectAchievementInline(admin.TabularInline):
    model = ProjectAchievement
    extra = 1


class ProjectScreenshotInline(admin.TabularInline):
    model = ProjectScreenshot
    extra = 1
    readonly_fields = ['preview']

    def preview(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="height: 80px;" />', obj.image.url)
        return "-"
    preview.short_description = "Image Preview"


class CaseStudyInline(admin.StackedInline):
    model = CaseStudy
    can_delete = False
    verbose_name_plural = 'Case Study'
    fk_name = 'project'


@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ['title', 'slug', 'category',
                    'status', 'completed_date', 'thumbnail']
    prepopulated_fields = {"slug": ("title",)}
    search_fields = ['title', 'slug', 'category']
    list_filter = ['category', 'status']
    inlines = [
        ProjectScreenshotInline,
        CaseStudyInline,
    ]
    readonly_fields = ['thumbnail']

    def thumbnail(self, obj):
        if obj.image:
            return format_html('<img src="{}" style="height: 80px;" />', obj.image.url)
        return "-"
    thumbnail.short_description = "Image Preview"

    def get_inline_instances(self, request, obj=None):
        # Show CaseStudy inline only if object exists
        inline_instances = []
        for inline_class in self.inlines:
            if inline_class == CaseStudyInline and obj is None:
                continue
            inline = inline_class(self.model, self.admin_site)
            inline_instances.append(inline)
        return inline_instances


@admin.register(CaseStudy)
class CaseStudyAdmin(admin.ModelAdmin):
    list_display = ['project']

    inlines = [
        # ProjectObjectiveAdmin is a ModelAdmin, not inline, so we can't include it here
        ProjectChallengeInline,
        ProjectToolCategoryInline := type(
            'ProjectToolCategoryInline', (admin.TabularInline,), {
                'model': ProjectToolCategory,
                'extra': 1,
                'inlines': [ProjectToolInline],
            }),
        ProjectFeatureInline,
        ProjectMetricInline,
        ProjectAchievementInline,
        ProjectObjectiveInline := type(
            'ProjectObjectiveInline', (admin.StackedInline,), {
                'model': ProjectObjective,
                'extra': 0,
                'inlines': [ObjectiveGoalInline],
            }),
    ]

    def get_inline_instances(self, request, obj=None):
        inline_instances = []
        # Inline classes for CaseStudyAdmin cannot nest other inlines by default.
        # So only add the first-level inlines
        for inline_class in self.inlines:
            if isinstance(inline_class, type) and issubclass(inline_class, admin.TabularInline) or issubclass(inline_class, admin.StackedInline):
                inline_instances.append(
                    inline_class(self.model, self.admin_site))
        return inline_instances
