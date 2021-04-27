let pst, frm;

window.onload = function(){
    frm = document.getElementById("form-demo");
    pst = new Pristine(frm);

    frm.addEventListener('submit', function(e){
        e.preventDefault();
        pst.validate();
        frm.classList.add("was-validated");
    });
    frm.addEventListener('reset', function(e){
        frm.classList.remove("was-validated");
    });
};