// PHOTO 1 UPLOAD

let uploadPhoto1 = document.getElementById("uploadPhoto1");
let photo1 = document.getElementById("photo1");

let photo1URL = null;

uploadPhoto1.addEventListener("change", function () {

    let file = this.files[0];

    if (file && file.type.startsWith("image/")) {

        if (photo1URL) {
            URL.revokeObjectURL(photo1URL);
        }

        photo1URL = URL.createObjectURL(file);

        photo1.src = photo1URL;

    } else if (file) {

        alert("Please select a valid photo!");

    }

});


// PHOTO 2 UPLOAD

let uploadPhoto2 = document.getElementById("uploadPhoto2");
let photo2 = document.getElementById("photo2");

let photo2URL = null;

uploadPhoto2.addEventListener("change", function () {

    let file = this.files[0];

    if (file && file.type.startsWith("image/")) {

        if (photo2URL) {
            URL.revokeObjectURL(photo2URL);
        }

        photo2URL = URL.createObjectURL(file);

        photo2.src = photo2URL;

    } else if (file) {

        alert("Please select a valid photo!");

    }

});


// VIDEO UPLOAD

let uploadVideo = document.getElementById("uploadVideo");

let myVideo = document.getElementById("myVideo");

let videoPlaceholder = document.getElementById("videoPlaceholder");

let videoURL = null;

uploadVideo.addEventListener("change", function () {

    let file = this.files[0];

    if (file && file.type.startsWith("video/")) {

        if (videoURL) {
            URL.revokeObjectURL(videoURL);
        }

        videoURL = URL.createObjectURL(file);

        myVideo.src = videoURL;

        myVideo.style.display = "block";

        videoPlaceholder.style.display = "none";

        myVideo.load();

    } else if (file) {

        alert("Please select a valid video!");

    }

});


// SURPRISE BUTTON

function showSurprise() {

    let message = document.getElementById("surpriseMessage");

    message.style.display = "block";

    message.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    createConfetti();

}


// CONFETTI ANIMATION

function createConfetti() {

    let emojis = ["🎉", "🎊", "❤️", "💖", "✨", "🎂", "🌸"];

    for (let i = 0; i < 60; i++) {

        let item = document.createElement("div");

        item.innerText =
            emojis[Math.floor(Math.random() * emojis.length)];

        item.style.position = "fixed";

        item.style.left = Math.random() * 100 + "vw";

        item.style.top = "-30px";

        item.style.fontSize = "25px";

        item.style.zIndex = "9999";

        item.style.pointerEvents = "none";

        document.body.appendChild(item);

        let position = -30;

        let speed = Math.random() * 5 + 2;

        let fall = setInterval(function () {

            position += speed;

            item.style.top = position + "px";

            if (position > window.innerHeight) {

                clearInterval(fall);

                item.remove();

            }

        }, 20);

    }

}


// FLOATING HEARTS

function createHeart() {

    let heart = document.createElement("span");

    heart.innerText = "❤️";

    heart.style.position = "fixed";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-30px";

    heart.style.fontSize = "20px";

    heart.style.pointerEvents = "none";

    heart.style.zIndex = "1";

    document.body.appendChild(heart);

    heart.animate(
        [
            {
                transform: "translateY(0)",
                opacity: 1
            },

            {
                transform: "translateY(-100vh)",
                opacity: 0
            }
        ],
        {
            duration: 5000,
            easing: "linear"
        }
    );

    setTimeout(function () {

        heart.remove();

    }, 5000);

}

setInterval(createHeart, 1000);const uploadPhoto = document.getElementById("uploadPhoto");
const memoryPhoto = document.getElementById("memoryPhoto");

uploadPhoto.addEventListener("change", function () {

    const file = this.files[0];

    if (file) {
        memoryPhoto.src = URL.createObjectURL(file);
    }

});