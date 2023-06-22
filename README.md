# 무신사 프론트엔드 과제

무신사 프론트엔드 사전 과제 프로젝트 입니다.

[과제 배포 링크](https://seungwoo321.github.io/musinsa/)

## 개발 환경

- node.js v16.14.2

## 설치 및 실행

### 의존성 패키지 설치

```bash
npm install
```

### 개발 환경 실행

```bash
npm run dev
```

기본 <http://localhost:5173/musinsa> 로 접속

### 프로덕션 환경 실행

```bash
### 빌드
npm run build 

## 실행
npm run preview
```

기본 <http://localhost:4173/musinsa> 로 접속

## 구성 및 선정 이유

- React v18.2.0: React는 널리 사용되는 프론트엔드 라이브러리로 컴포넌트 기반 개발과 가독성 있는 코드 작성을 위해 선택했습니다.
- ESLint: Standard Style: 통일된 코딩 스타일과 코드 품질을 유지하기 위해 ESLint를 Standard Style 설정으로 사용했습니다.
- emotion v11.11: Emotion은 JavaScript를 사용한 CSS-in-JS 라이브러리로, 컴포넌트 스타일링을 더욱 쉽고 유연하게 처리하기 위해 선택했습니다.
- vite v4.3.9: Vite는 빠른 개발 환경을 제공하는 빌드 도구로, 개발 효율성을 높이고 개발 시간을 단축하기 위해 선택했습니다.

### 디렉토리 구조

```bash
.
├── README.md
├── deploy.sh
├── index.html
├── package-lock.json
├── package.json
├── product.html
├── public
│   └── vite.svg
├── src
│   ├── App.jsx
│   ├── assets
│   │   ├── icon-general-empty.png
│   │   ├── icons
│   │   │   ├── Close.svg
│   │   │   ├── Refresh.svg
│   │   │   ├── Search.svg
│   │   │   └── ccommon_loading_spinner.svg
│   │   ├── logo_musinsa.svg
│   │   └── soldout.png
│   ├── components
│   │   ├── AppBar
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   ├── AppFilterArea
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   ├── AppFilterBar
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   ├── AppSearchArea
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   ├── AutoComplete
│   │   │   ├── AutoCompleteItem.jsx
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   ├── Button
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   ├── Empty
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   ├── ExclusiveLabel
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   ├── Icon
│   │   │   ├── icons.js
│   │   │   └── index.jsx
│   │   ├── LoadingSpinner
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   ├── ProductList
│   │   │   ├── ProductListItem.jsx
│   │   │   ├── index.jsx
│   │   │   └── style.js
│   │   └── SoldOutOverlay
│   │       └── index.jsx
│   ├── constants
│   │   └── index.js
│   ├── hooks
│   │   ├── useFilter.js
│   │   ├── useInfiniteScroll.js
│   │   └── useSearch.js
│   ├── index.css
│   ├── libs
│   │   └── index.js
│   ├── main.jsx
│   └── remote.js
└── vite.config.js
```

### 요구사항 체크 리스트

- [x] 상단 타이틀(MUSINSA)과 필터는 페이지 상단에 고정됩니다.
- [x] 단독상품의 경우 Label이 표기 됩니다.
- [x] 세일상품의 경우 할인율과 기존 가격이 표기됩니다.
- [x] 스크롤이 목록의 하단까지 내려오면 다음 항목이 노출되는 무한 스크롤로 동작합니다.
- [x] 필터는 토글 기능을 가지고 있으며 활성화 시 목록에 적용됩니다.
- [x] 필터 내 검색의 경우 조회된 데이터에 한해서 검색되며, 키 입력에 따른 자동완성으로 검색됩니다.
- [x] 품절상품의 경우 기본적으로 노출되지 않으며, 필터에서 품절포함 선택 시 추가로 노출됩니다.
- [x] 상품명은 두 줄까지만 표시합니다.
- [x] 검색 활성 상태의 화면을 구현합니다.
- [x] 검색 완료 상태의 화면을 구현합니다.
- [x] 필터 활성 상태의 화면을 구현합니다.
- [x] 검색 결과 없음 상태의 화면을 구현합니다.
- [x] 일반 상태의 화면을 구현합니다.
- [x] 상품 이미지가 없을 경우 대체 이미지를 출력합니다.

### 구현 내용

- 필터 기능, 검색 기능, 무한 스크롤 기능을 각각 `useFilter`, `useSearch`, `useInfiniteScroll`으로 커스텀 훅을 작성하여 모듈화하고 재사용성을 높였습니다.
  - `useFilter`: 커스텀 훅은 필터 기능을 구현하기 위해 사용됩니다. 필터 상태와 필터 액션 함수를 반환하여 필터 기능을 구현할 수 있습니다. 필터 상태는 활성화된 필터 정보와 해당 필터에 따른 콜백 함수를 포함하고 있습니다.
  - `useSearch`: 커스텀 훅은 검색 기능을 구현하기 위해 사용됩니다. 검색 상태와 검색 액션 함수를 반환하여 검색 기능을 구현할 수 있습니다. 검색 완료된 키워드 정보와 해당 키워드에 따른 콜백 함수를 포함하고 있습니다.
  - `useInfiniteScroll`: 커스텀 훅은 무한 스크롤 기능을 구현하기 위해 사용됩니다. 콜백 함수를 전달하여 페이지 스크롤이 맨 아래에 도달할 때마다 해당 콜백 함수가 호출됩니다. 스크롤 이벤트의 불필요한 연속 호출을 제어하기 위해 `debounce` 함수를 사용하여 호출을 지연시킵니다.
- 화면 컴포넌트는 `AppBar`, `AppFilterBar`, `AppFilterArea`, `AppSearchArea`, `ProductList` 으로 구성되어 있으며, 각 컴포넌트는 필요에 따라 세분화하여 구현되었습니다.
