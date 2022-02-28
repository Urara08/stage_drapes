//スタートのアニメーション
$(function() {

	setTimeout(function open_curtain(){

    $("#curtain1").animate({width:100, height:3000},1000).fadeOut(3000);
    $("#curtain2").animate({width:100, height:3000},1000).fadeOut(3000);

})})

//［ScrollReveal］スクロールで出てくる
$(function(){
ScrollReveal().reveal('.js-sample',{
    duration: 2000, //完了までの時間
    origin: 'right', //distanceと一緒に使う。どの方向から来るか top/right/bottom/left
    distance: '50%',//移動距離（実数も可）
    mobile:false,//モバイルブラウザでの true（有効）/false（無効）
    reset: false,//初期化するかどうか true/false
    rotate: { x: 0, y: 800, z: 0 },//回転させながら表示する { x: 縦, y: 横, z: 水平 }
    scale:'5'//開始時の大きさ（１＝100%）
});
});

//スクロールで幕があく
$(function(){
    $(window).scroll(function() {
        $(".js-sample_2").text($(this).scrollTop());
        $("#curtain1_c2").animate({width:100, height:3000},1000).fadeOut(3000);
        $("#curtain2_c2").animate({width:100, height:3000},1000).fadeOut(3000);

    })})

//スクロールで宝箱から出てくる
$(function(){
    ScrollReveal().reveal('#js-sample_3',{
        duration: 2500, //完了までの時間
        origin: 'left', //distanceと一緒に使う。どの方向から来るか top/right/bottom/left
        distance: '100%',//移動距離（実数も可）
        mobile:false,//モバイルブラウザでの true（有効）/false（無効）
        reset: false,//初期化するかどうか true/false
        rotate: { x: 0, y:0, z: 800 },//回転させながら表示する { x: 縦, y: 横, z: 水平 }
        scale:'0.2'//開始時の大きさ（１＝100%）
    });
    });
