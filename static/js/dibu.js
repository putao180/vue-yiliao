

  /*底部二维码*/
  $(".weibo_icon").hover(function () {
    $(".weibo").fadeIn(500);
    $(".qq,.twitter,.wechat").fadeOut(0);
    $(".code_wrap").css("z-index", 200);
  }, function () {
    $(".weibo").fadeOut(0);
    $(".code_wrap").css("z-index", 50);
  });

  $(".qq_icon").hover(function () {
    $(".qq").fadeIn(500);
    $(".weibo,.twitter,.wechat").fadeOut(0);
    $(".code_wrap").css("z-index", 200);
  }, function () {
    $(".qq").fadeOut(0);
    $(".code_wrap").css("z-index", 50);
  });
  $(".twitter_icon").hover(function () {
    $(".twitter").fadeIn(500);
    $(".weibo,.qq,.wechat").fadeOut(0);
    $(".code_wrap").css("z-index", 200);
  }, function () {
    $(".twitter").fadeOut(0);
    $(".code_wrap").css("z-index", 50);
  });
  $(".wechat_icon").hover(function () {
    $(".wechat").fadeIn(500);
    $(".weibo,.qq,.twitter").fadeOut(0);
    $(".code_wrap").css("z-index", 200);
  }, function () {
    $(".wechat").fadeOut(0);
    $(".code_wrap").css("z-index", 50);
  });
  $(".weibo,.twitter,.wechat").hover(function () {
    $(this).fadeIn(0);
    $(".code_wrap").css("z-index", 200);
  }, function () {
    $(this).fadeOut(500);
    $(".code_wrap").css("z-index", 50);
  });


