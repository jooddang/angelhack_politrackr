$(document).ready(function() {
	console.log(sessionStorage.account);
	if(typeof(latest) != "undefined")
	{
		console.log(latest);
	}

	$(document).on('click','.commentLike',function() {
		var likes = +($($(this).children().get(1)).text()) + 1;
		//var $likes = $($(this).children().get(1));
		var id = $(this).parent().find("td.id").text();
		$.get('/comment/update', {
			id: id,
			like: likes
		}, function(data) {
			$("#commentLike"+data[0].id).find("span:eq(1)").text(data[0].like);
			//$like.text(likes);
			//alert(data);
		});
	});
	$(document).on('click','.commentDislike',function() {
		var dislikes = +($($(this).children().get(1)).text()) + 1;
		var id = $(this).parent().find("td.id").text();
		$.get('/comment/update', {
			id: id,
			dislike: dislikes
		}, function(data) {
			$('#commentDislike' + data[0].id).find("span:eq(1)").text(dislikes);
		});
	});


	$.ajax("/comment/findByIssue", {
		data : {issueId : issueId}
	}).done(function(res) {
		//alert(res[i].id);
		for (var i =0; i < res.length; i++) {
			var id = res[i].id;
			$('<tr><td class=\"hidden id\">'+res[i].id+'</td>'+
				'<td><div>' + res[i].account + '</div>' +
	            '<div>' + res[i].text + '</div></td>' + 
	            '<td id=\"commentLike' + res[i].id + '\" class=\"commentLike\"><span class="glyphicon glyphicon-thumbs-up"></span><span>' + res[i].like + '</span></td>' +
	            '<td id=\"commentDislike' + res[i].id + '\" class=\"commentDislike\"><span class="glyphicon glyphicon-thumbs-down"></span><span>' + res[i].dislike + '</span></td></tr>').insertAfter('#commentsTable thead');
			// $('#commentLike' + res[i].id).click(function() {
			// 	var likes = +($($('#commentLike' + id).children().get(1)).text()) + 1;
			// 	$.get('/comment/update', {
			// 		id: id,
			// 		like: likes
			// 	}, function(data) {
			// 		$($('#commentLike' + id).children().get(1)).text(likes);
			// 	});
			// });
			// $('#commentDislike' + res[i].id).click(function() {
			// 	var dislikes = +($($('#commentDislike' + res[i].id).children().get(1)).text()) + 1;
			// 	$.get('/comment/update', {
			// 		id: res[i].id,
			// 		dislike: dislikes
			// 	}, function(data) {
			// 		$($('#commentDislike' + res[i].id).children().get(1)).text(dislikes);
			// 	});
			// });
		}
			
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
				ownerId : sessionStorage.userId,
				account : sessionStorage.account,
				text : $("#inputComment").val()
			}
		}).done(function (res) {
			// alert("comment success");
			$('<tr><td class=\"hidden id\">'+res.id+'</td>'+
				'<td><div>' + sessionStorage.account + '</div>' +
	            '<div>' + $('#inputComment').val() + '</div></td>' + 
	            '<td id=\"commentLike' + res.id + '\" class=\"commentLike\"><span class="glyphicon glyphicon-thumbs-up"></span><span>' + 0 + '</span></td>' +
	            '<td id=\"commentDislike' + res.id + '\" class=\"commentDislike\"><span class="glyphicon glyphicon-thumbs-down"></span><span>0</span></td></tr>').insertAfter('#commentsTable thead');
			// $('#commentLike' + res.id).click(function() {
			// 	var likes = +($($('#commentLike' + res.id).children().get(1)).text()) + 1;
			// 	$.get('/comment/update', {
			// 		id: res.id,
			// 		like: likes
			// 	}, function(data) {
			// 		$($('#commentLike' + res.id).children().get(1)).text(likes);
			// 	});
			// });
			// $('#commentDislike' + res.id).click(function() {
			// 	var dislikes = +($($('#commentDislike' + res.id).children().get(1)).text()) + 1;
			// 	$.get('/comment/update', {
			// 		id: res.id,
			// 		dislike: dislikes
			// 	}, function(data) {
			// 		$($('#commentDislike' + res.id).children().get(1)).text(dislikes);
			// 	});
			// });
		});
	});

	$("#btnChoice1").click(function() {
		$.ajax("transaction/create", {
			data : {
				issueId : issueId,
				account : sessionStorage.account,
				amount : 100,
				choice : 1,
				result : ""
			}
		}).done(function(res) {
			alert("choice1");
		});
	});

	$("#btnChoice2").click(function() {
		$.ajax("transaction/create", {
			data : {
				issueId : issueId,
				account : sessionStorage.account,
				amount : 100,
				choice : 2,
				result : ""
			}
		}).done(function(res) {
			alert("choice2");
		});
	});


});

