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
let range= document.querySelector("#range");
let setRange = document.querySelector("#setRange");
let errorRange = document.querySelector("#errorRange");
let player1 = document.querySelector("#player1");
let chancesec = document.querySelector("#chancesec");
let rangesec = document.querySelector("#rangesec");
let setChances = document.querySelector("#setChances");
let errorchance = document.querySelector("#errorchance");
let resetrange = document.querySelector("#resetrange");
let first= 0;
let rangenum =0;
let chancesnum = 0;
setRange.addEventListener("click",()=>{
if(isNaN(range.value) || range.value < 0 || range.value == ""){
    errorRange.style.display = "block";
    range.value = "";
}else{
    errorRange.style.display = "none";
    rangenum = parseInt(range.value);
    chancesec.style.display = "block";
    rangesec.style.display = "none";
    resetrange.style.display = "inline-block";

}
});
resetrange.addEventListener("click",()=>{
    rangesec.style.display = "block";
    chancesec.style.display = "none";
    player1.style.display = "none";
    player2.style.display = "none";
    resetrange.style.display = "none";
    chances.value="";
    range.value="";
    num1.disabled=false;
    num2.disabled=false;
    num1.value="";
    num2.value="";
    start.style.display="inline-block";
    congrats.style.display = "none";
    wrong.style.display = "none";
    gen.style.display = "inline-block";
    reset.style.display="none";
    p1win.style.display = "none";
    reveal.style.display = "none";
    revealed.innerHTML = "";
});
setChances.addEventListener("click",()=>{
    if(isNaN(chances.value) || chances.value < 1 || chances.value == ""){
        errorchance.innerHTML = "Please enter a number more than 0";
        chances.value = "";
    }else{
        errorchance.innerHTML = "";
        chancesnum = parseInt(chances.value);
        player1.style.display = "block";
        chancesec.style.display = "none";
    }
});
gen.addEventListener("click",()=>{
    const decimal = Math.random();
    const max = rangenum;
    const randomInt = Math.floor(Math.random() * max);
    first = randomInt;
    player2.style.display="block";
    gen.style.display="none";
    start.style.display="none";
    reset.style.display="inline-block";
    chance.textContent=`Chances Left: ${chancesnum}`;
    check.style.display = "inline-block";
    gameover.style.display = "none";
    num2.value="";
    num1.value="";
    reveal.style.display = "none";
    num1.disabled=true;
    num2.disabled=false;
});
start.addEventListener("click",()=>{
    if (num1.value<0 || num1.value > rangenum || isNaN(num1.value) || num1.value=="") {
    error1.innerHTML = `Please enter a number between 0 and ${rangenum}.`;
    num1.value = "";
    }else{
        player2.style.display="block";
        reset.style.display="inline-block";
        chance.textContent="3";
        check.style.display = "inline-block";
        gameover.style.display = "none";
        first= num1.value;
        start.style.display="none";
        error1.innerHTML ="";
        gen.style.display="none";
        num1.disabled=true;
        num2.disabled=false;
        reveal.style.display = "none";
        chance.innerHTML = `Chances Left: ${chancesnum}`;
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
    num1.disabled=false;
    num1.value="";
    chancesnum = parseInt(chances.value);
})
check.addEventListener("click",()=>{
    if(num2.value<0 || num2.value > rangenum || isNaN(num2.value) || num2.value=="") {
        error2.innerHTML = `Please enter a number between 0 and ${rangenum}.`;
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
        chancesnum -= 1;
        chance.innerHTML = `Chances Left: ${chancesnum}`;
        wrong.style.display = "block";
        if (chancesnum == 0) {
            gameover.style.display = "block";
            chance.innerHTML = "Chances Left: 0";
            check.style.display = "none";
            wrong.style.display = "none";
            reveal.style.display = "inline-block";
            p1win.style.display = "block";
            num2.disabled=true;
            chancesnum = parseInt(chances.value);
        }
    num2.value="";
    }
    }
    
});
reveal.addEventListener("click",()=>{

    revealed.innerHTML = `The number was: ${first}`;
});


