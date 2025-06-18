const frases = [
  "A persistência é o caminho do êxito.",
  "Faça o seu melhor, mas sempre com leveza.",
  "A vida começa onde termina o medo.",
  "Seja a mudança que você quer ver no mundo."
];

const fraseElemento = document.getElementById('frase');

// Verifica se já existe uma frase salva
let fraseSalva = localStorage.getItem('fraseEscolhida');

if (!fraseSalva) {
  // Se não existe, sorteia e salva
  const indiceAleatorio = Math.floor(Math.random() * frases.length);
  fraseSalva = frases[indiceAleatorio];
  localStorage.setItem('fraseEscolhida', fraseSalva);
}

fraseElemento.innerText = fraseSalva;
