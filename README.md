# 개요

프로그래머스 프론트엔드 코스 중
[Day25] 자동 저장 편집기 만들기에 사용되는 API 구현 <br>
기존에 존재하는 API 서버가 502 Bad Gateway가 되어있으므로 답답해서 만들어봤습니다. <br>
실습하는데 지장없이 실습해보고 싶으시면 설치하셔서 같이 동작시켜보면 좋을 것 같습니다. <br>

# 사용방법

```
git clone 레포지토리 주소
```

클론된 레포지토리 내에서

```
npm install
```

editor-API 디렉토리 이동 후

```
npm install
```

editor-API 폴더 내에서 서버 작동

```
npm start
```

<br>

# 주의사항

기존에 사용된던 baseURL (https://kdt.roto.codes)을 http://localhost:3030 으로 변경 후 사용 <br>
기존에 적혀있는 post.json (DB역할) 내의 데이터 지우고 동작할 시 안될 수 있음(예외처리를 안해놨음) 따라서 id 1, 2는 남겨두고 API통신 진행해볼 것.

자동 편집기 API 예시 주소 : http://localhost:3030/posts

무한 스크롤 API 예시 주소 : http://localhost:3030/cat-photos

고양이 사진첩 API 예시 주소 : http://localhost:3030/cat-api
=> selectedImageUrl 받을 때 node.filePath 로만 받으시면 됩니다.

### 나머지

API 안되는게 많아서.. 계속 만들어보면서 실습해보려고 합니다. <br>
editor-API라고 폴더명을 지어놨는데 이후 실습도 계속 저쪽에 추가할 예정입니다.
