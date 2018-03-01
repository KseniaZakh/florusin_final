function isName(name) {
	var regex = new RegExp(/^([а-яА-Яa-zA-Z _.-]{3,30})+$/);
	return regex.test(name);
	}

function isEmail(email) {
	var regex = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
	return regex.test(email);
	}
	
function isRequire() {
	if ($(".required > input").length != $(".required > input.success").length) {
		if ($("form > button").hasClass("active")) {
			$("form > button").removeClass("active");
			}
		}
	else {
		if (!$("form > button").hasClass("active")) {
			$("form > button").addClass("active");
			}
		}
	}

$(document).ready(function() {

	$(".field").on("propertychange change click keyup input paste", function() {
		var element = this;
		setTimeout(function () {
			if (!$(element).val()) {
				if ($(element).next("span").hasClass("selected")) {
					$(element).next("span").removeClass("selected");
					}
				if ($(element).hasClass("error")) {
					$(element).removeClass("error");
					}
				if ($(element).hasClass("success")) {
					$(element).removeClass("success");
					}
				}
			else {
				if (!$(element).next("span").hasClass("selected")) {
					$(element).next("span").addClass("selected");
					}
				if ($(element).parent("li").hasClass("required")) {
					if ($(element).attr("name") == "user_name") {
						var result = isName($(element).val());
						}
					if ($(element).attr("name") == "user_email") {
						var result = isEmail($(element).val());
						}
					if (!result) {
						if ($(element).hasClass("success")) {
							$(element).removeClass("success");
							}
						$(element).addClass("error");
						}
					else {
						if ($(element).hasClass("error")) {
							$(element).removeClass("error");
							}
						$(element).addClass("success");
						}
					}
				isRequire();
				}
			}, 100);
		});
		
	$("span.checkbox").on("click", function() {
		if (!$(this).hasClass("checked")) {
			$(this).addClass("checked");
			$(this).prev("input").prop("checked", true);
			$(this).prev("input").addClass("success");
			}
		else {
			$(this).removeClass("checked");
			$(this).prev("input").prop("checked", false);
			$(this).prev("input").removeClass("success");
			}
		isRequire();
		});

	$("form > button").on("click", function() {
		if ($(this).hasClass("active")) {
			$(this).parents("form").submit();
			}
		});

	return false;
	});
