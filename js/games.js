import { DetailsGame } from "./details.js";
import { Ui } from "./ui.js";
export class Games {
  constructor() {
    this.getCatogry("mmorpg");
    document
      .querySelectorAll("#Games nav #navbarSupportedContent button")
      .forEach((button) => {
        button.addEventListener("click", (e) => {
          document.querySelector(".active").classList.remove("active");
          e.target.classList.add("active");
          this.getCatogry(e.target.id);
        });
      });
    this.ui = new Ui();
    this.detailsGame = new DetailsGame();
  }

  async getCatogry(catogry) {
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
        `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${catogry}`,
        options
      );
      const response = await api.json();
      loading.classList.add("d-none");
      this.ui.displayGames(response);
      this.openGame();
    } catch (error) {
      console.error(error);
    }
  }

  openGame() {
    document.querySelectorAll("#Games section .card").forEach((card) => {
      card.addEventListener("click", (e) => {
        this.detailsGame.getDetailsGame(card.id);
        document.getElementById("Games").classList.add("d-none");
        document.getElementById("DetailsGame").classList.remove("d-none");
      });
    });
  }
}
