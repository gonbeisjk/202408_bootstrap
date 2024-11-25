$(function () {
  // ヘッダーのナビゲーションのリンクをクリックしたら
  // $('.sk-header-nav .nav-link').on('click', ()=>{})
  $('.sk-header-nav').on('click', '.nav-link', (e) => {
    e.preventDefault();
    console.log(this, e)
    const hash = e.target.hash // '#about'
    // $(hash) //$('#about')

    // html要素かbody要素のどちらかがスクロールする
    // でもどっちがスクロールしているかわからないので
    // どちらも指定しておく
    $('html, body').animate({
      // プロパティ: 値, ...
      scrollTop: $(hash).offset().top - 80
    })
  })

  // コピーライトの西暦
  $('#year').text(new Date().getFullYear())
})
