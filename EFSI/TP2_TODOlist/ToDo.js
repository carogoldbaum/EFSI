//Crea el boton de las X en cada elemento
var lista = document.getElementsByTagName("LI"); //hace una lista con todos las tareas que recibe
for (i = 0; i < lista.length; i++) {
  var espacioX = document.createElement("espacioX"); //Crea el espacio donde va a ir la X
  var txt = document.createTextNode("\u00D7"); //Crea el simbolo de X
  espacioX.className = "cerrar"; //Le da el valor de cerrar
  espacioX.appendChild(txt);
  lista[i].appendChild(espacioX);
}

// Elimina la tarea cuando se aprieta la X
var close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

// Agrega una tilde cuando apretas en una tarea
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

// Crea una nueva lista cuando apretas el boton Agregar
function newElement() {
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
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}
// Elimina valores de la lista de tareas
function eliminarTodo() {
  const eliminarTarea= document.getElementById("Tareas");
  eliminarTarea.innerHTML = "";

}

