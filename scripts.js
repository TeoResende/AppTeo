setTimeout(inicio,1000)

function inicio(){ 
    var $btnEntrar = document.getElementById("btnEntrar")

    $btnEntrar.addEventListener("click",mostrarMSG)

    function mostrarMSG(){
        window.alert("Bem vindo ao VS-CODE!")
    }
}