function palindrome(str){

  var output= str.replace(/[^a-zA-Z0-9]/g, '');
var output=output.split(" ").join("");
 var newoutput=output.toLowerCase("");
     

var len=newoutput.length-1;
var addUp=0;
for(var i=0; i<newoutput.length; i++){
    if(newoutput[i]==newoutput[len-i]){
        addUp++;
    }
};
if(addUp==newoutput.length){
   return true;
}else{
    return false;
     
 }

 };

palindrome("eye");
