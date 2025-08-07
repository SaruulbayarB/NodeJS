let currentPhoto = 1;

function switchPhoto() {
  const photo = document.getElementById("photo");

  if (currentPhoto === 1) {
    photo.src = "https://www.w3schools.com/js/pic_bulbon.gif";
    currentPhoto === 2;
  } else {
    photo.src = "photo1.jpg";
    currentPhoto = 1;
  }
}
