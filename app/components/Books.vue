<!-- BooksSection.vue -->
<template>
  <section id="books" class="py-16 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-semibold mb-4">Livres</h2>
        <p class="text-muted-foreground max-w-2xl mx-auto">
          Publications d'ouvrages de référence en mathématiques, couvrant la théorie de la mesure, 
          les équations aux dérivées partielles et l'analyse numérique.
        </p>
      </div>

      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 xl:grid-cols-3 gap-6">
          <Card
            v-for="(book, index) in books"
            :key="index"
            class="h-full flex flex-col overflow-hidden pt-0"
          >
            <!-- Cover Image -->
            <div class="relative h-48 bg-muted overflow-hidden">
              <ImageWithFallback
                :src="book.coverImage"
                :alt="`Couverture de ${book.title}`"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-2 right-2">
                <Badge>
                  {{ book.type }}
                </Badge>
              </div>
            </div>

            <CardHeader class="pb-3">
              <CardTitle class="text-lg leading-tight flex items-center gap-2">
                 <BookOpen class="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                {{ book.title }}
              </CardTitle>

              <div class="space-y-1">
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <Users class="h-4 w-4" />
                  <span>{{ book.author }}</span>
                </div>
                <div class="flex items-center gap-2 text-sm text-muted-foreground">
                  <Calendar class="h-4 w-4" />
                  <span>{{ book.year }} • {{ book.level }}</span>
                </div>
              </div>
            </CardHeader>

            <CardContent class="flex-1 flex flex-col pt-0">
              <p class="text-sm mb-4 flex-1">
                {{ book.description }}
              </p>

              <div class="space-y-2">
                <h4 class="font-medium text-sm">Thèmes abordés:</h4>
                <div class="flex flex-wrap gap-1">
                  <Badge
                    v-for="(topic, tIdx) in book.topics"
                    :key="tIdx"
                    variant="outline"
                    class="text-xs"
                  >
                    {{ topic }}
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Calendar, BookOpen } from "lucide-vue-next";

type Book = {
  title: string;
  author: string;
  type: string;
  level: string;
  year: string;
  coverImage: string;
  description: string;
  topics: string[];
};

// Using Nuxt Content with fallback to static data
const { data: books } = await useAsyncData('books', async () => {
  try {
    const booksData = await queryCollection('books').all()
    return booksData
      .sort((a: any, b: any) => a.order - b.order)
      .map((book: any) => ({
        ...book,
        description: book.body || book.description
      }))
  } catch (error) {
    console.warn('Error loading books from content, using fallback:', error)
    return [
      // {
      //   title: "Error not loading books",
      //   author: "Thierry Gallouët",
      //   type: "Livre",
      //   level: "Licence/Master",
      //   year: "2013",
      //   coverImage: "/mesure-integrations.jpeg",
      //   description: "Un ouvrage complet couvrant la théorie de la mesure, l'intégration de Lebesgue et les bases des probabilités, enrichi de plus de 300 exercices corrigés pour un apprentissage progressif.",
      //   topics: ["Théorie de la mesure", "Intégration de Lebesgue", "Probabilités", "Exercices corrigés"],
      // },
    ]
  }
})
</script>
