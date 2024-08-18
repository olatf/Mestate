



document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        document.getElementById('preloader').style.display = 'none'},1500)
    
})

// const inputfill = document.getElementById('day')

// inputfill.addEventListener("keypress", function(){

//     const charCode = event.charCode
//         if(charCode < 48 || charCode> 57 ){
//             event.preventDefault()
//         }

// })

const bankdetails = () =>{

    const lead = document.getElementById('bank') //popup
    const mobile = document.getElementById('cancelbank')
    const z= document.getElementById("body")
    const x= document.getElementById("class")

    if(lead.style.display == "block"){
        lead.style.display = 'none'
        z.style.filter = "blur(0px)";
        x.style.overflow = "auto";
        console.log('na me')
    }else{
        lead.style.display = 'block'
        z.style.filter = "blur(2px)";
        x.style.overflow = "hidden";
        console.log('no be me')
    }

}



let btns = document.querySelectorAll('.form-links');

btns.forEach((btn) => { 
    btn.addEventListener('click', ()=>{
        btns.forEach( (b) => b.classList.remove('active') )
        btn.classList.add('active')

    })
})



const dos = document.querySelectorAll('.dam')
dos.forEach( (does) => {
    const big = does.querySelector('i')
    const bigs = does.querySelectorAll('i')[1]

    const hovertext = does.querySelector('#hover-text')
    const hovertext2 = does.querySelector('#hover-text2')
    big.addEventListener('mouseover', ()=>{ hovertext.style.display = 'block'})
    big.addEventListener('mouseout', ()=>{ hovertext.style.display = 'none'})

    bigs.addEventListener('mouseover', ()=>{ hovertext2.style.display = 'block'})
    bigs.addEventListener('mouseout', ()=>{ hovertext2.style.display = 'none'})
})


let btnx = document.querySelectorAll('.shine');

btnx.forEach((btn) => { 
    btn.addEventListener('click', ()=>{
        btnx.forEach( (b) => b.classList.remove('dart') )
        btn.classList.add('dart')

    })
})

const fist = () =>{

    const lead = document.getElementById('lead')
    const mobile = document.getElementById('mobile')
    const z= document.getElementById("body")
    const x= document.getElementById("class")

    if(mobile.style.display == "block"){
        mobile.style.display = 'none'
        z.style.filter = "blur(0px)";
        x.style.overflow = "auto";
    }else{
        mobile.style.display = "block"
        z.style.filter = "blur(2px)";
        x.style.overflow = "hidden";
    }

}


const mediaViewer = document.querySelector('.media-viewer')
const mediaContainer = mediaViewer.querySelector('.media-container')
const mediaElements = mediaContainer.querySelectorAll('img,video')
const mediaControls = document.querySelector('.ment')

let currentIndex = 0

mediaElements[currentIndex].classList.add('dance')

mediaControls.addEventListener('click', (e) => {
    if(e.target.classList.contains('prev')){
        currentIndex--
        if(currentIndex < 0){
            currentIndex = mediaElements.length-1
        }
    }else if
        (e.target.classList.contains('next')){
            currentIndex++
            if(currentIndex >= mediaElements.length){
                currentIndex = 0
            }
        }else if (e.target.classList.contains('play-pause')){
            const currentMedia = mediaElements[currentIndex]
                if(currentMedia.tagName === 'VIDEO'){
                    if(currentMedia.paused){
                        currentMedia.play()
                    }else{
                        currentMedia.pause()
                    }

                }
        }else if (e.target.classList.contains('zoom-in')){
            mediaContainer.style.transform = 'scale(1.5)'

        }else if(e.target.classList.contains('zoom-out')){
            mediaContainer.style.transform = 'scale(1)'

        }
        mediaElements.forEach((media) => media.classList.remove('dance'))
        mediaElements[currentIndex].classList.add('dance')
})

const choice = document.getElementById('talk')
const draw = document.getElementById('inspect')
const lily = document.getElementById('pale')

choice.addEventListener('change', function(){
    if(this.checked){
        draw.style.display='block'
        lily.style.display = 'none'
    }else{
        draw.style.display='none'
        lily.style.display = 'block'
    }
} )





console.log("Developed by shadow-dev")




