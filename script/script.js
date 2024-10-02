// This imageslidearray contains all the image that i want to use for my slide
const imageSlideArray = [
  "./images/container-image/pexels-asadphoto-1268871.jpg",
  "./images/container-image/pexels-atomlaborblog-1105754.jpg",
  "./images/container-image/pexels-pok-rie-33563-28628302.jpg",
  "./images/container-image/pexels-quang-nguyen-vinh-222549-2155202.jpg",
  "./images/container-image/pexels-frans-van-heerden-201846-1438834.jpg",
  "./images/container-image/DesktopWeb-Hero-V2.avif",
];

// Getting the image using my DOM
const imageSlide = document.getElementById("image-slide");

setInterval(imageSlideAnimation, 5000);

var i = 0;

function imageSlideAnimation() {
  imageSlide.setAttribute("src", imageSlideArray[i]);
  i++;

  if (i > imageSlideArray.length - 1) {
    i = 0;
  }
}

// I wanna create a number counter

const numberCounter = document.querySelectorAll(".flex-number>.number");
console.log(numberCounter);

for (let i = 0; i < numberCounter.length; i++) {
  const numberCount = Number(numberCounter[i].innerHTML);

  for (let j = 0; j <= numberCount; j++) {
    setTimeout(() => {
      numberCounter[i].innerHTML = j;
    }, j * 5);
  }
}

document.getElementById("date").innerHTML = new Date().getFullYear();
