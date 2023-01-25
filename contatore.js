const contatore = document.getElementById("contatore");
const start = document.getElementById("start");
let secondi = 0;

setInterval((conteggio) => {
  secondi += 1;
  console.log(secondi);
  contatore.innerHTML = secondi;
  sessionStorage.setItem("secondi", secondi);
  let currentSeconds = sessionStorage.getItem("secondi");
}, 1000);
