function insertDash(num) {
    var stor = [];
     var digits = (""+num).split("");
     for(var i = 0; i < digits.length; i++){
         var currentDigit = digits[i];
         console.log("currentDigit",currentDigit);
         var test = currentDigit % 2;
         if (test !== 0){
             var previousDigit = stor.slice(-1)[0]; 
             console.log("previousDigit ", previousDigit);
             if(previousDigit != undefined && previousDigit % 2 > 0 && previousDigit !=currentDigit){console.log(stor.push("-"))}
             else{console.log(stor.push(""))}
         }
 
         stor.push(currentDigit);
     }
   return stor.join("");
 }
 