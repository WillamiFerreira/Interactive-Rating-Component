let main = document.getElementsByClassName('main')[0];
let estrela = document.getElementById('estrela');
let titulo = document.getElementsByTagName('h1')[0];
let thanks_img = document.getElementsByClassName('thanks-img')[0]
let paragrafo = document.getElementsByTagName('p')[0]
let span = document.getElementsByTagName('span')[0];
let botao = window.document.getElementById("submit");
let notaMsg = document.getElementsByClassName("hating-msg")[0];
let nota = 0

botao.addEventListener("mousedown", submit);
botao.addEventListener("mouseup", botaoSai);

function gethate(valor){
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
    thanks_img.style.display = "block";
    notaMsg.style.display='block';
    notaMsg.innerHTML = `You selected ${nota} out of 5`;
    thanks_img.style.margin = "auto";
    main.classList.add('thanks_page');
};

function botaoSai(){
    botao.style.backgroundColor = '#fb7413';
    botao.style.color = 'white';
};

function mouseOnCircle(opcao){
    opcao.style.backgroundColor = "#7c8798";

}
function mouseOutCircle(opcao){
    opcao.style.backgroundColor = "#262F38";
}

function mouseDownCircle(opcao){
    opcao.style.backgroundColor = "#fb7413";
}

    

