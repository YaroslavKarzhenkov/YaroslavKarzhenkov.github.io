var mainCheckboxes = document.querySelectorAll(".ages__item input");
var quizItems = document.querySelectorAll("section.quiz-item");
var inputsRadio = document.querySelectorAll("input[type='radio'].form-group__control-input ");
var buttons = document.querySelectorAll(".btn--cta");
var questionImage = document.querySelector("#quizBackground");
var buttonPrev = document.querySelector(".nav__prev");
/* nav__progress */

var curStep = document.querySelector(".progress__label-curr");
var progressFill = document.querySelector(".progress__fill");
var progress;
/*  */

var quizIndex = 0;
/* main page */

mainCheckboxes.forEach(function (mainCheck, i) {
  mainCheck.addEventListener("click", function () {
    $('.quiz-item-main').removeClass('active');
    $('.quiz').css('display', 'flex');
    $('.footer').css('display', 'none');
    $('.quiz-item--1').addClass('active');
    quizItems[quizIndex].classList.add('active');
  });
});
/* radio */

inputsRadio.forEach(function (inputRadio, i) {
  inputRadio.addEventListener("click", function (e) {
    quizItems[quizIndex].classList.remove('active');
    quizItems[quizIndex += 1].classList.add('active');
    curStep.innerHTML = quizIndex + 1;
    progress = curStep.innerHTML / 21 * 100;
    progressFill.style.width = progress.toString() + '%';
    questionImage.src = "img/img".concat(quizIndex, ".png");
  });
});
/* button */

buttons.forEach(function (button, i) {
  button.addEventListener("click", function (e) {
    quizItems[quizIndex].classList.remove('active');
    quizItems[quizIndex += 1].classList.add('active');
    curStep.innerHTML = quizIndex + 1;
    progress = curStep.innerHTML / 21 * 100;
    progressFill.style.width = progress.toString() + '%';
    questionImage.src = "img/img".concat(quizIndex, ".png");
  });
});
/* button prev */

buttonPrev.addEventListener("click", function (e) {
  if (quizIndex === 0) {
    $('.quiz-item-main').addClass('active');
    $('.quiz').css('display', 'none');
    $('.footer').css('display', 'block');
    $('.quiz-item--1').remove('active');
  } else {
    quizItems[quizIndex].classList.remove('active');
    quizItems[quizIndex -= 1].classList.add('active');
    curStep.innerHTML = quizIndex + 1;
    progress = curStep.innerHTML / 21 * 100;
    progressFill.style.width = progress.toString() + '%';
    questionImage.src = "img/img".concat(quizIndex, ".png");
  }
});
/* IMT */

var height = "";
var weight = "";
var wishWeight = "";
var imt;
var imtPercent;
var likePercent = randomInteger(90, 96);

function calcImt(height, weight) {
  return (weight / Math.pow(height / 100, 2)).toFixed(2);
}

function randomInteger(min, max) {
  var rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}

$('#high').on("keyup", function () {
  height = this.value;

  if (weight !== "" && height !== "") {
    $('.next-2').removeAttr("disabled");
  } else {
    $('.next-2').attr("disabled", true);
  }
});
$('#weigh').on("keyup", function () {
  weight = this.value;
  imt = calcImt(height, weight);
  $('#imtValue').text(imt);

  if (weight !== "" && height !== "") {
    $('.next-2').removeAttr("disabled");
  } else {
    $('.next-2').attr("disabled", true);
  }

  if (imt < 19.5) {
    $('#imtString').text("Underweight");
    $("#imtPercent").css("left", 10 + "%");
  }

  if (imt >= 19.5 && imt <= 22.9) {
    $('#imtString').text("Normal weight");
    $("#imtPercent").css("left", 30 + "%");
  }

  if (imt >= 23 && imt <= 27.4) {
    $('#imtString').text("Overweight");
    $("#imtPercent").css("left", 50 + "%");
  }

  if (imt >= 27.5 && imt <= 29.9) {
    $('#imtString').text("Obesity I degree");
    $("#imtPercent").css("left", 65 + "%");
  }

  if (imt >= 30 && imt <= 34.9) {
    $('#imtString').text("Obesity II degree");
    $("#imtPercent").css("left", 75 + "%");
  }

  if (imt >= 35 && imt <= 39.9) {
    $('#imtString').text("Obesity III degree");
    $("#imtPercent").css("left", 85 + "%");
  }

  if (imt >= 40) {
    $('#imtString').text("Obesity IV degree");
    $("#imtPercent").css("left", 95 + "%");
  }
});
$('#wish_weight').on("keyup", function () {
  wishWeight = this.value;
  $('#diffKg').html(Math.abs(weight - wishWeight));

  if (wishWeight !== "") {
    $('.next-3').removeAttr("disabled");
  } else {
    $('.next-3').attr("disabled", true);
  }
  /* resume */


  $('.graphic__label--top-left').text("".concat(weight, " \u043A\u0433"));
});
$(".likePercent").html(likePercent);
/* cards, step 11 */

