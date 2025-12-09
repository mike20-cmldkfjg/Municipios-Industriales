var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Municipios_UTM_1 = new ol.format.GeoJSON();
var features_Municipios_UTM_1 = format_Municipios_UTM_1.readFeatures(json_Municipios_UTM_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Municipios_UTM_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Municipios_UTM_1.addFeatures(features_Municipios_UTM_1);
var lyr_Municipios_UTM_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Municipios_UTM_1, 
                style: style_Municipios_UTM_1,
                popuplayertitle: 'Municipios_UTM',
                interactive: true,
    title: 'Municipios_UTM<br />\
    <img src="styles/legend/Municipios_UTM_1_0.png" /> NO<br />\
    <img src="styles/legend/Municipios_UTM_1_1.png" /> SI<br />\
    <img src="styles/legend/Municipios_UTM_1_2.png" /> <br />' });
var format_des_indus_2 = new ol.format.GeoJSON();
var features_des_indus_2 = format_des_indus_2.readFeatures(json_des_indus_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_des_indus_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_des_indus_2.addFeatures(features_des_indus_2);
var lyr_des_indus_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_des_indus_2, 
                style: style_des_indus_2,
                popuplayertitle: 'des_indus',
                interactive: true,
                title: '<img src="styles/legend/des_indus_2.png" /> des_indus'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Municipios_UTM_1.setVisible(true);lyr_des_indus_2.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Municipios_UTM_1,lyr_des_indus_2];
lyr_Municipios_UTM_1.set('fieldAliases', {'CVEGEO': 'CVEGEO', 'CVE_ENT': 'CVE_ENT', 'CVE_MUN': 'CVE_MUN', 'NOMGEO': 'NOMGEO', 'superkm': 'superkm', 'zonaind': 'zonaind', });
lyr_des_indus_2.set('fieldAliases', {'Name': 'Name', });
lyr_Municipios_UTM_1.set('fieldImages', {'CVEGEO': 'TextEdit', 'CVE_ENT': 'TextEdit', 'CVE_MUN': 'TextEdit', 'NOMGEO': 'TextEdit', 'superkm': 'TextEdit', 'zonaind': 'TextEdit', });
lyr_des_indus_2.set('fieldImages', {'Name': '', });
lyr_Municipios_UTM_1.set('fieldLabels', {'CVEGEO': 'no label', 'CVE_ENT': 'no label', 'CVE_MUN': 'no label', 'NOMGEO': 'inline label - always visible', 'superkm': 'no label', 'zonaind': 'inline label - always visible', });
lyr_des_indus_2.set('fieldLabels', {'Name': 'no label', });
lyr_des_indus_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});