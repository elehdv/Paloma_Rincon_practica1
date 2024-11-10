

let $document = $(document)
$document.ready(function(){



  AOS.init();

  const customCursor = document.getElementById("custom-cursor");
  if (customCursor) {
    // Solo ejecuta el evento de "mousemove" si existe el "custom-cursor"
    document.addEventListener("mousemove", function(e) {
      customCursor.style.left = e.pageX + 10 + "px";
      customCursor.style.top = e.pageY + 10 + "px";
    });
  }

  $("#projects-guide > div > a").on("click", function(){
    //console.log($("#projects-guide-open").css("display"));
  
      let actual_chevron = $("#projects-guide-open").css("display");
  
      if (actual_chevron === "none") {
         $("#projects-guide-open").css("display", "flex");
              
      } else {
        $("#projects-guide-open").css("display", "none");
      }
  
  });

  $("#project-menu-cross").on("click", function(){
    //console.log($("#projects-guide-open").css("display"));
  
      let actual_chevron = $("#projects-guide-open").css("display");
  
      if (actual_chevron === "none") {
         $("#projects-guide-open").css("display", "flex");
              
      } else {
        $("#projects-guide-open").css("display", "none");
      }
  
  });

  $("#projects-guide-open > a").on("click", function(){
    //console.log($("#projects-guide-open").css("display"));
  
      let actual_chevron = $("#projects-guide-open").css("display");
  
      if (actual_chevron === "none") {
         $("#projects-guide-open").css("display", "flex");
              
      } else {
        $("#projects-guide-open").css("display", "none");
      }
  
  });

  $("#close-main-menu").on("click", function(){
    //console.log($("#projects-guide-open").css("display"));
  
      let actual_chevron = $("#menu-open").css("opacity");
  
      if (actual_chevron === "1") {
         $("#menu-open").css("opacity", "0");
              
      } else {
        $("#menu-open").css("opacity", "1");
      }
  
  });

  $("#close-main-menu").on("click", function(){
    //console.log($("#projects-guide-open").css("display"));
  
      let actual_chevron = $("#menu-open").css("visibility");
  
      if (actual_chevron === "visible") {
         $("#menu-open").css("visibility", "hidden");
              
      } else {
        $("#menu-open").css("visibility", "visible");
      }
  
  });

  $("#main-menu").on("click", function(){
    //console.log($("#projects-guide-open").css("display"));
  
      let actual_chevron = $("#menu-open").css("opacity");
  
      if (actual_chevron === "1") {
         $("#menu-open").css("opacity", "0");
              
      } else {
        $("#menu-open").css("opacity", "1");
      }
  
  });

  $("#main-menu").on("click", function(){
    //console.log($("#projects-guide-open").css("display"));
  
      let actual_chevron = $("#menu-open").css("visibility");
  
      if (actual_chevron === "visible") {
         $("#menu-open").css("visibility", "hidden");
              
      } else {
        $("#menu-open").css("visibility", "visible");
      }
  
  });

  $(".menu-text").on("click", function(){
    //console.log($("#menu-photo-1").css("display"));
  
      let actual_chevron = $("#menu-open").css("visibility");
    
      if (actual_chevron === "visible") {
        $("#menu-open").css("visibility", "hidden");
              
      } else {
        $("#menu-open").css("visibility", "visible");
      }
  
  });

  $(".menu-text").on("click", function(){
    //console.log($("#menu-photo-1").css("display"));
  
      let actual_chevron = $("#menu-open").css("opacity");
    
      if (actual_chevron === "1") {
        $("#menu-open").css("opacity", "0");
              
      } else {
        $("#menu-open").css("opacity", "1");
      }
  
  });

});

// Función que se ejecuta al hacer clic en la pantalla de carga
function enterSite() {
  document.getElementById("loading-screen").style.display = "none"; // Oculta la pantalla de carga
  document.getElementById("main-content").style.display = "block";  // Muestra el contenido principal
  document.body.style.overflow = "auto"; // Permite el desplazamiento
  document.getElementById("custom-cursor").style.display = "none"; // Oculta el cursor personalizado

  // Inicializa la función de escritura automática
  var typed2 = new Typed('#typed2', {
    strings: ['Hi! Im Paloma. I am a visual artist working in lens based still and moving image projects in a quirky style marked by bold colors and graphic compositions.'],
    typeSpeed: 50,
    backSpeed: 25,
    fadeOut: true
  });
}