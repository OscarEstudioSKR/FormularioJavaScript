

function validar() {
    var nombre, correo, sexo;
    
    nombre = document.getElementById("nombre").value;
    correo = document.getElementById("correo").value;
    var arrSexo = document.getElementsByName("sexo");
    var arrGustos = document.getElementsByName("conocimientos");

    for(var i = 0; i < arrSexo.length;i++){
        if(arrSexo[i].checked){sexo = arrSexo[i].value;          
        }
    }



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
            sexo,
            arrGustos);
    }     
}

function confirmar(nombre, correo, sexo, arrGustos){

    //Ocultar / Mostrar elementos
    document.getElementById("ocultar1").style.display = "none";
    document.getElementById("ocultar2").style.display = "none";
    document.getElementById("mostrar1").style.display = "block";
    
    //Cambiar texto del elemento "nombre-en-pantalla"
    var a = document.getElementById("nombre-en-pantalla");
    a.innerText = nombre;
}
        
