var render_archive = function() {
	var save_archive = JSON.parse(localStorage.getItem('archive_content')) || [];
	for (var i = 0; i < save_archive.length; i++) {
		var data = save_archive[i]
		console.log(data)
		var archive_element = document.getElementById('archive') 
			archive_element.innerHTML += (new Date(data.date)).toLocaleString() + '<br>'
			archive_element.innerHTML += 'question: ' + data.question + '<br>'
			archive_element.innerHTML += data.answer + '<br>'
	}
	var body = document.getElementsByTagName('body')[0];
	body.style.backgroundImage = "url('blue.jpg')";		
}


render_archive()