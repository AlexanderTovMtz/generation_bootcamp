
const continentes = ['africa','america','asia','europa','oceania'];

const $ol = document.createElement('ol');
$cuadro.appendChild($ol);

continentes.forEach(continentes => {$ol.innerHTML += '<li>${continente}</li>'});

