let $document = $(document)
$document.ready(function(){
    
    var typed2 = new Typed('#typed2', {
    strings: ['Hi! Im Paloma. I am a visual artist working in lens based still and moving image projects in a quirky style marked by bold colors and graphic compositions.'],
    typeSpeed: 0,
    backSpeed: 0,
    fadeOut: true
    
  });

  AOS.init();

  $("#projects-guide > div > a").on("click", function(){
    //console.log($("#projects-guide-open").css("display"));
    //console.log($(".fa-solid.fa-chevron-up").css("display"));
  
      let actual_chevron = $("#projects-guide-open").css("display");
  
      if (actual_chevron === "none") {
         $("#projects-guide-open").css("display", "flex");
              
      } else {
        $("#projects-guide-open").css("display", "none");
      }
  
  });

  $("#project-menu-cross").on("click", function(){
    //console.log($("#projects-guide-open").css("display"));
    //console.log($(".fa-solid.fa-chevron-up").css("display"));
  
      let actual_chevron = $("#projects-guide-open").css("display");
  
      if (actual_chevron === "none") {
         $("#projects-guide-open").css("display", "flex");
              
      } else {
        $("#projects-guide-open").css("display", "none");
      }
  
  });

  $("#projects-guide-open > a").on("click", function(){
    //console.log($("#projects-guide-open").css("display"));
    //console.log($(".fa-solid.fa-chevron-up").css("display"));
  
      let actual_chevron = $("#projects-guide-open").css("display");
  
      if (actual_chevron === "none") {
         $("#projects-guide-open").css("display", "flex");
              
      } else {
        $("#projects-guide-open").css("display", "none");
      }
  
  });



});

