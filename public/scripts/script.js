// Validate data when form is submitted
document.getElementById("guestbook-form").onsubmit = function() {
    clearErrors()
    let isValid = true;

    // Validate first name
    let fName = document.getElementById("fName").value;
    if (fName == ""){
        let errSpan = document.getElementById("err-fName");
        errSpan.style.display="inline";
        isValid = false;
    }

    // Validate last name
    let lName = document.getElementById("lName").value;
    if (lName == ""){
        let errSpan = document.getElementById("err-lName");
        errSpan.style.display="inline";
        isValid = false;
    }
    
    // Validate LinkedIn URL
    let url = document.getElementById("url").value;
    if (url !== "" && (!url.startsWith("https://linkedin.com/in/"))){
        let errSpan = document.getElementById("err-url");
        errSpan.style.display="inline";
        isValid = false;
    }

    // Validate email
    let checkbox = document.getElementById("checked");
    let email = document.getElementById("email").value;
    if (email !== "" && (!email.includes("@") || !email.includes("."))){
        let errSpan = document.getElementById("err-email");
        errSpan.style.display="inline";
        isValid = false;
    } else if (checkbox.checked && email == ""){
        let errSpan = document.getElementById("err-email2");
        errSpan.style.display="inline";
        isValid = false;
    }

    // Validate "How we met"
    let places = document.getElementById("places").value;
    if (places == "select") {
        let errSpan = document.getElementById("err-meet");
        errSpan.style.display="inline";
        isValid = false;
    }


    document.getElementById("places").onchange

    // Validate other
    let other = document.getElementById("other").value;
    if(other == "" && places == "other"){
        let errSpan = document.getElementById("err-other");
        errSpan.style.display="inline";
        isValid = false;
    }

    return isValid;
}
// Clear all the errors from the page
function clearErrors(){
    let errors = document.getElementsByClassName("err");
    for (let i=0; i< errors.length; i++){
        errors[i].style.display = "none";
    }
}

function updateContent(){
    let places = document.getElementById("places").value;
    if(places == "other") {
        document.getElementById("hide").style.display="inline";
    } else {
        document.getElementById("hide").style.display="none";
    }
}

function updateContent2(){
    let checkbox = document.getElementById("checked");
    if(checkbox.checked){
        document.getElementById("hide2").style.display="inline";
    } else {
        document.getElementById("hide2").style.display="none";
    }
}