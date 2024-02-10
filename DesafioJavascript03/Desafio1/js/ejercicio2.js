
let planes = [
    {nombre:'Plan001',
     capital:'150000',
     plazo:'30',
     tasa:'15%'
    },
    {nombre:'Plan002',
    capital:'300000',
    plazo:'180',
    tasa:'10%'
   },
   {nombre:'Plan003',
   capital:'485000',
   plazo:'60',
   tasa:'23%'
  }
]

let planesActualizados = new Array()

let index = 0;


function contador(){
   index = index +1
}


function configurarTasa(interesRecibido){
    let interesObtenido = interesRecibido;
    let nombreObtenido =  planes[index].nombre;
    let capitalObtenido = planes[index].capital;
    let plazoObtenido =  planes[index].plazo;
    let tasaObtenida = planes[index].tasa;
    let plan = {
        nombre: nombreObtenido,
        capital: capitalObtenido,
        plazo: plazoObtenido,
        tasa: tasaObtenida,
        interes: interesObtenido
    }
    planesActualizados.push(plan);
}



function calcularInteres(){
    planes.map((plan)=>{
  configurarTasa ((plan.capital * plan.plazo * ([parseInt(plan.tasa)] / 100) / 100), index) & contador()
})

}

function mostrarListaDePlanesOriginal(){
    planes.map((plan)=>{
     document.write("<p style='color: black'>" + 'Plan: ' + plan.nombre + '<br/>'
      + 'Capital: ' + plan.capital + '<br/>' + 'Plazo: ' + plan.plazo + ' dias' + '<br/>' 
      + 'Tasa: ' + plan.tasa + "<p/>")

    })
}

function mostrarListaDePlanesActualizada(){
    planesActualizados.map((plan)=>{
document.write("<p style= 'color: black'>" + 'Nombre: ' + plan.nombre + '<br/>' + 'Capital: '
 + plan.capital + '<br/>' + 'Plazo: ' + plan.plazo + ' dias' + '<br/>' +
 'Tasa: ' + plan.tasa + '<br/>' + 'Interes: ' + plan.interes + "<p/>" + '<hr/>')
    })
}


function visualizarListaActualizada(){
    calcularInteres();
    document.write('<br/>' + "<span style='color: green'>" + "Lista de planes actualizada" + "<span/>");
    mostrarListaDePlanesActualizada()
}

function visualizarListaOriginal(){
    calcularInteres();
    document.write('<br/>' + "<span style='color: green'>" + "Lista de planes original" + "<span/>");
    mostrarListaDePlanesOriginal()
}


