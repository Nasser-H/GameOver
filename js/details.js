import { Ui } from "./ui.js";

export class DetailsGame {
  constructor() {
    this.ui = new Ui();
    document
      .getElementById("closeDetailsGame")
      .addEventListener("click", function () {
        document.getElementById("Games").classList.remove("d-none");
        document.getElementById("DetailsGame").classList.add("d-none");
      });
  }
  async getDetailsGame(id) {
    try {
      const loading = document.querySelector(".loading");
      loading.classList.remove("d-none");
      const options = {
        method: "GET",
        headers: {
          "x-rapidapi-key":
            "16c8ee6a94msh98d959e29b83016p1fd9c4jsn3fd61d0254c9",
          "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        },
      };

      const api = await fetch(
        `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
        options
      );
      const response = await api.json();
      loading.classList.add("d-none");

      this.ui.displayDetailsGames(response);
    } catch (error) {
      console.error(error);
    }
  }
}
