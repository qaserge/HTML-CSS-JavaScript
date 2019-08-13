//Calculate The Tip
function tipCalculator() {
}
//checking for page ready
$(document).ready(function(){
// click on the calculate button
  $("#calculate").click(function(){
    // check for totalBill and service fields
    if(($("#totalBill").val() == "")||($("#service").val() == null)) {
      alert("Please fill out all the fields");
    }
    // check for peopleCount enter
    if ($("#peopleCount").val() <= 0){
      $("#peopleCount").val("1"); // if no, assign value 1
    }
    // check if there are not a numbers in totalBill or in peopleCount
    if((isNaN($("#totalBill").val()) == true)||(isNaN($("#peopleCount").val()) == true)){
      alert("Only numbers are valid for the people and bill fields");
    }

    //Calculate the tip
    var tip = Number($("#totalBill").val())*Number($("#service").val());
    console.log("Tip = " +tip.toFixed(2)+ " $");
    //Calculate the total amount of the bill
    var totalAmount = Number($("#totalBill").val())+Number(tip);
    console.log("Total amount of the bill = " +totalAmount.toFixed(2)+ " $");
    //total tip per persons
    var tipPerson = Number(tip)/Number($("#peopleCount").val());
    //total amount per persons
    var totalAmountPerson = Number(totalAmount)/Number($("#peopleCount").val());
    //check what would not give out NaN if the fields bill or people are not digits
    if ((isNaN($("#totalBill").val())==true)||(isNaN($("#peopleCount").val())==true)){
      totalAmountPerson = 0;
      tipPerson = 0;
    }
    //Display the total tip and total amount per persons on the HTML page
    if ($("#peopleCount").val() == 1){
      $("#tipAndTotal").html("Tip: " +tipPerson.toFixed(2)+ "$ <br>"+"Total: " +totalAmountPerson.toFixed(2) +"$");
    }
    else{
      $("#tipAndTotal").html("Tip: " +tipPerson.toFixed(2)+ "$ for each <br>"+"Total: " +totalAmountPerson.toFixed(2) +"$ for each");
    }

    // request The Star Wars API People resource
    $.ajax({
      url: "https://swapi.co/api/people/" +(Math.floor(Math.random() * 88) + 1)+ "/?format=json", //url with random from 1 to 88
      success: function(data) { alert("Your waiter, " +data.name+ ", thanks you"); }, // if success Display name at h1
      error: function(data) { console.log('error data json'); } // if error log this
    })

    /*
    function peopleLoop()
    shows the number of possible IDs of People on swapi.co, additionally shows empty IDs in the specified range
    ex: https://swapi.co/api/people/17/?format=json - return 404 "Not found", but total of ids is 88
    */
    function peopleLoop(range){
      var x=1;
      for (var count=1; count<range+1; count++){
          $.ajax({ cache: false,
              url: "https://swapi.co/api/people/" +count+ "/?format=json",
              statusCode: {404: function() { console.log("IDs of People on swapi.co (in range " +range+ ") = " + (count - (x++))+". For stop this loop, comment out line 66")}},
              success: function (data) { },
          });
      }
    }
    peopleLoop(90);
  // end of click(function()
  });
//end of the ready(function()
});
