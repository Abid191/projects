
document.getElementById('btn-withdraw').addEventListener('click',function(){
    

    const withdrawId = getElementbyId('width-money')
    const dollarDeposit = getElementByValue('money-Withdraw')

    const getTotal = withdrawId + dollarDeposit

    setTextElementbyId('money-Withdraw',getTotal)

    const newgetBalance = getElementByValue('plus-balance')
    const totalgetBalance =  newgetBalance - getTotal

    setTextElementbyId('plus-balance',totalgetBalance)
})