$("#body").on('click', '.issueLike', function() {
	var like = +($(this).parent().find("span:eq(1)").text()) + 1;
	var id = $(this).parent().parent().find("td.id").text();
	$.ajax('/issue/update', {
		data : {
			id : id,
			like : like
		}
	}).done(function(data) {
		$("#issueLike"+data[0].id).text(data[0].like);
	});
});