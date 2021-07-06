const myForm = document.querySelector('.myForm')
const heightFeet = document.getElementById('height-feet-input')
const heightInch = document.getElementById('height-inches-input')
const weight = document.getElementById('weight-input')
const BMIFigure = document.querySelector('.BMI-figure')
const bodyStructure = document.querySelector('.body-structure')
const result = document.querySelector('.result h3')
const resetBtn = document.querySelector('reset-btn')

myForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const BMIResult = Math.round((weight.value / (((heightFeet.value * 5) + (heightInch.value)) * 2) * 703)* 10) / 10 

   console.log(BMIResult)

   BMIFigure.innerHTML = BMIResult

   if (BMIResult < 18.5) {
       bodyStructure.innerHTML = 'UNDERWEIGHT'
       bodyStructure.style.color = '#00b2f2'
   } else if (BMIResult > 18.5 && BMIResult < 24.9 ) {
        bodyStructure.innerHTML = 'NORMAL WEIGHT'
        bodyStructure.style.color = '#91d14c'
    }
    else if (BMIResult > 25 && BMIResult < 29.9 ) {
        bodyStructure.innerHTML = 'OVERWEIGHT'
        bodyStructure.style.color = '#feff05'
    } else {
        bodyStructure.innerHTML = 'OBESED'
        bodyStructure.style.color = '#fe0000'
    } 
   
   result.style.display = 'block'
})

resetBtn.addEventListener('click', () => {
    window.location.reload();
})