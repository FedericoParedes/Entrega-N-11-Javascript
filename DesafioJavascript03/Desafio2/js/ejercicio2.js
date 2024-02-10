
let inversionesArgFin = new Array();

function registrarInversiones(){
    let inversiones = new Array();
    let contador = 0;
    let limite = parseInt(prompt('¿Cuantos registros desea ingresar?'));
     if(limite < 1){
      do{
      alert('Debe ingresar un registro como minimo');
      limite = parseInt(prompt('¿Cuantos registros desea ingresar?'));
      }while(limite < 1);
     }

    do{
     
      let capitalObtenido = parseInt(prompt('Ingrese el capital de inversion: '));

      if(capitalObtenido<1){
        do{
         alert('Debe ingresar un monto mayor a 0 \n');
         capitalObtenido = parseInt(prompt('Ingrese el capital de inversion: '));
        }while(capitalObtenido<1 || capitalObtenido===null);
     }
      let plazoObtenido;
      let tasaObtenida;
      
      let opcionPlazo = parseInt(prompt('Ingrese el plazo de inversion.' + '\n' + '1- 30 dias' + '\n' + '2- 180 dias' + '\n' + '3- 60 dias'));
      
      if(opcionPlazo<1 || opcionPlazo >3){
         do{
          alert('Ingrese una opcion valida \n');
         opcionPlazo = parseInt(prompt('Ingrese el plazo de inversion.' + '\n' + '1- 30 dias' + '\n' + '2- 60 dias' + '\n' + '3- 180 dias'));
         }while(opcionPlazo<1 || opcionPlazo>3);
      }

      if(opcionPlazo === 1){
         plazoObtenido = 30;
         tasaObtenida = 15;
      }else if(opcionPlazo === 2){
        plazoObtenido = 180;
        tasaObtenida = 10;
      }else{
         plazoObtenido = 60;
         tasaObtenida = 23;
      }
      
      let interesObtenido = (capitalObtenido * plazoObtenido * (tasaObtenida / 100) /100);

      let registro = {
          capital: capitalObtenido,
          plazo: plazoObtenido,
          tasa: tasaObtenida,
          interes: interesObtenido 
      }

      alert('Usted ha ingresado un capital de ' + registro.capital +
      ' por un plazo de ' + registro.plazo + ' dias' + ' a una tasa de ' +
       registro.tasa + '%' + ' con un interes de ' + registro.interes);

      inversiones.push(registro);

      contador++;

    }while(contador<limite);


    return inversiones;


}


function seleccionarRegistro(inversiones){



    let listaRegistros = inversiones;

    let index;


    if (listaRegistros.length >1){

     let opcionPrincipal = parseInt(prompt('La lista tiene mas de un registro ' + '\n' + '1- Visualizar un registro en particular' + '\n' + '2- Visualizar todos' + '\n' + '3- Salir'));

     if(opcionPrincipal < 1 || opcionPrincipal > 3){
      do{
        alert('La opcion ingresada no es valida');
        opcionPrincipal = parseInt(prompt('La lista tiene mas de un registro ' + '\n' + '1- Visualizar un registro en particular' + '\n' + '2- Visualizar todos' + '\n' + '3- Salir'));

      }while(opcionPrincipal <1 || opcionPrincipal > 3);
     }

     if(opcionPrincipal === 1){
      index = parseInt(prompt('Ingrese el numero de registro que desea visualizar' + '\n' +
      'Los registros disponibles van desde 1 a ' + (listaRegistros.length)));
     
       if(index <1 || index > listaRegistros.length){
         do{
           alert('Debe ingresar un indice valido');
           index = parseInt(prompt('Ingrese el numero de registro que desea visualizar' + '\n' +
           'Los registros disponibles van desde 1 a ' + (listaRegistros.length - 1)));
         }while(index <1 || index > (listaRegistros.length-1));
      }

      document.write('Registro N°' + [index] + ': ' +
      '<br/>' + 'Capital: ' + listaRegistros[index-1].capital + '<br/>' + 'Plazo: ' +
       listaRegistros[index-1].plazo + ' dias' + '<br/>' + 'Tasa: ' + listaRegistros[index-1].tasa + '%' + '<br/>' +
       'Interes: ' + listaRegistros[index-1].interes + '<hr/>');

     } else if(opcionPrincipal===2) {
       
       for(let i=0;i<listaRegistros.length;i++){
        document.write('Registro N°' + [i+1] + ': ' +
        '<br/>' + 'Capital: ' + listaRegistros[i].capital + '<br/>' + 'Plazo: ' +
         listaRegistros[i].plazo + ' dias' + '<br/>' + 'Tasa: ' + listaRegistros[i].tasa + '%' + '<br/>' +
         'Interes: ' + listaRegistros[i].interes + '<hr/>');
       }

     } else{
       alert("Ha salido de la aplicacion");
     
      }

     
  
     }  else{

     let opcion = parseInt(prompt('Hay un solo registro. ¿Desea visualizarlo?' + '\n' + '1- Si' + '\n' + '2- No'));
     
        if(opcion<1 || opcion>2){
           do{
             alert('Ingrese una opcion valida \n');
        opcion = parseInt('Hay un solo registro. ¿Desea visualizarlo?' + '\n' + '1- Si' + '\n' + '2- No');
           }while(opcion<1 || opcion>2);
        }

        switch(opcion){
          case 1:{
            index = 0;
            document.write('Registro N°' + [index + 1] + ': ' +
            '<br/>' + 'Capital: ' + listaRegistros[index].capital + '<br/>' + 'Plazo: ' + 
             listaRegistros[index].plazo + ' dias' + '<br/>' + 'Tasa: ' + listaRegistros[index].tasa + '%' + '<br/>' +
             'Interes: ' + listaRegistros[index].interes + '<hr/>');
        
          }

          case 2:{
             break;
          }
        }
    }
   

  }


seleccionarRegistro(registrarInversiones());


