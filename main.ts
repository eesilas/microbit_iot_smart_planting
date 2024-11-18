microIoT.microIoT_initDisplay()
microIoT.microIoT_ledBlank(PIN.P15)
microIoT.microIoT_setIndexColor(PIN.P15, 0, 4, 0xff0000)
microIoT.microIoT_showUserText(0, "DFRobot")
microIoT.microIoT_MQTT(
"yourIotId",
"yourIotPwd",
"yourIotTopic",
microIoT.SERVERS.China
)
basic.forever(function () {
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, 0)
    basic.pause(500)
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, 90)
    basic.pause(500)
    microIoT.microIoT_ServoRun(microIoT.aServos.S1, 180)
    basic.pause(500)
})
