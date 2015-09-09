/**
 * @module GoogleMapsApi
 * @description Provide GoogleMapsApi (load if it does not exist).
 */

modules.define('i-googlemaps', ['loader_type_js', 'i-googlemaps__config', 'identify'], function(provide, loader, config, identify) {
        var win = this.global,
            apiLoadCallback = 'googleMapsLoadCallback__' + identify(),
            loaderUrl = config.url + apiLoadCallback;

        /* global google.maps */
        function doProvide() {
            /**
             * @exports
             * @type Function
             */
            provide(google.maps);
        }

        win[apiLoadCallback] = function() {
            doProvide();
        };

        typeof google !== 'undefined' && typeof google.maps !== 'undefined' ?
            doProvide() :
            loader(loaderUrl);
});
