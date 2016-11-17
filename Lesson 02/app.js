$(function(){

/*=============Model==================*/
var countryList = {

		countries: [
			{name: 'Canada' , continent: "North America", flagUrl: 'http://flagpedia.net/data/flags/normal/ca.png', capital: "Ottawa", language: "English and French"},
			{name: 'Singapore' , continent: "Asia", flagUrl: 'http://flagpedia.net/data/flags/normal/sg.png', capital: "Ottawa", language: "English, Tamil, Malay, Mandarin"},
			{name: 'USA' , continent: "North America", flagUrl: 'http://flagpedia.net/data/flags/normal/us.png', capital: "New York", language: "English"}
		]

};



// cache ul for left view
let $ul = $("#contry-list");


// get the counties array from the object
let clArray = countryList['countries'];

// create inner html elements
let $li  = '';

// loop through the object and create li
for(let i = 0; i < clArray.length; i++) {

	$li = document.createElement("li");
	$li.innerHTML = `<div class="img-view">
						<img src="${ clArray[i].flagUrl}"  width="50"/>
					</div>

					 <div class="text-view">
								 <h2>${ clArray[i].name}</h2>
								 <h3>${ clArray[i].continent}</h3>
								</div>
					`;

    $ul.append($li);

}


// click event
$("li").click ( function(e){

	$('li').removeClass('active');
	$(this).addClass('active');


	// get clicked index
	var getIndex = $(this).index();


	// cache DOM
	var $countryName = $('#country-name');
	var $countryFlag = $('#country-flag');
	var $countryCapital = $('#country-capital');
	var $countryLanguage = $('#country-language');


	var selectedObject = clArray[getIndex];

	// papulate information with detail view
	$countryName.html(selectedObject.name);
	$countryFlag.attr("src", selectedObject.flagUrl);
	$countryCapital.html(selectedObject.capital);
	$countryLanguage.html(selectedObject.language);

});


// select the first one by default
$ul.find("li:first-child").trigger("click");

});
