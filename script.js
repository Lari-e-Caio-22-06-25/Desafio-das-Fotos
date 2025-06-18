const frases = [
      "Capture um abraço inesperado.",
      "Foto com alguém usando algo terracota.",
      "Momento espontâneo na pista de dança.",
      "Um brinde cheio de alegria!",
      "A noiva de costas (vale correr!).",
      "O convidado mais animado da festa.",
      "Algo verde que não seja planta!"
    ];

    const fraseElemento = document.getElementById('frase');
    let fraseSalva = localStorage.getItem('fraseEscolhida');

    if (!fraseSalva) {
      const indiceAleatorio = Math.floor(Math.random() * frases.length);
      fraseSalva = frases[indiceAleatorio];
      localStorage.setItem('fraseEscolhida', fraseSalva);
    }

    fraseElemento.innerText = fraseSalva;
