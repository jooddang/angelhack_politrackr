$(document).ready(function() {
	$("#btnSignup").click(function() {
		$.ajax("/user/create", {
			data : {
				account: $("#email").val(),
				password: $("#password").val(),
				firstName: $("#fname").val(),
				lastName: $("#lname").val(),
				region: $("#region").val(),
				gender: $(":radio[name=form-field-radio-gender]:checked").val(),
				age: $("#age").val()
			}
		}).done(function(res) {
			console.log(res);
			alert("sign up success");
			//window.location.replace("/");
		}).always(function(res) {
			//alert("sign up success");
			window.location.replace("/signin");
			//window.location.href = "/signin";
			return false;
		});
	});
});