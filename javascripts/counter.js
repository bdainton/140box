$(document).ready( function() {
  $('#tweetbox').keyup(function(){ update_character_count($(this)); });
  var value = $.url.param("txt");
  if ((value) && (value != "")) {
    $('#tweetbox:input').val($.base64Decode(value));
  } 
  update_character_count($('#tweetbox'));
  
  $('#save').click(function() {
    var count = $('#count').text();
    var tweet = $('#tweetbox').val();
    $('#drafts ul').prepend("<li><span id=\"remove_tweet\" class=\"right ui-icon ui-icon-close\" title=\"Remove Tweet\"></span><a href=\""+ gen_url($('#tweetbox:input').val()) +"\" target=\"_blank\"><span id=\"perma_link\" class=\"right ui-icon ui-icon-extlink\" title=\"Permalink to this Tweet\"></span></a><a class=\"draft_text\" href='#'>" + tweet + "</a></li>");
    return false;
  });
  
  $('li a').live('click', function() { 
    $('#tweetbox').val($(this).text());     
    update_character_count($('#tweetbox'));
    return false;  
  });

  $('#perma_link').live('click', function() { 
    window.open($(this).parent().attr('href'));
    return false;  
  });

  $('#remove_tweet').live('click', function() { 
    drop_tweet($(this));
    return false;  
  });

  $("#sorted_drafts").sortable();
});

function gen_url(input) {
  var text = $.base64Encode(input);
  var link = "/?txt="+text
	return link;
}

function update_character_count(clicked) {
	var length = clicked.val().length;
	var count = 140 - length;
	if (count < 0) {
	  $('#count').addClass('negative');
	} else {
	  $('#count').removeClass('negative');
	}
  $('#count').html(count);
}

function drop_tweet(clicked) {
	var dad = clicked.parent();
	dad.remove();
}
