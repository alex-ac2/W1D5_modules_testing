// Private function
function storeList(num) {
  let storedArray = [];

  return function(num) {
    storedArray.push(num);
    return console.log("Stored " + num + " in list.");
  };

}

var addingNumber = storeList();

module.exports = {

  addNumber: (x) => { 
    console.log(x); 
    return addingNumber(x); 
  },

  getSortedList: {   }


};

