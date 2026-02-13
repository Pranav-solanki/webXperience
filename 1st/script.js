let sections = document.querySelectorAll(".section");

sections.forEach(section => {
  let img = section.querySelector("img");
  let original = img.src;
  let hoverImg = section.getAttribute("data-hover");

  section.addEventListener("mouseenter", () => {
    img.src = hoverImg;
  });

  section.addEventListener("mouseleave", () => {
    img.src = original;
  });
});
