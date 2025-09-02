<template>
    <Card className="h-full">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-lg">{{course.code}}: {{course.title}}</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">{course.semester}</p>
          </div>
          <!-- <Badge variant={course.level === "Master" ? "default" : course.level === "Distance" ? "outline" : "secondary"}>
            {course.level}
          </Badge> -->
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm">description</p>
      </CardContent>
    </Card>
</template>

<script setup lang="ts">
const props = defineProps(['course'])

</script>

<style scoped>

</style>