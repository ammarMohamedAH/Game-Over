import { gameDet } from "./game.js";
let loading = document.getElementById("loading");

const cardElement = document.getElementById("cardsContainer");
export class Cards {
  constructor(category) {
    this.category = category;
  }
  async getData() {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a270bc636cmsh7785c8d2aaba422p18cce5jsn89a5dd8d1acd",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const api = await fetch(
        ` https://free-to-play-games-database.p.rapidapi.com/api/games?category=${this.category}`,
        options
      );
      const responsee = await api.json();
      let newHome = new CadsDisplay(responsee)
      newHome.DisplayCards()
      newHome.getId()
      loading.classList.remove("d-flex")
      loading.classList.add("d-none")

    } catch (error) {
      cardElement.innerHTML = error;
    }
  }

}

class CadsDisplay {
  constructor(response) {
    this.response = response;
  }
  DisplayCards() {
    let box = "";

    for (let i = 0; i < this.response.length; i++) {
      box += `
                 <div class="col-lg-4 col-md-6 col-xl-3">
            <div data-id="${this.response[i].id}" class="card h-100 bg-transparent" role="button" id="card" >
              <div class="card-body">
                <figure class="position-relative">
                  <img
                    class="card-img-top object-fit-cover h-100"
                    src="${this.response[i].thumbnail}"
                  />
                </figure>

                <figcaption>
                  <div class=" justify-content-between hstack">
                    <h3 class="h6 small">${this.response[i].title} </h3>
                    <span class="badge text-bg-primary p-2">free</span>
                  </div>

                  <p class="card-text small text-center opacity-50">
                    ${this.response[i].short_description}
                  </p>
                </figcaption>
              </div>

              <footer class="card-footer hstack small justify-content-between">
                <span class="badge badge-color">${this.response[i].genre}</span>
                <span class="badge badge-color">${this.response[i].platform}</span>
              </footer>
            </div>
          </div>
            `;
    }
    cardElement.innerHTML = box;
  }
  getId() {
    document.querySelectorAll(".card").forEach((i) => {
      i.addEventListener('click', () => {

        const det = new gameDet();
        det.getDetils(i.getAttribute("data-id"));
        document.querySelector(".detils").classList.remove("d-none")
        document.getElementById("Home").classList.remove("d-flex")
        document.getElementById("Home").classList.add("d-none")
        loading.classList.add("d-flex")
      loading.classList.remove("d-none")
      })
    })
  }
}
