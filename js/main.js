let xhr = new XMLHttpRequest(); //creates XML object
let data;

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); //point xhr to data (get gets / post sends)
xhr.send(); //send request for that data

//XHR states 0=unsent 1=opened 2=headers_received 3=loading 4=done
//HTTP status codes 200=complete 301=moved 401=unothourised 403=forbidden 404=not_found 500=server_error
xhr.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { //This is called many times to get all the data
        console.log(this.readyState); //Debug, shows how many times the function is called in the console
        data = JSON.parse(this.responseText);
    }
};

setTimeout(function() { //This function tells the code inside to only fires after 500ms defined at end ( you do not need to call this function )
    //500ms should be enought time for data to fill up
    console.log(data); //End point for the data we want to be able to access it outside the above functions
}, 500)