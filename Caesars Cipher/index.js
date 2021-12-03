function rot13(str) {
    let newStr=''
    str.split('').map((el,i)=>{
      let res=String.fromCharCode(str.charCodeAt(i)-13)
      if(/[a-zA-Z]/.test(el)){
        if(/[a-zA-Z]/.test(res))newStr+=res;
        else newStr+=String.fromCharCode(str.charCodeAt(i)+13)
      }
      else newStr+=el
    });
    return newStr
  }
  
  rot13("SERR PBQR PNZC");