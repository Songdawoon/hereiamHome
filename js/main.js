// 헤더 제어
const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click',function(){
  searchInputEl.focus();
});
searchInputEl.addEventListener ('focus',function(){
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder','통합검색');
})
searchInputEl.addEventListener ('blur',function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
})

// 스크롤 제어
const badgeEl = document.querySelector('header .badges');
const toTopEl = document.querySelector('#to-top');
window.addEventListener('scroll',_.throttle(function(){
  if ( window.scrollY > 500){
    // 배지숨기기
    gsap.to(badgeEl,.6, {
      opacity:0,
      display: "none"
    });
    //gotop보이기
    gsap.to(toTopEl,.2, {
      x:0
    });
  }else{
    // 배지보이기
    gsap.to(badgeEl,.6, {
      opacity:1,
      display: "block"
    });
    //gotop숨기기
    gsap.to(toTopEl,.2, {
      x:100
    });
  }
},300))

toTopEl.addEventListener('click',function(){
  gsap.to(window, .7, {
    scrollTo : 0
  });
})

// visual
const fadeEls = document.querySelectorAll('.visual .fade-in');
fadeEls.forEach(function(fadeEl, index){
  gsap.to(fadeEl,1,{
    delay:(index+1) * .7,
    opacity:1
  });
});

// swiper
new Swiper('.notice-line .swiper-container', {
  direction : 'vertical',
  autoplay: true,
  loop: true
});
new Swiper ('.promotion .swiper-container',{
  slidesPerView : 3,
  spaceBetween:10,
  centeredSlides : true,
  loop:true,
  autoplay: {
    delay: 4000,
  },
  pagination : {
    el : '.promotion .swiper-pagination',
    clickable : true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl:'.promotion .swiper-next'
  }
});

new Swiper ( '.partners .swiper-container',{
  autoplay:true,
  loop:true,
  spaceBetween:30,
  slidesPerView:5,
  navigation :{
    prevEl : '.partners .swiper-prev',
    nextEl : '.partners .swiper-next'
  }
});

// promotion toggle
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector ( '.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click',function(){
  isHidePromotion = !isHidePromotion
  if (isHidePromotion){
    promotionEl.classList.add('hide')
  }else{
    promotionEl.classList.remove('hide')
  }
})

// youtube floating icons

function random(min,max){
  return parseFloat((Math.random() * (max-min ) + min).toFixed(2))
}
function floatinghObject(selector,delay,size){
  gsap.to(selector, random(1,2.5), {
    y:size,
    repeat : -1,
    yoyo:true,
    ease : Power1.easeInOut,
    delay:delay
  });
}

floatinghObject('.floating1',1,15);
floatinghObject('.floating2',0.5,15);
floatinghObject('.floating3',1.5,20);

// animation
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl){
  new ScrollMagic
  .Scene({
    triggerElement : spyEl, //보여짐 여부를 감시할 요소를 감시
    triggerHook : .8, //
  })
  .setClassToggle(spyEl, 'show')
  .addTo(new ScrollMagic.Controller());
})

// footer display year
let thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();

