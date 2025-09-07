<template>
  <Card class="h-full">
    <CardHeader>
      <div class="flex items-start justify-between">
        <div>
          <CardTitle class="text-lg"
            >{{ course.code }}: {{ course.title }}</CardTitle
          >
          <p class="text-sm text-muted-foreground mt-1">
            {{ course.semester }}
          </p>
        </div>
        <Badge>
          {{ course.level }}
        </Badge>
      </div>
    </CardHeader>
    <CardContent>
      <p class="text-sm">{{ course.description }}</p>
    </CardContent>
    <CardContent v-if="course.link" class="pt-0">
      <a :href="course.link">
        <Button variant="ghost" class="cursor-pointer float-right">
          <Download class="w-4 h-4 mr-2" /> PDF
        </Button>
      </a>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Download, Mail } from "lucide-vue-next";

const props = defineProps(["course"]);
</script>

<style scoped></style>
