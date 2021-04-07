const aircraft = function (type, seat$) {
	this.type = type;
	this.seat$ = seat$;
	this.anounce = function () {
		console.log(`this a/c has ${this.seat$} seats`);
	};
};

const A320 = Object.create(aircraft);
