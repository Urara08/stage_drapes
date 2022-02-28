//スタートのアニメーション
$(function() {

	setTimeout(function open_curtain(){

    $("#curtain1").animate({width:30, height:1000},1000).fadeOut(3000);
    $("#curtain2").animate({width:30, height:1000},1000).fadeOut(3000);

})})

//［ScrollReveal］スクロールで出てくる
$(function(){
ScrollReveal().reveal('.js-sample');
            });
