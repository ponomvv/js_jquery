$ (function () {
    $ ('ul').before ('<p class="notice">Список обновлён!</p>');
    $ ('li.hot').prepend ('+');
    var $newListItem = $ ('<li><em>кукурузу</em>без ГМО</li>');
    $ ('li:last').after ($newListItem);
});