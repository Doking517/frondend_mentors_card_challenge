let one = document.querySelector(".one");
let two = document.querySelector(".two");
let three = document.querySelector(".three");
let four = document.querySelector(".four");
let five = document.querySelector(".five");
let rating_container = document.querySelector(".rating_state_container");
let thank_container = document.querySelector(".thank_you_state_container");
let current_rating = document.querySelector(".current_rating");
let rating_button = document.querySelector(".rating_button");

const toggleActive = (item) => {
  item.classList.toggle("active");
};

let ratingSelectedNumbers = [one, two, three, four, five];

const checkIfIsActive = (item) => {
  ratingSelectedNumbers.forEach((elt) => {
    if (item !== elt && elt.classList.contains("active")) {
      toggleActive(elt);
    }
  });
};

const selectedNumberHandler = () => {
  ratingSelectedNumbers.forEach((item) => {
    item.addEventListener("click", () => {
      toggleActive(item);
      checkIfIsActive(item);
      current_rating.innerHTML = item.innerHTML;
    });
  });
};
selectedNumberHandler();

rating_button.addEventListener("click", () => {
  rating_container.style.display = "none";
  thank_container.style.display = "block";
});
