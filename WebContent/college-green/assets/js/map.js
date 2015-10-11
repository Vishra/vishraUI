var map;
jQuery(document).ready(function(){

    map = new GMaps({
        div: '#map',
        lat: 17.321448,
        lng: 78.520368,
    });
    map.addMarker({
        lat: 51.451573,
        lng: -2.595008,
        title: 'Address',      
        infoWindow: {
            content: '<h5 class="title">Vishra Academy</h5><p><span class="street-address">K.Srinivas Reddy Complex</span><span class="region">Near Balapur X Roads, Meerpet</span><br><span class="postal-code">500097</span><br><span class="state-name">Telangana</span><br><span class="country-name">India</span></p>'
        }
        
    });

});