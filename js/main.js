const baseURL = 'https://ci-swapi.herokuapp.com/api/';

//Get data from web
function getData(type, cb){
    let xhr = new XMLHttpRequest(); //creates XML object
    let data;

    xhr.open("GET", baseURL + type + '/'); //point xhr to data (get gets / post sends)
    xhr.send(); //send request for that data

    //XHR states 0=unsent 1=opened 2=headers_received 3=loading 4=done
    //HTTP status codes 200=complete 301=moved 401=unothourised 403=forbidden 404=not_found 500=server_error
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { //This is called many times to get all the data
            cb(data = JSON.parse(this.responseText));  //This callback only runs when data is ready 
        }
    };
}


function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

//place data in div
function writeToDocument(type) {
    let tableRows = [];
    let el = document.getElementById("data"); //variable for div
    el.innerHTML = ""; //empty div

    getData(type, function(data) {  //grab info from json
        data = data.results;
        let tableHeaders = getTableHeaders(data[0]);  //send firt array element (all headers)
            
        data.forEach(function(item) {
            let dataRow = [];

            Object.keys(item).forEach(function(key) {
                let rowData = item[key].toString();
                let truncatedData = rowData.substring(0,15);
                dataRow.push(`<td>${truncatedData}</td>`);
            });
            tableRows.push(`<tr>${dataRow}</tr>`);

        });
        el.innerHTML = `<table>${tableHeaders}${tableRows}</table>`
    });
}
