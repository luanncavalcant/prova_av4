
function Enviar(){
    console.log("Enviado")
    var input = document.querySelector("#descricao").value;
    console.log(input);
    
    var foto = document.querySelector(".foto").value;
    console.log(foto)

    let section = document.querySelector("#slide").innerHTML = `<h1>${input}</h1>`;
 
}

