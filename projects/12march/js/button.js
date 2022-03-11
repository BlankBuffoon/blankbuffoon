$(function () {
    var button = $('#main button.continuebutton');
    var main = $('#main');
    var clickCounter = 0;
    var clickCounterStr = 'count' + clickCounter.toString();

    button.on('click', function (e) {
        main.removeClass(clickCounterStr);
        // alert('ss')
        clickCounter++;
        clickCounterStr = 'count' + clickCounter.toString();
        main.addClass('active');
        main.addClass(clickCounterStr);
        if (clickCounter >= 12) {
            button.addClass('active')
            main.addClass('fade')
        }
        e.preventDefault();
    })
})