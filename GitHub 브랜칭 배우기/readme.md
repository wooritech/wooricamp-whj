# git

## git 기본 명령어

현재 상태 확인 (내가 제일 많이 사용하는 명령어)  
- git status  

전체 로그 확인 
- git log git 

저장소 생성하기
- git init 

저장소 복제 및 다운로드 
- git clone [https: ~~~~ ] 

저장소에 코드 추가
- git add
- git add * 

커밋에 파일의 변경 사항을 한번에 모두 포함 
- git add -A 

커밋 생성
- git commit -m "message" 

변경 사항 원격 서버 업로드 (push)
- git push origin master

원격 저장소의 변경 내용을 현재 디렉토리로 가져오기 (pull)
- git pull 

변경 내용을 merge 하기 전에 바뀐 내용 비교
- git diff [브랜치 이름] [다른 브랜치 이름]

## git branch 관련(생성, 브랜치 확인, push까지으 과정)

git init을 설정하면 해당 폴더에 .git 이라는 파일이 생성됨 
- git init 

github 주소와 연결 
- git remote add origin [github 주소]

브랜치 생성
- git branch [브랜치명] 

해당 브랜치로 이동
- git checkout [브랜치명] 

브랜치를 생성하고 해당 브랜치로 바로 이동
- git branch -b [브랜치명] 

원하는 브랜치로 이동했는지 확인 
- git branch 

모든 브랜치 확인 
- git brach -a 

파일 및 폴더 
- addgit add . 

커밋 
- git commit -m "commit message"

원하는 브랜치로 push하여 원격 서버에 전송 
- git push origin [브랜치명] 

브랜치 삭제 
- git branch -d [브랜치 이름] 

현재 브랜치에 다른 브랜치 수정사항 병합
- git merge [다른 브랜치 이름]

## 에러와 해결

### git push 에러

#### 레퍼런스 푸시 실패

git init 후 add와 commit을 안하고 push한 경우 발생
  1. git checkout master(브랜치 명 변경)  
    git pull origin master
  2. 강제 푸시
  - git push -u origin +master

#### error:failed to ~~~ hintx4

git과 로컬이 동기화 되지않아서 발생
  1. git pull 실행후 다시 push
  2. git pull --rebase origin master

#### fatal: The current branch master has no upstream branch.

원격 저장소에 기본 branch 설정을 안해서 발생
  1. 브랜치 설정 후 다시 푸시
  - git push --set-upstrean origin main
  - git push
  2. remote 명시
  - git remote -v로 원격 저장소 이름을 찾은뒤
  - git push 저장소명 main



#### 내 해결 방법

파일을 다시 만들어서 푸시

# npm

npm init  
- package.json파일을 생성합니다. 이때 npm init -y로 사용하면 모든 설정이 default값을 따라갑니다.

npm install [패키지명]
- 패키지를 설치합니다. 기본적으로 로컬에 설치가 되며, npm install -g [패키지명]을 하면 전역에 설치가 됩니다. 또한 npm i [패키지명]으로도 사용이 가능합니다.

npm uninstall [패키지명]
- 패키지를 삭제합니다. 마찬가지로 옵션이 없으면 로컬 삭제, -g 옵션을 더하면 전역 삭제가 됩니다. 또한 npm rm [패키지명]으로도 사용이 가능합니다.

npm update [패키지명]
- 패키지를 업데이트 합니다.

npm search [패키지명]
- npm에 존재하는 패키지를 검색 할 수 있습니다. 하지만 브라우저가 있다면 공식 홈페이지에서도 검색하는 것이 훨씬 간편합니다.

npm info [패키지명]
- 패키지의 세부 사항을 확인할 수 있습니다. package.json의 내용이나 버전 정보 등을 이 명령어로 확인할 수 있습니다.

npm root
- 로컬 패키지 설치 디렉토리를 확인할 수 있습니다. 이 명령도 역시 옵션 -g를 붙이면 전역 패키지 설치 위치를 확인할 수 있습니다.

npm ls --depth=0
- 로컬에 설치된 패키지를 확인할 수 있습니다. 역시 ls명령 뒤에 -g옵션을 넣으면 전역 설치 패키지를 확인할 수 있습니다.

npm start
- package.json의 "script"의 프로퍼티 중 "start"를 실행합니다.

npm run [스크립트명]
- package.json의 "script" 프로퍼티 중 지정한 스크립트를 실행합니다.

