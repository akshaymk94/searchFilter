$(document).ready(function() {
    
    jQuery.expr[':'].contains = function(a, i, m) {
      return jQuery(a).text().toUpperCase().indexOf(m[3].toUpperCase()) >= 0;
    };
    
    $('body').on('change','#searchAll', function() {
        var searchText = $(this).val();
        $('#listPL').find('a:contains('+ searchText +')').parent().show();
        $('#listPL').find('a:not(:contains('+ searchText +'))').parent().hide();
    });
    
    $('body').on('keyup','#searchAll', function() {
        $(this).change();
    });
    
    /*$('body').on('click','#searchAll', function() {
        if($(this).val() == "") {
            $('#listPL').slideDown();
        }
    });
    
    $('body').on('blur','#searchAll', function() {
        if($(this).val() == "") {
            $('#listPL').slideUp();
        }
    });*/
});