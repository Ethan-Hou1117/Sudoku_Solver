const puzzle_board = document.getElementById("puzzle");
const solve_button = document.getElementById("solve-button");
const squares = 81;
var data = [];
 
 
for (let i = 0; i < squares; i++) {
   const inputElement = document.createElement('input')
   inputElement.setAttribute("type", "number")
   inputElement.setAttribute("min", "1")
   inputElement.setAttribute("max", "9")
   puzzle_board.appendChild(inputElement)
}
 
solve_button.addEventListener("click", fillValues);
 
function readValues(input) {
   if (input.value == "") {
       data.push(0);
   }
   else {
       data.push(input.value);
   }
}
 
function fillValues() {
let inputs = document.querySelectorAll("input");
data = [];
inputs.forEach(readValues);
console.log(data);
returnCompletedData();
}
 
function PopulateValues(solution) {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input, i) => {input.value = solution["answer"][i]})
} 


function returnCompletedData() {
 
 const options = {
   method: 'POST',
   url: 'https://sudoku-solver3.p.rapidapi.com/sudokusolver/',
   headers: {
     'content-type': 'application/json',
     'X-RapidAPI-Key': '9486c42cc4msha84f69ac61a038ap1cbe76jsn6969dd3c1e30',
     'X-RapidAPI-Host': 'sudoku-solver3.p.rapidapi.com'
   },
   data: `{"input":[${data}]}`
 };
  axios.request(options).then(function (response) {
   PopulateValues(response.data);
 }).catch(function (error) {
   console.error(error);
 });
}
 
