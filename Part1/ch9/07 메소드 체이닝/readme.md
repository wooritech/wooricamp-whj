# 메소드 체이닝

- 메소드를 연결해서 사용
- 메소드.메소드.메소드;

## 예시

```
 const a = 'Hello~';
 const b = a.split('').reverse().join('');

 console.log(a); // Hello~
 console.log(b); // ~olleH
```

- split(''): 문자를 지정한 인수를 기준으로 쪼개서 배열로 반환 
- reverse: 배열을 뒤집기
- join(''): 배열을 지정한 인수를 기준으로 문자로 병합해 반환