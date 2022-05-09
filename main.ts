let sound_level = 0
basic.forever(function () {
    sound_level = input.soundLevel()
    led.plotBarGraph(
    sound_level,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(sound_level)
    }
})
