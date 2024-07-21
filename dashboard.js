

document.addEventListener("DOMContentLoaded", function(){
    setTimeout(function(){
        document.getElementById('preloader').style.display = 'none'},1500)
    
})



let btns = document.querySelectorAll('.form-links');

btns.forEach((btn) => { 
    btn.addEventListener('click', ()=>{
        btns.forEach( (b) => b.classList.remove('active') )
        btn.classList.add('active')

    })
})


function opentab(evnt,Tab){
    let i
    let sugar

        sugar = document.getElementsByClassName('sugar');
        for (i=0;i<sugar.length;i++){
            sugar[i].style.display="none";

        }
        document.getElementById(Tab).style.display="block";
}
document.getElementById("defaultOpen").click();




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