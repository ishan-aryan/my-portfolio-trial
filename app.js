let burger = document.querySelector(".burger");
let topElement = document.querySelector(".top");
let middle = document.querySelector(".middle");
let bottomElement = document.querySelector(".bottom");
let nav = document.querySelector("nav");
let navEl = document.querySelectorAll(".navlist li");

let isNavOpen = false;

burger.addEventListener("click", () => {
  topElement.classList.toggle("one");
  middle.classList.toggle("two");
  bottomElement.classList.toggle("three");
  if (!isNavOpen) {
    nav.style.left = "0";
    isNavOpen = true;
  } else {
    nav.style.left = "-110%";
    isNavOpen = false;
  }
});

let header = document.getElementsByTagName("header")[0];
let home = document.querySelector(".home");
let about = document.querySelector(".about");
let skills = document.querySelector(".skills");
let projects = document.querySelector(".projects");
window.addEventListener("scroll", () => {
  const rect = header.getBoundingClientRect();
  const homeRect = home.getBoundingClientRect();
  const aboutRect = about.getBoundingClientRect();
  const skillsRect = skills.getBoundingClientRect();
  const projectsRect = projects.getBoundingClientRect();

  if (rect.bottom >= homeRect.top) {
    header.style.backgroundColor = "#fdd2cb";
    header.style.borderRadius='200px'
    header.style.width='95%'
    header.style.margin='auto';
    header.style.top='10px'
  } else {
    header.style.backgroundColor = "transparent";
    header.style.borderRadius='0px'
    header.style.width='100%'
    header.style.margin='0';
    header.style.top='0px'
  }

  if (rect.bottom >= homeRect.top && rect.bottom <= homeRect.bottom) {
    document.querySelector(".homeh").classList.add("active");
  } else {
    document.querySelector(".homeh").classList.remove("active");
  }
  
  if (rect.bottom >= aboutRect.top && rect.bottom <= aboutRect.bottom) {
    document.querySelector(".abouth").classList.add("active");
  } else {
    document.querySelector(".abouth").classList.remove("active");
  }
  
  if (rect.bottom >= skillsRect.top && rect.bottom <= skillsRect.bottom) {
    document.querySelector(".skillsh").classList.add("active");
  } else {
    document.querySelector(".skillsh").classList.remove("active");
  }
  
  if (rect.bottom >= projectsRect.top && rect.bottom <= projectsRect.bottom) {
    document.querySelector(".projectsh").classList.add("active");
  } else {
    document.querySelector(".projectsh").classList.remove("active");
  }
  
});

navEl.forEach((elem, index) => {
  setTimeout(() => {
    elem.classList.add("liclass");
  }, 500 * index);
});

// console.log(document.querySelectorAll("header .navlist li")[0].innerText);
