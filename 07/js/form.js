$ (function () {
    const $newItemButton = $ ('#newItemButton');
    const $newItemForm = $ ('#newItemForm');
    const $textInput = $ ('input:text');
    $newItemButton.show ();
    $newItemForm.hide ();
    $ ('#showForm').on ('click', function () {
        $newItemButton.hide ();
        $newItemForm.show ();
    });
    $newItemForm.on ('submit', function (e) {
        e.preventDefault ();
        const newText = $ ('input:text').val ();
        $ ('li:last').after ('<li>' + newText + '</li>');
        $newItemForm.hide ();
        $newItemButton.show ();
        $textInput.val ('');
    });
});