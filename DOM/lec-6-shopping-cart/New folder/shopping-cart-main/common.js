function getTextElementbyId(elementId){
    const phoneTotoalElement = document.getElementById(elementId)
    const phoneTotoalElementValue = phoneTotoalElement.innerText
    const phoneTotoalElementStr = parseInt(phoneTotoalElementValue)
    return phoneTotoalElementStr
}
function getValueElementbyId(){
    const currentPhoneTotal = getTextElementbyId('phone-price')
  const currentCaseTotal  = getTextElementbyId('case-dollar')

  const currentSubTotal = currentPhoneTotal + currentCaseTotal
  setTextElementbyId('sub-total',currentSubTotal)

  const taxAmountrod = (currentSubTotal * 0.1).toFixed(2)
  const taxAmount = parseFloat(taxAmountrod)
  setTextElementbyId ('tax-amount',taxAmount) 

  const finalAmount = currentSubTotal + taxAmount

  setTextElementbyId('final-total',finalAmount)
}

function setTextElementbyId(elementId,value){
    const subtotal = document.getElementById(elementId)
    subtotal.innerText = value
}