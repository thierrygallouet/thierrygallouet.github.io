<template>
    <section id="contact" class="py-16">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-semibold text-center mb-12">Contact</h2>
        <div class="max-w-4xl mx-auto">
          <div class="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle class="flex items-center gap-2">
                  <!-- <Mail class="h-5 w-5" /> -->
                  Informations de contact
                </CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <div class="flex items-start gap-3">
                  <!-- <Mail class="h-4 w-4 mt-1 text-muted-foreground" /> -->
                  <div>
                    <p class="font-medium">Email</p>
                    <p class="text-sm text-muted-foreground">thierry.gallouet@univ.fr</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <!-- <Phone class="h-4 w-4 mt-1 text-muted-foreground" /> -->
                  <div>
                    <p class="font-medium">Téléphone</p>
                    <p class="text-sm text-muted-foreground">04 XX XX XX XX</p>
                  </div>
                </div>
                
                <div class="flex items-start gap-3">
                  <!-- <MapPin class="h-4 w-4 mt-1 text-muted-foreground" /> -->
                  <div>
                    <p class="font-medium">Bureau</p>
                    <p class="text-sm text-muted-foreground">
                      Département de Mathématiques<br />
                      Bureau XXX<br />
                      Université<br />
                      France
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle class="flex items-center gap-2">
                  <!-- <Clock class="h-5 w-5" /> -->
                  Heures de réception
                </CardTitle>
              </CardHeader>
              <CardContent class="space-y-4">
                <div class="space-y-3">
                  <div>
                    <div class="flex items-center gap-2 mb-2">
                      <Badge variant="default">Année courante</Badge>
                    </div>
                    <div class="space-y-2 text-sm">
                      <div class="flex items-center gap-2">
                        <!-- <Calendar class="h-4 w-4 text-muted-foreground" /> -->
                        <span>Mardi : 14h00 - 16h00</span>
                      </div>
                      <div class="flex items-center gap-2">
                        <!-- <Calendar class="h-4 w-4 text-muted-foreground" /> -->
                        <span>Jeudi : 10h00 - 12h00</span>
                      </div>
                    </div>
                  </div>
                  
                  <div class="pt-2 border-t">
                    <p class="text-sm text-muted-foreground">
                      Pour les rendez-vous en dehors des heures de réception, veuillez envoyer un email pour planifier une rencontre.
                    </p>
                  </div>
                  
                  <div class="pt-2">
                    <p class="text-sm font-medium mb-1">Réception en ligne</p>
                    <p class="text-sm text-muted-foreground">
                      Disponible sur demande pour les étudiants à distance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <Card class="mt-8">
            <CardHeader>
              <CardTitle>Pour les étudiants</CardTitle>
            </CardHeader>
            <CardContent>
              <p class="text-sm mb-4">
                Je suis disponible pour encadrer des étudiants motivés intéressés par l'analyse numérique, 
                les équations aux dérivées partielles et le calcul scientifique. Si vous souhaitez travailler avec moi :
              </p>
              <ul class="text-sm space-y-1 ml-4">
                <li>• Consultez mes publications récentes pour comprendre mes axes de recherche</li>
                <li>• Préparez votre CV et une description de vos intérêts de recherche</li>
                <li>• Mentionnez les articles qui vous intéressent et pourquoi</li>
                <li>• Pour les candidatures en thèse, contactez-moi par email</li>
              </ul>
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