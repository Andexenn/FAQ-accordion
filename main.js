const answers = document.querySelectorAll(".answer");
const btns = document.querySelectorAll(".plus");

for (let i = 0; i < btns.length; ++i) {
  // console.log(btns[i]);
  // console.log(answers[i]);

  btns[i].addEventListener("click", (e) => {
    if(answers[i].style.display === "none"){
        answers[i].style.display = "block";
        btns[i].setAttribute("src", "./assets/images/icon-minus.svg");
        // e.stopImmediatePropagation();   
    }
    else{
        answers[i].style.display = "none";
        btns[i].setAttribute("src", "./assets/images/icon-plus.svg");
    }
  });
}
