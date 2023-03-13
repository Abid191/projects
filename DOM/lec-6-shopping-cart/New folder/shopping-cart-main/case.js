
function updatecaseNum(increse){
    const caseValue = document.getElementById('case-plus-input')
    const preCaseValue = caseValue.value
    const preCaseValueInt = parseInt(preCaseValue)

    let nowCaseValue 
        if(increse===true){
            nowCaseValue = preCaseValueInt + 1
        }
        else nowCaseValue = preCaseValueInt - 1

    caseValue.value = nowCaseValue
    return nowCaseValue
}

function updateCaseTotal(nowCaseValue){
   const newCaseIdValue = nowCaseValue * 59
   const caseTotalValue = document.getElementById('case-dollar')
   caseTotalValue.innerText = newCaseIdValue
}
document.getElementById('btn-case-plus').addEventListener('click',function(){
    const nowCaseValue = updatecaseNum(true)
   updateCaseTotal(nowCaseValue)
   getValueElementbyId()
})
document.getElementById('btn-case-minus').addEventListener('click',function(){
    const nowCaseValue = updatecaseNum(false)
     updateCaseTotal(nowCaseValue)
     getValueElementbyId()
})

