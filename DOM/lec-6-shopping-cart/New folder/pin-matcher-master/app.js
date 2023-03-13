function getpin(){
    const pin = generatepin()
    const pinStr = pin + ''
    if(pinStr.length === 4){
        return pinStr
    }
    else{
        return getpin()
    }
}

function generatepin(){
    const random = Math.round(Math.random()*10000)
    return random
}

document.getElementById('generate-pin').addEventListener('click',function(){
    const pin = getpin()

    const newPin = document.getElementById('display-pin')
    newPin.value = pin
})

document.getElementById('calculator').addEventListener('click',function(event){
     const number = event.target.innerText
     const typeNumField = document.getElementById('type-number')
     const pretypedNumber = typeNumField.value
     if(isNaN(number)){
        if(number === 'C'){
            typeNumField.value = ''
        }
        else if(number === '<'){
            const digits = pretypedNumber.split('')
            digits.pop()
            const disgitRemain = digits.join('')
            typeNumField.value = disgitRemain
        }
     }
     else{
        
        const preTypedNum =  typeNumField.value 
        const newTypeNumber = preTypedNum + number
         
        typeNumField.value = newTypeNumber
     } 

})

document.getElementById('submit-btn').addEventListener('click',function(){
    const displayPinField = document.getElementById('display-pin')
    const currentPin = displayPinField.value

    const typeNumberField = document.getElementById('type-number')
    const typeNumbers = typeNumberField.value

    const pinSuccessMsg = document.getElementById('pin-success')
    const pinFilureMsg = document.getElementById('pin-failure')
    if(typeNumbers === currentPin){
        const pinSuccessMsg = document.getElementById('pin-success')
        pinSuccessMsg.style.display = 'block'
        pinFilureMsg.style.display = 'none'
    }
    else{
        
        pinFilureMsg.style.display = 'block'
        pinSuccessMsg.style.display = 'none'
    }
})