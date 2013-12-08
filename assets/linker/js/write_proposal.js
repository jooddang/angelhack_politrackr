$(document).ready(function() {
	if ($('#subb').length == 0) {
		return false;
	}

	var submitClick = function() {
		$.get('/issue/create', {
			title: $('#title').val()
			, choiceOne: $('#choiceOne').val()
			, choiceTwo: $('#choiceTwo').val()
			, owner: $('#owner').val()
			, deadline: $('#month').val() + '/' + $('#day').val() + '/' + $('#year').val()
			}, function(data) {
				console.log('returned : ', data);
				window.location.replace('/proposal');
		});
		return false;
	}

	$('#subb').on('click', submitClick);
});