//! the first solution, complex and not convenient for user

// const answers = document.querySelectorAll(".answer");
// const btns = document.querySelectorAll(".plus");

// for (let i = 0; i < btns.length; ++i) {

//   btns[i].addEventListener("click", (e) => {
//     if(answers[i].style.display === "none"){
//         answers[i].style.display = "block";
//         btns[i].setAttribute("src", "./assets/images/icon-minus.svg");
//     }
//     else{
//         answers[i].style.display = "none";
//         btns[i].setAttribute("src", "./assets/images/icon-plus.svg");
//     }
//   });
// }

//! the second method, ez to understand and good for user

const items = document.querySelectorAll(".item");

items.forEach((item) => {
  const p = item.querySelector("p");
  const img = item.querySelector("img");
  item.addEventListener("click", (e) => {
    if (p.style.display === "none") {
      p.style.display = "block";
      img.setAttribute("src", "./assets/images/icon-minus.svg");
    } else {
      p.style.display = "none";
      img.setAttribute("src", "./assets/images/icon-plus.svg");
    }
  });
});
