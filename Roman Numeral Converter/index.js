function convertToRoman(num) {
    let number=num.toString();
    let answer='';
    let romanNumbers=[
      ['I','II','III','IV','V','VI','VII','VIII','IX'],
      ['X','XX','XXX','XL','L','LX','LXX','LXXX','XC'],
      ['C','CC','CCC','CD','D','DC','DCC','DCCC','CM'],
      ['M','MM','MMM','MV','V','VM','VMM','VMMM','MX']
    ]
    let numArr=number.split('')
    for(let i=0;i<numArr.length;i++){
      if(numArr[i]==='0')continue;
      answer+=romanNumbers[numArr.length-1-i][numArr[i]-1]
     }
     return answer
   }
   
   convertToRoman(400)