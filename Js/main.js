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
  console.log(post);

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
    console.log(post);
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
});
