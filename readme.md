# Typescript + React + Webpack + Stylus Startkit

## startkit stack
- webpack v4
- react / react-router
- typescript v3.8
- stylus / scss
- yarn
- autoprefixer
- storybook

## Design

### Hierarchy

atom < component < template < presenter < container < page

### Description

- atom : 기본 색상 등 최소 요소
- component : button과 같이, interaction이 가능한 모듈
- tempalate : component들의 집합
- presenter : UI 요소를 꾸미기 위해, template와 component를 활용한 UI 표현
- container : 로직 선언, presenter에 필요한 로직만 전달하는 역할
- page : 페이지

## feature
- HMR
- webpack config
  - development or production mode
- Upload Azure blob Storage in script
  - `yarn publish`