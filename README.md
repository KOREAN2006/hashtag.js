# hashtag.js
```
<script src="https://unpkg.com/@clockfire/hashtag.js"></script>
```
DOM 데이터 바인딩과 데이터 유효성 검사를 위한 라이브러리

## 코드 예시
```
<!DOCTYPE html>
<html>
  <head>
    <script src="https://unpkg.com/@clockfire/hashtag.js"></script>
  </head>
  <body>
    <p>1부터 10000 중 <span class="#number">0</span>보다 큰 숫자 필요</p>
    <p id="textBox">버튼 클릭</p>
    <button id="doRandom">뽑기</button>
    <script>
      const exampleNumber = newHashtag("#number", (input, before) => input > (before ?? 0));
      const successCounter = newHashtag("count");

      document.querySelector("#doRandom").addEventListener("click", () => {
        if(exampleNumber(Math.floor(Math.random() * 10000) + 1)) {
          if(document.querySelector(".\\#count") === null) {
            successCounter(1);
            document.querySelector("#textBox").innerHTML = `<span class="#count">${successCounter()}</span>번 성공!`;
          } else {
            successCounter(successCounter() + 1);
          }
        }
      });
    </script>
  </body>
</html>
```

## 간단한 설명
* jQuery와 유사한 형식으로 getter와 setter를 구현
* 데이터 유효성 검사 함수는 최대 2개의 매개변수 사용
  * 1번 매개변수는 setter를 통해 들어온 값
  * 2번 매개변수는 기존 값
* 해시태그는 아래 두 종류의 문자의 조합
  * 영숫자 62자
  * 언더스코어와 하이픈 마이너스
* 데이터 유효성 검사 함수와 해시태그 중 하나만 적용하는 것 역시 가능

## 다양한 예시
```
<span class="#1"></span>
<div class="#_"></div>
<span class="#-_- #2763"></span> /* 두 개 이상 설정하면 두 변경 다 적용 */
const a = newHashtag("#1");
const b = newHashtag(Number.isInteger); /* 첫 undefined 이후 정수만 입력 가능 */
const c = newHashtag(() => Math.random() < 0.5, '_'); /* 50% 확률로 값이 바뀌는 함수 */
const d = { e: newHashtag("#eee"), f: newHashtag("#fff"), g: [ newHashtag("#g0g"), newHashtag("#g1g") ] }; /* 데이터 구조의 말단에 적용 */
```
