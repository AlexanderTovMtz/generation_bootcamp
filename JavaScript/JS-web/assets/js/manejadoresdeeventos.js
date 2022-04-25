function greeting(){
    alert('Hello from a event handler');
}

/* Semantic event handler */
const $semanticButton = document.getElementById('semanticEvent')
$semanticButton.onclick = greeting;

$semanticButton.onclick = function (e){
    alert('Hello from semantic event')
    console.log(e.target)
}

/* Multiple Event Handler */
const $multipleButton = document.getElementById('multipleEvents')

$multipleButton.addEventListener('click', (e) => {
    alert('Hello from addEventListener')
})

$multipleButton.addEventListener('click', (e) => {
    console.log(e.target)
});


window.addEventListener('load', () => {
    this.alert('Load complete');
})