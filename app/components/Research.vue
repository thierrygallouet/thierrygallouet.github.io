<template>
  <section id="research" class="py-16 bg-muted/30">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-semibold text-center mb-12">Recherche</h2>
      <div class="max-w-6xl mx-auto">
        <Tabs defaultValue="articles" class="w-full">
          <TabsList class="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="articles">Articles célèbres</TabsTrigger>
             <TabsTrigger value="publicationsPlus"
              >Publications les + citées</TabsTrigger
            >
            <TabsTrigger value="publications"
              >Publications récentes</TabsTrigger
            >
          </TabsList>

          <TabsContent value="articles" class="space-y-6">
            <div class="grid lg:grid-cols-2 gap-6">
              <Card
                v-for="(article, index) in articles"
                :key="index"
                class="h-full"
              >
                <CardHeader>
                  <CardTitle class="text-lg">{{ article.title }}</CardTitle>
                  <div class="space-y-1 text-sm text-muted-foreground">
                    <p>{{ article.funding }}</p>
                    <p>{{ article.period }} • {{ article.amount }}</p>
                  </div>
                </CardHeader>
                <CardContent>
                  <p class="text-sm">{{ article.description }}</p>
                </CardContent>
                <CardContent v-if="article.link">
                  <a :href="article.link">
                    <Button variant="ghost" class="cursor-pointer float-right">
                      <Download class="w-4 h-4 mr-2" /> PDF
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="publicationsPlus" class="space-y-6">
            <div class="space-y-4">
              <Card v-for="(pub, index) in publicationsPlus" :key="index">
                <CardContent class="p-6">
                  <div class="flex items-start justify-between mb-3">
                    <h3 class="font-semibold text-lg leading-tight pr-4">
                      {{ pub.title }}
                    </h3>
                    <div class="flex flex-col items-end gap-2">
                      <Badge
                        :variant="
                          pub.type === 'Journal' ? 'default' : 'secondary'
                        "
                      >
                        {{ pub.type }}
                      </Badge>
                      <Badge variant="outline" class="text-xs">
                        {{ pub.citations }} citations
                      </Badge>
                    </div>
                  </div>
                  <p class="text-sm text-muted-foreground mb-2">
                    {{ pub.authors }}
                  </p>
                  <p class="text-sm mb-2">{{ pub.venue }}</p>
                  <div class="flex items-center justify-between">
                    <p class="text-sm font-medium">{{ pub.year }}</p>
                    <div class="flex gap-2">
                      <a 
                        v-if="pub.url" 
                        :href="pub.url" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="text-xs text-blue-600 hover:text-blue-800 underline"
                      >
                        MathSciNet
                      </a>
                      <a 
                        v-if="pub.doi" 
                        :href="`https://doi.org/${pub.doi}`" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        class="text-xs text-blue-600 hover:text-blue-800 underline"
                      >
                        DOI
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="publications" class="space-y-6">
            <div class="space-y-4">
              <Card v-for="(pub, index) in publications" :key="index">
                <CardContent class="p-6">
                  <div class="flex items-start justify-between mb-3">
                    <h3 class="font-semibold text-lg leading-tight pr-4">
                      {{ pub.title }}
                    </h3>
                    <Badge
                      :variant="
                        pub.type === 'Journal' ? 'default' : 'secondary'
                      "
                    >
                      {{ pub.type }}
                    </Badge>
                  </div>
                  <p class="text-sm text-muted-foreground mb-2">
                    {{ pub.authors }}
                  </p>
                  <p class="text-sm mb-2">{{ pub.venue }}</p>
                  <p class="text-sm font-medium">{{ pub.year }}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Link, Download } from "lucide-vue-next";

// Récupération des données depuis les collections Nuxt Content
const { data: articles } = await useAsyncData('articles', () => queryContent('research/articles').find())
const { data: publicationsPlus } = await useAsyncData('publicationsPlus', () => queryContent('research/publications-plus').find())
const { data: publications } = await useAsyncData('publications', () => queryContent('research/publications').find())
</script>

<style scoped></style>
