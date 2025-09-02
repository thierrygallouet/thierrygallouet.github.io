<template>
<section id="research" class="py-16 bg-muted/30">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center mb-12">Recherche</h2>
        <div class="max-w-6xl mx-auto">
          <Tabs defaultValue="publications" class="w-full">
            <TabsList class="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="publications">Publications récentes</TabsTrigger>
              <TabsTrigger value="projects">Projets de recherche</TabsTrigger>
            </TabsList>
            
            <TabsContent value="publications" class="space-y-6">
              <div class="space-y-4">
                  <Card v-for="(pub, index) in publications" :key="index" >
                    <CardContent class="p-6">
                      <div class="flex items-start justify-between mb-3">
                        <h3 class="font-semibold text-lg leading-tight pr-4">{{pub.title}}</h3>
                        <Badge :variant="pub.type === 'Journal' ? 'default' : 'secondary'">
                          {{pub.type}}
                        </Badge>
                      </div>
                      <p class="text-sm text-muted-foreground mb-2">{{pub.authors}}</p>
                      <p class="text-sm mb-2">{{pub.venue}}</p>
                      <p class="text-sm font-medium">{{pub.year}}</p>
                    </CardContent>
                  </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="projects" class="space-y-6">
              <div class="grid lg:grid-cols-2 gap-6">
                  <Card  v-for="(project, index) in projects" :key="index" class="h-full">
                    <CardHeader>
                      <CardTitle class="text-lg">{{project.title}}</CardTitle>
                      <div class="space-y-1 text-sm text-muted-foreground">
                        <p>{{project.funding}}</p>
                        <p>{{project.period}} • {{project.amount
                        }}</p>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p class="text-sm">{{project.description}}</p>
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
const publications = [
    {
      title: "Schémas numériques pour les équations de Saint-Venant : convergence et stabilité",
      authors: "T. Gallouet, R. Herbin, J.-C. Latché",
      venue: "Comptes Rendus Mathématique",
      year: "2024",
      type: "Journal"
    },
    {
      title: "Analyse numérique des EDP hyperboliques : méthodes de volumes finis",
      authors: "T. Gallouet, L. Gastaldo, R. Herbin",
      venue: "Mathematics of Computation",
      year: "2023",
      type: "Journal"
    },
    {
      title: "Convergence d'un schéma de volumes finis pour l'équation de la chaleur non linéaire",
      authors: "T. Gallouet, R. Herbin",
      venue: "Numerische Mathematik",
      year: "2023",
      type: "Journal"
    },
    {
      title: "Mesure et intégration : aspects théoriques et numériques",
      authors: "T. Gallouet, E. Hillion",
      venue: "Annales de l'Institut Fourier",
      year: "2022",
      type: "Journal"
    }
  ];

  const projects = [
    {
      title: "Revue IJFV (International Journal of Finite Volumes)",
      funding: "Comité éditorial",
      period: "En cours",
      amount: "Contribution éditoriale",
      description: "Participation active au comité éditorial de la revue internationale spécialisée dans les méthodes de volumes finis pour les EDP."
    },
    {
      title: "Développement de méthodes numériques pour Saint-Venant",
      funding: "Projet de recherche institutionnel",
      period: "2020-2024",
      amount: "Financement universitaire",
      description: "Recherche sur le développement et l'analyse de schémas numériques pour les équations de Saint-Venant en hydraulique."
    },
    {
      title: "Analyse numérique des EDP : convergence et stabilité",
      funding: "Collaboration internationale",
      period: "2018-2023",
      amount: "Financement collaboratif",
      description: "Projet de recherche sur l'analyse théorique et numérique des équations aux dérivées partielles."
    }
  ];
</script>

<style scoped>

</style>