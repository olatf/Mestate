

const PassShow = document.getElementById('show')
const PassHide = document.getElementById('hide')

function showme (){
    const PassInput1 = document.getElementById('password1')
    const PassInput2 = document.getElementById('password2')
    // const PassShow = document.getElementById('show')
    // const PassHide = document.getElementById('hide')

    if(PassInput1.type==='password' && PassInput2.type == 'password'){

        PassInput1.type='text'
        PassInput2.type='text'
        PassHide.style.display='none'
        PassShow.style.display='block'
    }else{

        PassInput1.type='password'
        PassInput2.type='password'
        PassHide.style.display='block'
        PassShow.style.display='none'

    }
}   

function showme2 (){
    const PassInput = document.getElementById('password')

    if(PassInput.type==='password'){

        PassInput.type='text'
        PassHide.style.display='none'
        PassShow.style.display='block'
    }else{

        PassInput.type='password'
        PassHide.style.display='block'
        PassShow.style.display='none'

    }
}   



const inputfill = document.getElementById('num')

inputfill.addEventListener('keypress', (event) =>{
    const charCode = event.charCode
    if(charCode < 48 || charCode> 57 ){
        event.preventDefault()
    }
})