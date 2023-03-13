function getElementbyId(InputId){
    const depositFiled = document.getElementById(InputId)
    const depositFiledOne = depositFiled.value
    const depositFiledTwo = parseFloat(depositFiledOne)
    depositFiled.value =''
    return depositFiledTwo
  
}

function getElementByValue(elementId){
    const depositDollarElement = document.getElementById(elementId)
    const predepositTotal = depositDollarElement.innerText;
    const preAmount = parseFloat(predepositTotal)
    return preAmount
}

function setTextElementbyId(elementId,newValue){
    const textElement = document.getElementById(elementId)
    textElement.innerText =newValue;
}