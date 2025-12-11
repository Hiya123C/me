document.querySelectorAll(".song-card").forEach(card => {
    const audio = card.querySelector("audio");
    const playBtn = card.querySelector(".play-btn");
    const pauseBtn = card.querySelector(".pause-btn");
    const slider = card.querySelector(".seek-slider");

    playBtn.addEventListener("click", () => audio.play());
    pauseBtn.addEventListener("click", () => audio.pause());

    audio.addEventListener("timeupdate", () => {
        slider.value = (audio.currentTime / audio.duration) * 100;
    });

    slider.addEventListener("input", () => {
        audio.currentTime = (slider.value / 100) * audio.duration;
    });
});