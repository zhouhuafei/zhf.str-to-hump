# 字符串转驼峰
```
const strToHump = require('zhf.str-to-hump');

console.log(strToHump('hello-world')); // helloWorld
console.log(strToHump('hello&world', '&')); // helloWorld
console.log(strToHump('-hello-world')); // HelloWorld
```
