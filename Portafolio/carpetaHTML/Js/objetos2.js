/*let nombre = prompt("¿Cómo te llamas?");
if (nombre){
    alert(`Hola ${nombre}`);
}else{
    alert("Anonimo");
}*/

let lista = document.getAnimations("Log");
function registro(Texto){
    let item = document.createElement("li");
    item.innertext = Texto;
    return item;
}

let timer = setTimeout(()=>{
 lista.appeendChild(registro("timer a los 3 seg"));
},3000);


let  repetidor = setInterval(() => {
    lista.appeendChild(registro("cada 1.5 seg"))
}, 1500);

let activatimerBtn = document.getElementById("activa el timer");
let stoptimerBtn = document.getElementById("detiene el timer");

activatimerBtn.addEventListener("click",function(){
    lista.appeendChild(registro("inicia el timer..."));
    
});


console.table(location);
let secure = document.getElementById("secure");
