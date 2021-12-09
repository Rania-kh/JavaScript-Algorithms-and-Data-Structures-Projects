function checkCashRegister(price, cash, cid) {
  let change=(cash-price)*100;
  let totalReg=0;
  let changeArr=[]
  let newCid=[]
  let dollarVals=[1,5,10,25,100,500,1000,2000,10000]
  cid.map((el,i)=>newCid.push([el[0],el[1]*100]))
  newCid.map(el=>{totalReg+=(el[1])})

    let i=newCid.length-1
    while(i>=0&&change>0){
      let subractVal=0;
      if(cid[i][1]!=0){
      if(change>=newCid[i][1]){
        let amount=newCid[i][1];
        change-=amount;
        changeArr.push([newCid[i][0],amount/100])
        newCid[i][1]=0;
      }else{
        let amount=Math.floor(change/dollarVals[i])*dollarVals[i]
        change-=amount;
        if(amount>0)changeArr.push([newCid[i][0],amount/100])
        newCid[i][1]-=amount;
      }
      }
      --i;
    }  
    let sum=0
    newCid.map(el=>sum+=el[1])
  if(change>0) 
    return {status: "INSUFFICIENT_FUNDS", change: []}
  if(sum>0)
    return {status: "OPEN", change: changeArr.sort((a,b)=>b[1]-a[1])}
    return {status: "CLOSED", change: [...cid]} 
}

checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])