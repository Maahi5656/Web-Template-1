$(document).ready(function(){

  var mixer = mixitup('.img-container');

  $(window).scroll(function(){
    let scrollDistance = $(document).scrollTop();

    if(scrollDistance > 30){
      $('.navigation').addClass('sticky');
    }else{
      $('.navigation').removeClass('sticky');
    }

  });

});

function openNav(){
  document.getElementById("myNav").style.width = "100%";
}

function closeNav(){
  document.getElementById("myNav").style.width = "0%";
}
