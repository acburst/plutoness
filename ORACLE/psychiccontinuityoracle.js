function getRandomInt(min, max) {     
	min = Math.ceil(min);     
	max = Math.floor(max);     
	return Math.floor(Math.random() * (max - min + 1)) + min; 
}


var flip_coin = function () {
	return getRandomInt(2,3)
};

var random_number = function () {
	return getRandomInt(1,9)
}

var consent = function () {
	var heads_or_tails = flip_coin ();
	var string;   
	var alexander;
	if (heads_or_tails == 2) {
		console.log ('tails, yes');
		string = "";
		var question_element = document.querySelector(".intro");
		question_element.style.display = 'block';
		var consent_element = document.getElementById("consent");
		consent_element.style.display = 'none';
		//var consent_question = document.getElementById('consent');
			//consent_question.style.display = 'none';
	}
	if (heads_or_tails == 3) {
		console.log ('heads, no');

		var change_background = random_number();
		if (change_background == 1) {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = "url('gameover.gif')";
			string = "<br><br> 'GAME OVER. <br> i don't want to play.'";
			var consent_question = document.getElementById('consent');
			consent_question.style.display = 'none';
		}	
		if (change_background == 2) {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = "url('flowerdeathdimension.gif')";
			string = "<br><br>'Do not ask; be still and accept. all things must end.'"
			var consent_question = document.getElementById('consent');
			consent_question.style.display = 'none';
		}
		if (change_background == 3) {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = "url('cocktail.gif')";
			string = "<br><br>'I just don't feel like it right now.'";
			var consent_question = document.getElementById('consent');
			consent_question.style.display = 'none';
		}
		if (change_background == 4) {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = "url('windy.gif')";
			string = "<br><br>'It is not the right time.'";
			var consent_question = document.getElementById('consent');
			consent_question.style.display = 'none';
		}
		if (change_background == 5) {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = "url('rainflowers.gif')";
			string = "<br><br>'Go away. (Come again another day.)'";
			var consent_question = document.getElementById('consent');
			consent_question.style.display = 'none';
		}
		if (change_background == 6) {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = "url('busy.gif')";
			string = "<br><br>'I'm busy.'";
			var consent_question = document.getElementById('consent');
			consent_question.style.display = 'none';
		}
		if (change_background == 7) {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = "url('nightrose.gif')";
			string = "<br><br>'Some fresh air and a walk will do you better than an Oracle ever could.'";
			var consent_question = document.getElementById('consent');
			consent_question.style.display = 'none';
		
		}
		if (change_background == 8) {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = "url('nightrose.gif')";
			string = "<br><br>'Some fresh air and a walk will do you better than an Oracle ever could.'";
			var consent_question = document.getElementById('consent');
			consent_question.style.display = 'none';
		}

		if (change_background == 9) {
			var body = document.getElementsByTagName('body')[0];
			body.style.backgroundImage = "url('busy.gif')";
			string = "<br><br>'I'm busy.'";
			var consent_question = document.getElementById('consent');
			consent_question.style.display = 'none';
		}

	}
	var consentElement = document.getElementById("no");
		consentElement.innerHTML = string
}


var three_coin_toss = function () {
	var coin1 = flip_coin ();
	var coin2 = flip_coin ();
	var coin3 = flip_coin ();
	var output = coin1 + coin2 + coin3;
	return output;
};

var make_poem = function () {
	var this_toss = three_coin_toss ();
	if (this_toss == 6) {
		console.log ('yin line, it was a 6');
	}
	if (this_toss == 7) {
		console.log ('yang line, it was a 7');
	}
	if (this_toss == 8) {
		console.log ('yin line, it was an 8');
	}
	if (this_toss == 9) {
		console.log ('yang line, it was a 9');
	}
};

var yin = '- -';
var yang = '---';

var viz_poem = function () {
	var this_toss = three_coin_toss ();
	if (this_toss == 6) {
		console.log (yin);
	}
	if (this_toss == 7) {
		console.log (yang);
	}
	if (this_toss == 8) {
		console.log (yin);
	}
	if (this_toss == 9) {
		console.log (yang);
	}
};

//console.log (yin_line[1])

