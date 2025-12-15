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

<script setup >
import { Link, Download } from "lucide-vue-next";


// Using Nuxt Content with fallback to static data
const { data: articles } = await useAsyncData('articles', async () => {
  try {
    return await queryCollection('articles').all()
  } catch (error) {
    console.warn('Error queryCollection articles, using static data:', error)
    return [
      // {
      //   title: "Analyse numérique des EDP : convergence et stabilité",
      //   funding: "Collaboration internationale",
      //   period: "2018-2023",
      //   amount: "Financement collaboratif",
      //   description: "JEAN LERAY JACQUES-LOUIS LIONS",
      //   link: "https://www.i2m.univ-amu.fr/perso/thierry.gallouet/artbase.d/leraylions.pdf"
      // },
      {
        title: "Guido Stampacchia",
        funding: "Annales de l'institut Fourier",
        period: "En cours",
        amount: "Contribution éditoriale",
        description: "Le problème de Dirichlet pour les équations elliptiques du second ordre à coefficients discontinus",
        link: "https://www.i2m.univ-amu.fr/perso/thierry.gallouet/artbase.d/stampacchia.pdf"
      },
      {
        title: "SUR LE MOUVEMENT D'UN LIQUIDE VISQUEUX EMPLISSANT L'ESPACE.",
        funding: "Collaboration internationale",
        period: "2018-2023",
        amount: "Financement collaboratif",
        description: "JEAN LERAY JACQUES-LOUIS LIONS",
        link: "https://www.i2m.univ-amu.fr/perso/thierry.gallouet/artbase.d/leray-ns.pdf"
      },
      {
        title: "Topologie et équations fonctionnelles",
        funding: "xxx",
        period: "2020-2024",
        amount: "xxx",
        description: "JEAN LERAY JULES SCHAUDER",
        link: "https://www.i2m.univ-amu.fr/perso/thierry.gallouet/artbase.d/lerayschauder.pdf"
      }
    ]
  }
})

const { data: publicationsPlus } = await useAsyncData('publicationsPlus', async () => {
  try {
    const pubs = await queryCollection('publicationsPlus').all()
    return pubs.sort((a, b) => a.order - b.order)
  } catch (error) {
    console.warn('Error queryCollection publicationsPlus, using static data:', error)
    return [
      // {
      //   title: "Finite volume methods",
      //   authors: "Eymard, Robert; Gallouët, Thierry; Herbin, Raphaèle",
      //   venue: "North-Holland, Amsterdam, 2000, 713–1020",
      //   year: "2000",
      //   type: "Book Chapter",
      //   citations: 1029,
      //   doi: "10.1016/S1570-8659(00)07005-8",
      //   url: "https://mathscinet-ams-org.ezproxy.math.cnrs.fr/mathscinet/article?mr=1804748"
      // },
      // {
      //   title: "AnL1-theory of existence and uniqueness of solutions of nonlinear elliptic equations",
      //   authors: "Bénilan, Philippe; Boccardo, Lucio; Gallouët, Thierry; Gariepy, Ron; Pierre, Michel; Vázquez, Juan Luis",
      //   venue: "Journal of Functional Analysis",
      //   year: "1995",
      //   type: "Journal",
      //   citations: 797,
      //   url: "https://mathscinet-ams-org.ezproxy.math.cnrs.fr/mathscinet/article?mr=1354907"
      // },
      // {
      //   title: "Some results for L1 nonlinear parabolic equations",
      //   authors: "Boccardo, L.; Gallouet, T.",
      //   venue: "Nonlinear Analysis",
      //   year: "1989",
      //   type: "Journal",
      //   citations: 479,
      //   doi: "10.1016/0362-546X(89)90036-0",
      //   url: "https://mathscinet-ams-org.ezproxy.math.cnrs.fr/mathscinet/article?mr=0997579"
      // },
      // {
      //   title: "Nonlinear elliptic equations in L1",
      //   authors: "Boccardo, L.; Gallouet, T.",
      //   venue: "Nonlinear Analysis",
      //   year: "1980",
      //   type: "Journal",
      //   citations: 386,
      //   doi: "10.1016/0362-546X(80)90068-1",
      //   url: "https://mathscinet-ams-org.ezproxy.math.cnrs.fr/mathscinet/article?mr=0582536"
      // },
      // {
      //   title: "A unified approach to mimetic finite difference, hybrid finite volume and mixed finite volume methods",
      //   authors: "Droniou, Jérôme; Eymard, Robert; Gallouët, Thierry; Herbin, Raphaèle",
      //   venue: "Mathematical Models and Methods in Applied Sciences",
      //   year: "2010",
      //   type: "Journal",
      //   citations: 295,
      //   url: "https://mathscinet-ams-org.ezproxy.math.cnrs.fr/mathscinet/article?mr=2649153"
      // }
    ]
  }
})

const { data: publications } = await useAsyncData('publications', async () => {
  try {
    return await queryCollection('publications').all()
  } catch (error) {
    console.warn('Error queryCollection publications, using static data:', error)
    return [
      // {
      //   title: "Schémas numériques pour les équations de Saint-Venant : convergence et stabilité",
      //   authors: "T. Gallouet, R. Herbin, J.-C. Latché",
      //   venue: "Comptes Rendus Mathématique",
      //   year: "2024",
      //   type: "Journal"
      // },
      // {
      //   title: "Analyse numérique des EDP hyperboliques : méthodes de volumes finis",
      //   authors: "T. Gallouet, L. Gastaldo, R. Herbin",
      //   venue: "Mathematics of Computation",
      //   year: "2023",
      //   type: "Journal"
      // },
      // {
      //   title: "Convergence d'un schéma de volumes finis pour l'équation de la chaleur non linéaire",
      //   authors: "T. Gallouet, R. Herbin",
      //   venue: "Numerische Mathematik",
      //   year: "2023",
      //   type: "Journal"
      // },
      // {
      //   title: "Mesure et intégration : aspects théoriques et numériques",
      //   authors: "T. Gallouet, E. Hillion",
      //   venue: "Annales de l'Institut Fourier",
      //   year: "2022",
      //   type: "Journal"
      // }
    ]
  }
})
</script>

<style scoped></style>
