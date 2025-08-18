export const sharingStationsNoRealtimeDataLayers = [
    'any',
    ['==', ['get', 'feed_id'], 'oekostadt_renningen'],
    ['==', ['get', 'feed_id'], 'gruene-flotte_freiburg'],
    ['==', ['get', 'feed_id'], 'swu2go'],
    ['==', ['get', 'feed_id'], 'conficars_ulm'],
    ['==', ['get', 'feed_id'], 'naturenergie_sharing'],
    ['==', ['get', 'feed_id'], 'coono'],
    ['match', ['slice', ['get', 'feed_id'], 0, 10], 'stadtmobil', true, false],
    ['match', ['slice', ['get', 'feed_id'], 0, 8], 'teilauto', true, false]
];

export const sharingStationsNoRealtimeDataPopups = [
    "stadtmobil_stuttgart",     
    "stadtmobil_karlsruhe",
    "stadtmobil_suedbaden",    
    "stadtmobil_rhein-neckar",
    "teilauto_neckar-alb",
    "teilauto_biberach",
    "oekostadt_renningen",
    "gruene-flotte_freiburg",
    "swu2go",    
    "conficars_ulm",
    "naturenergie_sharing",
    "coono"
];

export const sharingStationsNoGraphQl = [
    "regiorad_stuttgart", 
    "callabike", 
    "callabike_ice", 
    "zeo_bruchsal", 
    "publibike_ch", 
    "velospot_ch", 
    "share_birrer_ch",
    "zem_ch",
    "edrivecarsharing_ch",
    "mulhouse",
    "nancy",
    "mobility_ch"
];      

export const sharingVehiclesNoGraphQl = [
    "regiorad_stuttgart",
    "callabike", 
    "callabike_ice", 
    // "pickebike_basel",
    "carvelo2go_ch"
];       