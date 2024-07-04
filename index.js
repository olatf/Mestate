

document.documentElement.style.setProperty('--animate-duration', '2s');

function  Openp() {

const x= document.getElementById("finger")
const y= document.getElementById("neck")
const z= document.getElementById("short")

if ( y.style.display=== "block"){
    y.style.display="none"
    x.style.display= "block"
} else{
    y.style.display="block"
    x.style.display= "none"
}

}