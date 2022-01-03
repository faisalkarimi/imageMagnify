// @ts-nocheck
const image = document.querySelector(".image-container img");
const magnifyingGlass = document.querySelector(".magnifying-glass");
const magnifiedImage = document.querySelector(".magnified-image");

image.addEventListener("mousemove", magnify);

function magnify(event) {
  magnifyingGlass.style.display = "block";
  magnifiedImage.style.display = "block";
  magnifyingGlass.style.left = event.pageX + "px";
  magnifyingGlass.style.top = event.pageY + "px";
  magnifiedImage.style.backgroundPosition = `
    ${-event.offsetX * 3}px ${-event.offsetY * 3}px
  `;
  magnifiedImage.style.backgroundImage = `url(${image.src})`;
}
