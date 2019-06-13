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

const mostrarCuentaCreada = () => {

    let aparecerCuentaCreada = document.getElementById("cuentaCreada");
    
    aparecerCuentaCreada.style.display = "block";
    
    return aparecerCuentaCreada;
    //qué hago aqui?, abre la puerta del scoope

}

    const enlaceBienvenida = document.getElementById("enlaceBienvenida");
    enlaceBienvenida.addEventListener("click",mostrarCuentaCreada);


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

     

        

        let name = document.getElementById("name").value;
        let keyword = document.getElementById("keyword").value;
        let offset = document.getElementById("offset").value;
    
        console.log("estoy guardando las variables");
        
        


   
    


