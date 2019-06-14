//de APP1 a APP2
//SING UP quiero que baje no necesito js
//de APP1 a APP5
// CODIGO DE ACCESO 

const mostrarCodigoDeAcceso = () => {
    let aparecerCodigoDeAcceso = document.getElementById("codigoDeAcceso");

    aparecerCodigoDeAcceso.style.display = "block";

    return aparecerCodigoDeAcceso;
}

const enlaceCodigoDeAcceso = document.getElementById("enlaceCodigoDeAcceso");
    enlaceCodigoDeAcceso.addEventListener("click",mostrarCodigoDeAcceso);



// de APP2 a APP3

const mostrarCuentaCreadaYRecuperarDatos = () => {

    let aparecerCuentaCreada = document.getElementById("cuentaCreada");
    
    aparecerCuentaCreada.style.display = "block";
    
    let name = document.getElementById("name").value;
    let keyword = document.getElementById("keyword").value;
    let offset = document.getElementById("offset").value;
    
    let asciiKW = keyword.charCodeAt(0); // código ascii
    
    let formula = (asciiKW -65 + offset) %26 + 65 ;

    let palabraCodificada = String.fromCharCode(formula);
    

    

  
   console.log(palabraCodificada);

    }

    
    
    //qué hago aqui?,  Return abre la puerta del scoope??

    const enlaceBienvenida = document.getElementById("enlaceBienvenida");
    enlaceBienvenida.addEventListener("click",mostrarCuentaCreadaYRecuperarDatos);


//programación orientada a eventos
// en 7 recuperamos info de HTML 
// en 8 dotas a l ainfo de html de propiedades js al convertirlo en objeto
// .addEventListener es un metodo 
// y despues ya haces parametrso + fiuncion sin necesida de estableces una 
// const como función 
// const enlaceBienvenida = document.getElementById("enlaceBienvenida");
//     enlaceBienvenida.addEventListener("click", mostrarCuentaCreada); 
    /*en lugar de mostrarCuentaCreada
    /*
    const enlaceBienvenida = document.getElementById("enlaceBienvenida");
    enlaceBienvenida.addEventListener("click", () => return {

        let aparecerCuentaCreada = document.getElementById("cuentaCreada");

        aparecerCuentaCreada.style.display = "block";
        
        return aparecerCuentaCreada;
        //qué hago aqui?
    
    }*/

     

    /*recuperar valores*/
   


   /*hacer un array??*/
