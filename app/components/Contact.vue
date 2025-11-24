<template>
    <section id="contact" class="py-16 bg-background">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl mb-4">Contact</h2>
          <p class="text-muted-foreground max-w-2xl mx-auto">
            N'hésitez pas à me contacter pour toute question concernant mes recherches ou collaborations.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Informations de contact</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <div class="flex items-center gap-3">
                <Mail class="h-5 w-5 text-muted-foreground" />
                <div>
                  <p class="text-sm text-muted-foreground">Email</p>
                  <p>thierry@gallouet.fr</p>
                </div>
              </div>
              
              <div class="flex items-center gap-3">
                <Linkedin class="h-5 w-5 text-muted-foreground" />
                <div>
                  <a href="https://linkedin.com/in/thierry-gallouët-28b5b06">Linkedin profile</a>
                </div>
              </div>
              
              <!-- <div class="flex items-start gap-3">
                <MapPin class="h-5 w-5 text-muted-foreground mt-1" />
                <div>
                  <p class="text-sm text-muted-foreground">Adresse</p>
                  <p class="leading-relaxed">
                    Institut de Mathématiques de Marseille<br />
                    Université d'Aix-Marseille<br />
                    39 rue F. Joliot Curie<br />
                    13453 Marseille Cedex 13
                  </p>
                </div>
              </div> -->

              <!-- <div class="flex items-center gap-3">
                <Building class="h-5 w-5 text-muted-foreground" />
                <div>
                  <p class="text-sm text-muted-foreground">Bureau</p>
                  <p>Bâtiment Sud, Bureau 304</p>
                </div>
              </div> -->
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Liens utiles</CardTitle>
            </CardHeader>
            <CardContent class="space-y-4">
              <div class="space-y-3">
                <a href="https://www.i2m.univ-amu.fr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" class="w-full justify-between">
                    <span>Institut de Mathématiques de Marseille</span>
                    <ExternalLink class="h-4 w-4" />
                  </Button>
                </a>
                
                <a href="https://www.univ-amu.fr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" class="w-full justify-between">
                    <span>Université d'Aix-Marseille</span>
                    <ExternalLink class="h-4 w-4" />
                  </Button>
                </a>
                
                <a href="https://hal.archives-ouvertes.fr/" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" class="w-full justify-between">
                    <span>HAL - Archives ouvertes</span>
                    <ExternalLink class="h-4 w-4" />
                  </Button>
                </a>
                
            
              </div>

            </CardContent>
          </Card>
        </div>
      </div>
    </section>
</template>

<script setup lang="ts">
import { Linkedin, Mail, ExternalLink } from 'lucide-vue-next';

</script>
