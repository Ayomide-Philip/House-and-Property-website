// This imageslidearray contains all the image that i want to use for my slide
const imageSlideArray = [
  "./images/container-image/pexels-asadphoto-1268871.jpg",
  "./images/container-image/pexels-atomlaborblog-1105754.jpg",
  "./images/container-image/pexels-pok-rie-33563-28628302.jpg",
  "./images/container-image/pexels-quang-nguyen-vinh-222549-2155202.jpg",
  "./images/container-image/pexels-frans-van-heerden-201846-1438834.jpg",
  "./images/container-image/DesktopWeb-Hero-V2.avif",
];

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
