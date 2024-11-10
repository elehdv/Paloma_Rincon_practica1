

let $document = $(document)
$document.ready(function(){



  AOS.init();


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

    // Inicializa la función de escritura automática
    var typed2 = new Typed('#typed2', {
      strings: ['Hi! Im Paloma. I am a visual artist working in lens based still and moving image projects in a quirky style marked by bold colors and graphic compositions.'],
      typeSpeed: 20,
      backSpeed: 15,
      fadeOut: true
    });

});

