let main = document.getElementsByClassName("main")[0];
let op1 = document.getElementById("1");
let op2 = document.getElementById("2");
let op3 = document.getElementById("3");
let op4 = document.getElementById("4");
let op5 = document.getElementById("5");
let star = document.getElementsByClassName("up_star")[0];
let img = document.getElementsByClassName("thanks_img")[0];
let rate_msg = document.getElementById("rating_msg");
let title = document.getElementById('title')
let paragraph = document.getElementById("paragraph");
let span = document.getElementsByTagName('span')[0];
let options = [op1, op2, op3, op4, op5];
let btn = document.getElementById("submit");
let rate = 0

function getRate(rt) {
    rate = rt
}

btn.addEventListener('mousedown', function (event) {
    btn.style.backgroundColor = "hsl(0, 0%, 100%)";
    btn.style.color = "hsl(25, 97%, 53%)";
});

btn.addEventListener("mouseup", function (event) {
    btn.style.backgroundColor = "hsl(25, 97%, 53%)";
    btn.style.color = "hsl(0, 0%, 100%)";
})

btn.addEventListener('click', function (event) {
    img.style.display = "block";
    rate_msg.innerHTML = `You selected ${rate} out of 5`
    rate_msg.style.display = 'block'
    star.style.display = "none";
    title.innerHTML = "Thank You!";
    paragraph.innerHTML = "We appreciate you taking the time to give a rating.  If you ever need more support, don’t hesitate to get in touch!"
    span.style.display = "none";
    btn.style.display = "none";
    img.classList.add('thanks_img');
    main.classList.add('thanks_page');

});

function mouseEntrou(op) {
    if (op.style.backgroundColor != "hsl(25, 97%, 53%)") {
        op.style.backgroundColor = "hsl(216, 12%, 54%)";
        op.style.color = 'hsl(0, 0%, 100%)'
    }
}

function mouseSaiu(op) {
    if (op.style.backgroundColor != 'hsl(25, 97%, 53%)') {
        op.style.backgroundColor = "hsl(210, 19%, 18%)";
        op.style.color = 'hsl(217, 12%, 63%)';

    } else {
        op.style.backgroundColor = 'hsl(25, 97%, 53%)';
    }
}

function clicou(op) {
    for (let i in options) {
        var item = document.getElementById(i)
        if (item.style.backgroundColor == 'hsl(25, 97%, 53%)') {
            item.style.backgroundColor = 'hsl(210, 19%, 18%)'; 
        }
    }

    if (op.style.backgroundColor != 'hsl(25, 97%, 53%)') {
        op.style.backgroundColor = "hsl(25, 97%, 53%)";
    }
}