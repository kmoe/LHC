document.addEventListener("DOMContentLoaded", function(event) {
  var imgs = document.getElementsByTagName("img");
  for (img of imgs) {
    if (img.src.substring(0,5) === "http:") {
      img.src = "https:" + img.src.substring(5);
    }
  }
});
