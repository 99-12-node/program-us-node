# 코딩테스트 (12기 Node.js)

## 준비하기

### 1. 레포지토리를 자신의 계정으로 fork하기

### 2. fork한 저장소를 자신의 컴퓨터로 clone하기
```
git clone https://github.com/{본인_아이디}/{저장소 아이디}.git

// 프로젝트로 폴더 이동
cd {저장도 아이디}.git 
ex) cd program-us-node
```

### 3. 브랜치 생성
```
git checkout -b {본인 아이디}
```

### 4. 해당되는 문제 풀고 add, commit
매일 3문제씩 풀되, 이전 타임 발표자가 문제와 대상자를 지목합니다.
```git status // 변경된 파일 확인
git add -A(또는 .) // 변경된 전체 파일을 한번에 반영
git commit -m "feat: ${문제번호} 풀이 추가" // 작업한 내용을 메시지에 기록
```
### 5. 본인 원격 저장소에 올리기
```
git push origin 브랜치이름
```
### 6. github 서비스에서 Pull Request를 보내기
Pull Request는 original 저장소의 main 브랜치와 앞 단계에서 생성한 브랜치 이름을 기준으로 합니다.

```
[순서]
브랜치로 Pull Request를 보낸다.
브라우저에서 github 저장소에 접근
브랜치를 작업 브랜치로 변경
브랜치 오른쪽에 있는 "New pull request" 버튼 클릭
```
- Pull Request 제목은 `feat: [$문제번호] $이름`으로 진행합니다.
- 작업한 내용을 입력하고 "Create pull request" 버튼을 클릭해 Pull Request를 보내주세요.


#### reference
[참고자료](https://github.com/woowacourse/woowacourse-docs/tree/main/precourse)
