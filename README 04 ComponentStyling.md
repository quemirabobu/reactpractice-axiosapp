# 1. Component Styling
## 1. Component Styling(컴포넌트 스타일)
### 1. 일반적으로 컴포넌트에 스타일을 입히는 방식은 4가지 방식을 주로 이용한다.
### 2. 일반적인 css방식(외부스타일시트, 내부 스타일시트, 인라인 스타일시트) 를 사용하는 방식, SASS(syntanctically awesome style sheet) 방식, css모듈 방식, styled-component 방식을 주로 사용.


## 2. 일반적인 Css방식

### 1. 일반적인 css방식은 html문서에서 사용하는 css방식과 동일한 방식으로 외부에 css파일을 만들어서 참조하거나 인라인 스타일을 지정하거나 변수로 스타일을 지정해서 넘길 수도 있다.


## 3. SASS 방식
### 1. css 전처리기가 복잡한 스타일 시트 작업을 쉽게 처리해주고 스타일 코드의 재사용성을 높여준다. 코드의 가독성이 일반적인 css 방식보다 좋다.
### 2. SASS 방식은 확장자가 .sass, .scss 인 파일을 지원한다.
### 3. css, sass, scss 모두 조금씩 문법이 다르다.
### 4. sass 설치 : 터미널에서 npm install sass 입력 (각 프로젝트별로 별도 진행)

## 4. Css 모듈 방식
### 1. Css 파일을 불어와서 클래스를 지정할 때 클래스 이름을 고유한 값으로 지정해주는 방식.
### 2. [파일명]_[클래스명]_[해시값]의 형태로 클래스 이름을 지정해준다.
### 3. 클래스명을 유일하게 해주고 클래스명의 중첩을 방지할 수 있으며 스타일 동일하게 사용할 수 있다.
### 4. CSS모듈로 사용할 파일의 파일명은 파일명.module.css로 지정한다.



## 5. Styled-Component 방식
### 1. styled-components 라이브러리에서 제공하는 기능으로 백틱(`)을 이용해서 태그와 스타일까지 한 번에 정의된 컴포넌트를 생성해준다.
### 2. 태그와 스타일까지 한 번에 지정하는 탬플릿 리터럴을 tagged 탬플릿 리터럴이라고 한다.
### 3. styled-components 설치 : npm install styled-components 입력 (각 프로젝트 별로 별도 진행)




# 1. Immersion(불변성)
## 1. 불변성이란
### 1. 불변성이라는 것은 원본데이터의 변경을 금지하는 것을 뜻한다. react에서는 불변성을 지키기위해 기존 원본데이터를 직접 수정하지 않고 새로운 데이터를 만들어서 사용한다.
```
const numArr = [1, 2, 3, 4, 5];
//스프레드 문법을 통한 새로운 배열 생성
const newNumArr = [...numArr];

const obj = {
    num1: 1,
    num2: 2,
    num3: 3
};

const newObj = {
    ...obj
};

const newObj2 = {
    num3: 5,
    ...obj
}
```


### 2. 만약 객체의 구조가 복잡해지면 불변성을 유지하는 것이 쉽지 않다.

``````

const complexOjb = {
id:1,
name:'a',
objInside:{ number:1, checked:true}
};

const newComplexObj = {
...complexObj, name: 'b', objInside : { ...complexObj.objInside, checked : false}

}
``````

### 3. 불변성을 유지하기 힘든 구조의 객체는 immer 라이브러릴르 사용해서 불변성 유지한다.
### 4. immer 라이브러리를 사용하면 불변성을 신경쓰지 않는 것처럼 코드를 작성하지만 코드의 불변성 관리는 제대로 이뤄진다.
### 5. immer 라이브러리 설치 : npm install immer




# 1. react의 router

## 1. 라우팅이란

### 1. 웹 어플리케이션에서 사용자 요청에 따라 알맞는 페이지를 보여주는 것을 의미.

### 2. 글쓰기 페이지, 글 목록 페이지, 글 상세 페이지 등 다양한 페이지가 존재할 때 페이지별로 컴포넌트를 분리하여 관리하기 위해서 필요한 것이 라우팅 시스템

### 3. react에서는 react router라는 라이브러리를 이용해서 라우팅 시스템을 구축할 수 있다.

### 4. Html에서는 a태그를 이용해서 링크로 이동시켰는데 react에서는 link태그(컴포넌트) 로 링크를 이동시킨다. a태그는 페이지를 불러올 때 새로고침이 무조건 발생하기 때문이다.

### 5. link 컴포넌트를 이용하지 않고 링크를 이동시킬 때는 useNaviget라는 Hook을 사용한다.

### 6. 링크에서 사용하는 경로가 현재 라우트 경로가 일치할 때 특정 스타일을 적용하고 싶을 때는 navlink라는 컴포넌트를 사용한다.

### 7. 컴포넌트가 화면에 표출되는 순간 다른 페이지로 이동하려면 navigate 컴포넌트를 사용한다. ex) 게시글 목록으로 들어왔는데 로그인이 안되어 있는 경우 로그인 페이지로 이동할때

### 8. react router 설치 : npm install react-router-dom 입력











