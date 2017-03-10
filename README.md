# Sample project for react-native study purpose

### Based on [ReactNavigation] for Router

[ReactNavigation]: https://reactnavigation.org/
 
![](/resources/react-native-sample.gif)

## 1.시작
```
 $> react-native init RNSample
 $> cd RNSample
 $> git init
```
git remote 연결(<http://ourcstory.tistory.com/125>)


## 2. ES-Lint 설치 및 Setup
eslint plugin 설치

```
yarn add --dev eslint eslint-config-airbnb eslint-plugin-import
eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-native

```

#### .eslintrc
```
{
  "extends": "airbnb",
  "parser": "babel-eslint",
  "plugins": [
      "react",
      "react-native",
  ],
  "globals": {
      "fetch": true,
      "__DEV__": true,
      "window": true,
      "navigator": true,
  },
  "env": {
      "node": true,
      "jasmine": true,
      "jest": true,
  },
  "parserOptions": {
        "ecmaVersion": 6,
        "ecmaFeatures": {
            "jsx": true
        }
    },
  "rules": {
    "indent": [0, 2],
    "no-console": 0,
    "no-unused-vars": [1, {"vars": "local", "args": "none"}],
    "no-underscore-dangle": ["error", { "allowAfterThis": true }], #allowAfterThis => for private members
    "no-use-before-define": 0, # 2 for disallow use of variables before they are defined,
    "react/forbid-prop-types": 0,
    "react/jsx-boolean-value": 1,
    "react/jsx-closing-bracket-location": 1,
    "react/jsx-curly-spacing": 0,
    "react/jsx-indent-props": 0,
    "react/jsx-key": 1,
    "react/jsx-max-props-per-line": 1,
    "react/jsx-no-duplicate-props": 1,
    "react/jsx-no-undef": 1,
    "react/jsx-quotes": 0,
    # "react/jsx-sort-prop-types": 1,
    "react/jsx-sort-props": 0,
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/no-danger": 1,
    "react/no-did-mount-set-state": 1,
    "react/no-did-update-set-state": 1,
    "react/no-direct-mutation-state": 1,
    "react/no-multi-comp": 1,
    "react/no-set-state": 1,
    "react/no-unknown-property": 1,
    "react/prefer-es6-class": 1,
    "react/prop-types": 1,
    "react/react-in-jsx-scope": 1,
    "react/require-extension": 1,
    "react/self-closing-comp": 1,
    "react/sort-comp": 1,
    "react/wrap-multilines": 1,
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "id-length": 0,
    "import/newline-after-import": 0,
    "import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
    "generator-star-spacing": 0,
    "require-yield": 0,
  }
}
```


 참조: [동영상]

 ![eslinter](/resources/eslinter.jpeg)

 [동영상]: https://www.youtube.com/playlist?list=PL9f8_QifuTL4CS8-OyA-4WADhkddOnRS4

#### 특정 룰에 대하여 disable 하기(한 파일 전체에 적용)
파일 제일 위쪽에 아래와 같이 설정

```
/* eslint-disable react/jsx-max-props-per-line */
```
