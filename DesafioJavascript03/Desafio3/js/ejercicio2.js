

/*let form = document.querySelector('#form-presupuesto');

form.addEventListener('submit', e=>{

  let ingresos = document.getElementById('input-ingresos');

  document.write("Presupuesto generado: " + "<br/>" + "50% Gastos necesarios: " + (ingresos.value / 2) +
  "<br/>" + "30% Gastos opcionales: " + (ingresos.value * 30 / 100 ) + "<br/>" +
   "20% Ahorro e inversion: " + (ingresos.value * 20 / 100));


})*/


/* Consigna extra nivel medio

let form = document.querySelector('#form-presupuesto-personalizado');

form.addEventListener('submit', e=>{

  let ingresos = document.getElementById('input-ingresos');
  let gastosNecesarios = document.getElementById('input-gastos-necesarios');
  let gastosOpcionales = document.getElementById('input-gastos-opcionales');
  let ahorroInversion = document.getElementById('input-ahorro-inversion');


  let valor1 = parseInt(gastosNecesarios.value);
  let valor2 = parseInt(gastosOpcionales.value);
  let valor3 = parseInt(ahorroInversion.value);

  if((valor1 + valor2 + valor3) > 100){
    document.write("Los porcentajes ingresados exceden el 100%. Ingrese los datos nuevamente.");
  }else if((valor1 + valor2 + valor3) < 100){
    document.write("Los porcentajes ingresados no alcanzan el 100%. Ingrese los datos nuevamente.");
  }else{
    document.write("Presupuesto generado: " + "<br/>" + gastosNecesarios.value + "%" + " Gastos necesarios: " + (ingresos.value * gastosNecesarios.value / 100) +
    "<br/>" + gastosOpcionales.value + "%" + " Gastos opcionales: " + (ingresos.value * gastosOpcionales.value / 100 ) + "<br/>" +
    ahorroInversion.value + "%" + " Ahorro e inversion: " + (ingresos.value * ahorroInversion.value / 100));
  }

})*/




/* Consigna extra nivel avanzado
  
  function funcionPrompt(){

  let  categorias = new Array();

  let ingresos = parseInt(prompt('Ingrese el monto de de ingresos'));
  
  let limite = parseInt(prompt('¿Cuantas categorias desea ingresar?')) ;

  for(let i=0;i<limite;i++){
    
    let nombre = prompt('Ingrese el nombre de la categoria');

    let porcentaje = parseInt(prompt('Ingrese el porcentaje asignado'));

    let categoria = {
      
      nombreCategoria: nombre,

      porcentajeCategoria: porcentaje

    }

    categorias.push(categoria);

  }

  let acumulador = 0;

   categorias.map((categoria)=>{
      acumulador = acumulador + categoria.porcentajeObtenido
   })

   if(acumulador > 100){
     alert('Los porcentajes ingresados exceden el 100%. Debes ingresar los datos nuevamente');
   }else if(acumulador < 100){
    alert('Los porcentajes ingresados no alcanzan el 100%. Debes ingresar los datos nuevamente');
   }else{

     categorias.map((categoria)=>{

     document.write("<br/>" + "Categoria: " + categoria.nombreCategoria + "<br/>" +
     "Porcentaje: " + categoria.porcentajeCategoria + "%" + "<br/>" + "Monto: " + (ingresos * categoria.porcentajeCategoria / 100) + "<br/>" +
     "<hr/>");

     })

   }

}

funcionPrompt();*/





























