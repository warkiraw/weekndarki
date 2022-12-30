let a = document.querySelector("#send");
let b = document.querySelector('.vozrast');
a.addEventListener('click',createYea);
function createYea(){
    let text = document.querySelector("#vz").value;
    let newText = document.createElement('span');
    newText.textContent = text;
    b.append(newText);
    removeEventListener
}
