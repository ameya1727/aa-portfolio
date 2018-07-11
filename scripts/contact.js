function validateName(minLength, maxLength, inputField, helpText) {
    // See if the input value contains at least minLength but no more than maxLength characters
    if (inputField.value.length <minLength || inputField.value.length > maxLength){
        // The data is invalid, notify the user
        if (helpText != null) {
            helpText.innerHTML = "Please enter a value "+minLength+ " to " +maxLength+ " characters in length.";
        }
        return false;
    }
    else {
        // The data is Ok, so clear the help message
        if (helpText !== null) {
            helpText.innerHTML = "";
        }
        
        return true;
        
    }
}

function validataEmail(){
    
}

function validateZip(inputField, helpText) {
    // See if input value length is anything other than 5
    if (inputField.value.length != 5){
        // The data is invalid, notify the user
        if (helpText != null) {
            helpText.innerHTML = "Please enter exactly 5 digits.";
        }
        return false;
    }
    else if (isNaN(inputField.value)) {
        // The data is invalid, notify the user
        if (helpText != null) {
            helpText.innerHTML = "Please enter a number.";
        }
        return false;
    }
    else {
        // The data is Ok, so clear the help message
        if (helpText !== null) {
            helpText.innerHTML = "";
        }
        
        return true;
    }
}
