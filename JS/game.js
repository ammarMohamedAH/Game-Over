export class gameDet {
  async getDetils(id) {
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "a270bc636cmsh7785c8d2aaba422p18cce5jsn89a5dd8d1acd",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };

    try {
      const api = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        options
      );
      const response = await api.json();
      this.displayDet(response)
      loading.classList.remove("d-flex")
      loading.classList.add("d-none")
    } catch (error) {
      console.error(error);
    }
  }

  displayDet(response) {
    document.getElementById("detailsBody").innerHTML = `
    <div class="col-md-4">
          <img src="${response.thumbnail}" class="w-100" alt="image details">
        </div>
        <div class="col-md-8">
          <h3>Title: ${response.title}</h3>
          <p>Category: <span class="badge text-bg-info"> ${response.genre}</span> </p>
          <p>Platform: <span class="badge text-bg-info"> ${response.platform}</span> </p>
          <p>Status: <span class="badge text-bg-info"> ${response.status}</span> </p>
          <p class="small">${response.description}</p>
          <a class="btn btn-outline-warning text-white" target="_blank" href="${response.game_url}">Show
            Game</a>
        </div>
    `
  }
}

