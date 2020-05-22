function getData(cb){
    let xhr = new XMLHttpRequest(); //creates XML object
    let data;

    xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); //point xhr to data (get gets / post sends)
    xhr.send(); //send request for that data

    //XHR states 0=unsent 1=opened 2=headers_received 3=loading 4=done
    //HTTP status codes 200=complete 301=moved 401=unothourised 403=forbidden 404=not_found 500=server_error
    xhr.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { //This is called many times to get all the data
            cb(data = JSON.parse(this.responseText));  //This callback only runs when data is ready 
        }
    };
}

function printDataToConsole(data) {
    console.log(data);
}

getData(printDataToConsole);

/*setTimeout fires its attached function when the time at the end is up
setTimeout(function() {
    //500ms should be enought time for data to fill up
    console.log(data); //End point for the data we want to be able to access it outside the above functions
}, 500)*/