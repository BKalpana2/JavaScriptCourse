let count=0;
let refElem=document.getElementById("ref");

function dec(){
    count--;
    refElem.innerText=count;
}

function inc(){
    count++;
    refElem.innerText=count;
}

function reset(){
    count=0;
    refElem.innerText=count;
}