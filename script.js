var botao = window.document.getElementById("submit");
botao.addEventListener("mousedown", submit);
botao.addEventListener("mouseup", botaoSai);

function gethate(valor){
    var nota = valor.value
    
};

function submit(){
    botao.style.backgroundColor = 'white';
    botao.style.color = '#fb7413';
};

function cleamHatePage(){
    let estrelas = document.getElementsByClassName("staricon")
    for (let i = 0; i<=estrelas.length;i++){
        estrelas[i].style.visibility = 'hidden';
    }
    
}
function funcao(){
    let img_cont = document.getElementById('img-countainer')
    let imgt = document.createElement("img")
    imgt.src = "imagens/illustration-thank-you.svg";
    img_cont.appendChild(imgt);
}
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

    

