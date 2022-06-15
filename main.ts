let value = 0
basic.forever(function () {
    value = pins.analogReadPin(AnalogPin.P0)
    basic.showNumber(value)
    if (value > 965) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # . # . #
            # # # # #
            # . # . #
            `)
    } else if (value > 955 && value < 965) {
        basic.showLeds(`
            . # # # .
            # # # # #
            # . # . #
            . . . . .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . # # # .
            . . . . .
            . . . . .
            # # # # #
            # . # . #
            `)
    }
})
