// val() - value
function getValue() {
  // js
  // const inputVal = document.querySelector('input').value;
  // alert(inputVal);

  // jquery
  const value = $('input').val();
  alert(value);
}

function setValue() {
  // js
  // document.querySelector('input').value = '하이하이~';

  // jquery
  $('input').val('안뇽안뇽~');
}

// css()

function changeCssJS() {
  const span = document.querySelector('span');
  span.style = 'font-size: 20px; color: red;';
}
function changeCssJquery() {
  // case1
  //   $('span').css('font-size', '40px');
  //   $('span').css('color', 'blue');

  // case2. css 여러 속성 한번에 적용
  $('span').css({
    fontSize: '40px', // 모든 span에 대해 폰트 크기 변경
    color: 'blue', // 모든 span에 대해 폰트 색상 변경
  });
}
function getCssJquery() {
  console.log(document.querySelector('span').style.color);
  // console.log($('span').css('color'));
}

// attr()

function changeAttrJS() {
  const link = document.getElementById('myLink');
  link.href = 'https://www.naver.com';
}
function changeAttrJquery() {
  $('#mylink').attr('href', 'https://www.daum.net'); // 콤마 꼭 찍어줘야함
}

// text()
function changeTextJS() {
  const text = document.getElementById('html');
  text.innerHTML = '안녕히가세요!';
}
function changeTextJquery() {
  $('#html').text('jquery로 텍스트 변경~');
}

// html()
function changeHtmlJS() {
  const ph = document.getElementById('p');
  ph.innerHTML = '<h3>javascript<h3>';
}
function changeHtmlJquery() {
  $('#p').html('<h3>javascript<h3>');
}

// 요소 추가하기
// append()
function appendJS() {
  const colorsElement = document.querySelector('.colors');
  const newLiElement = document.createElement('li');
  newLiElement.textContent = '마지막 자식으로 추가된 js';
  colorsElement.append(newLiElement);
}

function appendJquery() {
  $('.colors').append('<li>마지막 자식으로 추가된 jquery</li>');
}

// prepend()
function prependJS() {
  const colorsElement = document.querySelector('.colors');
  const newLiElement = document.createElement('li');
  newLiElement.textContent = '첫 자식으로 추가된 js';
  colorsElement.prepend(newLiElement);
}

function prependJquery() {
  $('.colors').prepend('<li>첫 자식으로 추가된 jquery</li>');
}

// before()
function beforeJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const colorsGreen = document.querySelector('.green');
  // 2. li 태그 요소를 생성한 후
  const newtag = document.createElement('li');
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)' 추가
  newtag.innerText = 'green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)';
  // 4. green 클래스를 갖는 요소의 "바로 이전 형제 요소"로 li 요소 추가
  colorsGreen.before(newtag);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/before
}

function beforeJquery() {
  $('.green').before(
    '<li>green 클래스를 갖는 요소의 이전 형제 요소로 추가(js)</li>'
  );
}

// after()
function afterJS() {
  // 1. green 클래스를 갖는 요소 선택하고
  const colorsGreen1 = document.querySelector('.green');
  // 2. li 태그 요소를 생성한 후
  const newtag1 = document.createElement('li');
  // 3. li 태그의 텍스트로 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)' 추가
  newtag1.innerText = 'green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)';
  // 4. green 클래스를 갖는 요소의 "바로 다음 형제 요소"로 li 요소 추가
  colorsGreen1.after(newtag1);
  // 힌트: https://developer.mozilla.org/en-US/docs/Web/API/Element/after
}

function afterJquery() {
  $('.green').after(
    '<li>green 클래스를 갖는 요소의 다음 형제 요소로 추가(js)</li>'
  );
}
// 요소 탐색하기
function findParent() {
  // child2 클래스 갖는 요소의 부모 요소
  console.log(document.querySelector('.child2').parentElement);
  console.log($('.child2').parent());
}

function findParents() {
  // JS 없습니다! 패스~~
  console.log($('.child2').parents());
}

function findNext() {
  // child2 클래스 갖는 요소의 다음 형제 요소
  console.log(document.querySelector('.child2').nextElementSibling);
  console.log($('.child2').next());
}

function findPrev() {
  // child2 클래스 갖는 요소의 이전 형제 요소
  console.log(document.querySelector('.child2').previousElementSibling);
  console.log($('.child2').prev());
}

function findChildren() {
  // parent 클래스 갖는 요소의 자식 요소
  console.log(document.querySelector('.parent').children);
  console.log($('.parent').children());
}

// 클래스 조작하기
function addClass() {
  //   var hi = document.getElementById('hi');
  //   hi.classList.add('fs-50');
  $('#hi').addClass('fs-50');
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 추가
}

function removeClass() {
  //   var hi2 = document.getElementById('hi');
  //   hi2.classList.remove('fs-50');
  $('#hi').removeClass('fs-50');
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 삭제
}

function hasClass() {
  //   var hi3 = document.getElementById('hi');
  //   hi3.classList.contains('fs-50');
  $('#hi').hasClass('fs-50');
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 포함 여부 확인
}

function toggleClass() {
  //   var hi4 = document.getElementById('hi');
  //   hi4.classList.toggle('bg-pink');
  $('#hi').toggleClass('fs-50');
  // hi 아이디 갖는 요소 선택하여 "fs-50" 클래스 토글 (있으면 삭제, 없으면 추가)
}
