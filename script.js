//evento de click nesse documento

//em exercicios anteriores capturavamos eventos de submit de um form, agora sera de um evento de click no botao
function main(){

const relogio = document.querySelector('.relogio');

//POSSO TIRAR POIS ISSO JÁ ESTÁ SENDO FEITO DENTRO DA FUNÇÃO ADDEVENT

/* const buttonIniciar = document.querySelector('.iniciar'); 
const buttonPausar = document.querySelector('.pausar'); 
const buttonResetar = document.querySelector('.resetar');  */
let segundos = 0;
let timer;

function iniciaRelogio(){
    timer = setInterval(function() {
    segundos++;
    relogio.innerHTML = criaHoraDosSegundos(segundos)
}, 1000);}

//no 1 argumento ao inves de submit vai click

document.addEventListener('click', function(event){
    const element = event.target;

    if(element.classList.contains('iniciar')){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();
    };

    if(element.classList.contains('pausar')){

    relogio.classList.add('pausado');
    clearInterval(timer);
    };

    

    if(element.classList.contains('resetar')){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';

    }
})

//ESSAS FUNÇÕES NÃO SE TORNAM NECESSÁRIOS POIS JÁ TEM UMA FUNÇÃO QUE AS CRIA

/* buttonIniciar.addEventListener('click', function(evento){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    iniciaRelogio();

});

buttonPausar.addEventListener('click', function(evento){
    relogio.classList.add('pausado');
    clearInterval(timer);
});

buttonResetar.addEventListener('click', function(evento){
    relogio.classList.remove('pausado');
    clearInterval(timer);
    segundos = 0;
    relogio.innerHTML = '00:00:00';
});
 */




function criaHoraDosSegundos(segundos){
    const data = new Date(segundos * 1000); //1,1,1970, 00:00:00
   return data.toLocaleTimeString('pt-br',{
        hour12: false,
        timeZone: 'UTC'
    });
}
}

main();