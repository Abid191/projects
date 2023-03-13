// step1
document.getElementById('btn-deposit').addEventListener('click',function(){

    const depositInputId = getElementbyId('deposit-field')
    const dollarDeposit = getElementByValue('dollar-deposit')
    console.log(depositInputId,dollarDeposit)
   
    const total =  dollarDeposit + depositInputId

    setTextElementbyId('dollar-deposit',total)

    const newBalance = getElementByValue('plus-balance')
    const totalBalance = total + newBalance

    setTextElementbyId('plus-balance',totalBalance)


 
})