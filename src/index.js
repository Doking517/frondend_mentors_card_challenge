var one = document.querySelector(".one");
var two = document.querySelector(".two");
var three = document.querySelector(".three");
var four = document.querySelector(".four");
var five = document.querySelector(".five");
var rating_container = document.querySelector(".rating_state_container");
var thank_container = document.querySelector(".thank_you_state_container");
var current_rating = document.querySelector(".current_rating");
let rating_button = document.querySelector(".rating_button");

let rating_numbers = document.querySelectorAll(".rating_number");

const toggleActive = (item) => {
  item.classList.toggle("active");
};

one.addEventListener("click", () => {
  toggleActive(one);
  current_rating.innerHTML = one.innerHTML;
});
two.addEventListener("click", () => {
  toggleActive(two);
  current_rating.innerHTML = two.innerHTML;
});
three.addEventListener("click", () => {
  toggleActive(three);
  current_rating.innerHTML = three.innerHTML;
});
four.addEventListener("click", () => {
  toggleActive(four);
  current_rating.innerHTML = four.innerHTML;
});
five.addEventListener("click", () => {
  toggleActive(five);
  current_rating.innerHTML = five.innerHTML;
});

rating_button.addEventListener("click", () => {
  rating_container.style.display = "none";
  thank_container.style.display = "block";
});
