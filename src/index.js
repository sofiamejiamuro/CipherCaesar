  
const mostrarCodigoCreado = () => {         
    
    
    let aparecerCodigoCreado = document.getElementById("codigoCreado");    
    aparecerCodigoCreado.style.display = "block";
    let desaparecerFormulario = document.getElementById("crearCuenta");
    desaparecerFormulario.style.display = "none"; 
    let string = document.getElementById("keyword1").value;
    let offset = document.getElementById("offset1").value;
    

    
    window.cipher.encode(offset, string);   


    

}




const enlaceCuentaCreada = document.getElementById("enlaceBienvenida");
    enlaceCuentaCreada.addEventListener("click",mostrarCodigoCreado);


const mostrarPuerta = () => {
    let aparecerPuerta =  document.getElementById("puerta");
    aparecerPuerta.style.display="block";
}
const enlacePuerta = document.getElementById("enlacePuerta");
    enlacePuerta.addEventListener("click",mostrarPuerta);

   
const puedesEntrar = () => {

    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;
    let codigo = document.getElementById("codigo").value;
    let palabraEncriptada = document.getElementById("encryptedkeyword").textContent;
    let desaparecerPuerta = document.getElementById("puerta");
    let offset2 = document.getElementById("offset1").value;
    
       

    if (codigo === "") {
        alert("Debes llenar los campos");

    }    else if (name1 === name2 && codigo === palabraEncriptada) {
 
        
        let codigoCorrecto = document.getElementById("correcto");
        codigoCorrecto.style.display="block";        
        desaparecerPuerta.style.display="none";     
  

        }  else {

        let codigoIncorrecto =document.getElementById("incorrecto");
        codigoIncorrecto.style.display="block";            
        desaparecerPuerta.style.display="none"; 
        }

        
     
    window.cipher.decode(offset2, palabraEncriptada);


    
}
      


   
const enlaceCorrecto  = document.getElementById("enlaceCorrecto");
enlaceCorrecto.addEventListener("click",puedesEntrar);


let inicio = document.getElementById("inicio");
let btn = document.getElementById("icono2");
btn.addEventListener("click", () => {
    window.scroll({
        top: inicio.scrollHeight,
        left: 0,
        behavior: "smooth"
    })
})    

const volverAIntentar = () => {
    let aparecerDoor1 =  document.getElementById("puerta");
    aparecerDoor1.style.display="block";
    let desaparecerIncorrecto =  document.getElementById("incorrecto");
    desaparecerIncorrecto.style.display="none";
}
const enlaceVolverAIntentar = document.getElementById("volverAIntentar");
    enlaceVolverAIntentar.addEventListener("click",volverAIntentar);