console.log("hello script js");


// if( 2 > 1 ){
//   console.log("two is more than one");
//   var foo`` = 8998783;
// }




// add(2,5);



// var areaOfDisk = function( radius ){

//   return 3.1415 * radius;
// }

// areaOfDisk( 4 );

// var temperatureInCelius = 0;

// if( temperature <= 0 ){
//   // it's freezing
// }else if( temperature >= 100 ){
//   // boiling

// }
var totalSum = 5;

var add = function(a,b){
  return a +b;  
};

var multiply = function(a,b){
	return a*b;
}

var subtract = function(a,b){
	return a-b;
}

var divide = function(a,b){
	return a/b;
}

var inputHappened = function(numberInput1,stringInput){

  var inputNumber = parseInt(numberInput1);
  // var inputNumber2 = parseInt(numberInput2);

  if (stringInput === "multiply"){
  	totalSum = multiply(inputNumber,totalSum);
  }
  
  else if (stringInput === "subtract"){
  	totalSum = subtract(inputNumber,totalSum);
  }

  else if (stringInput === "divide"){
  	totalSum = divide(inputNumber,totalSum);
  }

  else if (stringInput === "add"){
  	totalSum = add(inputNumber,totalSum);
  }

    display( "Total sum is "+ totalSum );
};



/*
 * hoursWorked - number of hours worked
 *
 * input = 23
 *
 * hourlyRate(number), hoursWorked (number) --> monthlyWage (number)
 *
 * calculate a wage given the number of hours worked.
 * if it's over time, rate is time and a half.
 *
 * calculateWage(hourlyRate, hoursWorked )
 *
 * var monthlyWage = calculateWage( 15, 40  ); // will equal 600
 * var monthlyWage = calculateWage( 15, 41 ); // will equal 622.50
 *
 */

// var calculateWage =  function( hourlyRate, hoursWorked ){

//   if( hoursWorked > 40 ){

//     // take off the amount that represents the amount over 40 hours:

//     // define new data here
//     var fullWeekHours = 40;

//     var overtimeHours = hoursWorked - fullWeekHours;

//     // do the normal calculation here

//     var pay = hourlyRate * fullWeekHours;

//     var overtimePay = overtimeHours * hourlyRate * 1.5;

//     pay = pay + overtimePay

//     return pay;
//   }else{

//     var pay = hourlyRate * hoursWorked;
//     return pay;

//   }

// };