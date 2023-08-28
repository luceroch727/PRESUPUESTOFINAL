var ing = 0;

function agregarElemento(descripcion, valor, tipo_resultado) {
  ing = ing + 1;

  var listaId = "lista-ingresos";
  var signo = "";

  if (tipo_resultado == "egreso") {
    listaId = "lista-egresos";
    signo = "-";
  }

  var mainElementId = "elemento" + ing;
  var div1 = document.createElement("div");
  div1.className = "elemento limpiarEstilos";
  div1.id = mainElementId;
  document.getElementById(listaId).appendChild(div1);

  //crear descripcion para que salga en HTMl
  var div2 = document.createElement("div");
  div2.className = "elemento_descripcion";
  div2.innerHTML = descripcion;
  div2.id = "descripcion" + ing;
  document.getElementById(mainElementId).appendChild(div2);

  var rightElementId = "derecha" + ing;
  var div3 = document.createElement("div");
  div3.className = "derecha limpiarEstilos";
  div3.id = rightElementId;
  document.getElementById(mainElementId).appendChild(div3);

  //creacion de elemento valor
  var div4 = document.createElement("div");
  var valorElementId = "elemento_valor" + ing;
  div4.className = "elemento_valor";
  div4.innerHTML = signo + valor;
  div4.id = valorElementId;
  document.getElementById(rightElementId).appendChild(div4);

  //creacion de elemento %
  var div5 = document.createElement("div");
  var porcentajeElementId = "elemento_porcentaje" + ing;
  div5.className = "elemento_porcentaje";
  div5.innerHTML = valor;
  div5.id = porcentajeElementId;
  document.getElementById(rightElementId).appendChild(div5);

  //elemento eliminar
  var eliminarElementId = "eliminar" + ing;
  var div6 = document.createElement("div");
  div6.className = "elemento_eliminar";
  div6.id = eliminarElementId;
  document.getElementById(rightElementId).appendChild(div6);

  //boton eliminar
  var botonEliminarId = "btneliminar" + ing;
  var btnEliminarIngreso = document.createElement("button");
  btnEliminarIngreso.innerHTML =
    '  <ion-icon name="close-circle-outline"></ion-icon>';
  btnEliminarIngreso.id = botonEliminarId;
  btnEliminarIngreso.classList.add("elemento_eliminar--btn");
  document.getElementById(eliminarElementId).appendChild(btnEliminarIngreso);
}

function limpiarValores() {
  document.getElementById("descripcion").value = "";
  document.getElementById("valor").value = 0;
  document.getElementById("lista-ingresos").innerHTML = '';
  document.getElementById("lista-egresos").innerHTML = '';
}