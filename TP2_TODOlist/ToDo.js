//Crea el boton de las X en cada elemento
function AgregarBotonX(){
var lista = document.getElementsByTagName("LI"); //hace una lista con todos las tareas que recibe
for (i = 0; i < lista.length; i++) { //A cada una de las taras ponele la X
  var espacioX = document.createElement("espacioX"); //Crea el espacio donde va a ir la X
  var txt = document.createTextNode("\u00D7"); //Crea el simbolo de X
  espacioX.className = "eliminar"; //Le da el valor de cerrar
  espacioX.appendChild(txt); // Inserta el simbolo X en el espacio creado
  lista[i].appendChild(espacioX); // inserta ya todo el elemento
}
}

// Elimina la tarea cuando se aprieta la X
function AgregarFuncionalidadBotonX(){
var eliminar = document.getElementsByClassName("eliminar"); //hace una lista con todos los elementos que tengan como clase eliminar
for (i = 0; i < eliminar.length; i++) { // mientras hayan cosas para eliminar hace la funcion
  eliminar[i].onclick = function() { // Al apretar el espacio con la X en dicha tarea hace la funcion
    var div = this.parentElement; // Saca el div donde aparece toda la tarea
    div.style.display = "none"; // Saca el div donde aparece toda la tarea
  }
}
}

// Agrega una tilde cuando apretas en una tarea
var list = document.querySelector('ul'); // Devuelve el primer elemento de los uls
list.addEventListener('click', function(TareaCompletada) { //Cuando se hace click en la tarea llama a TareaCompletada
  if (TareaCompletada.target.tagName === 'LI') { //
    TareaCompletada.target.classList.toggle('checked'); //Llama a el css y lo marca como resuelto
  }
}, false);

// Crea una nueva lista cuando apretas el boton Agregar
function NuevaTarea() {
  var li = document.createElement("li"); //hace una lista con todos las tareas que recibe
  var inputValue = document.getElementById("ToDo").value; //hace una lista con todos los elementos que tengan como clase ToDo, las tareas sin validar
  var t = document.createTextNode(inputValue); //Crea el texto con el valor de la tarea
  li.appendChild(t); //Agrega el texto a la lista con los demas elementos de la tarea
  
  if (inputValue === '') {
    alert("Escriba su tarea pendiente");
  } else {
    document.getElementById("Tareas").appendChild(li); //Si esta todo bien agrega el elemento li a las tareas para que se muestre
  }
  document.getElementById("ToDo").value = ""; //Una vez agregada la tarea borra el texto del input

  AgregarBotonX(); 
  AgregarFuncionalidadBotonX();
}

// Elimina valores de la lista de tareas
function eliminarTodo() {
  const eliminarTarea= document.getElementById("Tareas"); //hace una lista con todos los elementos que tengan como id tareas
  eliminarTarea.innerHTML = ""; // Reemplaza la sintaxis HTML del elemento por la nueva
}