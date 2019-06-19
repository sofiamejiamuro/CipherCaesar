
window.cipher = {

       
    encode : (offset, string) => {

        string = string.toUpperCase();
        offset = parseInt(offset);
    
        let desplazamiento = "";
        let encrypted = "";

        for (let i = 0; i < string.length; i ++) {
            
            let ascii = string.charCodeAt(i); //nos da su posicion ascii
            desplazamiento =  (ascii-65+offset)%26+65; // nos recorre el offset 
            encrypted = encrypted+String.fromCharCode(desplazamiento); //la vuelve no ascii otra vez
            document.getElementById("encryptedkeyword").innerHTML = encrypted;

            
            
        }

        // console.log(encripted);
        return encrypted;

    },

     decode :  (offset2, palabraEncriptada) => {
          
        offset2 = parseInt(offset2);
        let quitarOffset = "";
        let decrypted = "";
        
        for (let i = 0; i < palabraEncriptada.length; i ++) {

            let volverAscii = palabraEncriptada.charCodeAt(i);
            quitarOffset = (volverAscii + 65 - offset2) % 26 + 65;
            //desplazamiento =  (ascii-65+offset)%26+65;
            decrypted = decrypted+String.fromCharCode(quitarOffset);
            document.getElementById("decryptedword").innerHTML=decrypted;     

        }
        
        
        return decrypted; 

    } 

}


