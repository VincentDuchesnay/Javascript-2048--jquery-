document.addEventListener("DOMContentLoaded", function(){


	var rand;
	function random2(){
		check = rand;
		rand = Math.floor(Math.random() * 16 + 1);
		var gen = Math.floor(Math.random() * 2)+1;
		var resultgen = gen * 2;
		var randcible = $('#'+rand);
		if(randcible.text() != ""){
			random2();
		}

		else{
			randcible.html(resultgen);
		}

	}

	random2();
	random2();

	function color() {
		for (var i = 1; i < 17; i++){
			if ($('#'+i).text() == 2){
				$('#'+i).css("background-color", "#eee4da")
			}
			else if ($('#'+i).text() == 4){
				$('#'+i).css("background-color", "#ede0c8")
			}
			else if ($('#'+i).text() == 8){
				$('#'+i).css("background-color", "#f2b179")
			}
			else if ($('#'+i).text() == 16){
				$('#'+i).css("background-color", "#f59563")
			}
			else if ($('#'+i).text() == 32){
				$('#'+i).css("background-color", "#f67c5f")
			}
			else if ($('#'+i).text() == 64){
				$('#'+i).css("background-color", "#f65e3b")
			}
			else if ($('#'+i).text() == 128){
				$('#'+i).css("background-color", "#edcf72")
			}
			else if ($('#'+i).text() == 256){
				$('#'+i).css("background-color", "#edcc61")
			}
			else if ($('#'+i).text() == 512){
				$('#'+i).css("background-color", "#edc850")
			}
			else if ($('#'+i).text() == 1024){
				$('#'+i).css("background-color", "#edc53f")
			}
			else if ($('#'+i).text() == 2048){
				$('#'+i).css("background-color", "#edc22e")
			}
			else if ($('#'+i).text() == 4096){
				$('#'+i).css("background-color", "#edc22e")
			}
			else if ($('#'+i).text() == 8192){
				$('#'+i).css("background-color", "#edc22e")
			}
			else if ($('#'+i).text() == 16384){
				$('#'+i).css("background-color", "#edc22e")
			}
			else if ($('#'+i).text() == ""){
				$('#'+i).css("background-color", "pink")
			}
		}
	}
	color();

	var checkmove = 0;
	var checkright = 0;
	var checkleft = 0;
	var checkup = 0;
	var checkdown = 0;
	var score = 0;
	document.onkeydown = function (event) {
		if (event.keyCode === 38) {
			moveUp();
			addUp();
			if(checkmove == 1){
				random2();
				checkmove = 0;
			}
			if (checkup == 1 && checkright == 1 && checkdown == 1 && checkleft == 1){
				gameover();
			}
			color();
		}
		else if (event.keyCode === 39) {
			moveRight();
			addRight();
			if(checkmove == 1){
				random2();
				checkmove = 0;
			}
			if (checkup == 1 && checkright == 1 && checkdown == 1 && checkleft == 1){
				gameover();
			}
			color();
		} 
		else if (event.keyCode === 40) {
			moveDown();
			addDown();
			if(checkmove == 1){
				random2();
				checkmove = 0;
			}
			if (checkup == 1 && checkright == 1 && checkdown == 1 && checkleft == 1){
				gameover();
			}
			color();

		} 
		else if (event.keyCode === 37) {
			moveLeft();
			addLeft();
			if(checkmove == 1){
				random2();
				checkmove = 0;
			}
			if (checkup == 1 && checkright == 1 && checkdown == 1 && checkleft == 1){
				gameover();
			}
			color();
		}
	}

	// fin keydown ///////////

	function gameover(){
		$("#over").css("background-color", "black");
		$("#over").css("display", "block");
		$('#gameover').text('Game Over !');
		$('#retry').css("display", "block");
	}

	function wingame(){
		$("#win").css("background-color", "white");
		$("#win").css("display", "block");
		$('#gamewin').text('You win !');
		$('#retrywin').css("display", "block");
	}

	function checker(){
		for (var i = 1; i < 17; i++){
			if ($('#'+i).text() != ""){
				checkempty = 1;
			}
			else{
				checkempty = 0;
			}
		}
	}

	function moveDown(){
		for (var i = 1; i < 13; i++){
			var ciblage = $('#'+i);
			var content = ciblage.text();

			if ($('#'+i).text() != ""){	
				if($('#'+(i+4)).text() == ""){	
					var next = i+4;
					var move = $('#'+next);
					move.html(content);
					ciblage.text("");
					checkmove = 1;
					moveDown();
				}
			}
		}
		if (checkmove == 0){
			checkdown = 1;
		}

		else if (checkmove == 1){
			checkdown = 0
		}
	}

	function addDown(){
		for (var i = 12; i > 0; i--){
			var ciblage = $('#'+i);
			var content = ciblage.text();
			if ($('#'+i).text() != "" && $('#'+(i+4)).text() != "" && $('#'+(i+4)).text() == $('#'+i).text()){
				var next = i+4;
				var move = $('#'+next);
				move.html(content * 2);
				score = score + (content * 2);
				$('#points').text(score);
				if(content * 2 == 2048){
					wingame();
				}
				ciblage.text("");
				moveDown();
				i = i + 4;
				checkmove = 1;
			}
		}
		if (checkmove == 0){
			checkdown = 1;
		}

		else if (checkmove == 1){
			checkdown = 0
		}
	}

	function moveUp(){
		for (var i = 5; i < 17; i++){
			var ciblage = $('#'+i);
			var content = ciblage.text();

			if ($('#'+i).text() != ""){	
				if($('#'+(i-4)).text() == ""){	
					var next = i-4;
					var move = $('#'+next);
					move.html(content);
					ciblage.text("");
					checkmove = 1;
					moveUp();
				}
			}	
		}
		if (checkmove == 0){
			checkup = 1;
		}

		else if (checkmove == 1){
			checkup = 0
		}
	}

	function addUp(){
		for (var i = 5; i < 17; i++){
			var ciblage = $('#'+i);
			var content = ciblage.text();
			if ($('#'+i).text() != "" && $('#'+(i-4)).text() != "" && $('#'+(i-4)).text() == $('#'+i).text()){
				var next = i-4;
				var move = $('#'+next);
				move.html(content * 2);
				score = score + (content * 2);
				$('#points').text(score)
				if(content * 2 == 2048){
					wingame();
				}
				ciblage.text("");
				moveUp();
				i = i - 4;
				checkmove = 1;
			}
		}
		if (checkmove == 0){
			checkup = 1;
		}

		else if (checkmove == 1){
			checkup = 0
		}
	}

	function moveRight(){

		for (var i = 1; i < 4; i++){

			var last = 4;
			var ciblage = $('#'+i);
			var content = ciblage.text();
			if ($('#'+i).text() != ""){
				if ($('#'+(i+1)).text() == ""){
					var next = i+1;
					var move = $('#'+next);
					move.html($('#'+i).text());
					$('#'+i).text("");
					checkmove = 1;
					moveRight();

				}
			}

			if ($('#'+(i+4)).text() != ""){
				if ($('#'+(i+5)).text() == ""){
					var next = i+5;
					var move = $('#'+next);
					move.html($('#'+(i+4)).text());
					$('#'+(i+4)).text("");
					checkmove = 1;
					moveRight();

				}
			}

			if ($('#'+(i+8)).text() != ""){
				if ($('#'+(i+9)).text() == ""){
					var next = i+9;
					var move = $('#'+next);
					move.html($('#'+(i+8)).text());
					$('#'+(i+8)).text("");
					checkmove = 1;
					moveRight();
				}

			}

			if ($('#'+(i+12)).text() != ""){
				if ($('#'+(i+13)).text() == ""){
					var next = i+13;
					var move = $('#'+next);
					move.html($('#'+(i+12)).text());
					$('#'+(i+12)).text("");
					checkmove = 1;
					
					moveRight();

				}

			}
		}
		if (checkmove == 0){
			checkright = 1;
		}

		else if (checkmove == 1){
			checkright = 0
		}
}

function addRight(){

	for (var i = 3; i > 0; i--){
		if ($('#'+i).text() != ""){
			if ($('#'+(i+1)).text() != ""){
				if ($('#'+(i+1)).text() == $('#'+i).text()){
					var next = i+1;
					var move = $('#'+next);
					move.html($('#'+i).text() * 2);
					score = score + ($('#'+i).text() * 2);
					$('#points').text(score);
					if($('#'+i).text() * 2 == 2048){
						wingame();
					}
					$('#'+i).text("");
					moveRight();
					checkmove = 1;
					
					break;
				}


			}
		}
	}
	for (var i = 7; i > 4; i--){
		if ($('#'+(i)).text() != ""){
			if ($('#'+(i+1)).text() != ""){
				if ($('#'+(i+1)).text() == $('#'+(i)).text()){
					var next = i+1;
					var move = $('#'+next);
					move.html($('#'+(i)).text() * 2);
					score = score + ($('#'+i).text() * 2);
					$('#points').text(score);
					if($('#'+i).text() * 2 == 2048){
						wingame();
					}
					$('#'+(i)).text("");
					moveRight();
					checkmove = 1;
					
					break;
				}


			}
		}
	}
	for (var i = 11; i > 8; i--){
		if ($('#'+(i)).text() != ""){
			if ($('#'+(i+1)).text() != ""){
				if ($('#'+(i+1)).text() == $('#'+(i)).text()){
					var next = i+1;
					var move = $('#'+next);
					move.html($('#'+(i)).text() * 2);
					score = score + ($('#'+i).text() * 2);
					$('#points').text(score);
					if($('#'+i).text() * 2 == 2048){
						wingame();
					}
					$('#'+(i)).text("");
					moveRight();
					checkmove = 1;
					
					break;
				}


			}
		}
	}

	for (var i = 15; i > 12; i--){
		if ($('#'+(i)).text() != ""){
			if ($('#'+(i+1)).text() != ""){
				if ($('#'+(i+1)).text() == $('#'+(i)).text()){
					var next = i+1;
					var move = $('#'+next);
					move.html($('#'+(i)).text() * 2);
					score = score + ($('#'+i).text() * 2);
					$('#points').text(score);
					if($('#'+i).text() * 2 == 2048){
						wingame();
					}
					$('#'+(i)).text("");
					moveRight();
					checkmove = 1;
					
					break;
				}


			}
		}
	}

	if (checkmove == 0){
		checkright = 1;
	}

	else if (checkmove == 1){
		checkright = 0
	}
}


function moveLeft(){

	for (var i = 4; i > 1; i--){

		var last = 1;
		var ciblage = $('#'+i);
		var content = ciblage.text();
		if ($('#'+i).text() != ""){
			if ($('#'+(i-1)).text() == ""){
				var next = i-1;
				var move = $('#'+next);
				move.html($('#'+i).text());
				$('#'+i).text("");
				checkmove = 1;
				checkleft = 0;
				moveLeft();
			}
			else{
				checkleft = 1;
			}
		}

		if ($('#'+(i+4)).text() != ""){
			if ($('#'+(i+3)).text() == ""){
				var next = i+3;
				var move = $('#'+next);
				move.html($('#'+(i+4)).text());
				$('#'+(i+4)).text("");
				checkmove = 1;
				checkleft = 0;
				moveLeft();
			}
			else{
				checkleft = 1;
			}
		}

		if ($('#'+(i+8)).text() != ""){
			if ($('#'+(i+7)).text() == ""){
				var next = i+7;
				var move = $('#'+next);
				move.html($('#'+(i+8)).text());
				$('#'+(i+8)).text("");
				checkmove = 1;
				checkleft = 0;
				moveLeft();
			}
			else{
				checkleft = 1;
			}
		}

		if ($('#'+(i+12)).text() != ""){
			if ($('#'+(i+11)).text() == ""){
				var next = i+11;
				var move = $('#'+next);
				move.html($('#'+(i+12)).text());
				$('#'+(i+12)).text("");
				checkmove = 1;
				checkleft = 0;
				moveLeft();
			}
			else{
				checkleft = 1;
			}
		}
	}

	if (checkmove == 0){
		checkleft = 1;
	}

	else if (checkmove == 1){
		checkleft = 0
	}
}

function addLeft(){
	for (var i = 2; i < 5; i++){
		if ($('#'+i).text() != ""){
			if ($('#'+(i-1)).text() != ""){
				if ($('#'+(i-1)).text() == $('#'+i).text() != ""){
					var next = i-1;
					var move = $('#'+next);
					move.html($('#'+i).text() * 2);
					score = score + ($('#'+i).text() * 2);
					$('#points').text(score);
					if($('#'+i).text() * 2 == 2048){
						wingame();
					}
					$('#'+i).text("");
					moveLeft();
					checkmove = 1;
					checkleft = 0;
					break;
				}
				else{
					checkleft = 1;
				}

			}
		}
	}
	for (var i = 6; i < 9; i++){
		if ($('#'+i).text() != ""){
			if ($('#'+(i-1)).text() != ""){
				if ($('#'+(i-1)).text() == $('#'+i).text() != ""){
					var next = i-1;
					var move = $('#'+next);
					move.html($('#'+i).text() * 2);
					score = score + ($('#'+i).text() * 2);
					$('#points').text(score);
					if($('#'+i).text() * 2 == 2048){
						wingame();
					}
					$('#'+i).text("");
					moveLeft();
					checkmove = 1;
					checkleft = 0;
					break;
				}
				else{
					checkleft = 1;
				}

			}
		}
	}

	for (var i = 10; i < 13; i++){
		if ($('#'+i).text() != ""){
			if ($('#'+(i-1)).text() != ""){
				if ($('#'+(i-1)).text() == $('#'+i).text() != ""){
					var next = i-1;
					var move = $('#'+next);
					move.html($('#'+i).text() * 2);
					score = score + ($('#'+i).text() * 2);
					$('#points').text(score);
					if($('#'+i).text() * 2 == 2048){
						wingame();
					}
					$('#'+i).text("");
					moveLeft();
					checkmove = 1;
					checkleft = 0;
					break;
				}
				else{
					checkleft = 1;
				}

			}
		}
	}

	for (var i = 14; i < 17; i++){
		if ($('#'+i).text() != ""){
			if ($('#'+(i-1)).text() != ""){
				if ($('#'+(i-1)).text() == $('#'+i).text() != ""){
					var next = i-1;
					var move = $('#'+next);
					move.html($('#'+i).text() * 2);
					score = score + ($('#'+i).text() * 2);
					$('#points').text(score);
					if($('#'+i).text() * 2 == 2048){
						wingame();
					}
					$('#'+i).text("");
					moveLeft();
					checkmove = 1;
					checkleft = 0;
					break;
				}
				else{
					checkleft = 1;
				}

			}
		}
	}

	if (checkmove == 0){
		checkleft = 1;
	}

	else if (checkmove == 1){
		checkleft = 0
	}
}

});