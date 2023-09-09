var images = document.querySelectorAll('.slideshow img');
var currentIndex = 0;
var intervalTime = 5000;

function changeImage() {
  images[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % images.length;
  images[currentIndex].classList.add('active');
}

setInterval(changeImage, intervalTime);

var contents = document.querySelectorAll('.content section');

function showContent(index) {
  for (var i = 0; i < contents.length; i++) {
    contents[i].style.display = 'none';
  }

  document.getElementById('section' + index).style.display = 'block';
}

showContent(0);