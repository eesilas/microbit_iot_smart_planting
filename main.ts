input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P2, 250)
})
let humidity = 0
microIoT.microIoT_initDisplay()
microIoT.microIoT_ledBlank(PIN.P15)
microIoT.microIoT_setIndexColor(PIN.P15, 0, 4, 0xff0000)
microIoT.microIoT_showUserText(0, "DFRobot")
microIoT.microIoT_MQTT(
"9Vo9OLDRP2mZidOOpU8pBRy7",
"EEuuaO2qa5XrUSV2nEsqe7CveujRovuN",
"humidity/humidity",
microIoT.SERVERS.English
)
basic.forever(function () {
    humidity = pins.analogReadPin(AnalogReadWritePin.P1)
    microIoT.microIoT_showUserText(0, "Humidity" + humidity)
    microIoT.microIoT_SendMessage(convertToText(humidity), microIoT.TOPIC.topic_0)
})
