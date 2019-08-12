/*
+ You will create a sample form that collects the first name, last name, email address, student id, password and password confirmation from a user.
+ All inputs are required.
+ Email address should be in an appropriate format
+ Student id should only allow 7 numbers
+ Password should be at least 3 characters
+ Values entered for the password and password confirmation should be the same
+ After validating the form using JavaScript, write any error message next to the text where the errors occurs.
+ Error message should in red.
*/

/*validation function use for validate my form*/
function validation(){
  if (document.getElementById("firstname").value ==""){
    //alert("you need a firstname");
    document.getElementById("firstid").innerHTML = " * the first name field is required";
    firstid.style.cssText = "color:red; ";
    return false;
  }

  if (document.getElementById("lastname").value ==""){
    //alert("you need a lastname");
    document.getElementById("firstid").innerHTML = " ";
    document.getElementById("lastid").innerHTML = " * the last name field is required";
    lastid.style.cssText = "color:red; ";
    return false;
  }

  if (document.getElementById("email").value ==""){
    //alert("you need a email");
    document.getElementById("lastid").innerHTML = " ";
    document.getElementById("emailid").innerHTML = " * the email field is required";
    emailid.style.cssText = "color:red; ";
    return false;
  }
  var regexpEmail = new RegExp(/^[a-zA-Z-0-9]{1,}@[a-zA-Z-0-9]{1,}\.\w{2,}$/);
  if (regexpEmail.test(document.getElementById("email").value) == false){
    //alert("Email address should be in an appropriate format");
    document.getElementById("lastid").innerHTML = " ";
    document.getElementById("emailid").innerHTML = " * Email address should be in an appropriate format";
    emailid.style.cssText = "color:red; ";
    return false;
  }

  if (document.getElementById("studentid").value ==""){
    //alert("you need a studentid");
    document.getElementById("emailid").innerHTML = " ";
    document.getElementById("studid").innerHTML = " * the studentid field is required";
    studid.style.cssText = "color:red; ";
    return false;
  }
  var regexStudentid = new RegExp(/^\d{7}$/);
  if (regexStudentid.test(document.getElementById("studentid").value) == false){
    //alert("Student id should only allow 7 numbers");
    document.getElementById("emailid").innerHTML = " ";
    document.getElementById("studid").innerHTML = " * Student id should only allow 7 numbers";
    studid.style.cssText = "color:red; ";
    return false;
  }

  if (document.getElementById("password").value ==""){
    //alert("you need a password");
    document.getElementById("studid").innerHTML = " ";
    document.getElementById("passid").innerHTML = " * the password field is required";
    passid.style.cssText = "color:red; ";
    return false;
  }
  var regexPassword = new RegExp(/^[a-zA-Z-0-9]{3,}$/);
  if (regexPassword.test(document.getElementById("password").value) == false){
    //alert("Password should be at least 3 characters");
    document.getElementById("studid").innerHTML = " ";
    document.getElementById("passid").innerHTML = " * Password should be at least 3 characters";
    passid.style.cssText = "color:red; ";
    return false;
  }

  if (document.getElementById("confirmation").value ==""){
    //alert("you need a confirmation");
    document.getElementById("passid").innerHTML = " ";
    document.getElementById("confid").innerHTML = " * the password confirmation field is required";
    confid.style.cssText = "color:red; ";
    return false;
  }
  if (document.getElementById("confirmation").value != document.getElementById("password").value){
    //alert("Values entered for the password and password confirmation should be the same");
    document.getElementById("passid").innerHTML = " ";
    document.getElementById("confid").innerHTML = " * Values entered for the password and password confirmation should be the same";
    confid.style.cssText = "color:red; ";
    return false;
  }

  else {
    return true;
  }
}
