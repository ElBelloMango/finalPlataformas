let frm,correo,pst;

function logeo(){
    frm = document.getElementById("form-demo");
    pst = new Pristine(frm);
    frm.addEventListener("submit",function(event){
        event.preventDefault();
        if (pst.validate()) {
            procesardatos();
        }
        else{
            frm.classList.add("was-validated");
        }
        
    });
}

function procesardatos(){
    let usuario = localStorage.getItem("usuario");
    if(usuario){
        fetch('scripts/script.php', {
            method: 'post',
            body:new FormData(frm)
        }).then(function (response) {
            return response.json();
        }).then(function (json) {
            validarLocal(json);
        }).catch(function (err) {
            Error
        });
    }
}

function validarLocal(json)
{
    let usuario = JSON.parse(localStorage.getItem("usuario"));
    if (usuario.clave1==json.clave1){
        location.href = "acercade.html";
    }
    else{
        alert("Clave incorrecta");
    }
}