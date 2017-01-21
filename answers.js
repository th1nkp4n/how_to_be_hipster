$('.option').click(function(){ $(this).find('input').prop('checked', true)})
$('.row_option').click(function(){ $(this).find('input').prop('checked', true)})

function total() {
    var score = 0;
    $('input:checked').each(function(i, obj) {
      score += parseInt($(this).val());
    });
    console.log(score);
    document.getElementById("total").innerHTML = "Your Score is:" + score;
}
