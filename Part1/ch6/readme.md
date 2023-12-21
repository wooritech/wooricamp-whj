# codepen에서 작성
# HTML

```
<div>
  <h1>오늘의 날씨</h1>
  <h2>오늘의 날씨</h2>
  <h3>오늘의 날씨</h3>
</div>
```
- 위의 코드 실행 결과

 # 오늘의 날씨
 ## 오늘의 날씨
 ### 오늘의 날씨


 - class, id 속성 사용 방법
   - HTML
     - <span id="abc">동해물</span>과 <span>백두산</span>이 <span class="red">마르고</span>
   - CSS
     - .red{color:red;}
     - #abc{cilor:blue;}

 - data 속성 사용 방법
   - HTML
     ```
     <div data-(원하는 이름 예:abc)="원하는 데이터 이름 예:qwe">사과</div>
     <div data-(원하는 이름 예:abc)="원하는 데이터 이름 예:sad">바나나</div>
     ```
   - JS
     ```
     const (원하는 이름 예:els) = document.querySelectorAll('div')
     els.forEach((원하는 이름 예:el) => {
      console.log(el.dataset.(원하는 이름 예:abc(주의점:이름 사이에 -는 삭제, - 뒤의 문자 대문자 변형) ))
     })
     ```