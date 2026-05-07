const decimal = Math.random();
const max = 10;
const randomInt = Math.floor(Math.random() * max);
let start=document.querySelector("#start");
let check=document.querySelector("#check");
let player2=document.querySelector("#player2");
let reset= document.querySelector("#reset");
let num1=document.querySelector("#num1");
let num2=document.querySelector("#num2");
let chance=document.querySelector("#chance");
let gameover=document.querySelector("#gameover");
let wrong=document.querySelector("#wrong");
let congrats=document.querySelector("#congrats");
let reveal=document.querySelector("#reveal");
let revealed=document.querySelector("#revealed");
let error1=document.querySelector("#error1");
let error2=document.querySelector("#error2");
let gen=document.querySelector("#gen");
let p1win=document.querySelector("#p1win");
let first= 0;
gen.addEventListener("click",()=>{
    first = randomInt;
    player2.style.display="block";
    gen.style.display="none";
    start.style.display="none";
    reset.style.display="inline-block";
    chance.textContent="3";
    check.style.display = "inline-block";
    gameover.style.display = "none";
    num2.value="";
    num1.value="";
    reveal.style.display = "none";
});
start.addEventListener("click",()=>{
    if (num1.value<0 || num1.value>10|| isNaN(num1.value) || num1.value=="") {
    error1.innerHTML = "Please enter a number between 0 and 10.";
    num1.value = "";
    }else{
        player2.style.display="block";
        reset.style.display="inline-block";
        chance.textContent="3";
        check.style.display = "inline-block";
        gameover.style.display = "none";
        first= num1.value;
        num1.value="";
        start.style.display="none";
        error1.innerHTML ="";
    }
})
reset.addEventListener("click",()=>{
    player2.style.display="none";
    congrats.style.display = "none";
    wrong.style.display = "none";
    start.style.display="inline-block";
    reset.style.display="none";
    gen.style.display="inline-block";
    revealed.innerHTML = "";
    p1win.style.display = "none";
})
check.addEventListener("click",()=>{
    if(num2.value<0 || num2.value>10|| isNaN(num2.value)|| num2.value=="") {
        error2.innerHTML = "Please enter a number between 0 and 10.";
        num2.value = "";
        wrong.style.display = "none";
        return;
    }else{
        error2.innerHTML = "";
        if(first==num2.value){
        congrats.style.display = "block";
        wrong.style.display = "none";
        check.style.display = "none";
    }else{
        let chancesLeft = parseInt(chance.textContent) - 1;
        chance.textContent = chancesLeft;
        wrong.style.display = "block";
        if (chancesLeft === 0) {
            gameover.style.display = "block";
            chance.textContent = "0";
            check.style.display = "none";
            wrong.style.display = "none";
            reveal.style.display = "inline-block";
            p1win.style.display = "block";
        }
    num2.value="";
    }
    }
    
});
reveal.addEventListener("click",()=>{

    revealed.innerHTML = `The number was: ${first}`;
});


