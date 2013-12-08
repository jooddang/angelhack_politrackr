$(document).ready(function() {
	var inputObj = {};
	$("#btnSignin").click(function() {
		inputObj = {
				account: $("#email").val(),
				password: $("#password").val()
			}; 
		$.ajax("/user/find", {
			data : inputObj
		}).done(function(res) {
			//console.log(res);
			//alert("sign up success");
			//return false;
			sessionStorage.account = res.account;
			sessionStorage.userId = res.id;
			window.location.replace("/");
		}).always(function(res) {
			//alert("sign up success");
			//window.location.replace("/signin");
			//window.location.href = "/signin";
			//return false;
		});
	});
});