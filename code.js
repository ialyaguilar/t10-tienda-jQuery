var total = 0.00;

function agregar(){
  var producto = document.getElementById("producto").value; //Variable distinta
  var precio = document.getElementById("precio").value; //Se agarra el valor
  var total = document.getElementById('total');
  var contenedor = document.getElementById("contenedor"); //Diferencia, se agarra el objeto

  //Creacion de elementos
  var fila = document.createElement("tr");
  var celdaProducto = document.createElement("td");
  var celdaPrecio = document.createElement("td");
  var celdaEliminar = document.createElement("td");
  var botonEliminar = document.createElement("button");

  //Asignar valores
  celdaProducto.innerHTML = producto; //Escribe en el interior del elemento
  celdaPrecio.innerHTML = precio;
  botonEliminar.innerHTML = "X"; //Boton con texto Eliminar

  //Accion del botonEliminar
  botonEliminar.onclick = function (){ //Funcion anónima this hace referencia al propietario del elemento
    total -= parseFloat(this.parentNode.parentNode.childNodes[1].innerHTML).toFixed(2);
    //Elimina del contenedor la fila
    var filaEliminar = this.parentNode.parentNode; //boton > td > tr
    contenedor.removeChild(filaEliminar);
    if (contenedor.childElementCount < 1)
        total = 0.00;
    total.innerHTML = '$ '+total.toFixed(2);
  };

  //Agregar elementos a la fila (los tres td al tr)
  fila.appendChild(celdaProducto);
  fila.appendChild(celdaPrecio);
  fila.appendChild(celdaEliminar);
  celdaEliminar.appendChild(botonEliminar); //A la celdaEliminar se agrego el botonEliminar
  contenedor.appendChild(fila); //Agregamos fila completa a tbody

  //Total
  total += (precio.value.toString());
  total.innerHTML = '$ '+total.toFixed(2);
}
