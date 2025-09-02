<template>
    <section id="courses" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center mb-12">Enseignements</h2>
        <div class="max-w-6xl mx-auto">
          <Tabs defaultValue="current" class="w-full">
            <TabsList class="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="current">Enseignements présentiels</TabsTrigger>
              <TabsTrigger value="distance">Téléenseignements</TabsTrigger>
              <TabsTrigger value="past">Formations passées</TabsTrigger>
            </TabsList>
            
            <TabsContent value="current" class="space-y-6">
              <div class="grid md:grid-cols-2 gap-6">
                <template v-for="(course, index) in currentCourses" :key="index">
                  <CourseCard :course="course" />
                </template>
                  
              </div>
            </TabsContent>
            
            <TabsContent value="distance" class="space-y-6">
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <template v-for="(course, index) in distanceCourses" :key="index">
                  <CourseCard :course="course" />
                </template>
              </div>
            </TabsContent>
            
            <TabsContent value="past" class="space-y-6">
              <div class="grid md:grid-cols-1 gap-6">
                <template v-for="(course, index) in pastCourses" :key="index">
                  <CourseCard :course="course" />
                </template>
               
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
const currentCourses = [
    {
      code: "L1",
      title: "Analyse et Algèbre",
      semester: "Première année, deuxième semestre",
      description: "Cours de mathématiques fondamentales pour étudiants de Licence première année, couvrant les bases de l'analyse et de l'algèbre.",
      level: "Licence"
    },
    {
      code: "L3",
      title: "Intégration, Analyse numérique, Probabilités, Équations différentielles",
      semester: "Troisième année",
      description: "Cours avancés de mathématiques pour étudiants de Licence troisième année, incluant plusieurs disciplines mathématiques fondamentales.",
      level: "Licence"
    },
    {
      code: "M1",
      title: "Analyse fonctionnelle, Théorie de la mesure et probabilités, Analyse de Fourier, Analyse numérique des EDP",
      semester: "Première année de Master",
      description: "Cours de mathématiques avancées pour étudiants de Master première année, couvrant les aspects théoriques et numériques.",
      level: "Master"
    },
    {
      code: "M2",
      title: "EDP, Calcul Scientifique, Schémas pour St-Venant",
      semester: "Deuxième année de Master",
      description: "Cours spécialisés en équations aux dérivées partielles et calcul scientifique pour étudiants de Master deuxième année.",
      level: "Master"
    }
  ];

  const pastCourses = [
    {
      code: "DESS",
      title: "Ingénierie Mécanique et Calcul Scientifique",
      semester: "2003-2006",
      description: "Participation au master professionnalisant des universités de Marseille, formation spécialisée en calcul scientifique appliqué.",
      level: "Professionnel"
    }
  ];

  const distanceCourses = [
    {
      code: "L3",
      title: "Intégration (Téléenseignement)",
      semester: "2014-2015",
      description: "Cours d'intégration dispensé à distance pour les étudiants de Licence troisième année.",
      level: "Distance"
    },
    {
      code: "L3",
      title: "Analyse numérique (Téléenseignement)",
      semester: "2017-2018",
      description: "Cours d'analyse numérique dispensé à distance pour les étudiants de Licence troisième année.",
      level: "Distance"
    },
    {
      code: "M1",
      title: "Mesure, intégration, probabilités (Téléenseignement)",
      semester: "2020-2021",
      description: "Cours dispensé à distance en collaboration avec Erwan Hillion, couvrant la théorie de la mesure et les probabilités.",
      level: "Distance"
    }
  ];
</script>

<style scoped>

</style>