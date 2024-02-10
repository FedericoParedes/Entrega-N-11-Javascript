
function calcularFlujo(){
   
    let meses = new Array();

     contador = 0;
    
    do{
        let registroIngresos = parseInt(prompt('Ingrese los ingresos del mes ' + (contador + 1) + ': '))
        let registroPerdidas = parseInt(prompt('Ingrese las perdidas del mes ' + (contador + 1) + ': '))
        let mes = {
            ingresos: registroIngresos,
            perdidas: registroPerdidas
        }

        meses.push(mes);


      contador++;

    }while(contador<12)

    

     let ingresos = 0;

    let perdidas = 0;

    for(let i=0;i<meses.length;i++){
       ingresos = ingresos + meses[i].ingresos;
       perdidas = perdidas + meses[i].perdidas;
    }
 
    
    if(ingresos > perdidas){
       alert(1);
    }else if(ingresos < perdidas){
        alert(-1);
    }else{
        alert(0);
    }

}

calcularFlujo();



