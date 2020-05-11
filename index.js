let express = require('express');
let Gpio = require('onoff').Gpio;

let relay = new Gpio(4, 'out');

let app = express();

let on = false;

app.get('/', (req, res) => {
	on=!on;
	//relay.writeSync(on ? 1 : 0);
	let results = {
		'success': true,
		'on': on
	};
	res.send(JSON.stringify(results));
});

app.listen(80, () => console.log('Server listening now.'));
