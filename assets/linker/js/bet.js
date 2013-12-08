$(document).ready(function() {
	console.log(sessionStorage.account);
	if(typeof(latest) != "undefined")
	{
		console.log(latest);
	}

	$.ajax("/comment/findByIssue", {
		data : {issueId : issueId}
	}).done(function(res) {
		alert(res);
	}).always(function(res) {
		//alert("sign up success");
		//window.location.replace("/signin");
		//window.location.href = "/signin";
		//return false;
	});

	$("#btnSubmitComment").click(function() {
		$.ajax("comment/create", {
			data : {
				issueId : issueId,
				ownerId : sessionStorage.account,
				text : $("#inputComment").val()
			}
		}).done(function (res) {
			alert("comment success");
		});
	});

});

