

const mostrarCodigoCreado = () => {         
    let aparecerCodigoCreado = document.getElementById("codigoCreado");    
    aparecerCodigoCreado.style.display = "block";
    let desaparecerFormulario = document.getElementById("crearCuenta");
    desaparecerFormulario.style.display = "none";
    
    let string = document.getElementById("keyword").value;
    let offset = document.getElementById("offset").value;
  
    window.cipher.encode(offset, string) //llamas a la funcion en cipher

    
    }

const enlaceCuentaCreada = document.getElementById("enlaceBienvenida");
    enlaceCuentaCreada.addEventListener("click",mostrarCodigoCreado);

    