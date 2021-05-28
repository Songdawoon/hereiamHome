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


// footer display year
let thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear();
