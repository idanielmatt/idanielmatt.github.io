let divBaner2 = document.getElementById("baner");
divBaner2.addEventListener("mouseover", hoverIn);
divBaner2.addEventListener("mouseout", hoverOut);
divBaner2.addEventListener("click", clickHandler);

let player = document.getElementById("player");


function hoverIn() {
  console.log("entraste");
  player.autoplay = true;
  player.play();
  divBaner2.style.animationPlayState = "running";
  return true;
}

function hoverOut() {
  console.log("saliste");
  if (!musicState) {
    player.pause();
    divBaner2.style.animationPlayState = "paused";
  }
}

function clickHandler(e) {
  console.log("Se hizo clic en spotify");
  if (!musicState) {
    musicState = true;
    divBaner2.style.animationPlayState = "running";
    player.play();
  } else {
    musicState = false;
    divBaner2.style.animationPlayState = "paused";
    player.pause();
  }
  console.log(musicState);
}
let musicState = false;

