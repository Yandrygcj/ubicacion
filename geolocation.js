 // Función para Obtener la Geolocalización con los atributos.
 /*function iniciar() { 
    var elemento = document.getElementById("obtener"); 
    elemento.addEventListener("click", obtenerubicacion); 
   } 
   function obtenerubicacion() { 
    navigator.geolocation.getCurrentPosition(mostrar); 
   } 
   function mostrar(posicion) { 
    var ubicacion = document.getElementById("ubicacion"); 
    var datos = ""; 
    datos += "Latitud: " + posicion.coords.latitude + "<br>"; 
    datos += "Longitud: " + posicion.coords.longitude + "<br>"; 
    datos += "Exactitud: " + posicion.coords.accuracy + "mts.<br>"; 
    ubicacion.innerHTML = datos; 
   } 
   window.addEventListener("load", iniciar);*/
   
   function iniciar() { 
    var elemento = document.getElementById("obtener"); 
    elemento.addEventListener("click", obtenerubicacion); 
   } 
   function obtenerubicacion() { 
    navigator.geolocation.getCurrentPosition(mostrar, mostrarerror); 
   } 
   function mostrar(posicion) { 
    var ubicacion = document.getElementById("ubicacion"); 
    var datos = ""; 
    datos += "Latitud: " + posicion.coords.latitude + "<br>"; 
    datos += "Longitud: " + posicion.coords.longitude + "<br>"; 
    datos += "Exactitud: " + posicion.coords.accuracy + "mts.<br>"; 
    ubicacion.innerHTML = datos; 
   } 
   function mostrarerror(error) { 
    alert("Error: " + error.code + " " + error.message); 
   } 
   window.addEventListener("load", iniciar);