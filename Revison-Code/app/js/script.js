//const id = document.queryselector(id).addeventlistner
//('click'), function(){

//})

const btnHamburger = document.querySelector("#btnHamburger");
btnHamburger.addEventListener("click", function () {
  console.log("fuck");

  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
  } else {
    btnHamburger.classList.add("open");
  }
});
