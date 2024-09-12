// Fetching the element from DOM

const inputBox = document.querySelector("input");

const enterBtn = document.querySelector("button");

const result = document.querySelector(".result");

// Creating function that validates the age

function valAge(){
    let inputValue = inputBox.value;

    if(inputValue >= 1 && inputValue <= 17){
        result.innerHTML = `Your age is ${inputValue} and You belong to Teenage😍`
    } else if(inputValue >= 18 && inputValue <= 30){
        result.innerHTML = `Your age is ${inputValue} and You belong to Hardworking Age💪`
    } else{
         result.innerHTML = `Your age is ${inputValue} and You belong to More Hardworking Age😁`
    }
}

enterBtn.addEventListener("click", valAge);