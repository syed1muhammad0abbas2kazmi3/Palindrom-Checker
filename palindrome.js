function palindrome(str) {
    const regEx = /\W|\s|_/gi;
    let nstr = str.replace(regEx, '').toLowerCase().split('');
     console.log(nstr)
    let bool=true;
   for(let i=0;i<str.length;i++){
     if(nstr[i]!==nstr[nstr.length-i-1]){
       bool=false;
     }
   }
   if(bool){
     console.log("palindrome")
     return true;
   }else{
     return false;
   }
  }
  
  console.log(palindrome("_eye"));
