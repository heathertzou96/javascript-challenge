// from data.js
var tableData = data;

// YOUR CODE HERE!
// looping through array of objects and printing them out in console
//tableData.forEach(function(ufo) {
    //console.log(ufo);
//});

// appending table to webpage and adding new rows of data for each UFO sighting

// function init() {
    
//     var tbody = d3.select("tbody"); 

//     tableData.forEach((ufo) => {
//         var row = tbody.append("tr");
//         Object.entries(ufo).forEach(([key, value]) => {
//             var cell = row.append("td");
//             cell.text(value);
//         }); 
//     });
// }

var tbody = d3.select("tbody"); 

tableData.forEach((ufo) => {
    var row = tbody.append("tr");
    Object.entries(ufo).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    }); 
});

// listening for event based on date input
var button = d3.select("#filter-btn");
var form = d3.select("#filters");

button.on("click", filterTable);
form.on("submit", filterTable);

function filterTable() {
    d3.event.preventDefault();

    var dateInput = d3.select("#datetime");
    var inputValue = dateInput.property("value");
    
    var filteredData = tableData.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);

    
    
    //updateTable(filteredData);
    
    //return filteredData;
    //console.log(filteredData);
    
};


    

// function updateTable(search) {

    
//     d3.select("tbody").remove();
    
//     var tbody = d3.select("tbody"); 

//     search.forEach((ufo) => {
//         var row = tbody.append("tr");
//         Object.entries(ufo).forEach(([key, value]) => {
//             var cell = row.append("td");
//             cell.text(value);
//         }); 
//     });
// };

//init();



