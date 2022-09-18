let cardName = document.querySelector(".card-name");
let cardNumber = document.querySelector(".card-number");
let cvv = document.querySelector(".cvv");
let inputName = document.querySelector("#name");
let inputNumber = document.querySelector("#number");
let inputcvv = document.querySelector("#cvv");
let form = document.querySelector("form");
let month = document.querySelector("#month");
let year = document.querySelector("#year");
let inputMonth = document.querySelector(".month");
let inputYear = document.querySelector(".year");
let thanks = document.querySelector(".thanks");
let refreshAndReset = document.querySelector("#continue");

const getDetails = (e) => {
  e.preventDefault();
  if (inputName.value === "") {
    cardName.textContent = "Jane Appleseed";
  } else {
    cardName.textContent = `${inputName.value}`;
    numberSplit(inputNumber.value);
    cvv.textContent = `${inputcvv.value}`;
    month.textContent = `${inputMonth.value}`;
    yearSplit(inputYear.value);
    thanks.classList.remove("hide");
    form.classList.add("hide");

  }
};
const refresh = () => {
  thanks.classList.add("hide");
  form.classList.remove("hide");
};
refreshAndReset.addEventListener("click", refresh);
document.addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.reset();
});
form.addEventListener("submit", getDetails);

const numberSplit = (num) => {
  let arr = num.split("");
  let splice;
  let joined;
  for (let i = 4; i < arr.length; i += 5) {
    splice = arr.splice(i, 0, " &nbsp;");
    joined = arr.join("");
  }
  cardNumber.innerHTML = joined;
};

const yearSplit = (num) => {
  if (num.length === 4) {
    let sliced = num.slice(2);
    year.innerHTML = sliced;
  }
};
