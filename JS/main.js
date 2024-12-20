import { Cards } from "./ui.js";



let category = document.querySelectorAll("#category a");

// Initial fetch for MMORPG category
const name = new Cards("mmorpg");
name.getData();

// Event listener for the category links to fetch data based on the selected category
for (let i = 0; i < category.length; i++) {
  category[i].addEventListener("click", function (e) {
    e.preventDefault();
    loading.classList.remove("d-none")
    loading.classList.add("d-flex")
    document.querySelector("#category a.active").classList.remove("active");
    document.getElementById(`${e.target.id}`).classList.add("active");
    let ammar = new Cards(e.target.getAttribute("data-category"));
    ammar.getData();
  });
}


document.querySelector(".detils .btn-close").addEventListener("click", function () {
  document.getElementsByClassName("detils")[0].classList.add("d-none")
  document.getElementById("Home").classList.add("d-flex")
  document.getElementById("Home").classList.remove("d-none")
})



window.addEventListener("scroll", function () {
  if (scrollY >= 150) {
    document.getElementById("nav").classList.remove("position-sticky");
    document
      .getElementById("nav")
      .classList.add("position-fixed", "start-50", "translate-50", "end-0");
  } else {
    document
      .getElementById("nav")
      .classList.remove("position-fixed", "start-50", "translate-50", "end-0");
    document.getElementById("nav").classList.add("position-sticky");
  }
});
