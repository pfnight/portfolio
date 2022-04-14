$(function() {
   $('.home_bg ul').slick({
      slidesToShow : 1,
      autoplay : true,
      dots : false,
      arrows : false,
      pauseOnHover : false
   })
  
   var ab_off = $('#about').offset().top
   $('.about_bg').css({'top' : ab_off + 'px'})

   ////gnb 섹션별 메뉴 활성화
   $(window).scroll(function() {
     if($(window).scrollTop() >= $('section').eq(0).offset().top) {
       $('#gnb li').removeClass('on')
       $('#gnb li').eq(0).addClass('on')
     }
     if($(window).scrollTop() >= $('section').eq(1).offset().top) {
      $('#gnb li').removeClass('on')
      $('#gnb li').eq(1).addClass('on')
    }
    if($(window).scrollTop() >= $('section').eq(2).offset().top) {
      $('#gnb li').removeClass('on')
      $('#gnb li').eq(2).addClass('on')
    }
    if($(window).scrollTop() >= $('section').eq(3).offset().top) {
      $('#gnb li').removeClass('on')
      $('#gnb li').eq(3).addClass('on')
    }
    if($(window).scrollTop() >= $('section').eq(4).offset().top) {
      $('#gnb li').removeClass('on')
      $('#gnb li').eq(4).addClass('on')
    }
    if($(window).scrollTop() >= $('section').eq(5).offset().top) {
      $('#gnb li').removeClass('on')
      $('#gnb li').eq(5).addClass('on')
    }
   })
   $('section').click(function() {

   })
   $('#gnb li').click(function() {
    let n = $(this).index();
    $('html, body').animate({
      scrollTop : $('section').eq(n).offset().top
    })
  })
  //  //타이핑효과
  //  var typingBool = false; 
  //  var typingIdx=0; 

  //  // 타이핑될 텍스트를 가져온다 
  //  var typingTxt = $(".typing_txt").text(); 

  //  typingTxt=typingTxt.split(""); // 한글자씩 자른다. 

  //  if(typingBool==false){ 
  //  // 타이핑이 진행되지 않았다면 
  //     typingBool=true;     
  //     var tyInt = setInterval(typing,150); // 반복동작 
  //  } 
      
  //  function typing(){ 
  //  if(typingIdx<typingTxt.length){ 
  //     // 타이핑될 텍스트 길이만큼 반복 
  //     $(".typing").append(typingTxt[typingIdx]);
  //     // 한글자씩 이어준다. 
  //     typingIdx++; 
  //     } else{ 
  //     //끝나면 반복종료 
  //     clearInterval(tyInt); 
  //     } 
  //  }  

   $('.skill_switch_wrap .switch_btn').mousedown(function() {
      $('.skill_switch_wrap .switch_btn img').attr('src', 'img/skill_switch_focus.png');
    })
    $('.skill_switch_wrap .switch_btn').mouseup(function() {
      $('.skill_switch_wrap .switch_btn img').attr('src', 'img/skill_switch.png')
    })
    let n = 1;
    $('.switch_btn button').click(function () { 
      $('.skill_wrap .skill_lp_tab li').removeClass('on');
      $('.skill_wrap .skill_lp_tab li').eq(n).addClass('on')

      $('.skill_wrap .skill_txt li').removeClass('on');
      $('.skill_wrap .skill_txt li').eq(n).addClass('on')      
      n++;
      n = (n >= $('.skill_wrap .skill_lp_tab li').length) ? n = 0 : n = n;

    $('.skill_txt .skill_bar .percent').each(function() {
        var $this = $(this);
        var per = $this.attr('per');
        $this.animate({
          'width' : per + '%'
        })
      })
    })
    $('.skill_txt .skill_bar .percent').each(function() {
      var $this = $(this);
      var per = $this.attr('per');
      $this.animate({
        'width' : per + '%'
      })
    })


    /////work_web slick/////////
    $('#work_web .work_txtarea>ul').slick({
      slidesToShow : 1,
      //autoplay : true,
      dots : true,
      arrows : true,
      prevArrow : $('#work_web .arrow_wrap .prev'),
      nextArrow : $('#work_web .arrow_wrap .next'),
      asNavFor : '#work_web .work_imgarea ul',
      appendDots : $('#work_web .page_r')
   })

   for(var i = 1; i <= 8;i++) {
      $('#work_web .slick-dots button').eq(i - 1).text('0' + i);
    }
   
   $('#work_web .work_imgarea ul').slick({
      slidesToShow : 1,
      asNavFor: '#work_web .work_txtarea ul',
     //autoplay : true,
      //dots : true,
      arrows : false,
      //prevArrow : $('.arrow_wrap .prev'),
      //nextArrow : $('.arrow_wrap .next')
   })



   /////work_graphic slick/////////
   $('#work_graphic .work_txtarea>ul').slick({
      slidesToShow : 1,
      //autoplay : true,
      dots : true,
      arrows : true,
      prevArrow : $('#work_graphic .arrow_wrap .prev'),
      nextArrow : $('#work_graphic .arrow_wrap .next'),
      asNavFor : '#work_graphic .work_imgarea ul',
      appendDots : $('#work_graphic .page_r')
   })

   for(var i = 1; i <= 5;i++) {
      $('#work_graphic .slick-dots button').eq(i - 1).text('0' + i);
    }
   
   $('#work_graphic .work_imgarea ul').slick({
      slidesToShow : 1,
      asNavFor: '#work_graphic .work_txtarea ul',
     //autoplay : true,
      //dots : true,
      arrows : false,
      //prevArrow : $('.arrow_wrap .prev'),
      //nextArrow : $('.arrow_wrap .next')
   })
})//ready()