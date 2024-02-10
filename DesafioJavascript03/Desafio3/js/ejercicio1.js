


let form = document.querySelector("#form-punto-de-equilibrio");

form.addEventListener('submit', e =>{
  
  let costosFijos = document.getElementById('input-costos-fijos');
  let precioVenta = document.getElementById('input-precio-venta');
  let costosVariables = document.getElementById('input-costos-variables');



  let puntoDeEquilibrio = costosFijos.value / (precioVenta.value - costosVariables.value);

  document.write("El punto de equilibrio de su producto es de: " + puntoDeEquilibrio);


})





