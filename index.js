/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

let inputEl = document.getElementById("input");
let btnEl = document.getElementById("btn");

let lenghtEl = document.getElementById("lenght-txt")
let volumeEl = document.getElementById("volume-txt")
let massEl = document.getElementById("mass-txt")

btnEl.addEventListener("click", function() {
    let number = inputEl.value
    let meterToFeet = (number * 3.281).toFixed(3)
    let feetToMeter = (number / 3.281).toFixed(3)
    let literToGallon = (number * 0.264).toFixed(3)
    let gallonToLitter = (number / 0.264).toFixed(3)
    let kgToPound = (number * 2.204).toFixed(3)
    let poundToKg = (number / 2.204).toFixed(3)

    lenghtEl.textContent = `${number} meters = ${meterToFeet} feet
     || ${number} feet = ${feetToMeter} meters`
   
    volumeEl.textContent = `${number} liters = ${literToGallon} gallons || ${number} gallon = ${gallonToLitter} liters`

    massEl.textContent = `${number} Kg = ${kgToPound} pounds || ${number} pound = ${poundToKg} kg`
     

    
})