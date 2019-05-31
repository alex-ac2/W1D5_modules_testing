var moduleSort = require("./sort2_module.js");

moduleSort.addNumber(8);
moduleSort.addNumber(7);
moduleSort.addNumber(3);
moduleSort.addNumber(1);
moduleSort.addNumber(2);
moduleSort.addNumber(5);
moduleSort.addNumber(9);

let sortedList = moduleSort.sortList();

console.log(sortedList);

