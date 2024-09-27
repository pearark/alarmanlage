serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    let empfangenerWert = serial.readLine();
    basic.showString(empfangenerWert);
    basic.pause(500);

})