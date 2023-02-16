
function signIn(){
    let inputElement = document.getElementById("inputElement");
    let signInTextElement = document.getElementById("signInText");
    
    let inputValue = inputElement.value;
    let verifyText = "Hi " + inputValue + " verifying your account...";
    signInTextElement.textContent = verifyText;
    
}