# JS 데이터

## 문자 데이터

### string mdn에서 확인하기  


String.Prototype.indexOf()

- 문자열에서 주어진 문자가 처음 나오는게 몇번째인지 보여준다.  
해당하는 문자가 없으면 -1을 반환한다

length

- 문자열의 크기를 나타낸다.

slice

- 문자열에서 첫번째 인수와 두번째 인수 바로 앞을 잘라서 나타낸다.

replace (치환)

- 첫번째 인수를 지우고 두번째 인수로 대체한다.

trim

- 앞뒤 공백 제거

match

- 문자 데이터에서 정규표현식을 사용하여 특정한 문자를 일치 시키고 배열 데이터로 반환하여 아이템으로 추출하여 사용 

**실행 결과**

<img src="./str.png">

### 정규표현식 (regex)

<img src="./regex1.png">
<img src="./regex2.png">
<img src="./regex3.png">

## 숫자 데이터

### toFixed 메소드

toFixed(n) - 소수점 n번까지 잘라서 문자 데이터로 반환한다.  
toFixed를 사용 하면 문자 데이터로 반환되는 이유?
- js에서 0.1과 제곱들은 정확히 표현되지 않는다.
- 정확히 표현하기 위한 유일한 수단이 문자 타입이다.

### parseInt, parseFloat 변수

js 전역함수이다  

parseInt(문자 데이터) - 분석한다/정수를 문자 데이터에서 정수를 찾아서 숫자 데이터로 반환한다.
parseFloat(문자 데이터) - 분석한다/숫자를 문자 데이터에서 숫자를 찾아서 숫자 데이터로 반환한다.

![num](./num.png)

## Math

속성과 메서드를 가진 내장 객체  

abs() - 함수에 주어진 숫자의 절대값을 반환합니다. 

min( , ) - 들어온 데이터 중 작은 값을 반환합니다.

max( , ) - 들어온 데이터 중 가장 큰 값을 반환합니다.

ceil() - 정수단위에서 올림값을 반환합니다.

floor() - 정수단위에서 내림값을 반환합니다.

round() - 정수단위에서 반올림값을 반환합니다.

random() - 1이 되지 않는 랜덤한 값을 반환한다.

![Math](./Math.png)

## 배열(array) API

대괄호로 묶여져있는 item(element, 요소)들의 집합이다.  
배열은 zero based이다.  
배열된 요소들의 순번을 index라고 부른다.  
인덱스에 접근하는 행위를 indexing이라고 부른다.

![array](./array1.png)

### length

배열의 길이 즉, 배열에 들어간 요소의 개수를 확인

![lenght](./lenght.png)

### concat

두개의 배열 연결해서 새로운 배열을 만든다. 원본은 손상되지 않는다.

![concat](./concat.png)

### forEach

앞에 붙은 변수의 배열 데이터의 아이템 수 많큼 인수로 사용된 콜백이 반복 실행  
for문을 대체하는 메소드이다  
callback의 값을 반환하지 않는다  

![for](./forEach.png)
![forEach](./forEach1.png)


### map

forEach와 동일하되, callback 내부에서 return을 통해서 반환한 데이터를 새로운 배열로 만들어서 사용 할 수 있다.

![map](./map.png)

- 객체 리터럴 방식 - 여러가지 변수를 하나의 묶음으로 나타낼 때 객체를 사용하는데 이런 객체를 표현할때 {}를 사용한다.

### filter

조건을 만족하는(true) 경우만 아이템의 상태 그대로 반환하여 새로운 배열을 만든다.  

![필터](./filter.png)
![필터](./filter1.png)

### find, findIndex

find - 콜백에서 찾고있는 무언가를 찾으면 반복을 멈추고 찾은 아이템을 반환한다.

findIndex - 찾은 아이템의 인덱스 번호를 반환한다.

![파인드](./find.png)

- findIndex가 -1이 나온 것은 IndexOf와 동일하게 없는 값을 찾았기 때문이다.
- 인덱스를 결과로 돌려주는 함수에서 결과가 없는 경우 대부분 -1을 반환한다.
indexOf, lastIndexOf, findIndex



### includes()

배열 데이터 부분에 includes의 인수로 사용된 데이터가 포함되어있는지 확인해주는 메소드

![인클루즈](./includes)

### push(), unshift()

<u>_원본수정됨 주의_</u>

- push - 배열 데이터 가장 뒤에 아이템을 삽입
- unshift - 배열 데이터 가장 앞에 아이템을 삽입

![푸시,언쉬프트](./push.png)

### revers()

<u>_원본수정됨 주의_</u>  

배열 데이터의 순번을 뒤집는다.

![리버스](./revers.png)

### splice(n,m,z)

<u>_원본수정됨 주의_</u>

인덱스 번호 n번에서 시작해서 m개 지워라  
z를 그 자리에 끼워 넣어라

![스플라이스](./splice.png)

## 객체

### assign

assign(인수1 대상객체, 인수2 출처객체)  
출처객체의 정보를 대상객체에 집어넣는다.  
target 변수에 반환  

`일치연산(===) 두개의 객체가 참조한 메모리 주소가 동일하면 True` 참조형 데이터의 특징 (예:{},[],function)  
불변성 강의 참조


### kiss