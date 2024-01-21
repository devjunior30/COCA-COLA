
// const images = ["./assets/classic.png", "./assets/light.png",
//  "./assets/zero.png"]

// const textsArray = ["COCA COLA CLASSICA", "COCA COLA LIGHT", "COCA COLA ZERO"]

// let currentIndex = 0
// const intervalTime = 3000

// const image = document.getElementsById('image')
// const imageText =document.getElementsByClassName('image-text')

// function changeImage() {
//     image.src = image[currentIndex]
//     imageText.textContent = textsArray[currentIndex];
//     currentIndex = (currentIndex + 1) %
// images.length;

// }

// setInterval(changeImage(), intervalTime);

let time = 3000,
        currentImageIndex = 0,
        image = document.querySelectorAll('section img'),

    max = image.length;

    function nextImage() {
    }

    function start() {
      setInterval(() => {
        image[currentImageIndex].classList.remove("personagens")

        currentImageIndex ++

        if(currentImageIndex >= max) {
            currentImageIndex = 0
        }

        image[currentImageIndex].classList.add("personagens")
      }, time);
    }

    window.addEventListener("load", start)