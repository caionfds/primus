$(document).ready(function () {

})

function notificacoes() {
    var card = document.getElementById("cardNotificacao");
    card.classList.toggle("amostra");
}

function abrindoModal() {
    var fundo = document.getElementById('fundo');
    var modal = document.getElementById("modal");
    fundo.style.display = "flex";

    setTimeout(function () {
        fundo.style.backgroundColor = "#1e1e1eaa";
        modal.style.transform = "scale(1)";
    }, 100);
}

function fechaModal() {
    var fundo = document.getElementById('fundo');
    var modal = document.getElementById("modal");
    fundo.style.backgroundColor = "transparent";
    modal.style.transform = "scale(0)";


    setTimeout(function () {
        fundo.style.display = "none";
    }, 100);

    var level = document.getElementById('level');
    level.innerHTML = 16;

    var pontos = document.getElementById('engajamento');
    pontos.innerHTML = '100/750';

    var progress = document.getElementById("file");
    progress.value = 10;

    setTimeout(function () {
        var card = document.getElementById("cardNotificacao");
        card.classList.remove("amostra");
    }, 100);

}

function cadastro() {
    window.location.href("./cadastro.html");
}

function mudarDeTela() {
    window.location.href = "./cadastro.html"
}

function home() {
    window.location.href = "./index.html"
}

function perfil() {
    window.location.href = "./profile.html"
}