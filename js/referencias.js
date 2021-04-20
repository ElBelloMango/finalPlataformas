window.onload=init;
var secciones = [];
function init()
{
    asignarVariables();
    asignarRutas();
}

function asignarVariables()
{
    secciones["index.html"] = document.getElementById("index.html");
    secciones["acercade.html"] = document.getElementById("acercade.html");
    secciones["servicios.html"] = document.getElementById("servicios.html");
    secciones["beneficios.html"] = document.getElementById("beneficios.html");
    secciones["contacto.html"] = document.getElementById("contacto.html");
}

function asignarRutas()
{
    for (var seccion in secciones) 
    {
        secciones[seccion].addEventListener("click",navegacion);    
    }
}

function navegacion(event) 
{
    var id = event.target.id;
    location.href = id;
}