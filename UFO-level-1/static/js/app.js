// from data.js
var tableData = data;

// YOUR CODE HERE!
// looping through array of objects and printing them out in console
tableData.forEach(function(ufo) {
    console.log(ufo);
});

// appending table to webpage and adding new rows of data for each UFO sighting
var tbody = d3.select("tbody"); 

tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    }); 
});

