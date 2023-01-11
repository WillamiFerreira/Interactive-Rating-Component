let nota = 0
let main = document.getElementsByClassName('main')[0];
let estrela = document.getElementsByClassName('estrela')[0];
let titulo = document.getElementsByTagName('h1')[0];
let thanksImg = document.getElementsByClassName('thanks-img')[0]
let paragrafo = document.getElementsByTagName('p')[0]
let span = document.getElementsByTagName('span')[0];
let botao = window.document.getElementById("submit");
let notaMsg = document.getElementsByClassName("ratingMsg")[0];

botao.addEventListener("mouseup", submit);
botao.addEventListener("mousedown", botaoDown);

function getRate(valor){
    nota = valor.value

};

function submit(){
    botao.style.backgroundColor = 'white';
    botao.style.color = '#fb7413';
    estrela.style.display = 'none';
    span.style.display = 'none';
    botao.style.display = 'none';
    titulo.innerHTML = 'Thank you!'
    paragrafo.innerHTML = 'We appreciate you taking the time to give a rating.  If you ever need more support, don’t hesitate to get in touch!'
    thanksImg.style.display = "block";
    notaMsg.style.display='block';
    notaMsg.innerHTML = `You selected ${nota} out of 5`;
    thanksImg.style.margin = "auto";
    main.classList.add('thanks_page');
};

function botaoDown(){
    botao.style.backgroundColor = 'white';
    botao.style.color = '#fb7413';
};

function mouseOnCircle(opcao){
        opcao.style.backgroundColor = "#7c8798"; 

}
function mouseOutCircle(opcao){
    opcao.style.backgroundColor = "#262F38"; //volta a cor normal
}

function mouseDownCircle(opcao){
    opcao.style.backgroundColor = "#fb7413";
}

    

