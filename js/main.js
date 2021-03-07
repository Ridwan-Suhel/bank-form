$(document).ready(function(){
	// visa card check box
	$(".v-ch-box").change(function(){
	  let x = $(this).prop('checked');
	  $(".v-ch-box").prop('checked',false);
	  $(this).prop('checked',x);
	});


	// master card check box
	$(".m-ch-box").change(function(){
	  let y = $(this).prop('checked');
	  $('.m-ch-box').prop('checked',false);
	  $(this).prop('checked',y);
	});


	// chose one item between visa and master card
	$(".m-ch-box").click(function(){
		$(".v-ch-box").prop('checked',false);
	})
	$(".v-ch-box").click(function(){
		$(".m-ch-box").prop('checked',false);
	})


	// user title check box
	$(".u-t-ch-box").change(function(){
		// let x = $(this).prop('checked');
		$(".u-t-ch-box").prop('checked', false);
		$(this).prop('checked',true);
	})


	//gender check box
	$(".g-ch-box").change(function(){
		let x = $(this).prop('checked');
		$(".g-ch-box").prop("checked", false);
		$(this).prop("checked",x);
	});


	//gender check box
	$(".marry-ch-box").change(function(){
		// let x = $(this).prop('checked');
		$(".marry-ch-box").prop("checked", false);
		$(this).prop("checked",true);
	});


	//education qulification checkbox
	$(".edu-ch-box").change(function(){
		$(".edu-ch-box").prop("checked", false);
		$(this).prop("checked",true);
	});

	//professional checkbox
	$(".prof-ch-box").change(function(){
		$(".prof-ch-box").prop("checked", false);
		$(this).prop("checked",true);
	});

	//professional checkbox
	$(".res-ch-box").change(function(){
		let x = $(this).prop('checked');
		$(".res-ch-box").prop("checked", false);
		$(this).prop("checked",x);
	});


})
