$(document).ready(function() {

	if ($("ul.card_choiсe > li.selected").lenght!=0) {
		$("div.card").hide();
		$("div.card." + $("ul.card_choiсe > li.selected").data("class")).show();
		}
		
	$("ul.gallery > li").click(function() {
		$("ul.gallery > li").removeClass("selected");
		$(this).addClass("selected");
		$("div.card_photo > div:first-child").html($(this).html());
		});

	$("ul.card_choiсe > li").click(function() {
		if (!$(this).hasClass("selected")) {
			$("ul.card_choiсe > li").removeClass("selected");
			$(this).addClass("selected");
			$("div.card").hide();
			$("div.card." + $("ul.card_choiсe > li.selected").data("class")).show();
			}
		});
		
	return false;
	});
