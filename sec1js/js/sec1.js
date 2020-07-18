//1-Write a program thatvar allow to user enter number then print it
/*
var userInput = Number(prompt("Enter Your Number")); 
console.log(userInput);

//2-Write a program that take number from user then print yes if that number can divide by 3 and 4 otherwise print no
var userInput = Number(prompt("Enter Your Number"));
if(userInput%3==0)
console.log("Yes");
else if(userInput%4==0)
console.log("NO");


//3-Write a program that allows the user to insert 2 integers then print the max 
var firstNum =Number(prompt("Enter First Number"));
var secNum=Number(prompt("Enter secandNumber"));
if(firstNum>secNum)
    console.log(firstNum);
else
console.log(secNum);
 

//4-Write a program that allows the user to insert an integer then print negative if it is negative number otherwise print positive.
var userInput = Number(prompt("Enter Your Number")); 
if(userInput <0)
console.log(`negative`);
else
console.log(`postive`);

//5- Write a program that take 3 integers from user then print the max element and the min element.
var firstNum= Number(prompt("Enter First Number")),
   secNum =Number(prompt("Enter Secand Number")),
   thirdNum=Number(prompt("Enter Secand Number"));
   //check the max number
   if(firstNum>secNum&& firstNum>thirdNum)
    console.log(firstNum);
   else if(secNum>firstNum&&secNum>thirdNum)
   console.log(secNum);
   else
   console.log(thirdNum);
      //check the min number
   if(firstNum<secNum&& firstNum<thirdNum)
   console.log(firstNum);
  else if(secNum<firstNum&&secNum<thirdNum)
  console.log(secNum);
  else
  console.log(thirdNum);
  
  //6-Write a program that allows the user to insert integer number then check If a number is oven or odd
  var userInput=Number(prompt("Ener YOur INPUT"));
  //check this input odd or even
  if(userInput%2==0)
  console.log("even");
  else
  console.log("Odd");
 
//7-Write a program that take character from user then if it is vowel chars (a,e,I,o,u) then print vowel otherwise print consonant
var userInput=prompt("Enter your character");
if(userInput=='a' ||userInput=='e' || userInput=='i'|| userInput=='o' ||userInput=='u' )
console.log("vowls");
else
console.log("consonent");

//8-Write a program that allows user to insert integer then print all numbers between 1 to that’s number
var userInput=Number(prompt("Enter Your Number"));
for(var i=1;i<=userInput;i++)
console.log(i);

//9- Write a program that allows user to insert integer then print a multiplication table up to 12.
var userInput=Number(prompt("Enter YOUR iNPUt"));
for(var i=0;i<11;i++)
{
 console.log(userInput);
userInput+=5;    
}

//10- Write a program that allows to user to insert number then print all even numbers between 1 to this number 
var userInput=Number(prompt("Enter your Number"));
for(var i=0;i<=userInput;i++)
{
   if( i&2==0){

      console.log(i);
   }
  
}

//11-Write a program that take two integers then print the power
var firstNum=Number(prompt("enter firstNumbe"));
var power=Number(prompt("enter power"));
var result=1;
for(var i=1;i<=power;i++)
{
 result*=firstNum;
}
console.log(result);

//12- Write a program to enter marks of five subjects and calculate total, average and percentage.
var firstNum=Number(prompt("enter firstNumbe"));
   secNum=Number(prompt("enter secand number")),
   tNum=Number(prompt("enter third Number")),
   fNum=Number(prompt("enter four number")),
   fiveNumber=Number(prompt("enter five number"));
   var cal=(firstNum+secNum+tNum+fNum+fiveNumber);
   var average=cal/5;
   var presentage=(average/cal)*100;
   console.log(cal);
   console.log(average);
   console.log(presentage);

//13-Write a program to input month number and print number of days in that month.
var userInput=Number(prompt("enter input user"));
switch(userInput){
   case 1:console.log("Days in Month:"+31);
   break;
   case 2:console.log("Days in Month:"+28);
   break;
   case 3:console.log("Days in Month:"+31);
   break;
   case 4:console.log("Days in Month:"+30);
   break;
    case 5:console.log("Days in Month:"+31);
    break;
    case 6:console.log("Days in Month:"+30);
    break;
    case 7:console.log("Days in Month:"+31);
    break;
    case 8:console.log("Days in Month:"+31);
    break;
    case 9:console.log("Days in Month:"+30);
    break;
    case 10:console.log("Days in Month:"+31);
    break;
    case 11:console.log("Days in Month:"+31);
    break;
    case 12:console.log("Days in Month:"+31);
    break;    
   

}

//14- Write a program to input marks of five subjectsPhysics, Chemistry, Biology, Mathematics and Computer, Find percentage and grade

var  physics =Number(prompt("Enter Your grade inPhysics")) ;
var   chemistry =Number(prompt("Enter Your grade in Chemistry,")) ;
var   biology =Number(prompt("Enter Your grade in Biology")) ;
var  mathematics =Number(prompt("Enter Your grade in Mathematics")) ;
var  computer =Number(prompt("Enter Your grade in Computer")) ;
var cal=physics+chemistry+biology+mathematics+computer;
var calOfSubject=250;
var percentage=(cal/calOfSubject)*100;
console.log(percentage);
if(percentage<=100 && percentage>=90){
   console.log("Grade A")
} else if(percentage<90 && percentage>=80){
   console.log("Grade B")
}else if(percentage<80 && percentage>=70){
   console.log("Grade c")
}
else if(percentage<70 && percentage>=60){
   console.log("Grade D")
}
else if(percentage<60 && percentage>=40){
   console.log("Grade E")
}
else{
   console.log("Grade F")
}
*/
//15- Write a program to create Simple Calculator Using switch case
var fNum=Number(prompt("ENter First name")),

 sNum=Number(prompt("enter secand NUMber")),
 symbole=prompt("Enter the sympole")  ;
 switch(symbole){
    case '+':console.log("The result of sum="+(fNum+sNum));
    break;
    case '-':console.log("the result of sub="+(fNum-sNum));
    break;
    case '*':console.log("the result of mult="+( fNum * sNum));
    break;
    case '/':
       if(sNum==0)console.log("thatis error");
       else console.log("the result of Divid="+fNum/sNum);
       break;
       case '^':
          var res=1;
          for(var i=0;i<sNum;i++){
             res*=fNum;
          }
          console.log( "The result of power="+res);
          break;
   
 }
