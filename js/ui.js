export class Ui {
  constructor() {
    this.inner = document.getElementById("cardsGames");
    this.showDetailsGameInner = document.querySelector("#DetailsGame section");
  }
  displayGames(response) {
    console.log(response);
    let cartona = ``;
    for (let i = 0; i < response.length; i++) {
      cartona += `
            <div class="col-xl-3 col-lg-4 col-md-6 col-of-Game">
                <div class="inner">
                    <div id="${
                      response[i].id
                    }" class="card bg-transparent" role="button">
                        <img src="${response[i].thumbnail}" class="card-img-top p-3" alt="${response[i].title} image">
                        <div class="card-body pt-0 p-3">
                            <figure class="title-card mb-0 d-flex justify-content-between">
                                <h3 class="card-title">${response[i].title}</h3>
                                <span class="p-1 rounded-1 text-center">Free</span>
                            </figure>
                            <p class="card-text mb-3 text-center" style="height:63px">${response[i].short_description.split(" ", 8)}</p>
                        </div>
                        <hr class="m-0 border-black">
                        <div class="card-body px-3 py-2 d-flex justify-content-between">
                            <span class="card-link">${response[i].genre}</span>
                            <span class="card-link">${
                              response[i].platform
                            }</span>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
    this.inner.innerHTML = cartona;
  }

  displayDetailsGames(response) {
    this.showDetailsGameInner.innerHTML = `
            <div class="container">
                <div class="row gy-4 pb-4">
                    <div class="col-md-4">
                        <div class="inner">
                            <img src="${response.thumbnail}" class="w-100" alt="${response.title} image">
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="inner">
                            <h3>Title: ${response.title}</h3>
                            <p>Category: <span>${response.genre}</span></p>
                            <p>Platform: <span>${response.platform}</span></p>
                            <p>Status: <span>${response.status}</span></p>
                            <p class="game-description">${response.description}</p>
                            <a href="${response.game_url}" target="_blank">
                                Show Game
                            </a>
                        </div>
                    </div>
                </div>
            </div>    
    `;
    console.log(response);
  }
}
