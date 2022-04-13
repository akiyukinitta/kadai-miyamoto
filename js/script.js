$(function () {
  // Menuクリックしたら開いてHB×になる
  $("#hbm").click(function () {
    $("#overlay__menu").fadeToggle();
    $(this).toggleClass("show");
  });

  // ページトップ
  var topBtn = $("#page-top");
  topBtn.click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      500
    );
    return false;
  });

  // カルーセル（slick）
  $(".carousel-area").slick({
    autoplay: true, // 自動でスクロール
    autoplaySpeed: 3000, // 自動再生のスライド切り替えまでの時間を設定
    speed: 1000, // スライドが流れる速度を設定
    slidesToShow: 4, // 表示するスライドの数
    swipe: false, // 操作による切り替えはさせない
    arrows: false, // 矢印非表示
    pauseOnFocus: false, // スライダーをフォーカスした時にスライドを停止させるか
    pauseOnHover: false, // スライダーにマウスホバーした時にスライドを停止させるか
    dots: true, // ドットインジケーター
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
});
