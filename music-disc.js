const discs = document.querySelectorAll(".disc");
const images = document.querySelectorAll(".disc-img");
let index = 0;

discs[0].style.visibility = "visibile";
discs[0].style.opacity = "1";

function cycleDisc() {
    const outgoing = discs[index];

    index = (index + 1) % discs.length;
    const incoming = discs[index];

    discs.forEach(d => {
        d.classList.remove("curve-in", "curve-out", "hidden");
    });

    outgoing.classList.add("curve-out");

    setTimeout(() => {
        outgoing.style.visibility = "hidden";
        outgoing.style.opacity = "0";
    }, 700);

    incoming.style.visibility = "visible";
    incoming.style.opacity = "1";

    setTimeout(() => {
        incoming.classList.add("curve-in");
    }, 30);
}

document.querySelectorAll(".disc-img").forEach(disc => {
    disc.addEventListener("click", cycleDisc);
});