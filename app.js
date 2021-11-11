let firstSide = document.querySelector("#firstside");
let secondSide = document.querySelector("#secondside");
let thirdSide = document.querySelector("#thirdside");
let btn = document.querySelector(".button")



btn.addEventListener("click", validation)

    



 






let fsValue = Number (firstSide.value);
let ssValue = Number(secondSide.value);
let tsValue = Number(thirdSide.value);  
function validation (){
 
if((fsValue > 0 || ssValue > 0 || tsValue > 0 ), 
((fsValue + ssValue) > tsValue && Math.abs(fsValue - ssValue) < tsValue) ||
((fsValue + tsValue) > ssValue && Math.abs(fsValue - tsValue) < ssValue) ||
((ssValue + tsValue) > fsValue && Math.abs(ssValue - tsValue) < fsValue))
{    
    console.log("it is a triangle")
    return false;
    } else{
        console.log("It is not a triangle")
       return true;
    }
 }


 function checkTriangle (){
    let fsValue = Number (firstSide.value);
    let ssValue = Number(secondSide.value);
    let tsValue = Number(thirdSide.value);
if (fsValue == ssValue && ssValue == tsValue && fsValue == tsValue){
   console.log("This a equilateral ") }

else if (fsValue != ssValue && ssValue != tsValue && fsValue != tsValue){
  console.log("This is a scalene")
}
else if(fsValue == ssValue || fsValue == tsValue || tsValue == ssValue){
   console.log("This is an isosceles")
}
 }
 