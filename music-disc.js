const sound = document.getElementById("discSound");

function playSound() {
    sound.currentTime = 0;
    sound.play();
}

const discs = document.querySelectorAll(".disc");
let index = 0;
let isAnimating = false;

discs[0].style.visibility = "visible";
discs[0].style.opacity = "1";

function cycleDisc() {
    if (isAnimating) return;
    isAnimating = true;

    playSound();

    const outgoing = discs[index];
    index = (index + 1) % discs.length;
    const incoming = discs[index];

    discs.forEach(d => {
        d.classList.remove("curve-in", "curve-out");
    });

    outgoing.classList.add("curve-out");

    setTimeout(() => {
        outgoing.style.visibility = "hidden";
        outgoing.style.opacity = "0";

        incoming.style.visibility = "visible";
        incoming.style.opacity = "1";
        incoming.classList.add("curve-in");
    }, 700);

    setTimeout(() => {
        isAnimating = false;
    }, 750);
}

document.querySelectorAll(".disc-img").forEach(disc => {
    disc.addEventListener("click", cycleDisc);
});