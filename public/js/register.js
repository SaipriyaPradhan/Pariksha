const form = document.getElementById('form');
const username = document.getElementById('username');
const id = document.getElementById('id');
const email = document.getElementById('email');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');
const address = document.getElementById('address');
// const mobnumber = document.getElementById('mobnumber');
const branch = document.getElementById('branch');
const resume = document.getElementById('resume');

form.addEventListener('submit', (event) =>{
    event.preventDefault();

    Validate();
})

const sendData = (usernameVal, sRate, Count) => {
    if(sRate === Count){
        swal("Hello " + usernameVal , "You are Registered", "success");
    }
}

const SuccessMsg = (usernameVal) => {
    let formContr = document.getElementsByClassName('form-control');
    var Count = formContr.length - 1;
    for(var i = 0; i < formContr.length; i++){
        if(formContr[i].className === "form-control success"){
            var sRate = 0 + i;
            console.log(sRate);
            sendData(usernameVal, sRate, Count);
        }
        else{
            return false;
        }
    }
}


const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf('@');
    if(atSymbol < 1) return false;
    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2) return false;
    if(dot === emailVal.length -1) return false;
    return true;
}

function Validate(){
    const usernameVal = username.value.trim();
    const idVal = id.value.trim();
    const emailVal = email.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();
    const addressVal = address.value.trim();
    // const mobnumberVal = address.value.trim();
    const branchVal = branch.value.trim();
    const resumeVal = resume.value.trim();

    //username
    // var letters = /^[A-Za-z]+$/;
    if(usernameVal === ""){
        setErrorMsg(username, 'Name cannot be blank');
    }
    else if(usernameVal.length <=2){
        setErrorMsg(username, 'min 3 char');
    }
    else if(usernameVal.match(/[0-9]/)){
        setErrorMsg(username, 'Invalid name');       
    }
    else{
        setSuccessMsg(username);
    }

    //last name

    if(idVal === ""){
        setErrorMsg(id, 'College ID cannot be blank');
    }
    else if(idVal.length <=2){
        setErrorMsg(id, 'min 3 char');
    }
    else{
        setSuccessMsg(id);
    }

    //email
    if(emailVal === ""){
        setErrorMsg(email, 'Email cannot be blank');
    }
    else if(!isEmail(emailVal)){
        setErrorMsg(email, 'Email is not valid');
    }
    else{
        setSuccessMsg(email);
    }

    //password
    if(passwordVal === ""){
        setErrorMsg(password, 'Password cannot be blank');
    }
    else if(passwordVal.length <= 7){
        setErrorMsg(password, 'min 8 char');
    }
    else{
        setSuccessMsg(password);
    }

    //confirm password
    if(cpasswordVal === ""){
        setErrorMsg(cpassword, 'Confirm password cannot be blank');
    }
    else if(passwordVal != cpasswordVal){
        setErrorMsg(cpassword, 'Not Matched!');
    }
    else{
        setSuccessMsg(cpassword);
    }
    // SuccessMsg(usernameVal);

    //address
    if(addressVal === ""){
        setErrorMsg(address, 'Address cannot be blank');
    }
    else if(address.length <=5){
        setErrorMsg(address, 'min 5 char');
    }
    else{
        setSuccessMsg(address);
    }

    // //mobile number
    // if(mobnumberVal === ""){
    //     setErrorMsg(mobnumber, 'mobile number cannot be blank');
    // }
    // else if(mobnumber.length <=10 ){
    //     setErrorMsg(mobnumber, 'there should be 10 character');
    // }
    // else{
    //     setSuccessMsg(mobnumber);
    // }
    //mobile number
    if(branchVal === ""){
        setErrorMsg(branch, 'branch cannot be blank');
    }
    // else if(mobnumber.length <=10 ){
    //     setErrorMsg(mobnumber, 'there should be 10 character');
    // }
    else{
        setSuccessMsg(branch);
    }

    // resume
    if(resumeVal === ""){
        setErrorMsg(resume, 'Upload your resume');
    }
    // else if(usernameVal.length <=2){
    //     setErrorMsg(username, 'min 3 char');
    // }
    else{
        setSuccessMsg(username);
    }

}

function setErrorMsg(input, errormsgs){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errormsgs;
}

function setSuccessMsg(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}
