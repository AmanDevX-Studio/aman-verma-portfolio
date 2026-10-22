

const slider = document.querySelector(".skills-slider");

slider.innerHTML += slider.innerHTML;


document.querySelectorAll(".skills-slider").forEach(slider => {
    slider.innerHTML += slider.innerHTML;
});
