$(document).ready(function(){

	//********************** THIS PART SHOUlD BE EDITED ****************//
	// Roll number goes here
	var Roll_No = 'XXXXXXXXX';
	// Pasword
	var Password = '*****';

	// Specify all the questions and answers as it is considering Uppercase and Lowercase
	var qt1 = "Question 1 goes here";
	var ans1 = "Answer for Question 1";

	var qt2 = "Question 2 goes here";
	var ans2 = "Answer for Question 2";

	var qt3 = "Question 3 goes here";
	var ans3 = "Answer for Question 3";

	//******************************************************************//

	$('#user_id').val(Roll_No);
	$('#password').val(Password);
	$('#user_id').select();
	$('#password').select();

	setTimeout(function() {
	    if($('#question').text()==qt1){
	    	$('#answer').val(ans1);
	    }
	    else if($('#question').text()==qt2){
	    	$('#answer').val(ans2);
	    }
	    else if($('#question').text()==qt3){
	    	$('#answer').val(ans3);
	    }
	    else{
	    	alert('Please reload this page !!');
	    }
	    $('input[type=submit]').click();
 	 }, 500);
});