var frances_text = function (hardcode_toss) {
	var this_choice
	var result
	var this_toss = three_coin_toss ();
	if (hardcode_toss) {
		this_toss = hardcode_toss;
	}
	if (yin_line.length == 0) {
		yin_line = yin_line_used;
		yin_line_used = [];
	}
	if (yang_line.length == 0) {
		yang_line = yang_line_used;
		yang_line_used = [];
	}
	if (this_toss == 6) {
		this_choice =  getRandomInt(0,yin_line.length-1);
		result = yin_line[this_choice];
		console.log (result);
		yin_line_used.push (result);
		yin_line.splice(this_choice, 1);
		console.log (yin_line,yin_line_used);
	}
	if (this_toss == 7) {
		this_choice = getRandomInt(0,yang_line.length-1);
		result = yang_line[this_choice];
		console.log (result);
		yang_line_used.push (result);
		yang_line.splice(this_choice, 1);
		console.log (yang_line,yang_line_used);
	}
	if (this_toss == 8) {
		this_choice =  getRandomInt(0,yin_line.length-1);
		result = yin_line[this_choice];
		console.log (result);
		yin_line_used.push (result);
		yin_line.splice(this_choice, 1);
		console.log (yin_line,yin_line_used);
	}
	if (this_toss == 9) {
		this_choice = getRandomInt(0,yang_line.length-1);
		result = yang_line[this_choice];
		console.log (result);
		yang_line_used.push (result);
		yang_line.splice(this_choice, 1);
		console.log (yang_line,yang_line_used);
	}
	return {result,this_toss}
};


var poem_length = 6;

var print_hex = function() {

	var body = document.getElementsByTagName('body')[0];
	body.style.backgroundImage = "url('cuppingwater.gif')";

	//var body = document.getElementsByTagName('body')[0];
	//body.style.backgroundImage = 'url(http://localhost/background.png)';

	//string = text_area.value
	var question_reprint = document.querySelector('textarea').value;
	var question_reprint_element = document.getElementById('question_reprint');
		question_reprint_element.innerHTML = 'YOU ASKED:<br>' + question_reprint;

	var answer = ''

	var question_container = document.querySelector('.intro');
	question_container.style.display = 'none';
	var new_question = document.getElementById('newquestion');
	new_question.style.display = 'block';
	var store_toss = []

	var messageElement = document.getElementById("hex");
		messageElement.innerHTML = "";

	var first_poem_text_archive = "";
		for (var i = 0; i < poem_length; i++) {
		var result_this_toss = frances_text()
		first_poem_text_archive += result_this_toss.result+"<br>";
		
		messageElement.innerHTML += result_this_toss.result+"<br>";
		store_toss.push (result_this_toss.this_toss)
	};

	var titleElement = document.getElementById("title");
		titleElement.innerHTML = get_hex_title(store_toss).title

	answer += get_hex_title(store_toss).title + '<br>'
	answer += first_poem_text_archive + '<br>'

	var second_hex = []
	var should_print_second_hex = false
	for (var i = 0; i < store_toss.length; i++) {
		var toss_value = store_toss[i]
		if (toss_value == 6) {
			second_hex.push(7);
			should_print_second_hex = true;
		}
		else if (toss_value == 9){
			second_hex.push(8);
			should_print_second_hex = true;
		}
		else {second_hex.push(toss_value)
		}
	}
	if (should_print_second_hex) {
		
		var messageElement = document.getElementById("hex2");
			messageElement.innerHTML = "";
			var poembodyelement = document.getElementById('secondpoem');
			poembodyelement.style.display = 'block';

			var second_poem_text_archive = "";
			for (var i = 0; i < second_hex.length; i++) {
			var result_this_toss = frances_text(second_hex[i])
			second_poem_text_archive += result_this_toss.result+"<br>";

			messageElement.innerHTML += result_this_toss.result+"<br>";
		};

		var titleElement = document.getElementById("title2");
		titleElement.innerHTML = get_hex_title(second_hex).title;
		
		answer += get_hex_title(second_hex).title + '<br>';
		answer += second_poem_text_archive + '<br>';
	}

	var text_area = document.querySelector('textarea');
	archive(text_area.value,answer);
}



