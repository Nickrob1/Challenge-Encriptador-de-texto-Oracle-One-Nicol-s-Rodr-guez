
    function encriptar() {
        document.getElementById("imagen__output").style.display = "none";
        document.getElementById("subtitulo__output").style.display = "none";
       
        let texto = document.getElementById("texto__input").value;
        let textoEncriptado = texto .replace(/e/g,"enter").replace(/i/g,"imes").replace(/a/g,"ai").replace(/o/g,"ober").replace(/u/g,"ufat")
        document.getElementById("texto__output").innerHTML = textoEncriptado;
    }

    function desencriptar() {
        document.getElementById("imagen__output").style.display = "none";
        document.getElementById("subtitulo__output").style.display = "none";
       
        let texto = document.getElementById("texto__input").value;
        let textoEncriptado = texto .replace(/enter/g,"e").replace(/imes/g,"i").replace(/ai/g,"a").replace(/ober/g,"o").replace(/ufat/g,"u")
        document.getElementById("texto__output").innerHTML = textoEncriptado;
    }

    function reiniciar () {
        document.getElementById("imagen__output").style.display = "inline";
        document.getElementById("subtitulo__output").style.display = "inline";
        document.getElementById("texto__output").innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
        document.getElementById("texto__input").value = "";

    }