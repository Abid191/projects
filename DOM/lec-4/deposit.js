

document.getElementById('btn-deposit').addEventListener('click',function(){
   


    const newInputValueId = getInputValuebyId('deposit-field')
    const newelementValue = getElementById('dollar-deposit')
    
    const newdepositTotal = newInputValueId + newelementValue

    setTextElementbyId('dollar-deposit',newdepositTotal)

    const preBalance = getElementById('plus-balance')
    const newBalance = preBalance + newdepositTotal

    setTextElementbyId('plus-balance',newBalance)
    
})