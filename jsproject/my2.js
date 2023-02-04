const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
const btn = document.querySelector(".btn");
const color = document.querySelector(".text");
const text = document.querySelector(".blk");
const text2 = document.querySelector(".bgcolor");

btn.addEventListener("click",function(){
    let hexColor ="#";
    for(let i = 0 ;i<6;i++){
        hexColor+=hex[getrandom()];
    }
    color.textContent = hexColor;
    text2.style.backgroundColor = hexColor;
    text.style.backgroundColor = hexColor;
    document.body.style.backgroundColor = hexColor;

})
function getrandom(){
    return Math.floor(Math.random() * hex.length);

}