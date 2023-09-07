AOS.init();

const dataDoBirthday = new Date("Feb 14, 2024 00:00:00");
const timeStampDoBirthday = dataDoBirthday.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOBirthday = timeStampDoBirthday - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const MinutoEmMs = 1000 * 60;

    const diasAteOBirthday = Math.floor(distanciaAteOBirthday / diaEmMs);
    const horasAteOBirthday = Math.floor((distanciaAteOBirthday % diaEmMs) / horaEmMs)
    const minutosAteOBirthday = Math.floor((distanciaAteOBirthday % horaEmMs) / MinutoEmMs);
    const segundosAteOBirthday = Math.floor((distanciaAteOBirthday % MinutoEmMs) / 1000);   

    document.getElementById('contador').innerHTML = `${diasAteOBirthday}d ${horasAteOBirthday}h ${minutosAteOBirthday}m ${segundosAteOBirthday}s`;

    if (distanciaAteOBirthday < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Birthday expirado';
    }
}, 1000)