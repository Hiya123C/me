const wrapper = document.getElementById("techDiscWrapper");
const techDisc = document.getElementById('techDisc');
const projects = document.querySelectorAll('.project');

let currentIndex = 0;
let rotation = 0;
let isAnimating = false;

projects[currentIndex].classList.add("active");

wrapper.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;

    projects[currentIndex].classList.remove("active");

    setTimeout(() => {
        rotation -= 120; //360/3 = 120º
        techDisc.style.transform = `rotate(-${angle} deg)`;
        
        currentIndex = (currentIndex + 1) % projects.length;

        setTimeout(() => {
            projects[currentIndex].classList.add("active");
            isAnimating = false;
        }, 600);
    }, 400);
});
