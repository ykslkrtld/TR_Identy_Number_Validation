
const input = document.querySelector("input")
const button = document.querySelector("button")
const result = document.querySelector(".sonuc")

window.onload = () =>{
    input.focus()
}

button.addEventListener("click", () => {
    
    let idNum = (input.value)
    let sumOdd = 0
    let sumEven = 0
    let sumFirstTen = 0

    for(let i = 0; i < 9; i++){
        i % 2 === 0 ? sumOdd += Number(idNum[i]) : sumEven += Number(idNum[i])
    }
    
    let numTen = (sumOdd * 7 - sumEven).toString()

    for(let i = 0; i < 10; i++){
        sumFirstTen += Number(idNum[i])
    }
    console.log(sumFirstTen);


    let numEleven = sumFirstTen.toString()
  
    if(idNum.length !== 11 ||
        idNum[0] === 0 ||
        idNum[9] !== numTen[numTen.length - 1] ||
        idNum[10] !== numEleven[numEleven.length - 1]){result.textContent = "Yanlış TC Kimlik Numarası girdiniz. tekrar deneyiniz"
        result.style.color = "red" 
    } else{
        result.textContent = `Girilen TC Kimlik No (${input.value}) geçerlidir`
        result.style.color = "green" 
    }

    setTimeout(() => {
        input.focus()
        input.value = "";
        result.textContent = "";
        result.visibility = "hidden";
    }, 4000);
})

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        button.click()
    }
})





// for(let i in idNum){
//     i % 2 ? sumEven += Number(idNum[i]) : sumOdd += Number(idNum[i])
// }