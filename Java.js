
//business logic
function Balance(names, accountNumber,numberIdentityCard,initialDeposit) {
  this.names = names;
  this.accountNumber= accountNumber;
  this.numberIndentityCard =numberIdentityCard;
  this.initialDeposit = initialDeposit;
}
var newAccount;
Balance.prototype.fullCalc= function(deposit, withdraw,balance) {
  this.deposit= deposit;
  this.withdraw= withdraw;
  this.balance= balance;
                                                                                                                                                                                                                         

  if(this.inititialDeposit===0){
    return "you are not allowed"
  }else if (this.initialDeposit>0){ 
  balance= this.initialDeposit + this.deposit ;

   } else if (this.initialDeposit>0){
    balance= this.initialDeposit- this.withdraw;
}
return balance;

}

function store() {
$("input#Names").val("");
$("input#accountNumber").val();
$("input#numberIdentityCard").val();
$("input#InitialDeposit").val("");
$("input#newDeposit").val("");
$("input#newWithdraw").val("");
}

// user interface logic
$(document).ready(function() {
  $("form#Info").submit(function(event) {
    event.preventDefault();

    var inputtedNames = $("input#Names").val();
    var inputtedAccountNumber = $("input#accountNumber").val();
    var inputtedNumberIdentityCard = $("input#numberIdentityCard").val();
    var inputtedInitialDeposit = $("input#newInitialDeposit").val();
    newAccount = new Balance(inputtedNames, inputtedAccountNumber , inputtedNumberIdentityCard ,inputtedInitialDeposit);
    $("ul#balance").append("<li><span class='balance'>" + newAccount.names + " " + newAccount.accountNumber + " "+ newAccount.numberIndentityCard+ " " + newAccount.initialDeposit + "</span></li>")
      $( "#s").show();

});
      $("#s").submit(function(event) {
        event.preventDefault();
        // console.log(newAccount.initialDeposit)
          var inputtedDeposit = $("input#newDeposit").val();
          var inputtedWithdraw = $("input#newWithdraw").val();
          // var finalBalance = new Finalbalance(inputtedDeposit, inputtedWithdraw);
          var balance=0;

          if(inputtedDeposit.length===0){
           // alert("you are not allowed");
          }else if (inputtedDeposit.length>0){
            balance= parseInt(inputtedDeposit) +  parseInt(newAccount.initialDeposit);
          alert (balance);
        
           }
           //else{
            // alert("none")
          // }
            if (inputtedWithdraw.length>0){
            balance= parseInt(inputtedWithdraw) - parseInt(newAccount.initialDeposit);
            }
          // else if(inputtedWithdraw.length===0){
           //  alert("you are not allowed");
            
          //}
            else{
            //  alert("none");
            }
          alert(balance);
        
        
        // return balance;
            // $("ul#balance").append("<li><span class='balance'>" + finalBalance.balance + "</span></li>");
      store();

});

});