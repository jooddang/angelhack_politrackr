$(document).ready(function() {
	console.log(sessionStorage.account);
	if(typeof(latest) != "undefined")
	{
		console.log(latest);
	}

	$.ajax("/comment/get", {
	}).done(function(res) {
		//console.log(res);
		//alert("sign up success");
		//return false;
		window.location.replace("/signin");
	}).always(function(res) {
		//alert("sign up success");
		//window.location.replace("/signin");
		//window.location.href = "/signin";
		//return false;
	});

});

