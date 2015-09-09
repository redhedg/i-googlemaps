/**
 * @module i-googlemaps__config
 * @description Configuration for GoogleMapsApi
 */

modules.define('i-googlemaps__config', function(provide) {

provide(/** @exports */{
    /**
     * URL for loading GoogleMapsApi if it does not exist
     */
    url : '//maps.googleapis.com/maps/api/js?v=3&sensor=false&callback=initialize'
});

});
