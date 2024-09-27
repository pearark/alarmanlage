radio.setGroup(1);

basic.forever(function () {

	let lichtwert = input.lightLevel();
    radio.sendNumber(lichtwert);
    basic.pause(500);
})
