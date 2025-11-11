<template>
    <section id="courses" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center mb-12">Enseignements</h2>
        <div class="max-w-6xl mx-auto">
          <!-- <Tabs defaultValue="distance" class="w-full">
            <TabsList class="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="distance">Enseignements</TabsTrigger>
              <TabsTrigger value="current">Livres</TabsTrigger>
            </TabsList>
            
            <TabsContent value="distance" class="space-y-6">
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <template v-for="(course, index) in courses" :key="index">
                  <CourseCard :course="course" />
                </template>
              </div>
            </TabsContent>
                        
            <TabsContent value="current" class="space-y-6"> -->
              <div class="grid md:grid-cols-2 gap-6">
                <template v-for="(course, index) in courses" :key="index">
                  <CourseCard :course="course" />
                </template>
                  
              </div>
            <!-- </TabsContent>

          </Tabs> -->
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
// Using Nuxt Content with fallback to static data
const { data: courses } = await useAsyncData('courses', async () => {
  try {
    return await queryCollection('courses').all()
  } catch (error) {
    console.warn('Error queryCollection courses, using static data:', error)
    return [
      {
        code: "L1",
        title: "Analyse et Algèbre",
        semester: "Première année, deuxième semestre",
        description: "limites, continuité, dérivées, intégration",
        level: "Licence",
        link: "http://www.i2m.univ-amu.fr/~gallouet/licence.d/analyse/analyse-l1.pdf"
      },
      {
        code: "L3",
        title: "EDP, cours manuscrit",
        semester: "Troisième année",
        description: "Cours avancés de mathématiques pour étudiants de Licence troisième année, incluant plusieurs disciplines mathématiques fondamentales.",
        level: "Licence",
        link: "http://www.i2m.univ-amu.fr/~gallouet/cours.d/edp-ens.pdf"
      },
      {
        code: "L3",
        title: "Calcul différentiel et optimisation",
        semester: "Première année de Master",
        description: "cours manuscrit université de Chambéry 92-93",
        level: "Master",
        link: "http://www.i2m.univ-amu.fr/~gallouet/licence.d/CDO.pdf"
      },
      {
        code: "L3 & M1",
        title: "Mesure, intégration et probabilités",
        semester: "Deuxième année de Master",
        description: "MESURE, INTEGRATION, PROBABILITÉS Cours avec plus de 300 exercices corrigés",
        level: "Master",
        link: "http://www.i2m.univ-amu.fr/~gallouet/licence.d/mes-int-pro.pdf"
      },
      {
        code: "M1",
        title: "Analyse fonctionnelle",
        semester: "Deuxième année de Master",
        description: "Master de mathématiques, 1ere année, université d'Aix-Marseille, Notes de cours et travaux dirigés",
        level: "Master",
        link: "https://www.i2m.univ-amu.fr/perso/thierry.gallouet/maitrise.d/anfonc.d/notedecours.pdf"
      },
      {
        code: "M2",
        title: "EDP",
        semester: "Deuxième année de Master",
        description: "Master de mathématiques, 1ere année, université d'Aix-Marseille, Notes de cours et travaux dirigés",
        level: "Master",
        link: "http://www.i2m.univ-amu.fr/~gallouet/master2.d/M2edp.pdf"
      },
      {
        code: "DESS",
        title: "Récupération assistée des hydrocarbures",
        semester: "Deuxième année de Master",
        description: "Master de mathématiques, 1ere année, université d'Aix-Marseille, Notes de cours et travaux dirigés",
        level: "Master",
        link: "http://www.i2m.univ-amu.fr/~gallouet/dess.d/cours.d/ifp/cours.pdf"
      }
    ]
  }
})
</script>

<style scoped>

</style>