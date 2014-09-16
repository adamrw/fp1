// triple five

function triplefive() {
	for (var i=0; i<3; i++) {
			console.log("Five!");
		
	}
}
triplefive();




// last letter

function lastletter(word) {
	return word.charAt(word.length-1);

}

lastletter("hello");
lastletter("island");




// square

var square=function(number) {
	return number * number;

};
square(3);
square(5);




// negate

var negate=function(number) {
	return number * -1;

};
negate(5);
negate(8);




// toArray

var toArray=function(number1, number2, number3) {
	var numbers=[number1, number2, number3];
		return numbers;


};
toArray(1,2,3);




// startsWithA

var startsWithA=function(word) {
	return word.charAt(0) === "a";
};

startsWithA("aardvark");
startsWithA("bitch");




// excite

var excite=function(word) {
	return word + "!!!";
};

excite("yes");
excite("no");




// sun

var sun=function(word) {
	return word.indexOf("sun") !==-1;
};

sun('sundries');
sun('bitch');




//tiny

var tiny=function(number) {
		return number>=0 && number<=1;
};

tiny('.3');
tiny('5');
tiny('-10');




//getSeconds

var getSeconds=function(time) {
	var parts=time.split(":");
	var	minutes=+parts[0];
	var	seconds=+parts[1];
		
	return minutes * 60 + seconds;

};

getSeconds('01:30');
getSeconds('10:25');

//get seconds using parseINt
var getSeconds=function(time) {
	var parts=time.split(":");
	var minutes=parseInt(parts[0]);
	var seconds=parseInt(parts[1]);
	return minutes * 60 + seconds;

};

getSeconds('01:30');
getSeconds('10:25');












