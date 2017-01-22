$('.option').click(function(){ $(this).find('input').prop('checked', true)})
$('.row_option').click(function(){ $(this).find('input').prop('checked', true)})

SC.initialize({
  client_id: '268db33ab53f37d71aeaeb40079377ee'
});

function total() {
    var score = 0;
    $('input:checked').each(function(i, obj) {
      score += parseInt($(this).val());
    });

    var out;
    if(score >= 0 && score < 9) {
      out = "You're so mainstream. Are you even trying? Why are you here???"
    } else if(score >= 9 && score < 18) {
      out = "You're not much for the alternative scene," +
      " but you're not above listening to the occasional obscure artist that spotify recommends.";
    } else if(score >= 18 && score < 27) {
      out = "You've got the best of both worlds. By day, you love hanging out at local coffee shops. " +
      "By night, you jam out to the latest pop music by The Chainsmokers and the Weeknd.";
    } else if(score >= 27 && score < 36) {
      out = "You've got the outfit and the music taste down, the only thing left is to find the right coffee...";
    } else if(score >= 36 && score < 45){
      out = "You've got the perfect hipster aesthetic. " +
      "Your sense of fashion and inexplicable mix of refined and bleeding edge that puts Coachella to shame.";
    } else {
       out = "People's heads turn in the street to see your wide brimmed hat stolling past. "+
       "Macbook in hand, venti cappuccino in the other, you are an unstoppable force of pretentious trendiness." +
       "You are the king of hipsters, and this coffee shop is your domain.";
    }
    document.getElementById("total").innerHTML = out;
    $('html, body').animate({
        scrollTop:$('#total').offset().top},
        'slow');
    $.ajax({
   	type: 'GET',
       url: "http://api.soundcloud.com/playlists?client_id=268db33ab53f37d71aeaeb40079377ee&q=hipster",
       success: function (response) {
           console.log(response[0]["permalink_url"]);
           SC.oEmbed(response[0]["permalink_url"], {
              element: document.getElementById('playlist')
            });
       }
   });
}

$( document ).ready(function() {
	$( ".option" ).click(function() {
		$( this ).parents( ".item" ).find(".option.clicked").removeClass("clicked");
		$( this ).addClass("clicked");
	});
	$( ".row_option" ).click(function() {
		$( this ).parents( ".item" ).find(".row_option.clicked").removeClass("clicked");
		$( this ).addClass("clicked");
	});

});
