// AQUI: Alterado para Mar 4, 2026
var deadline = new Date("Mar 4, 2026 23:59:59").getTime();

var x = setInterval(function() {
    var now = new Date().getTime();
    var t = deadline - now;

    // Cálculos de tempo para dias, horas, minutos e segundos
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    var hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((t % (1000 * 60)) / 1000);

    // Formatação com zero à esquerda (ex: 09)
    var hoursFormatted = String(hours).padStart(2, '0');
    var minutesFormatted = String(minutes).padStart(2, '0');
    var secondsFormatted = String(seconds).padStart(2, '0');

    // Seleciona os elementos no HTML para atualizar
    var elDays = document.querySelector(".demo-days-p");
    var elHours = document.querySelector(".demo-hours-p");
    var elMinutes = document.querySelector(".demo-minutes-p");
    var elSeconds = document.querySelector(".demo-seconds-p");

    // Verificação de segurança: Só tenta atualizar se os elementos existirem na página
    if (elDays && elHours && elMinutes && elSeconds) {
        if(days < 0){
            elDays.innerHTML = "00";
            elHours.innerHTML = "00";
            elMinutes.innerHTML = "00";
            elSeconds.innerHTML = "00";
        } else {
            elDays.innerHTML = days;
            elHours.innerHTML = hoursFormatted;
            elMinutes.innerHTML = minutesFormatted;
            elSeconds.innerHTML = secondsFormatted;
        }
    }

    // Quando a contagem termina
    if (t < 0) {
        clearInterval(x);
        var contador = document.querySelector(".contador");
        if (contador) contador.innerHTML = "EXPIRED";
    }
}, 1000);