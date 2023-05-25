let Boton = document. getElementById(miBoton);
function handleClick(){
    alert("Hola, hiciste clic")
}

Boton.addEventListener("clic", function(){
alert("Hiciste clic en el boton")
});
//const Boton=document.getElementById('miBoton');

//Boton.addEventListener("click",function(handleClick){

//    alert('Hola!!! has hecho click en el boton');
// });

const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});