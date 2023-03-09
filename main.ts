radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 3) {
        basic.showString("3")
    } else if (receivedNumber == 4) {
        basic.showString("4")
    } else {
        basic.showString("")
    }
})
radio.setGroup(19)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    basic.pause(100)
    basic.showIcon(IconNames.SmallHeart)
    basic.pause(100)
})
