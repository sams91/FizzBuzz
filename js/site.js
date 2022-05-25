//get values from user. get Fizz and Buzz value.
function getValues() {
    //get user values from the page
    let fizzValue = document.getElementById("fizzValue").value;
    let buzzValue = document.getElementById("buzzValue").value;

    //check for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //make sure the numbers are integers
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {

        //call fizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue);
        //call displayData and write the values to the screen
        displayData(fbArray);
    } else {
        alert("you must enter integers");       
    }
}


    // make the fizz buzz
function fizzBuzz(fizzValue, buzzValue) {
    let returnArray = [];

    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {
    //we need to check the current value in three steps:
    //1) check to see if divisable by both 3 and 5
    // if so then push "FizzBuzz" into an array and not the number
        if(i % fizzValue == 0 && i % buzzValue == 0) {
            returnArray.push('FizzBuzz');
    //2) check to see if divisable by 3
    // if so then push "Fizz" into an array and not the number
        }else if (i % fizzValue == 0) {
            returnArray.push('Fizz');
    //3) check to see if divisable by 5
    // If so push "Buzz" into an array and not the number
        }else if (i % buzzValue == 0) {
            returnArray.push('Buzz');
    // If all 3 steps are false then push number into the array
        }else{
            returnArray.push(i);
        }        
    }



   return returnArray;
}
// loop over the array and create a table row for each item
function displayData(fbArray) {
    //get the table body from the page
    let tableBody = document.getElementById("results");

    //get the template row
    let templateRow = document.getElementById("fbTemplate");

    //clear table first
    tableBody.innerHTML = "";

    for (let index = 0; index < fbArray.length; index+= 5) {
        let tableRow = document.importNode(templateRow.content, true)

        //grab the td's and put them in the array
        let rowCols = tableRow.querySelectorAll("td");

        rowCols[0].classList.add(fbArray[index]);
        rowCols[0].textContent = fbArray[index];

        rowCols[1].classList.add(fbArray[index+1]);
        rowCols[1].textContent = fbArray[index+1];

        rowCols[2].classList.add(fbArray[index+2]);
        rowCols[2].textContent = fbArray[index+2];

        rowCols[3].classList.add(fbArray[index+3]);
        rowCols[3].textContent = fbArray[index+3];

        rowCols[4].classList.add(fbArray[index+4]);
        rowCols[4].textContent = fbArray[index+4];

        tableBody.appendChild(tableRow);
    }

    // add all rows to the table
}