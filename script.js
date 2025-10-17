document.addEventListener("DOMContentLoaded", () => {
  const giftBox = document.getElementById("giftBox");
  const surpriseContent = document.getElementById("surpriseContent");
  const flowerButton = document.getElementById("flowerButton");
  const instruction = document.getElementById("instruction");
  const openLetterLink = document.querySelector("a.surprise-item"); 

  // 1. Logika membuka kado
  if (giftBox) {
    giftBox.addEventListener("click", () => {
      giftBox.classList.add("open");
      instruction.style.display = "none";

      setTimeout(() => {
        surpriseContent.style.display = "flex";
      }, 1000);
    });
  }

  // 2. Logika animasi bunga
  if (flowerButton) {
    flowerButton.addEventListener("click", () => {
      createFlowerFall();
    });
  }

  // 3. === LOGIKA BARU: Animasi pindah halaman ===
  if (openLetterLink) {
    openLetterLink.addEventListener("click", function (event) {
      event.preventDefault(); // Mencegah pindah halaman secara langsung
      const destination = this.href;
      document.body.classList.add("fade-out"); 
      setTimeout(() => {
        window.location.href = destination; 
      }, 500); 
    });
  }

  function createFlowerFall() {
    const flowerContainer = document.getElementById("flower-container");
    const flowers = ["🌸", "🌺", "🌹", "🌷", "🌼", "🪻", "🏵️"];
    const numberOfFlowers = 30;

    for (let i = 0; i < numberOfFlowers; i++) {
      const flower = document.createElement("div");
      flower.classList.add("flower");
      flower.textContent = flowers[Math.floor(Math.random() * flowers.length)];
      flower.style.left = Math.random() * 100 + "vw";
      flower.style.animationDuration = Math.random() * 3 + 4 + "s";
      flower.style.animationDelay = Math.random() * 2 + "s";
      flower.style.fontSize = Math.random() * 1.5 + 1 + "em";
      flowerContainer.appendChild(flower);

      setTimeout(() => {
        flower.remove();
      }, 7000);
    }
  }
});
