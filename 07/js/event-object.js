$ (function () {

        $ ('li').on ('click', function (e) {
            $ ('li span').remove ();
            const date = new Date ();
            date.setTime (e.timeStamp);
            const clicked = date.toDateString ();
            $ (this).append ('<span class="date">' + clicked + ' ' + e.type + '</span>');
        });
    }
);
