# Grid-A 4U 방음 앱 (PWA) 설치

1. 이 폴더 안의 파일을 전부 `acoustic` 저장소 루트에 넣기
   app.html / manifest.webmanifest / sw.js / home.js / icons/
   (ZIP은 압축 해제 후 폴더째 드래그)
2. 홈 버튼: 각 페이지 `</body>` 바로 앞에 한 줄
   `<script src="/acoustic/home.js"></script>`
   - acoustic: index.html, ac-q-01.html, intra.html, intra_review.html, ac_dictionary.html (build.py에 nav처럼 주입해도 됨)
   - grida 저장소 index.html에도 같은 한 줄 (도메인이 같아서 그대로 동작)
3. 앱 주소: https://kangbangyong.github.io/acoustic/app.html
   - 안드로이드 크롬: 화면 위 "홈 화면에 앱으로 설치" 버튼
   - 아이폰 사파리: 공유 → 홈 화면에 추가
4. 관련 사이트 3개 링크는 app.html 안 주소를 실제 주소로 바꿔 쓰기 (github.com/kangbangyong, app.netlify.com, claude.ai 로 넣어둠)

sw.js는 /acoustic/ 안 GET 요청만 캐시. AppsScript 저장·불러오기, 폰트, 외부 사이트는 건드리지 않음.
페이지를 고친 뒤 캐시가 남으면 sw.js의 CACHE 이름(v1→v2)만 올리면 됨.
