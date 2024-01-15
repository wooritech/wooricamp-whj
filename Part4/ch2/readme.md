# js 데이터 실습

## import, export

import
- 외부에 있는 js 파일을 가져오는 통로
- default를 통해 가져오는 경우 {}없음
- {}가 사용된 경우 이름을 지정해야되는 통로
- as 를 사용하여 활용할 이름을 변경 할 수 있다.
- 한번에 꺼내기 import * as 원하는 이름 from 
export
- default export
  - 이름 지정 안해도 되는 기본 통로
  - 이름이 지정 되지 않았으면 불러올 때도 이름을 원하는데로 바꿀수 있다.
  - defaurt는 하나의 모듈에서 하나만 사용 가능하다.

- named export
  - 이름 지정 필수
  - 개수의 제한이 없다.

모듈
- 모든 js파일은 모듈이 될 수 있다.