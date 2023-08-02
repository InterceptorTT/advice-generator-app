const dice = document.querySelector("#icon-dice");
const adviceNum = document.querySelector("#adviceNumber");
const advice = document.querySelector("#advice");


dice.addEventListener("click", () => {

    fetch("https://api.adviceslip.com/advice")
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        
        
        adviceNum.innerHTML = `advice #${data.slip.id}`;
        advice.innerHTML = `"${data.slip.advice}"`; 
    })
})