// from data.js
var tableData = data;

//select table from html
var table = d3.select("ufo-table");

//select body of table from html
var tbody = d3.select('tbody');

//initial placeholder value
var tempDate = "1/1/2010"

//set searchbar and have it call the function that creates a table using user input
//dtid= datetime id 
function searchBar(){

    var dtid = d3.select("#datetime").property("value")

    console.log(dtid)

    makeTable(dtid);
};


function makeTable(date){
    //clear table if existing
    tbody.html("")
    //filter data to be specific to the users selected date
    var filterData = data.filter(row => row.datetime == date)
    //loop to populate the table with rows
    filterData.forEach((dRow)=>{
        //add row to tbody
        var row = tbody.append("tr");
        //loop to populate single row of the table
        Object.values(dRow).forEach((val)=>{
            //add cell to the row
            var d = row.append("td")
            //add data to the cell
                d.text(val)
        })
        });


}
//event handler only accepts a click
d3.selectAll("#filter-btn").on("click", searchBar)
makeTable(tempDate);