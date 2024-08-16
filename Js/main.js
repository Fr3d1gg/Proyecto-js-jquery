$(document).ready(function () {
  //SLIDER
  $("#slider").bxSlider({
    mode: "fade",
    captions: true,
    slideWidth: 1200,
    responsive: true,
  });
  //POST
  //objetos json

  let post = [
    {
      title: "Prueba de JS 1",
      date:
        " Publicado el dia " +
        moment().format("D") +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content: "loremipsum insolorm",
    },
    {
      title: "Prueba de Jquery 2",
      date:
        " Publicado el dia " +
        moment().format("D") +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content: "loremipsum insolorm nonmadte",
    },
    {
      title: "Prueba 3",
      date:
        " Publicado el dia " +
        moment().format("D") +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content: "loremipsum insolorm hgagsfdtdgfysgadga a",
    },
    {
      title: "Prueba4",
      date:
        " Publicado el dia " +
        moment().format("D") +
        " de " +
        moment().format("MMMM") +
        " del " +
        moment().format("YYYY"),
      content: "loremipsum insolorm",
    },
  ];
  

  post.forEach((item) => {
    let post = `
            <article class="post">
            <h2>${item.title}</h2>
            <span class="date">Fecha de publicacion ${item.date}</span>
            <p>
            ${item.content}
            </p>
            <a href="#" class="button-more">Leer mas</a>
                `;
    
    $("#posts").append(post);
  });
  //Cambiar colores de nuestra pagina web
  let theme = $("#theme");
  $("#green").click(function () {
    theme.attr("href", "css/green.css");
  });
  $("#red").click(function () {
    theme.attr("href", "css/red.css");
  });
  $("#blue").click(function () {
    theme.attr("href", "css/blue.css");
  });
  //Scrolll hasta arriba de la web
  $(".subir").click(function(e){
    e.preventDefault();
    $('html,body').animate({
      scrollTop:0
    },4000)
    return false;
  })


  //formulario login falso con localStorage
  $("#login form").submit(function(){
   let form_name=$("#form-name").val();
   let form_email=$("#form-email").val();
   let form_pass=$("#form-pass").val();
   localStorage.setItem("fomr-name",form_name);
   localStorage.setItem("form-email",form_email);
   localStorage.setItem("fomr-pass",form_pass);
   
  });
  
  let form_name=localStorage.getItem("fomr-name");
  if(form_name!=null&&form_name!=undefined){
    $("#about p").html("Bienvenido, "+form_name);
    $("#about p").append("<a href='#' id='logout'>   logout</a>");
    $("#login").hide();
    $("#logout").click(function(){
      localStorage.clear();
      location.reload();
     

    });
  }
  
  
});
