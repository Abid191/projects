//   btn nilam
document.getElementById('btn-submit').addEventListener('click',function(){
    // ekhon email er man nibo
    
    const emailtext = document.getElementById('user-email')
    const email = emailtext.value
   
    // ekhon password ta nibo

    const passUser = document.getElementById('user-pass')
    const pass = passUser.value

    if( email === 'abidhasan@gmail.com' && pass === 'abid')
    window.location.href= 'bank.html'
    else{
        console.log('dhuke nai')
    }
})