document.getElementById('btn-deposit').addEventListener('click',function(){
    const dipositfield=document.getElementById('deposit-field')
    const newdipositamount = dipositfield.value 
    const newAmount = parseFloat(newdipositamount)
    // console.log(dipositamount)

    const depositDollarElement = document.getElementById('dollar-deposit')
    const predepositTotal = depositDollarElement.innerText
    const preAmount = parseFloat(predepositTotal)
    const totalAmount =  newAmount + preAmount
    console.log(totalAmount)
    depositDollarElement.innerText = totalAmount


    // balance account

    const plusBalance = document.getElementById('plus-balance')
    const plusTotalBalance = plusBalance.innerText
    const totalBalance = parseFloat(plusTotalBalance)
    const totalNewBalance = totalBalance + newAmount
    console.log(totalNewBalance)
    plusBalance.innerText = totalNewBalance

    // empty field
    dipositfield.value = '';


})