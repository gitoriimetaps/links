$(function() {

//グローバルメニュー 200pxスクロールで背景クラス付与/削除
	$(window).scroll(function () {
		var s = $(this).scrollTop();
		var sc1 = 200;
		if(s > sc1) {
		$('.top-bar').addClass("add_bg");
		}
		 if(s < sc1) {
		$('.top-bar').removeClass("add_bg");
		}
	});

//inview初期設定 拡大縮小用
	$(".section-title, .text-center, .platform-features-section .column, .supporting-figure").css({scale:0.0});

//inview初期設定 透明度用
	$(".li_iv1, .li_iv2, .li_iv3").css({opacity:0 ,x: "-200px"});
	$(".dev_iv1, .cp_iv1, .car_iv1").css({opacity:0});

	//inview初期設定 座標用
	$(".tit_iv4, .bt_iv2").css({opacity:0, y: "50px"});
	$(".pr_iv1, .pr_iv2, .pr_iv3, .pr_iv4").css({opacity:0, y: "100px"});

//ニュース tit_iv1が見えたら下記アニメーション、以下同
	$('.tit_iv1').on('inview', function() {
		$(this).delay(300).transition({scale:1});
		$('.li_iv1').delay(600).transition({opacity:1 ,x: "0px", easing:"easeOutQuad"}, 800);
		$('.li_iv2').delay(900).transition({opacity:1 ,x: "0px", easing:"easeOutQuad"}, 800);
		$('.li_iv3').delay(1200).transition({opacity:1 ,x: "0px", easing:"easeOutQuad"}, 800);
		$('.bt_iv1').delay(1500).transition({scale:1});
	});


//Metaps Platform Business
$('.tit_iv2').on('inview', function() {
	$(this).delay(300).transition({scale:1});
	$(".c_iv1").delay(800).transition({scale:1, easing:"easeInOutCubic"}, 800);
	$(".c_iv2").delay(1100).transition({scale:1, easing:"easeInOutCubic"}, 800);
	$(".c_iv3").delay(1400).transition({scale:1, easing:"easeInOutCubic"}, 800);
});


//New Business Development
$('.tit_iv3').on('inview', function() {
	$(this).delay(300).transition({scale:1});
	$(".dev_iv1").delay(800).transition({opacity:1}, 1000);
	$(".nbd_iv1").delay(1100).transition({scale:1, easing:"easeInOutCubic"}, 800);
});


//PRODUCT
$('.tit_iv4').on('inview', function() {
	$(this).delay(300).transition({opacity:1 ,y: "0px", easing:"easeOutQuad"}, 800);
	$(".pr_iv1").delay(800).transition({opacity:1 ,y: "0px", easing:"easeOutQuad"}, 800);
	$(".pr_iv2").delay(1100).transition({opacity:1 ,y: "0px", easing:"easeOutQuad"}, 800);
	$(".pr_iv3").delay(1400).transition({opacity:1 ,y: "0px", easing:"easeOutQuad"}, 800);
	$(".pr_iv4").delay(1700).transition({opacity:1 ,y: "0px", easing:"easeOutQuad"}, 800);
});


//COMPANY
$('.tit_iv5').on('inview', function() {
	$(this).delay(300).transition({scale:1});
	$(".cp_iv1").delay(800).transition({opacity:1}, 1000);
});

//CAREERS
$('.tit_iv6').on('inview', function() {
	$(this).delay(300).transition({scale:1});
	$(".car_iv1").delay(800).transition({opacity:1}, 1000);
	$(".bt_iv2").delay(1100).transition({opacity:1 ,y: "0px", easing:"easeOutQuad"}, 800);
});


/* 以下動かないので要調整
$(".columns").on('inview', function(event, isInView, visiblePartX, visiblePartY) {
	  if (isInView) {
		  if (visiblePartX == 'both' && visiblePartY == 'both'){
			$(".tit_iv2").delay(200).transition({scale:1});
			$(".c_iv1").delay(800).transition({scale:1, easing:"easeInOutCubic"}, 800);
			$(".c_iv2").delay(1100).transition({scale:1, easing:"easeInOutCubic"}, 800);
			$(".c_iv3").delay(1400).transition({scale:1, easing:"easeInOutCubic"}, 800);
			}
	  }
  });
*/


});