var get_hex_title = function(toss_order) {
	var string_toss_order = ""
	for (var i = 0; i < toss_order.length; i++) {
		if (toss_order[i] % 2 == 0)  { //modulo even// 
			string_toss_order += "0"
		}
		if (toss_order[i] % 2 == 1)  { //modulo odd// 
			string_toss_order += "1"
		}
}	
	console.log(string_toss_order)

// HEXAGRAM IDENTIFIFERS //
	if (string_toss_order == '111111') {
		return {title:"HEXAGRAM 1", description:"DESCRIPTION"}
	}
	if (string_toss_order == '000000') {
		return {title:"HEXAGRAM 2", description:"DESCRIPTION"}
	}
	if (string_toss_order == '010001') {
		return {title:"HEXAGRAM 3", description:"DESCRIPTION"}
	}
	if (string_toss_order == '100010') {
		return {title:"HEXAGRAM 4", description:"DESCRIPTION"}
	}
	if (string_toss_order == '010111') {
		return {title:"HEXAGRAM 5", description:"DESCRIPTION"}
	}
	if (string_toss_order == '111010') {
		return {title:"HEXAGRAM 6", description:"DESCRIPTION"}
	}
	if (string_toss_order == '000010') {
		return {title:"HEXAGRAM 7", description:"DESCRIPTION"}
	}
	if (string_toss_order == '010000') {
		return {title:"HEXAGRAM 8", description:"DESCRIPTION"}
	}
	if (string_toss_order == '110111') {
		return {title:"HEXAGRAM 9", description:"DESCRIPTION"}
	}
	if (string_toss_order == '111011') {
		return {title:"HEXAGRAM 10", description:"DESCRIPTION"}
	}
	if (string_toss_order == '000111') {
		return {title:"HEXAGRAM 11", description:"DESCRIPTION"}
	}
	if (string_toss_order == '111000') {
		return {title:"HEXAGRAM 12", description:"DESCRIPTION"}
	}
	if (string_toss_order == '111101') {
		return {title:"HEXAGRAM 13", description:"DESCRIPTION"}
	}
	if (string_toss_order == '101111') {
		return {title:"HEXAGRAM 14", description:"DESCRIPTION"}
	}
	if (string_toss_order == '000100') {
		return {title:"HEXAGRAM 15", description:"DESCRIPTION"}
	}
	if (string_toss_order == '001000') {
		return {title:"HEXAGRAM 16", description:"DESCRIPTION"}
	}
	if (string_toss_order == '011001') {
		return {title:"HEXAGRAM 17", description:"DESCRIPTION"}
	}
	if (string_toss_order == '100110') {
		return {title:"HEXAGRAM 18", description:"DESCRIPTION"}
	}
	if (string_toss_order == '000011') {
		return {title:"HEXAGRAM 19", description:"DESCRIPTION"}
	}
	if (string_toss_order == '110000') {
		return {title:"HEXAGRAM 20", description:"DESCRIPTION"}
	}
	if (string_toss_order == '101001') {
		return {title:"HEXAGRAM 21", description:"DESCRIPTION"}
	}
	if (string_toss_order == '100101') {
		return {title:"HEXAGRAM 22", description:"DESCRIPTION"}
	}
	if (string_toss_order == '100000') {
		return {title:"HEXAGRAM 23", description:"DESCRIPTION"}
	}
	if (string_toss_order == '000001') {
		return {title:"HEXAGRAM 24", description:"DESCRIPTION"}
	}
	if (string_toss_order == '111001') {
		return {title:"HEXAGRAM 25", description:"DESCRIPTION"}
	}
	if (string_toss_order == '100111') {
		return {title:"HEXAGRAM 26", description:"DESCRIPTION"}
	}
	if (string_toss_order == '100001') {
		return {title:"HEXAGRAM 27", description:"DESCRIPTION"}
	}
	if (string_toss_order == '011110') {
		return {title:"HEXAGRAM 28", description:"DESCRIPTION"}
	}
	if (string_toss_order == '010010') {
		return {title:"HEXAGRAM 29", description:"DESCRIPTION"}
	}
	if (string_toss_order == '101101') {
		return {title:"HEXAGRAM 30", description:"DESCRIPTION"}
	}
	if (string_toss_order == '011100') {
		return {title:"HEXAGRAM 31", description:"DESCRIPTION"}
	}
	if (string_toss_order == '001110') {
		return {title:"HEXAGRAM 32", description:"DESCRIPTION"}
	}
	if (string_toss_order == '111100') {
		return {title:"HEXAGRAM 33", description:"DESCRIPTION"}
	}
	if (string_toss_order == '001111') {
		return {title:"HEXAGRAM 34", description:"DESCRIPTION"}
	}
	if (string_toss_order == '101000') {
		return {title:"HEXAGRAM 35", description:"DESCRIPTION"}
	}
	if (string_toss_order == '000000') {
		return {title:"HEXAGRAM 2", description:"DESCRIPTION"}
	}
	if (string_toss_order == '000101') {
		return {title:"HEXAGRAM 36", description:"DESCRIPTION"}
	}
	if (string_toss_order == '110101') {
		return {title:"HEXAGRAM 37", description:"DESCRIPTION"}
	}
	if (string_toss_order == '101011') {
		return {title:"HEXAGRAM 38", description:"DESCRIPTION"}
	}
	if (string_toss_order == '010100') {
		return {title:"HEXAGRAM 39", description:"DESCRIPTION"}
	}
	if (string_toss_order == '001010') {
		return {title:"HEXAGRAM 40", description:"DESCRIPTION"}
	}
	if (string_toss_order == '100011') {
		return {title:"HEXAGRAM 41", description:"DESCRIPTION"}
	}
	if (string_toss_order == '110001') {
		return {title:"HEXAGRAM 42", description:"DESCRIPTION"}
	}
	if (string_toss_order == '011111') {
		return {title:"HEXAGRAM 43", description:"DESCRIPTION"}
	}
	if (string_toss_order == '111110') {
		return {title:"HEXAGRAM 44", description:"DESCRIPTION"}
	}
	if (string_toss_order == '011000') {
		return {title:"HEXAGRAM 45", description:"DESCRIPTION"}
	}
	if (string_toss_order == '000110') {
		return {title:"HEXAGRAM 46", description:"DESCRIPTION"}
	}
	if (string_toss_order == '011010') {
		return {title:"HEXAGRAM 47", description:"DESCRIPTION"}
	}
	if (string_toss_order == '010110') {
		return {title:"HEXAGRAM 48", description:"DESCRIPTION"}
	}
	if (string_toss_order == '011101') {
		return {title:"HEXAGRAM 49", description:"DESCRIPTION"}
	}
	if (string_toss_order == '101110') {
		return {title:"HEXAGRAM 50", description:"DESCRIPTION"}
	}
	if (string_toss_order == '001001') {
		return {title:"HEXAGRAM 51", description:"DESCRIPTION"}
	}
	if (string_toss_order == '100100') {
		return {title:"HEXAGRAM 52", description:"DESCRIPTION"}
	}
	if (string_toss_order == '110100') {
		return {title:"HEXAGRAM 53", description:"DESCRIPTION"}
	}
	if (string_toss_order == '001011') {
		return {title:"HEXAGRAM 54", description:"DESCRIPTION"}
	}
	if (string_toss_order == '001101') {
		return {title:"HEXAGRAM 55", description:"DESCRIPTION"}
	}
	if (string_toss_order == '101100') {
		return {title:"HEXAGRAM 56", description:"DESCRIPTION"}
	}
	if (string_toss_order == '110110') {
		return {title:"HEXAGRAM 57", description:"DESCRIPTION"}
	}
	if (string_toss_order == '011011') {
		return {title:"HEXAGRAM 58", description:"DESCRIPTION"}
	}
	if (string_toss_order == '110010') {
		return {title:"HEXAGRAM 59", description:"DESCRIPTION"}
	}
	if (string_toss_order == '010011') {
		return {title:"HEXAGRAM 60", description:"DESCRIPTION"}
	}
	if (string_toss_order == '110011') {
		return {title:"HEXAGRAM 61", description:"DESCRIPTION"}
	}
	if (string_toss_order == '001100') {
		return {title:"HEXAGRAM 62", description:"DESCRIPTION"}
	}
	if (string_toss_order == '010101') {
		return {title:"HEXAGRAM 63", description:"DESCRIPTION"}
	}
	if (string_toss_order == '101010') {
		return {title:"HEXAGRAM 64", description:"DESCRIPTION"}
	}
	return {title:'error'}
}

var archive =function(question, answer) {
	var save_archive = JSON.parse(localStorage.getItem('archive_content')) || [];
	save_archive.push({
		question: question,
		answer: answer,
		date: Date.now()
	})
	localStorage.setItem('archive_content',JSON.stringify(save_archive))

}

//refresh archive
//localStorage.setItem('archive_content',null)

//var console.logHex = frances_text;
//var messageElement = document.getElementById("hex");
//messageElement.innerHTML= frances_text;
		


//console.log ();
//console.log (yin_line);
//console.log (yang_line);
//console.log (yin_line_used);
//console.log (yang_line_used);