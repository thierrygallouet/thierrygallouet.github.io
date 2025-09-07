<!-- BooksSection.vue -->
<template>
  <section id="books" class="py-16 bg-background">
    <div class="container mx-auto px-4">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-semibold mb-4">Ouvrages</h2>
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
            class="h-full flex flex-col overflow-hidden"
          >
            <!-- Cover Image -->
            <div class="relative h-48 bg-muted overflow-hidden">
              <ImageWithFallback
                :src="book.coverImage"
                :alt="`Couverture de ${book.title}`"
                class="w-full h-full object-cover"
              />
              <div class="absolute top-2 right-2">
                <Badge :variant="book.type === 'Manuel de cours' ? 'default' : 'secondary'">
                  {{ book.type }}
                </Badge>
              </div>
            </div>

            <CardHeader class="pb-3">
              <CardTitle class="text-lg leading-tight">
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
  type: "Manuel de cours" | "Recherche";
  level: string;
  year: string;
  coverImage: string;
  description: string;
  topics: string[];
};

const books: Book[] = [
  {
    title:
      "Mesure, intégration, probabilités: Cours avec plus de 300 exercices corrigés",
    author: "Thierry Gallouët",
    type: "Manuel de cours",
    level: "Licence/Master",
    year: "2013",
    coverImage:
      "https://images.unsplash.com/photo-1732304720116-4195b021d8d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMHRleHRib29rJTIwY292ZXJ8ZW58MXx8fHwxNzU3MTgzNzgxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Un ouvrage complet couvrant la théorie de la mesure, l'intégration de Lebesgue et les bases des probabilités, enrichi de plus de 300 exercices corrigés pour un apprentissage progressif.",
    topics: [
      "Théorie de la mesure",
      "Intégration de Lebesgue",
      "Probabilités",
      "Exercices corrigés",
    ],
  },
  {
    title: "Weak Solutions of Partial Differential Equations",
    author: "Thierry Gallouët",
    type: "Recherche",
    level: "Master/Doctorat",
    year: "2018",
    coverImage:
      "https://images.unsplash.com/photo-1750776418412-1548a2b3f4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2FkZW1pYyUyMGJvb2slMjBwYXJ0aWFsJTIwZGlmZmVyZW50aWFsJTIwZXF1YXRpb25zfGVufDF8fHx8MTc1NzI2NDY3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Un traité avancé sur les solutions faibles des équations aux dérivées partielles, présentant les développements théoriques modernes et les applications pratiques.",
    topics: [
      "Solutions faibles",
      "EDP",
      "Analyse fonctionnelle",
      "Méthodes variationnelles",
    ],
  },
  {
    title: "The Gradient Discretisation Method",
    author: "Thierry Gallouët",
    type: "Recherche",
    level: "Master/Doctorat",
    year: "2020",
    coverImage:
      "https://images.unsplash.com/photo-1750776418412-1548a2b3f4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxudW1lcmljYWwlMjBhbmFseXNpcyUyMG1hdGhlbWF0aWNzJTIwYm9va3xlbnwxfHx8fDE3NTcyNjQ2NzF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    description:
      "Une présentation complète de la méthode de discrétisation par gradients, technique innovante pour l'analyse numérique des équations aux dérivées partielles.",
    topics: [
      "Méthodes numériques",
      "Discrétisation",
      "Analyse numérique",
      "Convergence",
    ],
  },
];
</script>
