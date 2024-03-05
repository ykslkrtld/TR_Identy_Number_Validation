
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

    for(let i = 1; i < 10; i++){
        i % 2 ? sumOdd += Number(idNum[i-1]) : sumEven += Number(idNum[i-1])
    }
    
    let numTen = (sumOdd * 7 - sumEven) % 10

    for(let i = 0; i < 10; i++){
        sumFirstTen += Number(idNum[i])
    }

    let numEleven = sumFirstTen % 10
  
    if(idNum.length !== 11 ||
        idNum[0] === 0 ||
        idNum[9] != numTen ||
        idNum[10] != numEleven){result.textContent = "Yanlış TC Kimlik Numarası girdiniz. tekrar deneyiniz"
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
    }, 2500);
})

input.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        button.click()
    }
})