$(document).ready(function() {
	$("#btnSignup").click(function() {
		var inputObj = {
				account: $("#email").val(),
				password: $("#password").val(),
				firstName: $("#fname").val(),
				lastName: $("#lname").val(),
				region: $("#region").val(),
				gender: $(":radio[name=gender]:checked").val(),
				age: $("#age").val()
			}; 
		$.ajax("/user/create", {
			data : inputObj
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
});