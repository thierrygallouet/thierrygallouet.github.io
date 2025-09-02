<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-0">
    <!-- Formules mathématiques flottantes -->
    <div
      v-for="(el, index) in mathElementsComputed"
      :key="'formula-' + index"
      class="absolute text-xs text-foreground/20 select-none whitespace-nowrap font-mono"
      :style="el.style"
    >
      {{ el.text }}
    </div>

    <!-- Symboles mathématiques dispersés -->
    <div
      v-for="(el, index) in symbolsComputed"
      :key="'symbol-' + index"
      class="absolute text-foreground/15 select-none font-serif"
      :style="el.style"
    >
      {{ el.text }}
    </div>

    <!-- Grille mathématique subtile -->
    <div class="absolute inset-0 opacity-[0.05]">
      <svg width="100%" height="100%" class="absolute inset-0">
        <defs>
          <pattern
            id="mathGrid"
            width="80"
            height="80"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 80 0 L 0 0 0 80"
              fill="none"
              stroke="currentColor"
              stroke-width="0.5"
            />
            <circle cx="40" cy="40" r="1" fill="currentColor" opacity="0.3" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#mathGrid)" />
      </svg>
    </div>

    <!-- Courbes mathématiques animées -->
    <div class="absolute inset-0 opacity-[0.08]">
      <svg width="100%" height="100%" class="absolute inset-0">
        <path
          d="M0,300 Q150,200 300,300 T600,300 T900,300 T1200,300 T1500,300"
          fill="none"
          stroke="currentColor"
          stroke-width="1.5"
          style="animation: mathPulse 8s ease-in-out infinite"
        />
        <path
          d="M200,600 Q500,200 800,600"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          opacity="0.5"
          style="animation: mathPulse 12s ease-in-out infinite 2s"
        />
        <path
          d="M100,500 Q200,400 300,300 Q400,200 500,150 Q600,125 700,110"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          opacity="0.4"
          style="animation: mathPulse 15s ease-in-out infinite 4s"
        />
      </svg>
    </div>

    <!-- Fractales -->
    <div class="absolute top-10 right-10 opacity-[0.06]">
      <svg width="200" height="200">
        <polygon
          points="100,20 180,180 20,180"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <polygon
          points="100,60 140,140 60,140"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <polygon
          points="100,100 120,120 80,120"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5"
        />
      </svg>
    </div>

    <div class="absolute bottom-10 left-10 opacity-[0.06]">
      <svg width="150" height="150">
        <circle
          cx="75"
          cy="75"
          r="70"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <circle
          cx="75"
          cy="75"
          r="50"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <circle
          cx="75"
          cy="75"
          r="30"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5"
        />
        <circle
          cx="75"
          cy="75"
          r="10"
          fill="none"
          stroke="currentColor"
          stroke-width="0.5"
        />
      </svg>
    </div>

    <!-- Statique -->
    <div
      class="absolute top-20 left-20 text-foreground/10 text-4xl font-serif select-none"
    >
      ∫
    </div>
    <div
      class="absolute top-40 right-32 text-foreground/8 text-3xl font-mono select-none"
    >
      ∇²u = 0
    </div>
    <div
      class="absolute bottom-32 left-40 text-foreground/12 text-2xl font-serif select-none"
    >
      π
    </div>
    <div
      class="absolute top-60 left-1/2 text-foreground/8 text-lg font-mono select-none"
    >
      ∂u/∂t
    </div>
    <div
      class="absolute bottom-40 right-20 text-foreground/10 text-xl font-serif select-none"
    >
      ∞
    </div>
    <div
      class="absolute top-80 left-80 text-foreground/6 text-sm font-mono select-none"
      v-html="'lim<sub>{x&rarr;&infin;}</sub>'"
    />
  </div>
</template>

<script setup>
const mathElements = [
  "∂u/∂t + div(f(u)) = 0",
  "∫₋∞^∞ e^(-x²) dx = √π",
  "∇²u = 0",
  "∂²u/∂t² = c²∇²u",
  "∑ₙ₌₁^∞ 1/n² = π²/6",
  "∮_C F·dr = ∬_S (∇×F)·dS",
  "lim_{h→0} [f(x+h)-f(x)]/h",
  "∫∫∫_V ∇·F dV = ∮_∂V F·n dS",
  "∂u/∂x + ∂v/∂y = 0",
  "E = mc²",
  "∇·E = ρ/ε₀",
  "∂ₜu + u·∇u = -∇p + ν∇²u",
  "||u||_{L²} = (∫|u|² dx)^{1/2}",
  "∫₀¹ x^n dx = 1/(n+1)",
  "det(A) = ∑ᵨ sgn(σ)∏aᵢ,σ(ᵢ)",
  "∇f = ∂f/∂x î + ∂f/∂y ĵ + ∂f/∂z k̂",
  "∫ e^x dx = e^x + C",
  "∂/∂x[f(g(x))] = f'(g(x))g'(x)",
  "∑ₖ₌₀^n (n k) x^k y^{n-k} = (x+y)^n",
  "∇×(∇×F) = ∇(∇·F) - ∇²F",
];

const symbols = [
  "∂",
  "∇",
  "∫",
  "∑",
  "∞",
  "π",
  "α",
  "β",
  "γ",
  "δ",
  "λ",
  "μ",
  "σ",
  "φ",
  "ψ",
  "Ω",
  "θ",
  "ε",
];

const mathElementsComputed = ref([]);
const symbolsComputed = ref([]);

onMounted(() => {
  mathElementsComputed.value = mathElements.map((text) => {
    const rotation = Math.random() * 30 - 15;
    return {
      text,
      style: {
        left: `${Math.random() * 120 - 10}%`,
        top: `${Math.random() * 120 - 10}%`,
        fontSize: `${Math.random() * 6 + 8}px`,
        animation: `float ${40 + Math.random()}s linear infinite`,
        animationDelay: `${Math.random() * -60}s`,
        "--rotation": `${rotation}deg`,
        transform: `rotate(${rotation}deg)`, // <- important pour déclencher la variable CSS
      },
    };
  });

  symbolsComputed.value = Array.from({ length: 40 }).map(() => {
    const rotation = Math.random() * 360;
    return {
      text: symbols[Math.floor(Math.random() * symbols.length)],
      style: {
        left: `${Math.random() * 120 - 10}%`,
        top: `${Math.random() * 120 - 10}%`,
        fontSize: `${Math.random() * 15 + 15}px`,
        animation: `float ${60 + Math.random()}s linear infinite reverse`,
        animationDelay: `${Math.random() * -80}s`,
        "--rotation": `${rotation}deg`,
      },
    };
  });
});
</script>

<style>
@keyframes float {
  0% {
    transform: translateY(0) rotate(var(--rotation));
  }
  50% {
    transform: translateY(-20px) rotate(var(--rotation));
  }
  100% {
    transform: translateY(0) rotate(var(--rotation));
  }
}

@keyframes mathPulse {
  0%,
  100% {
    opacity: 0.2;
    transform: scale(1);
  }
  50% {
    opacity: 0.3;
    transform: scale(1.05);
  }
}
</style>
