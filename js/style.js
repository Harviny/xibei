
var page,uid;
getQueryString("page")==null ?  page=parseInt("1") :page=parseInt(getQueryString("page"))
getQueryString("uid")==null ?  uid=1 :uid=getQueryString("uid");
$(document).ready(function () {
  var  pageSlider=PageSlider.case({
        startPage:page,
        callback:{
            1:function(){ loadP1();},
            2:function(){ loadP2();},
            3:function(){ loadP3();},
            4:function(){ loadP4();},
            5:function(){ loadP5();},
            6:function(){ loadP6();},
            7:function(){ loadP7();}
        }
    });
});


function loadP1() {
    for (var i = 0; i < 5; i++) {
        if (i == 2) {
            var tp = `<tr><td rowspan="2" colspan="2"><p id="p7"></p></td><td><p></p></td></tr>`;
        } else if (i == 3) {
            var tp = `<tr><td><p></p></td></tr>`;
        } else {
            var tp = `<tr><td><p></p></td><td><p id="b1-${i}"></p></td><td><p id="b2-${i}"></p></td></tr>`
        }
        $("#tbinfo").append(tp);
    }
    $("#tbinfo td p").each(function (i) {$(this)[0].id = "p" + (i + 1);}).promise();
    getimg(2);
    setTimeout(function(){getimg(1)},1000)
    setTimeout(function(){getimg(4)},1400)
    setTimeout(function(){getimg(8)},3000)
    setTimeout(function(){getimg(6)},600)
    setTimeout(function(){getimg(9)},2400)
    setTimeout(function(){getimg(5)},3300)
    setTimeout(function(){getimg(10)},1800)
    setTimeout(function(){getimg(11)},2800)
    setTimeout(function(){getimg(12)},2000)
    setTimeout(function(){getimg(3)},3900)
    setTimeout(function(){getimg(7)},3900)
    function getimg(i){
        $("#p"+i).css("background-image", "url(images/p1-"+i+".png)");
        if(i==7){
            $("#p"+i).addClass("lastload");
        }else{
            $("#p"+i).addClass("loadin");
        }
    }
}
function loadP2(){
    var ScreenWidth=document.body.clientWidth-20;
    var h1=(ScreenWidth/10.25).toFixed(0);
    var h2=(ScreenWidth/1.21).toFixed(0);
    var h4=(ScreenWidth/1.16).toFixed(0);
    var hh=(ScreenWidth/9).toFixed(0) * -1;
    $("#p2-1").css("height",h1)
    $("#p2-2").css("height",h2)
    $("#p2-4").css("height",h4)
    $("#p2-4").css("margin-top",hh)
    setTimeout(function(){$("#p2-2").addClass("p2-2")},500)
    setTimeout(function(){$("#p2-4").addClass("p2-4")},1300)
    setTimeout(function(){$("#p2-3").addClass("p2-3")},2000)
}
function loadP3(){
    var ScreenWidth=document.body.clientWidth-20;
    var h1=(ScreenWidth/10.25).toFixed(0);
    var h2=(ScreenWidth/1.21).toFixed(0);
    var h4=(ScreenWidth/1.16).toFixed(0);
    var hh=(ScreenWidth/9).toFixed(0) * -1;
    $("#p3-1").css("height",h1)
    $("#p3-2").css("height",h2)
    $("#p3-4").css("height",h4)
    $("#p3-4").css("margin-top",hh)
    setTimeout(function(){$("#p3-2").addClass("p3-2")},500)
    setTimeout(function(){$("#p3-4").addClass("p3-4")},1500)
    setTimeout(function(){$("#p3-3").addClass("p3-3")},2200)
}
function loadP4(){

    var ScreenHeight=document.body.clientHeight;
    $("#p4-1").css("margin-top",(ScreenHeight-240)/2-12);
    setTimeout(function(){$("#p4-1").addClass("p4-1")},500)
    setTimeout(function(){$("#p4-2").addClass("p4-2")},1300)
    setTimeout(function(){$("#p4-3").addClass("p4-3")},2000)
    document.getElementById("p4-2").addEventListener("touchstart", function(){
        PageSlider.case(5);
    }, false);
}
function loadP5(){}
function loadP6(){}
function loadP7(){}





function getQueryString(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]); return null;
}