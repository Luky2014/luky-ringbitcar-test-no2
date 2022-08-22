input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Skull)
    basic.pause(250)
    basic.showIcon(IconNames.Skull)
    basic.pause(250)
    basic.showIcon(IconNames.Skull)
    RingbitCar.running_time(RingbitCar.Direction_run.forward, 1)
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
    basic.pause(100)
    basic.showIcon(IconNames.SmallDiamond)
    basic.pause(100)
    basic.showIcon(IconNames.Happy)
    music.setVolume(60)
    music.playMelody("G A B B - B A G ", 120)
    basic.pause(50)
    music.playMelody("B B - B A G A A ", 120)
    basic.pause(100)
    music.playMelody("B A G - G G - - ", 120)
    left = randint(-100, 100)
    right = randint(-100, 100)
    basic.pause(100)
    RingbitCar.freestyle(left, right)
})
input.onButtonPressed(Button.AB, function () {
    RingbitCar.turnleft()
    basic.pause(1000)
    RingbitCar.turnright()
    basic.pause(1000)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 360)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Ghost)
    basic.pause(250)
    basic.showIcon(IconNames.Ghost)
    basic.pause(250)
    basic.showIcon(IconNames.Ghost)
    RingbitCar.running_time(RingbitCar.Direction_run.backward, 1)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(250)
    basic.showIcon(IconNames.Heart)
    basic.pause(250)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(250)
    basic.showIcon(IconNames.Heart)
    basic.pause(250)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(250)
    basic.showIcon(IconNames.Heart)
    music.setVolume(60)
    music.playMelody("G B A G C5 B A B ", 160)
})
let right = 0
let left = 0
music.setVolume(60)
music.playMelody("C5 - C5 C5 C5 - - - ", 260)
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
RingbitCar.running_distance(RingbitCar.Direction_run.forward, 10)
basic.pause(1000)
RingbitCar.running_distance(RingbitCar.Direction_run.backward, 10)
let strip = neopixel.create(DigitalPin.P0, 2, NeoPixelMode.RGB)
basic.forever(function () {
    strip.showColor(neopixel.colors(NeoPixelColors.Red))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Blue))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Orange))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Green))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Purple))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Yellow))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Indigo))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.White))
    basic.pause(500)
    strip.showColor(neopixel.colors(NeoPixelColors.Violet))
    basic.pause(500)
    strip.showRainbow(1, 360)
    basic.pause(500)
    strip.showBarGraph(0, 255)
    basic.pause(500)
})