$(document).ready(function() {
    $('img').click(function() {
        $(this).data('data-alt-src', $(this).attr('src'));
        $(this).attr('src', $(this).attr('data-alt-src'));
        $(this).attr('data-alt-src', $(this).data('data-alt-src'));
    });

    $('.Restore').click(function() {
        location.reload();
    });
});
