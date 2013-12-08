$(document).ready(function() {
	if ($('#transaction_history').length === 0) {
		return false;
	}
	$.get('/transaction/find/'
		, {
			account : sessionStorage.account
		}, function (data) {
			data.forEach(function (entry) {
				console.log('each data = ', entry);
				var result = entry.result;
				var choice = entry.choice;
				$.get('/issue/find'
					, {
						id: entry.issueId
					}, function (res) {
						var title = res.title;
						var color;
						if (result === choice) {
							color = 'win';
						} else {
							color = 'lose';
						}
						var result_caption;
						if (result == 0) {
							result_caption = res.choiceOne;
						} else if (result == 1) {
							result_caption = res.choiceTwo;
						} else {
							result_caption = 'Not determined yet';
						}
						$('#transaction_history').append('<div class=\"' + color + '\">' + title + '&nbsp;' + result_caption + '</div>');
				});
			});
	});
});