$(function () {
    $("a[rel=tooltip]")
        .tooltip({
            delay: 0,
            placement: 'right',
            trigger: 'hover'
        })
        .click(function(e) {
            e.preventDefault()
        })
});
