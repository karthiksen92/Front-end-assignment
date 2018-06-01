$.ajax({
    url: 'https://restcountries.eu/rest/v2/all',
    type: "get",
    dataType: "json",

    success: function (data) {
        response = data;
        createCountry(data);
    }
});

function createCountry(data) {

    var content = $(data).filter(function (index, n) {
        return n.region === 'Europe';
    });

    for (var i = 0; i < content.length; i++) {
        $('#countries').append(
            ' <div class="col-md-3">' +
            '<div class="box box-widget widget-user">' +
            '  <div class="widget-user-header">' +
            '   <h3 class="widget-user-username country-name">' + content[i].name + '</h3>' +
            '   <h5 class="widget-user-desc">' + content[i].capital + '</h5>' +
            ' </div>' +
            ' <div class="widget-user-image">' +
            '   <img src="' + content[i].flag + ' " alt="picture">' +
            ' </div>' +
            ' <div class="box-footer">' +
            '   <div class="row">' +
            '     <div class="col-sm-4 border-right">' +
            '       <div class="description-block">' +
            '         <h5 class="description-header">' + content[i].area + '</h5>' +
            '          <span class="description-text">AREA</span>' +
            '        </div>' +
            '      </div>' +
            '      <div class="col-sm-4 border-right">' +
            '        <div class="description-block">' +
            '          <h5 class="description-header">' + content[i].currencies[0].code + '</h5>' +
            '          <span class="description-text">CURRENCY</span>' + '        </div>' +
            '      </div>' +
            '      <div class="col-sm-4">' +
            '        <div class="description-block">' +
            '          <h5 class="description-header">' + content[i].numericCode + '</h5>' +
            '          <span class="description-text">CODE</span>' +
            '        </div>' +
            '      </div>' +
            '    </div>' +
            '  </div>' +
            '  <div class="box-footer no-padding">' +
            '        <ul class="nav nav-stacked">' +
            '          <li><a href="#">Alpha Code<span class="pull-right">' + content[i].alpha3Code + '</span></a></li>' +
            '         <li><a href="#">Population <span class="pull-right">' + content[i].population + '</span></a></li>' +
            '         <li><a href="#">Location <span class="pull-right latlong">' + content[i].latlng + '</span></a></li>' +
            '         <li><a href="#">Language<span class="pull-right">' + content[i].languages[0].name + '</span></a></li>' +
            '       </ul>' +
            '     </div>' +
            '</div>' +
            '</div>'
        );
    }
}
