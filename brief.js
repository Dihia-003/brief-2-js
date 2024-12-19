document.body.onload = function () {
    nb = 4;
    p = 0;
    container = document.getElementById("container");
    g = document.getElementById("g");
    d = document.getElementById("d");
    container.style.width = (800 * nb) + "px";
    for (i = 1; i <= nb; i++) {
        div = document.createElement("div");
        div.className = "photo";
        div.style.background = "url('brief-2-js/img" + i + ".jpeg')";
        container.appendChild(div);
    }
}
g.onclick = function () {

    if (p < 0) {
        p++;
    }

    container.style.transform = "translate(" + p * 800 + "px)";
    container.style.transition = "all 0.5s ease";
}
d.onclick = function () {
    if (p > -nb + 1) {
        p--;
    }
    container.style.transform = "translate(" + p * 800 + "px)";
    container.style.transition = "all 0.5s ease";
}