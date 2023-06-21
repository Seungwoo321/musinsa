# 무신사 프론트엔드 그룹 과제

이 프로젝트는 Frontend 공통과제.pdf 파일에 수록된 요구사항과 Figma 디자인 화면에서 확인되는  요구사항들을 구현한 React 프로젝트 입니다.

## 주요 기능

### 요구사항 구현 체크 리스트

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

### 요구사항 구현에 대한 추가 내용

- Figma 요구사항 중 Refresh 버튼은 필터 적용을 초기화(Reset) 합니다.
- PDF 요구사항 중 검색 자동완성 기능은 검색 결과 중에서 입력한 텍스트가 포함된 상품 이름의 목록을 보여줍니다.
- PDF 요구사항 중 검색 후 엔터를 입력하면 검색 활성 상태에서 검색 비활성 및 검색 완료 상태가 됩니다.

## 개발 환경

- node.js v16.14.2
- Vite v4.39
- Rreact v18.2.0
- Emotion v11.11.0
- EsLint: Standard Style

## 설치 및 실행

### 의존성 패키지 설치

```bash
npm install
```

### 개발 서버 실행

```bash
npm run dev
```

기본값 <http://localhost:5173/> 로 접속

### 프로덕션 환경으로 빌드 및 실행

```bash
npm run build 
cd dist 
live-server
```

## 프로젝트 구조

```bash
├── README.md
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── src
│   ├── App.jsx
│   ├── api.js
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
│   │   ├── AppBar.jsx
│   │   ├── AutoComplete.jsx
│   │   ├── AutoCompleteItem.jsx
│   │   ├── Button.jsx
│   │   ├── Empty.jsx
│   │   ├── ExclusiveLabel.jsx
│   │   ├── Icon.jsx
│   │   ├── LoadingSpinner.jsx
│   │   ├── MenuFilter.jsx
│   │   ├── MenuFilterArea.jsx
│   │   ├── MenuFilterSearchArea.jsx
│   │   ├── ProductList.jsx
│   │   ├── ProductListItem.jsx
│   │   ├── SoldOutOverlay.jsx
│   │   └── icons.js
│   ├── constants
│   │   └── index.js
│   ├── hooks
│   │   ├── useFilter.js
│   │   ├── useInfiniteScroll.js
│   │   └── useSearch.js
│   ├── index.css
│   ├── libs
│   │   └── index.js
│   └── main.jsx
└── vite.config.js
```

## 설계 및 구현 방법

- 프로젝트는 단일 페이지로 구성되어 있어 별도의 라우터를 구현하지 않았습니다.
- 단일 페이지로 구성되어 있어서 별도의 상태관리 라이브러리를 사용하지 않고 API 서버에서 호출한 상품 데이터는 App.jsx에서 상태 관리를 합니다. useEffect를 사용하여 컴포넌트가 마운트될 때 최초 1회 호출합니다. 개발 모드에서는 React.StrictMode로 인해 2회 이상의 렌더링이 발생될 수 있으므로 네트워크 탭을 확인하면 2회 이상의 호출이 보일 수 있습니다.
- 필터 기능, 검색 기능, 무한 스크롤 기능은 각각 useFilter, useSearch, useInfiniteScroll과 같은 커스텀 훅을 작성하여 관련 기능을 모듈화하고 재사용성을 높였습니다.
  - useFilter 커스텀 훅은 필터 기능을 구현하기 위해 사용됩니다. 필터 상태와 필터 액션 함수를 반환하여 필터 기능을 구현할 수 있습니다. 필터 상태는 활성화된 필터 정보와 해당 필터에 따른 콜백 함수를 포함하고 있습니다.
  - useSearch 커스텀 훅은 검색 기능을 구현하기 위해 사용됩니다. 검색 상태와 검색 액션 함수를 반환하여 검색 기능을 구현할 수 있습니다. 검색 완료된 키워드 정보와 해당 키워드에 따른 콜백 함수를 포함하고 있습니다.
  - useInfiniteScroll 커스텀 훅은 무한 스크롤 기능을 구현하기 위해 사용됩니다. 콜백 함수를 전달하여 페이지 스크롤이 맨 아래에 도달할 때마다 해당 콜백 함수가 호출됩니다. 스크롤 이벤트의 불필요한 연속 호출을 제어하기 위해 debounce 함수를 사용하여 호출을 지연시킵니다.
- 화면 컴포넌트는 AppBar, MenuFilter, MenuFilterArea, MenuFilterSearchArea, ProductList 등으로 구성되어 있으며, 각 컴포넌트는 필요에 따라 세분화하여 구현되었습니다.
