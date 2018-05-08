
// Click on X to move to Completed
$("ul#todo").on('click', 'span', function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(100, function() {
		var todoText = $(this).text();
		var spanText = '<span><i class="fas fa-undo"></i></span>';
		$("ul#completed").append("<li>"+spanText+todoText+"</li>");
		$(this).remove();
	});
});

// Restore to To-Do
$("ul#completed").on('click', 'span', function(event) {
	event.stopPropagation();
	$(this).parent().fadeOut(100, function() {
		var todoText = $(this).text();
		var spanText = '<span><i class="fas fa-check"></i></span>';
		$("ul#todo").append("<li>"+spanText+todoText+"</li>");
		$(this).remove();
	});
});

$("input#todo[type='text']").keypress(function(event){
	if(event.which === 13) {
		// Enter Key
		var todoText = $(this).val();
		var spanText = '<span><i class="fas fa-check"></i></span>';
		// Create a new <li> and add to <ul>
		$("ul#todo").append("<li>"+spanText+todoText+"</li>");
		// Clear Input
		$(this).val("");
	}
});

$("input#completed[type='text']").keypress(function(event){
	if(event.which === 13) {
		// Enter Key
		var todoText = $(this).val();
		var spanText = '<span><i class="fas fa-undo"></i></span>';
		// Create a new <li> and add to <ul>
		$("ul#completed").append("<li>"+spanText+todoText+"</li>");
		// Clear Input
		$(this).val("");
	}
});

$("span#collapse").on("click", function() {
	if ($(this).children().attr("class") === "fas fa-minus") {
		// Collapse and set to "fas fa-plus"
		$(this).children().attr("class", "fas fa-plus");
		if($(this).attr("class") === "completed") {
			// Collapse completed input
			$("input#completed[type='text']").slideToggle();
		}
		else {
			// Collapse todo input
			$("input#todo[type='text']").slideToggle();
		}
	}
	else {
		// Expand and set to "fas fa-minus"
		$(this).children().attr("class", "fas fa-minus");
		if($(this).attr("class") === "completed") {
			// Collapse completed input
			$("input#completed[type='text']").slideToggle();
		}
		else {
			// Collapse todo input
			$("input#todo[type='text']").slideToggle();
		}
	}
});