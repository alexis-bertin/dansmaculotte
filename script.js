window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("header").classList.add("scrolling");
  } else {
    document.getElementById("header").classList.remove("scrolling");
  }
}