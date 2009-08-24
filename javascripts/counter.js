
$(document).ready( function() {
  $('#tweetbox').keyup(function(){ update_character_count($(this)); });
  update_character_count($('#tweetbox'));
  
  $('#save').click(function() {
    count = $('#count').text();
    tweet = $('#tweetbox').val();
    $('#drafts ul').prepend("<li><a href='#'>" + tweet + "</a></li>");
    return false;
  });
  
  $('li a').live('click', function() { 
    $('#tweetbox').val($(this).text());     
    update_character_count($('#tweetbox'));
    return false;  
  });
});

function update_character_count(clicked) {
	var length = clicked.val().length;
	count = 140 - length;
	if (count < 0) {
	  $('#count').addClass('negative');
	} else {
	  $('#count').removeClass('negative');
	}
  $('#count').html(count);
}