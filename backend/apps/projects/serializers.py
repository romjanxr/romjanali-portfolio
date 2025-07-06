from rest_framework import serializers
from projects.models import (
    Project, Technology, ProjectScreenshot,
    CaseStudy, ProjectObjective, ObjectiveGoal,
    ProjectChallenge, ProjectToolCategory, ProjectTool,
    ProjectFeature, ProjectMetric, ProjectAchievement
)


class TechnologySerializer(serializers.ModelSerializer):
    class Meta:
        model = Technology
        fields = ["name"]


class ProjectScreenshotSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()

    class Meta:
        model = ProjectScreenshot
        fields = ["id", "title", "image", "description"]


class ObjectiveGoalSerializer(serializers.ModelSerializer):
    class Meta:
        model = ObjectiveGoal
        fields = ["goal"]


class ProjectObjectiveSerializer(serializers.ModelSerializer):
    goals = ObjectiveGoalSerializer(many=True, read_only=True)

    class Meta:
        model = ProjectObjective
        fields = ["title", "content", "goals"]


class ProjectChallengeSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectChallenge
        fields = ["challenge", "solution"]


class ProjectToolSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectTool
        fields = ["name"]


class ProjectToolCategorySerializer(serializers.ModelSerializer):
    tools = ProjectToolSerializer(many=True, read_only=True)

    class Meta:
        model = ProjectToolCategory
        fields = ["title", "category_type", "tools"]


class ProjectFeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectFeature
        fields = ["feature"]


class ProjectMetricSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectMetric
        fields = ["label", "value", "description"]


class ProjectAchievementSerializer(serializers.ModelSerializer):
    class Meta:
        model = ProjectAchievement
        fields = ["text"]


class CaseStudySerializer(serializers.ModelSerializer):
    objective = ProjectObjectiveSerializer(read_only=True)
    challenges = ProjectChallengeSerializer(many=True, read_only=True)
    tool_categories = ProjectToolCategorySerializer(many=True, read_only=True)
    features = ProjectFeatureSerializer(many=True, read_only=True)
    metrics = ProjectMetricSerializer(many=True, read_only=True)
    achievements = ProjectAchievementSerializer(many=True, read_only=True)

    class Meta:
        model = CaseStudy
        fields = [
            "objective", "challenges", "tool_categories",
            "features", "metrics", "achievements"
        ]

    def to_representation(self, instance):
        data = super().to_representation(instance)
        tools_by_type = {"frontend": [], "backend": [],
                         "deployment": [], "tools": []}
        for category in data.pop("tool_categories"):
            tools_by_type[category["category_type"]] = [
                tool["name"] for tool in category["tools"]]

        return {
            "objective": data["objective"],
            "challenges": {
                "title": "Challenges & Solutions",
                "items": data["challenges"]
            },
            "tools": {
                "title": "Tools & Technologies",
                **tools_by_type
            },
            "features": [f["feature"] for f in data["features"]],
            "results": {
                "title": "Results & Impact",
                "metrics": data["metrics"],
                "achievements": [a["text"] for a in data["achievements"]]
            }
        }


class ProjectListSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    technologies = serializers.SlugRelatedField(
        many=True, read_only=True, slug_field="name")

    class Meta:
        model = Project
        fields = [
            "id", "slug", "title", "description", "image",
            "technologies", "live_url", "github_url"
        ]


class ProjectDetailSerializer(serializers.ModelSerializer):
    image = serializers.ImageField()
    technologies = serializers.SlugRelatedField(
        many=True, read_only=True, slug_field="name")
    screenshots = ProjectScreenshotSerializer(many=True, read_only=True)
    case_study = CaseStudySerializer(read_only=True)

    class Meta:
        model = Project
        fields = [
            "id", "slug", "title", "subtitle", "description", "image",
            "live_url", "github_url", "category", "status", "duration",
            "team", "completed_date", "technologies", "screenshots", "case_study"
        ]

    def to_representation(self, instance):
        data = super().to_representation(instance)
        return {
            "id": data["id"],
            "title": data["title"],
            "subtitle": data["subtitle"],
            "description": data["description"],
            "image": data["image"],
            "liveUrl": data["live_url"],
            "githubUrl": data["github_url"],
            "category": data["category"],
            "status": data["status"],
            "duration": data["duration"],
            "team": data["team"],
            "completedDate": data["completed_date"],
            "technologies": data["technologies"],
            "screenshots": data["screenshots"],
            "caseStudy": data["case_study"]
        }
