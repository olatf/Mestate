

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        document.getElementById('preloader').style.display = 'none'},1500)
    
})

const inputfill = document.querySelectorAll('#day')

inputfill.forEach((fill)=>{

    fill.addEventListener('keypress', (event) =>{
        const charCode = event.charCode
        if(charCode < 48 || charCode> 57 ){
            event.preventDefault()
        }
    })

})

console.log('am working')

console.log('Developed by shadow-dev')

const metatext = document.getElementById('metatext')

const count = document.getElementById('counted')

metatext.addEventListener('input', function() {

    // console.log('input event triggered')

    const words = this.value.split(' ')

    // console.log('words array:' , words)
    console.log('word count:' , words.length)

    count.innerText = words.length

    if ( words.length > 20 && this.value.slice(-1) !== ' '){
        this.value = words.slice(0, 20).join(' ')
        
        if ( words.length >= 20 && this.value.slice(-1) === ' '){
            this.disabled = true

            }else{

                this.disabled = false
                this.classList.add('disabled-textarea')
            }

    }

})


const metatext3 = document.getElementById('metatext3')

const count3 = document.getElementById('counted3')

metatext3.addEventListener('input', function() {

    // console.log('input event triggered')

    const words = this.value.split(' ')

    // console.log('words array:' , words)
    console.log('word count:' , words.length)

    count3.innerText = words.length

    if ( words.length > 150 && this.value.slice(-1) !== ' '){
        this.value = words.slice(0, 150).join(' ')
        
        if ( words.length >= 150 && this.value.slice(-1) === ' '){
            this.disabled = true

            }else{

                this.disabled = false
                this.classList.add('disabled-textarea')
            }

    }

})
const fist = () =>{

    const lead = document.getElementById('lead')
    const mobile = document.getElementById('mobile')
    const z= document.getElementById("body")
    const x= document.getElementById("class")

    if(mobile.style.display == "block"){
        mobile.style.display = 'none'
        lead.style.display = 'block'
        z.style.filter = "blur(0px)";
        x.style.overflow = "auto";
        console.log('na me')
    }else{
        mobile.style.display = "block"
        lead.style.display = 'none'
        z.style.filter = "blur(2px)";
        x.style.overflow = "hidden";
        console.log('no be me')
    }

}

const sdcard = document.getElementById('sdcard')

const ode = document.getElementById('ode')


sdcard.addEventListener('change', function(){
    
    const files = this.files
    if ( files.length > 5 ){
        
        ode.style.color = 'red'
        this.value= ''
    }
})