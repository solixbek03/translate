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

var minimumBall = 120;
var contract = 80;
var supercontract = 40;

elForm.addEventListener('submit', function (evt) {
	evt.preventDefault();
	
  if (isNaN(elNumbur.value)) {
    elText2.textContent = `Iltimos oyin qilmang`;
  } else if (elNumbur.value < minimumBall) {
    elText2.textContent = `Kechirasiz lekin siz imtihondan yeqildingiz`;
  } else if (elNumbur.value >= minimumBall) {
    elText2.textContent = `Tabriklaymiz siz grandga kirdingiz`;
  } else if (elNumbur.value >= contract) {
    elText2.textContent = `Tabriklaymiz siz contractga kirdingiz`;
  } else if (elNumbur.value >= supercontract) {
    elText2.textContent = `Tabriklaymiz siz supercontractga kirdingiz`;
  } else {
    elText2.textContent = `Ismingiz yoki balingizni kiritmadingiz`;
  }
});
































