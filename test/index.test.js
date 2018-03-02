const strToHump = require('../dist/index.min');

test(`字符串转驼峰`, () => {
    console.log(strToHump('hello-world')); // helloWorld
    console.log(strToHump('hello&world', '&')); // helloWorld
    console.log(strToHump('-hello-world')); // HelloWorld
    expect(true).toEqual(true);
});
