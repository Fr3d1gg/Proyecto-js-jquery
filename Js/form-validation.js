$(document).ready(function(){
    console.log("Cargado correctamente");

    // Datepicker en el input
    $("#datepicker").datepicker();

   
    // Inicializar la validación del formulario
    $.validate({
        lang:'es',
        errorMessagePosition:'top',
        scrollToTopOnEroor:true
    });

});
