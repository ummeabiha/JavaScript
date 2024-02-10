/*
API--> URL end points (link) which returns a data

Fetch API--> provide interface for fetching (sending/ receiving) resources.
It uses Request and Response objects.
fetch() method is used to fetch data

API lets you get the info on run time and it does not reload the page to get data
*/

/*
AJAX--> Asychronous JS and XML

JSON--> JavaScript Object Notation
AJAJ--> Asychronous JS and JSON

Nowadays, we typically use AJAJ APIs, but call them as AJAX.

json() method is used to return a second promise that resolves with the result of parsing the response body text as JSON. (Input is JSON, output is JS Object)(converts JSON response into JS Object)


GET Request --> that are used to fetch data only
*/

const URL = "https://cat-fact.herokuapp.com/facts";

const getFacts = async () => {
  console.log("Getting facts...");
  let response = await fetch(URL);
  console.log(response); //response is an object
  console.log(response.status);

  let data = await response.json();
  console.log(data);
  console.log(data[1].text);
};

//Using Promise Chains
// function getFacts() {
//   fetch(URL)
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       console.log(data);
//       console.log(data[2].text);
//     });
// }

getFacts();
