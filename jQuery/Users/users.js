$(document).ready(function() {
    $('form').submit(function(e) {
        // alert('you submitted me!');
        e.preventDefault();
        $('table tr:last').after('<tr><td>' + $('input[name=firstname]').val() + '</td><td>' + $('input[name=lastname]').val() +'</td><td>'+ $('input[name=emailaddress]').val() +'</td><td>'+ $('input[name=contactno]').val() +'</td></tr>');
    });
});
