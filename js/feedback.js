var feedbackLink = document.querySelector(".feedback-button");
var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = feedbackPopup.querySelector(".modal-close");
var feedbackForm = feedbackPopup.querySelector(".form-feedback");
var feedbackName = feedbackPopup.querySelector(".your-name-input");
var feedbackEmail = feedbackPopup.querySelector(".ap-email-input");

var isStorageSupport = true;
var storage = "";

try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}

feedbackLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-show");

    if (storage) {
        feedbackName.value = storage;
        feedbackEmail.focus();
    } else {
    feedbackName.focus();
    }
});

feedbackClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedbackPopup.classList.remove("modal-show");
    feedbackPopup.classList.remove("modal-error");
});

feedbackForm.addEventListener("submit", function (evt) {
    if (!feedbackName.value || !feedbackEmail.value) {
    evt.preventDefault();
    feedbackPopup.classList.add("modal-error");
    feedbackPopup.offsetWidth = feedbackPopup.offsetWidth;
    feedbackPopup.classList.add("modal-error");    
    } else {
        if (isStorageSupport) {
        localStorage.setItem("name", feedbackName.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedbackPopup.classList.contains("modal-show")) {
        evt.preventDefault();
        feedbackPopup.classList.remove("modal-show");
        feedbackPopup.classList.remove("modal-error");
        }
    }
});



var mapLink = document.querySelector(".contacts-button-map");
var mapPopup = document.querySelector(".modal-map");


mapLink.addEventListener("click", function (evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

