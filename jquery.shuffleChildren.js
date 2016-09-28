/**
 * jquery plugin - jquery.shuffleChildren.js
 *        Jquery plugin to shuffle a html element children
 *
 * @author Leandro Soares - leandrogamedesigner@gmail.com
 */
(function($) {
    function shuffle(array) {
        var j, x, i;
        for (i = array.length; i; i--) {
            j = Math.floor(Math.random() * i);
            x = array[i - 1];
            array[i - 1] = array[j];
            array[j] = x;
        }
    }
    $.fn.shuffleChildren = function() {
        var children = this.children();
        shuffle(children);
        for (i = 0; i < children.length; i++) {
            this.append(children[i]);
        }
    };
})(jQuery);