var cards = null;
var cardsCount = 0;
var questionTitles = ["Do you like seafood?", "Do you like fish and fish products?", "What about turkey?", "What about chicken?", "Do you like beef?", "What about pork?"];
cards = $('.form__cards.cards').clone().html();
$(document).on("click", ".quiz-3__btn--yes", function () {
  addQuizAnswer();
  cardsCount += 1;
  $('.form__task--mb-small').text(questionTitles[cardsCount]);

  if (cardsCount === 6) {
    quizItems[quizIndex].classList.remove('active');
    quizItems[quizIndex += 1].classList.add('active');
    curStep.innerHTML = quizIndex + 1;
    progress = curStep.innerHTML / 21 * 100;
    progressFill.style.width = progress.toString() + '%';
    questionImage.src = "img/img".concat(quizIndex, ".png");
  }
});
$(document).on("click", ".quiz-3__btn--neutral", function () {
  addQuizAnswer();
  cardsCount += 1;
  $('.form__task--mb-small').text(questionTitles[cardsCount]);

  if (cardsCount === 6) {
    quizItems[quizIndex].classList.remove('active');
    quizItems[quizIndex += 1].classList.add('active');
    curStep.innerHTML = quizIndex + 1;
    progress = curStep.innerHTML / 21 * 100;
    progressFill.style.width = progress.toString() + '%';
    questionImage.src = "img/img".concat(quizIndex, ".png");
  }
});
$(document).on("click", ".quiz-3__btn--no", function () {
  addQuizAnswer();
  cardsCount += 1;
  $('.form__task--mb-small').text(questionTitles[cardsCount]);

  if (cardsCount === 6) {
    quizItems[quizIndex].classList.remove('active');
    quizItems[quizIndex += 1].classList.add('active');
    curStep.innerHTML = quizIndex + 1;
    progress = curStep.innerHTML / 21 * 100;
    progressFill.style.width = progress.toString() + '%';
    questionImage.src = "img/img".concat(quizIndex, ".png");
  }
});

function addQuizAnswer() {
  var $target = $(".cards__card").eq(0);
  $target.animate({
    opacity: 'hide',
    // animate slideUp
    right: '200px' // slide left

  }, 'slow', 'linear', function () {
    $(this).remove();

    if ($(".cards__card").length === 0) {
      cardsCount = 0;
      $('.form__cards.cards').html(cards);
      $(".cards__card").show();
      $('.form__task--mb-small').text(questionTitles[0]);
    }
  });
}
/* step 20 */


$(document).on("input", "#eemail", function () {
  var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  var form = $('[data-question="email"]');

  if (this.value.match(validRegex)) {
    form.find("input:submit").removeAttr("disabled");
  } else {
    form.find("input:submit").attr("disabled", true);
  }
});
$('.btn--email').on("click", function () {
  quizItems[quizIndex].classList.remove('active');
  quizItems[quizIndex += 1].classList.add('active');
  var slides = ["Unpacking your answers", "Analizing your diet profile", "Analizing your condition", "Adapting your plan to your daily schedule", "Finding recipes that fit", "Finding exercises that fit"];
  var duration = 4000;
  var slideDuration = duration / slides.length;
  var step = duration / 100;
  var percentageEl = document.getElementById("counter");
  var progressbarEl = document.getElementById("progressbar");
  var progressLabelEl = document.getElementById("progressLabel");
  var imgEl = document.getElementById("img");
  var counter = 0;
  var currSlide = 1;
  var interval = setInterval(progressPage, step);
  var progressIsEnd = false;

  function progressPage() {
    counter += step;

    if (counter > duration) {
      clearInterval(interval);
      progressIsEnd = true;
      $('.quiz').css('display', 'none');
      $('.quiz-item-main').css('display', 'none');
      $('.resume').css('display', 'block');
      $('.footer').css('display', 'block');
      return;
    }

    if (counter > currSlide * slideDuration) {
      currSlide++;
      progressLabelEl.innerHTML = slides[currSlide - 1];
    }

    var percent = Math.ceil(counter / duration * 100);
    percentageEl.innerHTML = percent.toString();
    progressbarEl.style.width = percent + "%";
  }
});
/* resume */

var today = new Date();
var currDay = String(today.getDate()).padStart(2, '0');
var currMonthStr = today.toLocaleString('default', {
  month: 'short'
});
var currMonthNum = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
$('.graphic__start').text("".concat(currDay, " ").concat(currMonthStr));
$('.graphic__end').text(month(yyyy, mm, dd));

function month(year, month, day) {
  var nextDate = new Date(year, month, day);
  nextDate.setMonth(nextDate.getMonth() + 1);
  var nextDay = String(nextDate.getDate()).padStart(2, '0');
  var nextMonthStr = nextDate.toLocaleString('default', {
    month: 'short'
  });
  return "".concat(nextDay - 1, " ").concat(nextMonthStr);
}

$(document).ready(function () {
  var r,
      a = 900;

  function e() {
    a -= 1;
    var e = Math.floor(a / 60),
        t = a - 60 * e;
    0 == e && 0 == t && clearInterval(r), t = 10 <= t ? t : "0" + t, $(".minutes").html(10 <= e ? e : "0" + e), $(".seconds").html(t);
  }

  r = setInterval(e, 1e3);
});