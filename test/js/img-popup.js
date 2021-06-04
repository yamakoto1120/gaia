/* -------------------------- 
   Portfolio Images Popup
-------------------------- */
"use strict";
function ScrollStop() {
    return false;
}
function ScrollStart() {
    return true;
}
$(document).ready(function () {
    var isMobile = false;
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        isMobile = true;
    }
    /* --------------------------------------------------- */
    // Portfolio Images Popup - start
    /* --------------------------------------------------- */
    $('.portfolio-popup').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] 
        }
    });
    /* --------------------------------------------------- */
    // Portfolio Images Popup - end
    /* --------------------------------------------------- */
});