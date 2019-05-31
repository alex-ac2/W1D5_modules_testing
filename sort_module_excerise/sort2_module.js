let storedArray = [];


module.exports = {

  addNumber: (number) => {
    storedArray.push(number);
    console.log("Number " + number + " added to stored list");
  },
  sortList: function() {
    let sortedData = storedArray.sort( (a, b) => { 
      return a - b; 
    });
    return sortedData;
  }
};
