input.onButtonPressed(Button.A, function () {
    RingbitCar.freestyle(100, 50)
})
input.onButtonPressed(Button.AB, function () {
    music.playMelody("G G A - A G F B ", 150)
    music.playMelody("B A - A G F B B ", 150)
    music.playMelody("A - A G A G G G ", 150)
})
input.onButtonPressed(Button.B, function () {
    RingbitCar.brake()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
	
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
