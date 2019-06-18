    
  
    
    
const mostrarCodigoCreado = () => {         
    
    let string = document.getElementById("keyword1").value;
    let offset = document.getElementById("offset1").value;
    
    let aparecerCodigoCreado = document.getElementById("codigoCreado");    
    aparecerCodigoCreado.style.display = "block";
    let desaparecerFormulario = document.getElementById("crearCuenta");
    desaparecerFormulario.style.display = "none";
    
  
    window.cipher.encode(offset, string) //llamas a la funcion en cipher        
    
    }


const enlaceCuentaCreada = document.getElementById("enlaceBienvenida");
    enlaceCuentaCreada.addEventListener("click",mostrarCodigoCreado);




const mostrarPuerta = () => {
    let aparecerPuerta =  document.getElementById("puerta");
    aparecerPuerta.style.display="block";
}

const enlacePuerta = document.getElementById("enlacePuerta");
    enlacePuerta.addEventListener("click",mostrarPuerta);

    
    
    
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let codigo = document.getElementById("codigo").value;
    let palabraEncriptada = document.getElementById("encryptedkeyword").textContent;



    
const puedesEntrar = () => {

   
    if (name1 == name2 && codigo == palabraEncriptada ) {


        let codigoCorrecto = document.getElementById("correcto");
        codigoCorrecto.style.display="block";
        //por qué no funciona?????!!!!
        let desaparecerPuerta = document.getElementById("puerta");
        desaparecerPuerta.style.display="none"; 

        /*window.cipher.decode(offset, palabraEncriptada);*/


    } else {
        
            let codigoIncorrecto =document.getElementById("incorrecto");
            codigoIncorrecto.style.display="block";
            
        }

   
        
    }
   


const enlaceCorrecto  = document.getElementById("enlaceCorrecto");
enlaceCorrecto.addEventListener("click",puedesEntrar);



    
