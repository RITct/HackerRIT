
var index = 1;
showImg(index);

function imgPos(n) {
  showImg(index += n);
}

function currentImg(n) {
  showImg(index=n)
}

function showImg(n) {
  var i;
  var imgs = document.getElementsByClassName("images");
  console.log(imgs.length)
  var dots = document.getElementsByClassName("dot");
  if (n > imgs.length) {index = 1;}
  if (n < 1) {index = imgs.length}
  for (i = 0; i < imgs.length; i++) {
      imgs[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  imgs[index-1].style.display = "block";
  dots[index-1].className += " active";
} 




