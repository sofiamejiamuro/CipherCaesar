


window.cipher = {

     encode : (offset, string) => {

        string = string.toUpperCase();
        offset = parseInt(offset);
        let desplazamiento = "";
        let encripted = "";

        for (let i = 0; i < string.length; i ++) {
            
            let ascii = string.charCodeAt(i); //nos da su posicion ascii
            desplazamiento =  (ascii-65+offset)%26+65; // nos recorre el offset 
            encripted = encripted+String.fromCharCode(desplazamiento);
            document.getElementById("encriptedkeyword").innerHTML= encripted;

            
            
        }

        console.log(encripted);
        enviarvariable(encripted);
        
        
       

    }
  


}

const enviarvariable = (encripted)=>{
    window.location.href= 'door.html'+'#'+ encripted, '_blank';
    
}



