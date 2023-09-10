menuClick = document.querySelector(".fa-bars");
menuOpen = document.querySelector(".open-menu");
menuClose = document.querySelector(".fa-x");

menuClick.addEventListener("click", function (e) {
  menuOpen.classList.add("display-block");
});

menuClose.addEventListener("click", function (e) {
  menuOpen.classList.remove("display-block");
});

var image = document.getElementsByClassName("image");
var box = document.getElementsByClassName("box");
var index = 0;
slider(index);
function slider(indeks) {
  index = indeks;
  if (index >= image.length) {
    index = 0;
  } else if (index < 0) {
    index = image.length - 1;
  }
  for (i = 0; i < image.length; i++) {
    image[i].classList.remove("active");
    box[i].classList.remove("activelist");
  }
  image[index].classList.add("active");
  box[index].classList.add("activelist");
}
time = setInterval(next, 3000);
function next() {
  index++;
  slider(index);
}
function previous() {
  index--;
  slider(index);
}
function stop() {
  clearInterval(time);
}
function start() {
  time = setInterval(next, 3000);
}
