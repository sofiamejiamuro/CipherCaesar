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





    let string = document.getElementById("keyword").value;
    let offset = document.getElementById("offset").value;
    /*window.cipher.encode(offset,string);//invoca al metodo que se ecnuntra en window.cipher , hay que escribir la "ruta" hacua */
    
    /*bienvenido tu codigo cifrado es, cómo lo conecto sin esto?*/ 
        let tamano = string.length;      /*tamaño de la palabra*/
        let numOf = parseInt(offset);   /*numero*/
        let ascii;                        /*pasar a ascii*/  
        let formula;                      
        let cifrado = "";


        for (let i=0; i<tamano; i++){

          ascii = string.charCodeAt(i);
          formula = (ascii-65+numOf)%26+65;
          cifrado = cifrado+String.fromCharCode(formula); 

          console.log(cifrado);

        }

       
}

const enlaceCuentaCreada = document.getElementById("enlaceBienvenida");
    enlaceCuentaCreada.addEventListener("click",mostrarCuentaCreada);