// Private function
function storeList() {
  let storedArray = [];
  
  function pushToArray(num) {
    storedArray.push(num);
    return console.log("Stored " + num + " in list.");
  }

  function getList() {
    return storedArray;
  }

  return {
    pushToArray: pushToArray,
    getList: getList
  };
}

// Invoking function to create instance 
var numberAccess = storeList();

// Exported module
module.exports = {

  addNumber: (num) => { 
    return numberAccess.pushToArray(num);
  },

  getSortedList: () => {  
    return numberAccess.getList().sort();
  },

  getStoredArray: () => {
    return numberAccess.getList();
  }

};

