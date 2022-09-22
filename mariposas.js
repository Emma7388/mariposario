var cantidadMariposas = 5;

function inicia() {
  for (c = 0; c < cantidadMariposas; c++) {
    mariposa = document.createElement("div");
    mariposa.setAttribute("class", "nieve");
    document.getElementById("capa").appendChild(mariposa);
  }

  for (n = 0; n < cantidadMariposas; n++) {
    document.querySelectorAll("#capa .nieve")[n].addEventListener(
      "transitionend",
      function () {
        caida(this);
      },
      false
    );
  }

  setTimeout(function () {
    for (c = 0; c < cantidadMariposas; c++) {
      mariposa = document.querySelectorAll("#capa .nieve")[c];
      mariposa.style.left = Math.floor(Math.random() * 100) + "vw";
      mariposa.style.transition = "top 15ms linear";
      mariposa.style.top = mariposa.style.top = "100vh";
    }
  }, 15);
}

function caida(T) {
  T.style.transition = "";
  T.style.top = "-5vh";

  setTimeout(function () {
    T.style.transitionProperty = "left, top";
    T.style.transitionDelay = Math.floor(Math.random() * 2000) + "ms";
    T.style.transitionDuration =
      Math.floor(Math.random() * 10000) + 5000 + "ms";
    T.style.transitionTimingFunction = "ease-in, ease-out";
    T.style.left = Math.floor(Math.random() * 100) + "vw";
    T.style.top = "100vh";
  }, 15);
}

inicia();
