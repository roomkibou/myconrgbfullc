let strip = neopixel.create(DigitalPin.P0, 1, NeoPixelMode.RGB)
let strip2 = neopixel.create(DigitalPin.P1, 1, NeoPixelMode.RGB)
basic.forever(function () {
    for (let 色相 = 0; 色相 <= 359; 色相++) {
        for (let 彩度 = 0; 彩度 <= 10; 彩度++) {
            for (let 輝度 = 0; 輝度 <= 13; 輝度++) {
                strip.showColor(neopixel.hsl(色相, 彩度, 輝度))
                strip2.showColor(neopixel.hsl(360 - 色相, 彩度, 輝度))
                basic.pause(100)
            }
        }
    }
})
