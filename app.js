// iterate through tbody.
// get reference to the tbody element, add input field and button

var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchDate = document.getElementById("search");
var $searchCity = document.getElementById("search1");
var $searchState = document.getElementById("search2");
var $searchCountry = document.getElementById("search3");
var $searchShape = document.getElementById("search4");
var $resetButton = document.querySelector("#reset");

// add an event listener to searchbutton and resetbutton and add a function

$searchDate.addEventListener("click", searchData);
$searchCity.addEventListener("click", searchData);
$searchState.addEventListener("click", searchData);
$searchCountry.addEventListener("click", searchData);
$searchShape.addEventListener("click", searchData);
$resetButton.addEventListener("click", resetData);

// Set filteredData to data ; reset data to data
var filteredData = data;
var resetData = data;

//Set starting index and results per page
var startingIndex = 0;
var resultsPerPage = 1000;
// function to render filtered data to the tbody

function renderTable() {
    // Set the value of ending index
    var endingIndex = startingIndex + resultsPerPage;

    // Looping through data set
    for (var i = 0; i < filteredData.length; i++) {
        // Insert a row
        var $row = $tbody.insertRow(i);

        // Get current object & keys
		var currentSighting = filteredData[i];
        var fields = Object.keys(currentSighting);

        // Insert filteredSightings
        for(var j = 0; j < fields.length; j++) {
            var field = fields[j];
            var $cell = $row.insertCell(j);
            $cell.innerText = currentSighting[field];
        };
    };
};
function searchData(event){
	//to prevent the page from refreshing
  event.preventDefault();
  var filteredDate = $dateInput.value.trim() //trim removes any white spaces in between
	if(filteredDate !=""){
		filteredData = data.filter(function (data){
			var dataDate = data.datetime;
			return dataDate === filteredDate;
		});
	

	};
	
	var filteredCity = $cityInput.value.trim().toLowerCase();
  	if (filteredCity !="") {
    	filteredData = filteredData.filter(function(data) {
     		var dataCity = data.city.toLowerCase();
      		return dataCity === filteredCity;

		});
	};

	var filteredState = $stateInput.value.trim().toLowerCase();
	if (filteredState !="") {
		filteredData = filteredData.filter(function(data) {
			var dataState = data.set.toLowerCase();
			return dataState === filteredState;
		});
	};


	var filteredCountry = $countryInput.value.trim().toLowerCase();
	if(filteredCountry !="") {
		fileteredData = filteredData.filter(function(data) {
			var dataCountry = data.country.toLowerCase();
			return dataCountry === filteredCountry;
		});
	};
		$tbody.innerHTML = "";
		renderTable();

	}

		function resetData() {
  		filteredData = data;
  		$dateInput.value = "";
  		$cityInput.value = "";
  		$stateInput.value = "";
  		$countryInput.value = "";
 		$shapeInput.value = "";
  		renderTable();


	}

	function resetForm() {
		document.getElementById("myForm").reset();
	}

	// Render the table 
	renderTable();
