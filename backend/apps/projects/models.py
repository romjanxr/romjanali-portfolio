from django.db import models
from django.utils.text import slugify

# Create your models here.


class Technology(models.Model):
    name = models.CharField(max_length=100, unique=True)

    def __str__(self):
        return self.name


class Project(models.Model):
    slug = models.SlugField(unique=True)
    title = models.CharField(max_length=200)
    subtitle = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to="projects/")
    live_url = models.URLField(blank=True, null=True)
    github_url = models.URLField(blank=True, null=True)
    category = models.CharField(max_length=100)
    status = models.CharField(max_length=100)
    duration = models.CharField(max_length=100)
    team = models.CharField(max_length=100)
    completed_date = models.CharField(max_length=100)
    technologies = models.ManyToManyField(Technology, related_name="projects")

    def save(self, *args, **kwargs):
        if not self.slug:
            # Automatically generate slug from title
            self.slug = slugify(self.title)
        super().save(*args, **kwargs)

    def __str__(self):
        return self.title


class ProjectScreenshot(models.Model):
    project = models.ForeignKey(
        Project, on_delete=models.CASCADE, related_name="screenshots")
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to="project_screenshots/")
    description = models.TextField()


class CaseStudy(models.Model):
    project = models.OneToOneField(
        Project, on_delete=models.CASCADE, related_name="case_study")

    def __str__(self):
        return f"Case Study for {self.project.title}"


class ProjectObjective(models.Model):
    case_study = models.OneToOneField(
        CaseStudy, on_delete=models.CASCADE, related_name="objective")
    title = models.CharField(max_length=200)
    content = models.TextField()


class ObjectiveGoal(models.Model):
    objective = models.ForeignKey(
        ProjectObjective, on_delete=models.CASCADE, related_name="goals")
    goal = models.CharField(max_length=300)


class ProjectChallenge(models.Model):
    case_study = models.ForeignKey(
        CaseStudy, on_delete=models.CASCADE, related_name="challenges")
    challenge = models.CharField(max_length=300)
    solution = models.TextField()


class ProjectToolCategory(models.Model):
    case_study = models.ForeignKey(
        CaseStudy, on_delete=models.CASCADE, related_name="tool_categories")
    title = models.CharField(max_length=100)
    category_type = models.CharField(max_length=50)  # frontend, backend, etc.


class ProjectTool(models.Model):
    category = models.ForeignKey(
        ProjectToolCategory, on_delete=models.CASCADE, related_name="tools")
    name = models.CharField(max_length=100)


class ProjectFeature(models.Model):
    case_study = models.ForeignKey(
        CaseStudy, on_delete=models.CASCADE, related_name="features")
    feature = models.CharField(max_length=300)


class ProjectMetric(models.Model):
    case_study = models.ForeignKey(
        CaseStudy, on_delete=models.CASCADE, related_name="metrics")
    label = models.CharField(max_length=100)
    value = models.CharField(max_length=100)
    description = models.TextField()


class ProjectAchievement(models.Model):
    case_study = models.ForeignKey(
        CaseStudy, on_delete=models.CASCADE, related_name="achievements")
    text = models.TextField()
