const colors =["green","red","pink","orange","black"]
const btn = document.querySelector(".btn");
const color = document.querySelector(".text");
const text = document.querySelector(".blk");

btn.addEventListener("click",function(){

    const randomnum = getrandom();
    console.log(randomnum)
    color.textContent = colors[randomnum];
    text.style.backgroundColor = colors[randomnum];
    document.body.style.backgroundColor = colors[randomnum];

})
function getrandom(){
    return Math.floor(Math.random() * colors.length);

}