const count = document.querySelector(".count")
const generate = document.querySelector(".generateno")

generate.addEventListener("click",()=>{
    count.innerHTML=Math.floor(Math.random()*100);
})  