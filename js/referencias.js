var control=["acercade.html","personajes.html","beneficios.html","contacto.html", "renderizarAPI.html"];
var logeado = true;
window.onload=init;
var secciones = [];
function init()
{
    asignarVariables();
    asignarRutas();
    if(window.location.pathname=="/personajes.html")
    {
        rotacion();
    }
    if(window.location.pathname=="/index.html")
    {
        logeado=false;
        logeo();
    }
    if(window.location.pathname=="/renderizarAPI.html")
    {
        alert("Esta API recibe 25 peticiones por hora");
        capturarDatos();
    }
    
}

function asignarVariables()
{
    secciones["index.html"] = document.getElementById("index.html");
    secciones["acercade.html"] = document.getElementById("acercade.html");
    secciones["personajes.html"] = document.getElementById("personajes.html");
    secciones["beneficios.html"] = document.getElementById("beneficios.html");
    secciones["contacto.html"] = document.getElementById("contacto.html");
    secciones["renderizarAPI.html"] = document.getElementById("renderizarAPI.html");
}

function asignarRutas()
{
    for (var seccion in secciones) 
    {
        secciones[seccion].addEventListener("click",navegacion);    
    }
}

function controlAcceso(indice){
    for (var i in control)
    {
        if (control[i]==indice) {
            return true;
        }
    }
    return false;
}

function navegacion(event) 
{
    var id = event.target.id;
    console.log("Control Acceso: "+controlAcceso(id));
    console.log("logged: "+logeado);
    if (controlAcceso(id) && logeado || id == "index.html"){
        location.href = id;
    }
    else{
        alert("No estas logueado");
    }
}