# AC SERIES — 그리드에이포유 방음 시공 등급 기준

내부 견적 · 시공 기준 자료. 대외 배포 금지.

## 배포 방법

1. ZIP 안의 **내용물**을 `acoustic` 저장소 최상단에 올린다
   (폴더째 올리면 주소가 `/acoustic/acoustic/...` 로 한 겹 더 들어가니 주의)
2. Settings → Pages → Source: **Deploy from a branch**
3. Branch: `main` / 폴더: `/ (root)` → Save
4. 1~2분 뒤 `https://kangbangyong.github.io/acoustic/` 접속

## 폴더 구조

```
index.html              단면도 썸네일 진입 화면
assets/ac-nav.css       시트 상단 이동바 스타일
assets/ac-nav.js        ← → 키 이동
f/                      바닥 AC-F-L0 ~ L5
w/                      벽  AC-WS-L1~L5, AC-WP-L1~L5
c/                      천장 AC-C-L0 ~ L5
xlsx/                   시방시트 3종
```

## 수정 방법

- **내용 고칠 때** — 해당 시트 파일 하나만 열어서 수정. 나머지는 건드리지 않는다
- **이동바 모양 바꿀 때** — `assets/ac-nav.css` 한 곳만 고치면 22장 전부 반영
- **첫 화면 썸네일** — 각 시트의 첫 번째 단면도(SVG)를 그대로 복사해 넣은 것이다.
  시트 도면을 고치면 `index.html` 안의 해당 SVG도 같이 바꿔야 한다
- **시트 추가할 때** — 파일을 해당 폴더에 넣고, `index.html` 의 카드 블록을 복사해 붙인다.
  시트 상단에는 아래 세 줄이 들어가야 이동바가 붙는다

```html
<!-- </head> 앞 -->
<link rel="stylesheet" href="../assets/ac-nav.css">

<!-- <body> 바로 뒤 -->
<div class="acnav">
  <a class="acnav-home" href="../index.html">← AC 목록</a>
  <span class="acnav-code">AC-X-L1</span>
  <span class="acnav-move">
    <a href="AC-X-L0.html">← L0</a>
    <a href="AC-X-L2.html">L2 →</a>
  </span>
</div>

<!-- </body> 앞 -->
<script src="../assets/ac-nav.js"></script>
```

## 조작

| 키 | 동작 |
|---|---|
| `←` `→` | 시트에서 이전 / 다음 등급 |
| `Esc` | 목록으로 |
| `/` | 목록에서 검색창 포커스 |

## 주의

- 모든 페이지에 `noindex` 가 걸려 있다. 검색에는 안 잡히지만 **주소를 아는 사람은 볼 수 있다**
- 저장소를 Private 으로 바꾸면 Free 플랜에서는 Pages 가 자동으로 내려간다
- 오프라인으로 쓰려면 저장소를 ZIP 으로 받아 폴더째 열면 된다 (상대경로라 그대로 작동)

## 미결 항목

- LS 65형 · 150형 국내 유통 확인 → WS-L2 / L4 / L5 의 LS 사양 영향
- WP-L3 / L4 등급 분리 (f₀ 차이 약 3Hz) — 통합 검토 중
- PET 대체재 WS · WP L1~L2 시트 미반영
- 미작성: AC-D 문 · AC-G 유리 · AC-M 설비 · AC-J 접합부 · AC-AB 흡음 · AC-R 실별 등급
