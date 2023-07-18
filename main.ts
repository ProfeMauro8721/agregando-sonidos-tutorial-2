function Tono_grave () {
    for (let index = 0; index < 50; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(10)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(10)
    }
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 2; index++) {
        Tono_agudo()
        Tono_grave()
    }
})
function Tono_agudo () {
    for (let index = 0; index < 50; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(1)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(1)
    }
}
input.onButtonPressed(Button.AB, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 392), music.PlaybackMode.UntilDone)
})
input.onButtonPressed(Button.B, function () {
    music._playDefaultBackground(music.builtInPlayableMelody(Melodies.Dadadadum), music.PlaybackMode.InBackground)
})
basic.showIcon(IconNames.Happy)
