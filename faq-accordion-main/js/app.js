//Variables
const boton = document.querySelectorAll('.question-icon');



cargarEventListeners();

function cargarEventListeners() {

    boton.forEach( e => e,addEventListener('click', mostrarInformacion));

}

function mostrarInformacion(e){
    e.preventDefault();

    if(e.target.classList.contains('question-icon')){
        console.log(e.target)
        const answerDisplay = e.target.parentElement.parentElement.children[1];

        if(answerDisplay.classList.contains('display')){
            answerDisplay.classList.remove('display');
            e.target.classList.add('question-icon__active');
            e.target.textContent = '-';
        } else{
            answerDisplay.classList.add('display');
            e.target.textContent = '+'
            e.target.classList.remove('question-icon__active');
        }
    }
}