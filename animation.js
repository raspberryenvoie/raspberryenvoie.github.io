const translate = document.querySelectorAll(".translate");
const big_title = document.querySelector(".title");
const scroll_down = document.querySelector(".scrolldown");
const header = document.querySelector("header");
const content = document.querySelector(".content");
const section = document.querySelector("section");
const opacity = document.querySelectorAll(".opacity");
const border = document.querySelector(".border");

let header_height = header.offsetHeight;
let section_height = section.offsetHeight;

window.addEventListener('scroll', () => {
  let scroll = window.pageYOffset;
  let sectionY = section.getBoundingClientRect();

  translate.forEach(element => {
    let speed = element.dataset.speed;
    element.style.transform = `translateY(${scroll * speed}px)`;
  });

  opacity.forEach(element => {
     element.style.opacity = scroll / (sectionY.top + section_height);
  })

  big_title.style.opacity = - scroll / (header_height / 5) + 1;

  scroll_down.style.opacity = - scroll / (header_height / 5) + 1;

  content.style.transform = `translateY(${scroll / (section_height + sectionY.top) * 50 - 50}px)`;

  border.style.width = `${scroll / (sectionY.top + section_height) * 15}%`;
})
