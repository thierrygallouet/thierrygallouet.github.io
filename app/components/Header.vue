<template>
  <header
    class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60"
  >
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <div>
          <h1 class="text-xl font-semibold">Thierry Gallouet</h1>
          <p class="text-sm text-muted-foreground">
            Professeur de Mathématiques
          </p>
        </div>
        <nav class="hidden md:flex items-center space-x-6">
          <a
            href="#courses
            "
            ><Button variant="ghost" class="text-sm"> Enseignements </Button></a
          >

           <a
            href="#books"
            ><Button variant="ghost" class="text-sm"> Ouvrages </Button></a
          >

          <a href="#research">
            <Button variant="ghost" class="text-sm"> Recherche </Button>
          </a>

          <a href="#contact"
            ><Button variant="ghost" class="text-sm"> Contact </Button></a
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
