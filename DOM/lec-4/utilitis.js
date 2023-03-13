function getInputValuebyId(inputId){
    const inputFiled =document.getElementById(inputId)
    const inputFiledvalue = inputFiled.value
    const inputFiledvalueString = parseFloat(inputFiledvalue)
    return inputFiledvalueString;
}

function getElementById(elementId){
    const depositDollarElement = document.getElementById(elementId)
    const predepositTotal = depositDollarElement.innerText
    const preAmount = parseFloat(predepositTotal)
    return preAmount
}

function setTextElementbyId(elementId,newValue){
    const textElement = document.getElementById(elementId)
    textElement.innerText =newValue
}