$(".item").click(function () {
    if ($(this).hasClass('center')) {
        $(this).removeClass('center')
    } else {
        $(this).addClass("center")
    }
})
