const color = document.querySelector('.hex');
const generate = document.querySelector('.gg')

generate.addEventListener("click",()=>
{
    const gen = Math.random().toString(16).substring(2,8);
    color.innerHTML="#"+ gen;
    document.body.style.backgroundColor = "#" + gen;
})
