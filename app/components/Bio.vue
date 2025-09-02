<template>
   <section id="bio" class="py-16 bg-muted/30">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center mb-12">Biographie</h2>
        <div class="max-w-4xl mx-auto">
          <Card>
            <CardContent class="p-8">
              <div class="grid md:grid-cols-3 gap-8 items-start">
                <div class="md:col-span-1">
                  <div class="w-full h-80 bg-muted rounded-lg flex items-center justify-center">
                    <div class="text-center">
                      <User class="h-16 w-16 text-muted-foreground mx-auto mb-2" />
                      <div class="text-2xl font-semibold text-muted-foreground">TG</div>
                    </div>
                  </div>
                </div>
                <div class="md:col-span-2 space-y-4">
                  <div>
                    <h3 class="text-xl font-semibold mb-3">Thierry Gallouet</h3>
                    <p class="text-muted-foreground mb-4">Professeur de Mathématiques | Université</p>
                  </div>
                  
                  <div class="space-y-4">
                    <p>
                      Thierry Gallouet est Professeur de Mathématiques, spécialisé dans l'analyse numérique et les équations aux dérivées partielles. Il enseigne dans plusieurs cycles universitaires, de la Licence au Master, couvrant un large spectre de disciplines mathématiques.
                    </p>
                    
                    <p>
                      Ses domaines d'expertise incluent l'analyse fonctionnelle, la théorie de la mesure, l'intégration, les probabilités, l'analyse de Fourier, et l'analyse numérique des équations aux dérivées partielles. Il a une expérience particulière dans le calcul scientifique et les schémas numériques.
                    </p>
                    
                    <p>
                      Il contribue activement à la revue IJFV (International Journal of Finite Volumes) et a participé au développement de programmes d'enseignement innovants, incluant des téléenseignements pour rendre les mathématiques accessibles à distance.
                    </p>
                  </div>

                  <div class="pt-4">
                    <h4 class="font-semibold mb-2">Spécialisations</h4>
                    <ul class="space-y-1 text-sm">
                      <li>• Analyse numérique des EDP</li>
                      <li>• Analyse fonctionnelle</li>
                      <li>• Théorie de la mesure et probabilités</li>
                      <li>• Calcul scientifique</li>
                      <li>• Schémas pour Saint-Venant</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>