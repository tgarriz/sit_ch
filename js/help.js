$('#refresh').click(function() {
    location.reload();
});

$(document).ready(function(){
  $(".showhide").click(function(){
    $("#help").toggle();
  });
  $( "img,g,nav, #help [title]" ).click(function() {
  $( "#help" ).css("display","none");
});
  $( ".helpbutton" ).click(function() {
  $( ".leaflet-popup" ).css("display","none");
});


});