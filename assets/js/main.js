const bpm = document.getElementById("bpm")
const h1 = document.querySelector("h2")
const play = document.getElementById("play")
const audio = document.querySelector("audio")
const inputbox = document.getElementById("boxNumber")

let currentBpm = 40
let isPlayng = false
let timer = null


function tick() {

    audio.currentTime = 0
    audio.play()
}

inputbox.addEventListener("input", () => {

    if (inputbox.value >= 40 && inputbox.value <= 220) {
        currentBpm = inputbox.value
        h1.innerHTML = inputbox.value + " Bpm"
        if (isPlayng) {
            clearInterval(timer)
            timer = setInterval(tick, (60 * 1000) / currentBpm)
        }
    }



    /*     if(boxNumber>40 && boxNumber<221){ 
            h1.innerHTML=boxNumber + " Bpm"
            timer = setInterval(tick,(60*1000)/boxNumber)
            const boxNumber = document.getElementById("boxNumber").value
            console.log(boxNumber) */

})

bpm.addEventListener("change", function () {

    h1.innerHTML = this.value + " Bpm"
    currentBpm = parseInt(this.value)
    if (isPlayng) {
        clearInterval(timer)
        timer = setInterval(tick, (60 * 1000) / currentBpm)
    }
})

play.addEventListener("click", function () {


    if (isPlayng) {
        clearInterval(timer)
        play.innerHTML = "play"
    } else {
        tick()
        play.innerHTML = "stop"
        timer = setInterval(tick, (60 * 1000) / currentBpm)

    }
    isPlayng = !isPlayng
})
