$('.owl-carousel').owlCarousel({
  loop:true,
   margin:10,
   nav:true,
    items:1,
    pagination:false,


  });

  $('.owl-carousel_teacher').owlCarousel({
    items:3,
    autoPlay : true,
  goToFirst : false,
  goToFirstSpeed : 1000,
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },

    }
});

$('.owl-carousel_ex').owlCarousel({
  items:3,
  autoPlay : true,
goToFirst : false,
goToFirstSpeed : 1000,
  loop:true,
  margin:10,
  nav:true,
});
$(".responsive_bar").css("height", $(window).height());
$(".responsive_bar_hidden").css("height", $(window).height());
$(".right_side").css("height", $(window).height());
$(".left_side").css("height", $(window).height());


$("#show").click(function(){
  $(".responsive_bar").addClass("responsive_bar_hidden");

$("nav").css("visibility", "hidden");

});
function hid(){
$(".responsive_bar").removeClass("responsive_bar_hidden");
$("nav").css("visibility", "visible");

}

$("#owl-demo").owlCarousel({
  items : 4,
  lazyLoad : true,
  navigation : true,
    pagination:false,

});

$(".owl-next").html("<img src='bootstrap/img/gallery-right.png'/>"); //.html(): Clean HTML inside and append
$(".owl-prev").html("<img src='bootstrap/img/gallery-left.png'/>"); //.html(): Clean HTML inside and append

$(".fancybox").fancybox({
    openEffect	: 'none',
    closeEffect	: 'none'
  });
