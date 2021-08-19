const hamburger=document.querySelector(".hamburger");
const navOpt=document.querySelector(".nav-opt");
const navItem=document.querySelector(".nav-item"); 
const section=document.querySelectorAll(".section");
/*Dropbdown collapse */
function collapse(){
    for(let i of section){
        i.addEventListener("click",()=>{
            navOpt.classList.toggle("open");
        })
    }
}
collapse();
/*Dropdwon toggler */
function toggler(){
    hamburger.addEventListener("click",()=>{
    
        navOpt.classList.toggle("open");
    })
}
toggler()


