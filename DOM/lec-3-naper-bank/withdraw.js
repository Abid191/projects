document.getElementById('btn-withdraw').addEventListener('click',function(){
    const withdrawmoney = document.getElementById('width-money')
    const takeMoney = withdrawmoney.value;
    const NewgetMoney =parseFloat(takeMoney)
    
    // step2
    const amounWithdraw = document.getElementById('money-Withdraw')
    const preAmount = amounWithdraw.innerText
    const Total = parseFloat(preAmount)
    amounWithdraw.innerText = Total
    
    // step3
    const totalAmount = NewgetMoney + Total
    amounWithdraw.innerText = totalAmount
     
    const amountOfBalance = document.getElementById('plus-balance')
    const nowBalance = amountOfBalance.innerText
    const changeIt = parseFloat(nowBalance)

    
    

    const newAmount = changeIt - NewgetMoney
    amountOfBalance.innerText = newAmount




    // console.log()
    // const preNewAmount = parseFloat(preAmount)

    // const totalAmount = 
    withdrawmoney.value = '';
})