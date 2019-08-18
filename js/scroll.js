/*var width = $(window).width();
if(width <= 768){
    
    
}else{*/
$(function () {
    //初期値
    var obj01 = 1000;
    var obj02 = 1000;
    var obj03 = 500;
    var obj04 = 500;
    var obj05 = 200;
    var obj06 = 1200;
    var obj07 = -500;
    var obj08 = 500;
    var obj09 = 1300;
    var obj10 = 700;
    var obj11 = 1000;



    $(window).scroll(function () {
        var value = $(this).scrollTop(); //スクロールの値を取得
        $('#scrollValue').text(value);

        $("#box01").css("top", obj01 - value * 2);
        $("#box02").css("top", obj02 - value * 3);
        $("#box03").css("top", obj03 - value / 4);
        $("#box04").css("top", obj04 - value / 2);
        $("#box05").css("top", obj05 - value / 10);
        $("#box06").css("top", obj06 - value / 2);
        $("#box07").css("top", obj07 - value * 3);
        $("#box08").css("top", obj08 - value * 4);
        $("#box09").css("top", obj09 - value / 3);
        $("#box10").css("top", obj10 - value / 7);
        $("#box11").css("top", obj11 - value);

    });
});

   
