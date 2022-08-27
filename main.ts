input.onButtonPressed(Button.A, function () {
    RingbitCar.freestyle(100, 50)
    RingbitCar.freestyle(100, 40)
    RingbitCar.freestyle(110, 30)
    RingbitCar.freestyle(120, 20)
    RingbitCar.freestyle(150, 10)
    RingbitCar.brake()
})
input.onButtonPressed(Button.AB, function () {
    music.setVolume(60)
    music.playMelody("G G A - A G F B ", 150)
    music.playMelody("B A - A G F B B ", 150)
    music.playMelody("A - A G A G G G ", 150)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.freestyle(25, 125)
    RingbitCar.running_distance(RingbitCar.Direction_run.backward, 20)
    RingbitCar.turnleft()
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 15)
    RingbitCar.brake()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    RingbitCar.running_distance(RingbitCar.Direction_run.backward, 5)
})
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
basic.showString("Hello Luky, i am Microbit!")
basic.showLeds(`
    # . # # .
    # # # # .
    # # # # #
    # # # # #
    . # # # .
    `)
music.setVolume(60)
music.playMelody("G G A - A G F B ", 150)
music.playMelody("B A - A G F B B ", 150)
music.playMelody("A - A G A G G G ", 150)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(200)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
})
