
let div1 = document.getElementById('banner');
let div2 = document.getElementById('banner1');
let dot1=document.getElementById('dot1');
let dot2=document.getElementById('dot2');

function replaceDiv() {
    div1.parentNode.replaceChild(div2, div1);
    div2.style.display = 'block';
    dot2.style.backgroundColor='rgb(34, 34, 34)'
    dot1.style.backgroundColor='#bbb'

}

function replaceDiv2() {
    div2.parentNode.replaceChild(div1,div2);
    div1.style.display = 'block';
    dot1.style.backgroundColor='rgb(34, 34, 34)'
    dot2.style.backgroundColor='#bbb'

}





