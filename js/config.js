var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}



/*Deixando a nav bar fixa
 $(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll > 5) {
    var header = $("#header").addClass("nav");
  } else {
    $("#header").removeClass("nav");
  }
});
 */