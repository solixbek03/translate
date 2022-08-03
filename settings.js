var elForm =document.querySelector(".header__form");
var elInput =document.querySelector(".header__input");
var elText =document.querySelector(".header__text");

var elNone = "";
var elMonday = "dushanba";
var elTuesday = "seshanba";
var elWednesday = "chorshanba";
var elThursday = "payshanba";
var elFriday = "juma";
var elSaturday = "shanba";
var elSunday = "yakshanba";

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	
  if (elInput.value == elMonday) {
    elText.textContent = "monday";
  } else if (elInput.value == elTuesday) {
    elText.textContent = "tuesday";
  } else if (elInput.value == elWednesday) {
    elText.textContent = "wednesday";
  } else if (elInput.value == elThursday) {
    elText.textContent = "thursday";
  } else if (elInput.value == elFriday) {
    elText.textContent = "friday";
  } else if (elInput.value == elSaturday) {
    elText.textContent = "saturday";
  } else if (elInput.value == elSaturday) {
    elText.textContent = "sunday";
  } else {
    elText.textContent = "Itlimos hafta kunini kiriting";
  }
});



var elForm =document.querySelector(".hero__form");
var elName =document.querySelector(".hero__name");
var elNumbur =document.querySelector(".hero__number");
var elText2 =document.querySelector(".hero__text");

var minimumball = 120;

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	
  if (isNaN(elNumbur.value)) {
    elText2.textContent = `Iltimos oyin qilmang`;
  } else if (elNumbur.value < minimumball) {
    elText2.textContent = `Kechirasiz lekin siz imtihondan yeqildingiz`;
  } else if (elNumbur.value >= minimumball) {
    elText2.textContent = `Tabriklaymiz siz imtihondan ottingiz`;
  } else {
    elText2.textContent = `Ismingiz yoki balingizni kiritmadingiz`;
  }
});
































