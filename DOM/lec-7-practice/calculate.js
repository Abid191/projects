
function getElementById(inputId){
    const incomeElement = document.getElementById(inputId)
    const incomeValue = incomeElement.value
    const incomeElementStr = parseInt(incomeValue)
    
    if(isNaN (incomeValue) || incomeValue=='' || incomeValue<0 ){
        alert ('Input OnLy Number')
        return false
    }
    else {
        return incomeElementStr
    }

}

function getElementByValue(inputValue){
    const myExpance = document.getElementById(inputValue)
    const TotalExpance = myExpance.innerText
    const TotalExpanceValue = parseInt(TotalExpance)
    return TotalExpanceValue
}

function setAllAmount(elementId,newValue){
    const MyValue = document.getElementById(elementId)
    MyValue.innerText = newValue
}

document.getElementById('calculate').addEventListener('click',function(){
   if(true){

  
    const incomeValueId = getElementById('income')
    // console.log(incomeValueId)
    const incomeFood = getElementById('food') 
    const incomeRent = getElementById('rent') 
    const incomeCloth = getElementById('cloth') 
    const salary = getElementById('saving')
    const balance = getElementById('remaining-balance')

    const myTotal = incomeFood + incomeRent + incomeCloth 

    setAllAmount('total-expense',myTotal)

    const MyBalance = incomeValueId - myTotal
    console.log(MyBalance)

    setAllAmount('balance',MyBalance)

    const nowBalance = incomeValueId*(20/100)

    setAllAmount('saving',nowBalance)

    const nowBalaceTotal = myTotal + nowBalance
    const myTotalBalance = incomeValueId - nowBalaceTotal

    setAllAmount('remaining-balance',myTotalBalance)


}
})
