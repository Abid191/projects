function allMobilePrice(isincrise){
    const myMobile = document.getElementById('value')
    const myMobileValue = myMobile.value
    const myMobileValueInt = parseInt(myMobileValue)
    let mobilePrice
    if(isincrise ===true){
        mobilePrice = myMobileValueInt + 1
    }
    else{
        mobilePrice = myMobileValueInt - 1
    }
    myMobile.value = mobilePrice
    return mobilePrice
}
function updatePrice(mobilePrice){
    const newMobilePrice = mobilePrice * 1219
    const newMobilePriceId = document.getElementById('phone-price')
    newMobilePriceId.innerText = newMobilePrice
}

document.getElementById('phone-plus').addEventListener('click',function(){
   const mobilePrice = allMobilePrice(true)
   updatePrice(mobilePrice)

   getValueElementbyId()
})
document.getElementById('phone-minus').addEventListener('click',function(){
    const mobilePrice =  allMobilePrice(false)
    updatePrice(mobilePrice)
    getValueElementbyId()
})