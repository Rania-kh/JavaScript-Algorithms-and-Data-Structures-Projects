function palindrome(str) {
    let newStr=''
    let answer=true;
    str.split('').map(el=>{
      if(/[A-Z]/.test(el))el=el.toLowerCase()
      if(/[a-z0-9]/.test(el))newStr=newStr+el
    })
    newStr.split('').map((el,i)=>{
      if(el!==newStr[newStr.length-1-i])answer=false
    })
    return answer;
  }
  
  palindrome("A man, a plan, a canal. Panama");