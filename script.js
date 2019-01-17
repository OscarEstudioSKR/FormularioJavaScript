

function validar() {
    var nombre, correo, sexo, gustos;
        nombre = document.getElementById("nombre").value;
        correo = document.getElementById("correo").value;
        sexo = document.getElementsByName("sexo").value;


    expresion = /\w+@\w+\.+[a-z]/;
    //\w (texto ó num)+@+\w (texto ó num)+\. (punto)+[a-z] (texto)
    //texto @ texto . texto //Correo


    if(nombre.length>30 || nombre.length<3){
        alert("El \"Nombre\" debe tener entre 3 y 30 caractéres");
        return false;
    }
    else if(correo === ""){
        alert("El campo \"Correo\" no puede estar vacío");
        return false;
    }
    else if(!expresion.test(correo)){
        alert("El campo \"Correo\" no es válido");
        return false;
    }
    else{
        confirmar(
            nombre, 
            correo,
            sexo);
    }     
}

function confirmar(nombre, correo, sexo){
    document.getElementById("ocultar1").style.display = "none";
    document.getElementById("ocultar2").style.display = "none";
    document.getElementById("mostrar1").style.display = "block";
    var a = document.getElementById("nombre-en-pantalla");
    a.innerText = sexo;
}
        
