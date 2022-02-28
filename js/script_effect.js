//スタートのアニメーション
$(function() {

	setTimeout(function open_curtain(){

    $("#curtain1").animate({width:30, height:1000},1000).fadeOut(3000);
    $("#curtain2").animate({width:30, height:1000},1000).fadeOut(3000);

})})

//［ScrollReveal］スクロールで出てくる
$(function(){
ScrollReveal().reveal('.js-sample',{
    duration: 1800, //完了までの時間
    origin: 'left', //distanceと一緒に使う。どの方向から来るか top/right/bottom/left
    distance: '50%',//移動距離（実数も可）
    mobile:false,//モバイルブラウザでの true（有効）/false（無効）
    reset: true,//初期化するかどうか true/false
　　rotate: { x: 0, y: 0, z: 100 }//回転させながら表示する { x: 縦, y: 横, z: 水平 }
});
});
