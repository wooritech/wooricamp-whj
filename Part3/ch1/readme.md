# JavaScript Essentials

## node.js

javascript가 서버에서 동작 할 수 있도록 하는 플랫폼

## nvm (Node Version Manager)

### node.js의 버전 관리자

- nvm 검색후 첫번쨰 github
- install & update script에서 curl 코드 복사 vscode 터미널에 붙여넣기 후 엔터
- nvm --version 입력 후 엔터
zsh command not found nvm라는 에러가 나올 경우
- [해결 방법](https://velog.io/@energyy044/Reactzsh-command-not-found-nvm)

- 설치된 버전 확인 후 nvm ls 엔터
- nvm install (node.js에서 설치할 버전 엔터)

## npm (Node Pachage Manger)

- Node Package Manager
- 전세계의 개발자들이 만든 다양한 기능들을 관리
- link, script등으로 연결했던 외부 패키지들을 관리

### npm 시작하기

1. npm init -y 엔터 -> package.json 파일 생성됨  
main은 우리가 만든 것을 패키지로 npm에 업로드 할떄 사용하는 옵션 -> 삭제해도 된다.
2. npm install parcel-bundler -D 엔터 -> package-lock.json 과 node_modules 생성됨  
node_modules 내부에 parcel-bundler 생성됨, package.json에도 생성됨    
node_modules를 삭제해도 설치한 내역은 남는다.
3. npm install lodash -> package.json에 생성됨
node_modules를 삭제해도 설치한 내역은 남는다.
4. node_modules를 삭제하고 터미널에 npm install 혹은 npm i를 입력하면 설치됬던 내역을 통해 재설치됨

- package-lock.json은 설치한 패키지들을 관리하는 패키지들의 정보가 들어간다.

```
- npm install -D 개발용 의존성 패키지 설치->개발할 떄만 필요
- npm intall 일반 의존성 설치->실제로 웹사이트에서 동작
```

## 유의적 버전 (SemVer)

버전 숫자 3개  
Major.Minor.Patch  

- Major 기존 버전과 호환되지 않는 새로운 버전
- Minor 기존 버전과 호환o 새로운 기능이 추가
- Patch 기존 버전과 호환o 버그나 오타 등이 수정된 버전

버전 앞에 ^기호가 있으면 Major 버전 안에서 가장 최신 버전으로 업데이트가 가능하다.