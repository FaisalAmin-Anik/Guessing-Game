let start=document.querySelector("#start");
let check=document.querySelector("#check");
let player2=document.querySelector("#player2");
let reset= document.querySelector("#reset");
let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let chance=document.querySelector("#chance");
let gameover=document.querySelector("#gameover");
let first= num1.value;
let second= num2.value;
start.addEventListener("click",()=>{
    player2.style.display="block";
    reset.style.display="inline-block";
    chance.textContent="3";
    check.style.display = "inline-block";
    gameover.style.display = "none";
})
reset.addEventListener("click",()=>{
    player2.style.display="none";
})
check.addEventListener("click",()=>{
    if(num1.value==num2.value){
        alert("Congratulations! You guessed the number correctly.");
    }else{
        let chancesLeft = parseInt(chance.textContent) - 1;
        chance.textContent = chancesLeft;
        if (chancesLeft === 0) {
            gameover.style.display = "block";
            chance.textContent = "0";
            check.style.display = "none";
        }
    }
});

