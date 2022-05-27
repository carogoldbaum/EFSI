//Crea el boton de las X en cada elemento
var lista = document.getElementsByTagName("LI"); //hace una lista con todos las tareas que recibe
for (i = 0; i < lista.length; i++) { //A cada una de las taras ponele la X
  var espacioX = document.createElement("espacioX"); //Crea el espacio donde va a ir la X
  var txt = document.createTextNode("\u00D7"); //Crea el simbolo de X
  espacioX.className = "eliminar"; //Le da el valor de cerrar
  espacioX.appendChild(txt); // Inserta el simbolo X en el espacio creado
  lista[i].appendChild(espacioX); // inserta ya todo el elemento
}

// Elimina la tarea cuando se aprieta la X
var eliminar = document.getElementsByClassName("eliminar"); // llama a todas los espacios creados 
for (i = 0; i < eliminar.length; i++) { // mientras hayan cosas para eliminar hace la funcion
  eliminar[i].onclick = function() { // Al apretar el espacio con la X en dicha tarea hace la funcion
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Agrega una tilde cuando apretas en una tarea
var list = document.querySelector('ul'); // Devuelve el primer elemento de los uls
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Crea una nueva lista cuando apretas el boton Agregar
function NuevaTarea() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("ToDo").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Escriba su tarea pendiente");
  } else {
    document.getElementById("Tareas").appendChild(li);
  }
  document.getElementById("ToDo").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "eliminar";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < eliminar.length; i++) {
    eliminar[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// Elimina valores de la lista de tareas
function eliminarTodo() {
  const eliminarTarea= document.getElementById("Tareas");
  eliminarTarea.innerHTML = ""; // Reemplaza la sintaxis HTML del elemento por la nueva
}

