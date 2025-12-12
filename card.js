// card swipe logic (oh-my-god)
const container = document.getElementById("cardContainer");
let isDragging = false;
let startX = 0;
let currentCard = null;

// arranged from biggest to smallest size
const imageSources = [
  "photos/photo6.jpg",
  "photos/photo3.jpg",
  "photos/photo1.jpg",
  "photos/photo2.jpg",
  "photos/photo4.jpg",
  "photos/photo5.jpg",
  "photos/photo7.jpeg",
  "photos/photo8.jpeg",
  "photos/photo9.jpeg",
];

// lets leave this unused...
const captionText = [
  "photo6-caption",
  "photo3-caption",
  "photo1-caption",
  "photo2-caption",
  "photo4-caption",
  "photo5-caption",
];

function createCards() {
  container.innerHTML = ""; //clear prev old cards

  for (let i = 9; i >= 1; i--) {
    const card = document.createElement("div");
    card.className = "card";
    
    const img = document.createElement("img");
    img.src = imageSources[i - 1];
    img.className = "card-image";

    // const caption = document.createElement("p");
    // caption.textContent = captionText [i - 1];
    // caption.className = "card-caption";

    card.appendChild(img);
    // card.appendChild(caption);
    container.appendChild(card);
  }
}

function resetCards() {
  createCards();

  document.querySelector(".centre-grp").style.opacity = 0;
  document.querySelector(".closing").style.opacity = 0;
  document.getElementById("reset-button").style.display = "none";
  // alert("button is working");
}

createCards();

function getTopCard() {
  return container.querySelector(".card:last-child");
}
// mouse events
container.addEventListener("mousedown", (e) => {
  currentCard = getTopCard();
  if (!currentCard) return;
  isDragging = true;
  startX = e.clientX;
  currentCard.style.transition = "none";
});
container.addEventListener("mousemove", (e) => {
  if (!isDragging || !currentCard) return;
  const deltaX = e.clientX - startX;
  currentCard.style.transform = `translateX{deltaX}px) rotate(${deltaX / 10}deg)`;
});
container.addEventListener("mouseup", (e) => {
  if (!isDragging || !currentCard) return;
  const deltaX = e.clientX - startX;
  handleSwipe(deltaX);
});
// touch events
container.addEventListener("touchstart", (e) => {
  currentCard = getTopCard();
  if (!currentCard) return;
  isDragging = true;
  startX = e.touches[0].clientX;
  currentCard.style.transition = "none";
});
container.addEventListener("touchmove", (e) => {
  if (!isDragging || !currentCard) return;
  const deltaX = e.touches[0].clientX - startX;
  currentCard.style.transform = `translateX(${deltaX}px) rotate(${deltaX / 10}deg)`;

});
container.addEventListener("touchend", (e) => {
  if (!isDragging || !currentCard) return;
  const deltaX = e.changedTouches[0].clientX - startX;
  handleSwipe(deltaX);
});

// swipe
function handleSwipe(deltaX) {
  const sensitivity = 50;
  if (Math.abs(deltaX) > sensitivity) {
    currentCard.style.transition = "transform 0.4s ease, opacity 0.4s ease";
    currentCard.style.transform = `translateX(${
      deltaX > 0 ? 1000 : -1000
    }px) rotate(${deltaX > 0 ? 45 : -45}deg)`;
    currentCard.style.opacity = 0;
    setTimeout(() => {
      currentCard.remove();
      currentCard = null;

      if (container.children.length === 0) {
        document.getElementById("reset-button").style.display = "block";
        document.querySelector(".centre-grp").style.opacity = 1;
        document.querySelector(".closing").style.opacity = 1;
      }
    }, 400);
    
  } else {
    currentCard.style.transition = "transform 0.3s ease";
    currentCard.style.transform = "translateX(0) rotate(0)";
  }
  isDragging = false;
}