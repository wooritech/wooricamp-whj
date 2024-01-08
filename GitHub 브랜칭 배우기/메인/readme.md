# Git

## git commit

- 자식 커밋 하나 만들기
- git commit

## git 브랜치 (branch)

- 특정 커밋을 가르키는 이름
- 하나의 커밋과 그 부모 커밋을 포함한 작업 내역
- git branch newImage
  - newImage 라는 브랜치를 살펴본다

![변환](./git%20branch1.png)

- git checkout newImage; git commit

![변환](./git%20branch2.png)

## git 합치기 (merge)

- 두개의 브랜치를 만든다

![변환](./%20git%20merge1.png)

- 두개의 별도의 브랜치를 합친다

![변환](./git%20merge2.png)

- git merge bugFix

![변환](./git%20merge3.png)

- git checkout bugFix; git merge main

![변환](./git%20merge4.png)

![변환](./merge.png)

## git 합치기 (rebase)

- 커밋들을 모아서 복사한 후 다른 장소에 둔다.

![변환](./gitrebase2.png)

- git rebase main

![변환](./gitrebase.png)

- git rebase bugFix

![변환](./gitrebase1.png)

## HEAD 분리하기

- HEAD 는 현재 checkout된 커밋 즉, 현재 작업 중인 커밋

- git checkout c1

<figure class="half" >
  <a href="./HEAD1.png"><img src="./HEAD1.png"></a>
  <a href="./HEAD2.png"><img src="./HEAD2.png"></a>
</figure>

## 상대 참조

- ^ (서큠플렉스) 한번에 한 커밋 위로 움직인다.
- ~숫자 (틸트 연산자) 한번에 여러 커밋 위로 올라간다. 

![변환](./git~.png)


## 작업 되돌리기

- git reset
  - 이전 커밋으로 이동한다
- git revert
  - 동명'의 새로운 커밋이 생성되고 변경내용이 기록된다.

- git reset --hard ORIG_HEAD
  - reset 전으로 되돌리기 (바로 이전 작업 한번만 가능하다)

![변환](./reset.png)