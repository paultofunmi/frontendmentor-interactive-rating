

$(".rating__input").click(function() {
    $(this).toggleClass("rating__input--selected")
    $(this).siblings().removeClass('rating__input--selected');
})

$('.rating__button').click(function() {

    let selectedEle = $('.rating__input--selected')
    if(selectedEle.length < 1) {
        alert("You must make a choice")
        return;
    }

    $('#rating-selection').text(selectedEle.text())
    $('.rating__body').hide();
    $('.rating__response').removeClass('rating__response--hidden')
    return false;
})