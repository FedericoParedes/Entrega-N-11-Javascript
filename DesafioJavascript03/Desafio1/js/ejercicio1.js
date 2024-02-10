
const ingresosYPerdidasAnuales = [

  {
    mes:'Enero',
    ingresos: 1500,
    perdidas: 1500,

  },
  {
    mes:'Febrero',
    ingresos:2500,
    perdidas: 2500,

  },

  {
    mes:'Marzo',
    ingresos: 84683,
    perdidas: 1155,

  },

  {
    mes:'Abril',
    ingresos: 135353,
    perdidas: 1533,

  },

  {
    mes:'Mayo',
    ingresos: 1535,
    perdidas: 5434,

  },

  {
    mes:'Junio',
    ingresos: 4343354,
     perdidas:5434543,

  },

  {
    mes:'Julio',
    ingresos:435453,
    perdidas:4543,

  },

  {
    mes:'Agosto',
    ingresos:78351,
    perdidas:7816,

  },

  {
    mes:'Septiembre',
    ingresos:1878,
    perdidas:95634,

  },

  {
    mes:'Octubre',
    ingresos: 48483,
    perdidas: 9433,

  },

  {
    mes:'Noviembre',
    ingresos: 35483,
    perdidas: 53133,

  },

  {
    mes:'Diciembre',
    ingresos: 3843,
    perdidas: 348133,

  }


]



function mostrarBalanceAnual(){
  
   let ingresos = 0;

   let perdidas = 0;


  function contador (i, p){
     ingresos = ingresos + i;

     perdidas = perdidas + p;
  }

  ingresosYPerdidasAnuales.map((data)=>{
    contador(data.ingresos, data.perdidas)
  })

  let balance = ingresos - perdidas;


  if(ingresos > perdidas){
   
    document.write('Este año ha registrado ingresos por ' + ingresos + ' y perdidas por ' + perdidas + ' con un balance positivo de ' + balance);

  }else if(ingresos < perdidas){
    document.write('Este año ha registrado ingresos por ' + ingresos + ' y perdidas por ' + perdidas + ' con un balance negativo de ' + balance);

  } else{
    document.write('Este año ha registrado ingresos por ' + ingresos + ' y perdidas por ' + perdidas + ' con un balance neutro');

  }


}













function mostrarBalancesMensuales(){
  
    for(let i =0; i < ingresosYPerdidasAnuales.length; i++){
        let ingresosMensuales = ingresosYPerdidasAnuales[i].ingresos;
        let perdidasMensuales = ingresosYPerdidasAnuales[i].perdidas;
        let mes = ingresosYPerdidasAnuales[i].mes;
        let balance = ingresosMensuales - perdidasMensuales;
        if(ingresosMensuales > perdidasMensuales){
            document.write(mes + ' ha tenido ingresos por ' + ingresosMensuales + ' y perdidas por ' + perdidasMensuales + ' con un balance positivo de ' + balance + '<hr/>' + '<br/>');
        }else if(ingresosMensuales < perdidasMensuales){
          document.write(mes + ' ha tenido ingresos por ' + ingresosMensuales + ' y perdidas por ' + perdidasMensuales + ' con un balance negativo de ' + balance + '<hr/>' + '<br/>');

        }else{
            document.write(mes + ' ha tenido ingresos por ' + ingresosMensuales + ' y perdidas por ' + perdidasMensuales + ' con un balance neutro' + '<hr/>' + '<br/>')
  
        }
    }
}


function mostrarBalanceMesEspecifico(indice){
    let ingresos = ingresosYPerdidasAnuales[indice].ingresos;
    let perdidas = ingresosYPerdidasAnuales[indice].perdidas;
    let balance = ingresos - perdidas;
    let mes = ingresosYPerdidasAnuales[indice].mes;
    if(ingresos > perdidas){
   document.write('<hr/>' + mes + ' ha tenido ingresos por ' + ingresos + ' y perdidas por ' + perdidas + ' con un balance positivo de ' + balance + '<hr/>');

    }else if(ingresos < perdidas){
    
      document.write('<hr/>' + mes + ' ha tenido ingresos por ' + ingresos + ' y perdidas por ' + perdidas + ' con un balance negativo de ' + balance + '<hr/>');
 
    }else{
      document.write('<hr/>' + mes + ' ha tenido ingresos por ' + ingresos + ' y perdidas por ' + perdidas + ' con un balance neutro ' + '<hr/>');

    }

}




//mostrarBalancesMensuales();
//mostrarBalanceMesEspecifico(2);
mostrarBalanceAnual();