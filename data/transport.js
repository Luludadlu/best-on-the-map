// Nearby airports and train stations for all cities in the datasets
// Each entry includes lat/lng for map markers
window.DATA_TRANSPORT = {
  // === SPAIN ===
  "Barcelona": {
    airports: [
      { name: "Barcelona–El Prat Airport", code: "BCN", distance: "13 km", lat: 41.2971, lng: 2.0785 }
    ],
    trains: [
      { name: "Barcelona Sants", lines: "AVE high-speed, regional", lat: 41.3791, lng: 2.1398 },
      { name: "Passeig de Gràcia", lines: "AVE, RENFE Rodalies", lat: 41.3920, lng: 2.1648 }
    ]
  },
  "Atxondo": {
    airports: [
      { name: "Bilbao Airport", code: "BIO", distance: "35 km", lat: 43.3011, lng: -2.9106 }
    ],
    trains: [
      { name: "Durango (EuskoTren)", lines: "Euskotren, 6 km away", lat: 43.1710, lng: -2.6330 }
    ]
  },
  "Madrid": {
    airports: [
      { name: "Madrid–Barajas Airport", code: "MAD", distance: "13 km", lat: 40.4936, lng: -3.5668 }
    ],
    trains: [
      { name: "Madrid Puerta de Atocha", lines: "AVE high-speed", lat: 40.4065, lng: -3.6893 },
      { name: "Madrid Chamartín", lines: "AVE, long-distance", lat: 40.4722, lng: -3.6824 }
    ]
  },
  "Dénia": {
    airports: [
      { name: "Alicante–Elche Airport", code: "ALC", distance: "95 km", lat: 38.2822, lng: -0.5582 },
      { name: "Valencia Airport", code: "VLC", distance: "100 km", lat: 39.4893, lng: -0.4816 }
    ],
    trains: [
      { name: "Dénia TRAM station", lines: "TRAM Alicante line 9", lat: 38.8406, lng: 0.1058 }
    ]
  },

  // === FRANCE ===
  "Paris": {
    airports: [
      { name: "Charles de Gaulle Airport", code: "CDG", distance: "25 km", lat: 49.0097, lng: 2.5479 },
      { name: "Orly Airport", code: "ORY", distance: "14 km", lat: 48.7262, lng: 2.3652 }
    ],
    trains: [
      { name: "Gare du Nord", lines: "Eurostar, Thalys, TGV", lat: 48.8809, lng: 2.3553 },
      { name: "Gare de Lyon", lines: "TGV Sud-Est", lat: 48.8443, lng: 2.3735 },
      { name: "Gare de l'Est", lines: "TGV Est, ICE", lat: 48.8763, lng: 2.3594 }
    ]
  },
  "St. Barthélemy": {
    airports: [
      { name: "Gustaf III Airport", code: "SBH", distance: "2 km", lat: 17.9044, lng: -62.8436 }
    ],
    trains: []
  },

  // === ITALY ===
  "Gardone Riviera": {
    airports: [
      { name: "Verona Villafranca Airport", code: "VRN", distance: "65 km", lat: 45.3957, lng: 10.8885 },
      { name: "Milan Bergamo Airport", code: "BGY", distance: "80 km", lat: 45.6739, lng: 9.7042 }
    ],
    trains: [
      { name: "Desenzano del Garda–Sirmione", lines: "Trenitalia, 20 km", lat: 45.4642, lng: 10.5468 }
    ]
  },
  "Castel di Sangro": {
    airports: [
      { name: "Pescara Airport", code: "PSR", distance: "105 km", lat: 42.4316, lng: 14.1811 },
      { name: "Rome Fiumicino Airport", code: "FCO", distance: "170 km", lat: 41.8003, lng: 12.2389 }
    ],
    trains: [
      { name: "Castel di Sangro station", lines: "Regional line (limited)", lat: 41.7843, lng: 14.1067 }
    ]
  },
  "Rome": {
    airports: [
      { name: "Rome Fiumicino Airport", code: "FCO", distance: "30 km", lat: 41.8003, lng: 12.2389 },
      { name: "Rome Ciampino Airport", code: "CIA", distance: "15 km", lat: 41.7994, lng: 12.5949 }
    ],
    trains: [
      { name: "Roma Termini", lines: "Frecciarossa, Italo, regional", lat: 41.9009, lng: 12.5019 },
      { name: "Roma Tiburtina", lines: "Frecciarossa, Italo", lat: 41.9103, lng: 12.5290 }
    ]
  },
  "Milan": {
    airports: [
      { name: "Milan Malpensa Airport", code: "MXP", distance: "49 km", lat: 45.6306, lng: 8.7281 },
      { name: "Milan Linate Airport", code: "LIN", distance: "8 km", lat: 45.4527, lng: 9.2765 }
    ],
    trains: [
      { name: "Milano Centrale", lines: "Frecciarossa, Italo, TGV", lat: 45.4861, lng: 9.2044 },
      { name: "Milano Porta Garibaldi", lines: "Italo, regional", lat: 45.4848, lng: 9.1868 }
    ]
  },
  "Ravello": {
    airports: [
      { name: "Naples International Airport", code: "NAP", distance: "65 km", lat: 40.8860, lng: 14.2908 }
    ],
    trains: [
      { name: "Salerno station", lines: "Frecciarossa, 30 km away", lat: 40.6753, lng: 14.7714 }
    ]
  },
  "Savelletri": {
    airports: [
      { name: "Bari Karol Wojtyła Airport", code: "BRI", distance: "60 km", lat: 41.1389, lng: 16.7606 },
      { name: "Brindisi Airport", code: "BDS", distance: "45 km", lat: 40.6576, lng: 17.9470 }
    ],
    trains: [
      { name: "Fasano station", lines: "Trenitalia, 8 km away", lat: 40.8340, lng: 17.3590 }
    ]
  },

  // === UK ===
  "London": {
    airports: [
      { name: "Heathrow Airport", code: "LHR", distance: "24 km", lat: 51.4700, lng: -0.4543 },
      { name: "Gatwick Airport", code: "LGW", distance: "45 km", lat: 51.1537, lng: -0.1821 },
      { name: "London City Airport", code: "LCY", distance: "11 km", lat: 51.5048, lng: 0.0495 }
    ],
    trains: [
      { name: "London St Pancras", lines: "Eurostar, East Midlands", lat: 51.5322, lng: -0.1260 },
      { name: "London King's Cross", lines: "LNER north, East Coast", lat: 51.5320, lng: -0.1240 },
      { name: "London Paddington", lines: "GWR, Heathrow Express", lat: 51.5154, lng: -0.1755 }
    ]
  },

  // === PERU ===
  "Lima": {
    airports: [
      { name: "Jorge Chávez International Airport", code: "LIM", distance: "12 km", lat: -12.0219, lng: -77.1143 }
    ],
    trains: [
      { name: "Lima Metro Line 1", lines: "Metro", lat: -12.0565, lng: -77.0166 }
    ]
  },

  // === USA ===
  "New York": {
    airports: [
      { name: "John F. Kennedy International", code: "JFK", distance: "24 km", lat: 40.6413, lng: -73.7781 },
      { name: "LaGuardia Airport", code: "LGA", distance: "13 km", lat: 40.7769, lng: -73.8740 },
      { name: "Newark Liberty International", code: "EWR", distance: "18 km", lat: 40.6895, lng: -74.1745 }
    ],
    trains: [
      { name: "Penn Station", lines: "Amtrak, NJ Transit, LIRR", lat: 40.7506, lng: -73.9935 },
      { name: "Grand Central Terminal", lines: "Metro-North", lat: 40.7527, lng: -73.9772 }
    ]
  },
  "Canyon Point": {
    airports: [
      { name: "St. George Regional Airport", code: "SGU", distance: "130 km", lat: 37.0364, lng: -113.5103 }
    ],
    trains: []
  },

  // === MEXICO ===
  "Mexico City": {
    airports: [
      { name: "Mexico City International Airport", code: "MEX", distance: "8 km", lat: 19.4363, lng: -99.0721 },
      { name: "Felipe Ángeles International", code: "NLU", distance: "45 km", lat: 19.7581, lng: -99.0145 }
    ],
    trains: [
      { name: "Buenavista station", lines: "Tren Suburbano", lat: 19.4505, lng: -99.1536 }
    ]
  },
  "Riviera Maya": {
    airports: [
      { name: "Cancún International Airport", code: "CUN", distance: "25–80 km", lat: 21.0365, lng: -86.8771 }
    ],
    trains: [
      { name: "Tren Maya (Playa del Carmen)", lines: "Playa del Carmen / Tulum stations", lat: 20.6296, lng: -87.0739 }
    ]
  },

  // === DENMARK ===
  "Copenhagen": {
    airports: [
      { name: "Copenhagen Airport", code: "CPH", distance: "8 km", lat: 55.6181, lng: 12.6561 }
    ],
    trains: [
      { name: "København H (Central)", lines: "DSB InterCity, Øresund trains", lat: 55.6726, lng: 12.5648 }
    ]
  },

  // === THAILAND ===
  "Bangkok": {
    airports: [
      { name: "Suvarnabhumi Airport", code: "BKK", distance: "25 km", lat: 13.6900, lng: 100.7501 },
      { name: "Don Mueang Airport", code: "DMK", distance: "22 km", lat: 13.9126, lng: 100.6068 }
    ],
    trains: [
      { name: "Hua Lamphong", lines: "State Railway of Thailand", lat: 13.7380, lng: 100.5173 },
      { name: "Krung Thep Aphiwat Central", lines: "Long-distance, high-speed", lat: 13.8133, lng: 100.5131 }
    ]
  },
  "Phuket": {
    airports: [
      { name: "Phuket International Airport", code: "HKT", distance: "32 km", lat: 8.1132, lng: 98.3169 }
    ],
    trains: []
  },

  // === ARGENTINA ===
  "Buenos Aires": {
    airports: [
      { name: "Ministro Pistarini (Ezeiza)", code: "EZE", distance: "35 km", lat: -34.8222, lng: -58.5358 },
      { name: "Aeroparque Jorge Newbery", code: "AEP", distance: "5 km", lat: -34.5592, lng: -58.4156 }
    ],
    trains: [
      { name: "Retiro station", lines: "Mitre, Belgrano, San Martín lines", lat: -34.5908, lng: -58.3747 }
    ]
  },

  // === UAE ===
  "Dubai": {
    airports: [
      { name: "Dubai International Airport", code: "DXB", distance: "5 km", lat: 25.2532, lng: 55.3657 },
      { name: "Al Maktoum International", code: "DWC", distance: "55 km", lat: 24.8965, lng: 55.1614 }
    ],
    trains: [
      { name: "Dubai Metro (Union)", lines: "Red & Green lines", lat: 25.2670, lng: 55.3087 }
    ]
  },

  // === BELGIUM ===
  "Ghent": {
    airports: [
      { name: "Brussels Airport", code: "BRU", distance: "60 km", lat: 50.9014, lng: 4.4844 },
      { name: "Brussels South Charleroi", code: "CRL", distance: "95 km", lat: 50.4592, lng: 4.4538 }
    ],
    trains: [
      { name: "Gent-Sint-Pieters", lines: "IC, Thalys, TGV", lat: 51.0359, lng: 3.7108 }
    ]
  },
  "Brussels": {
    airports: [
      { name: "Brussels Airport", code: "BRU", distance: "12 km", lat: 50.9014, lng: 4.4844 },
      { name: "Brussels South Charleroi", code: "CRL", distance: "55 km", lat: 50.4592, lng: 4.4538 }
    ],
    trains: [
      { name: "Bruxelles-Midi", lines: "Eurostar, Thalys, TGV, ICE", lat: 50.8358, lng: 4.3366 },
      { name: "Bruxelles-Central", lines: "IC, regional", lat: 50.8454, lng: 4.3567 }
    ]
  },

  // === SINGAPORE ===
  "Singapore": {
    airports: [
      { name: "Changi Airport", code: "SIN", distance: "20 km", lat: 1.3644, lng: 103.9915 }
    ],
    trains: [
      { name: "MRT Raffles Place", lines: "North-South / East-West lines", lat: 1.2836, lng: 103.8516 }
    ]
  },

  // === SWITZERLAND ===
  "Fürstenau": {
    airports: [
      { name: "Zurich Airport", code: "ZRH", distance: "130 km", lat: 47.4647, lng: 8.5492 }
    ],
    trains: [
      { name: "Chur station", lines: "SBB, Rhätische Bahn, 10 km", lat: 46.8530, lng: 9.5288 }
    ]
  },
  "St. Moritz": {
    airports: [
      { name: "Engadin Airport (Samedan)", code: "SMV", distance: "5 km", lat: 46.5341, lng: 9.8841 },
      { name: "Zurich Airport", code: "ZRH", distance: "200 km", lat: 47.4647, lng: 8.5492 }
    ],
    trains: [
      { name: "St. Moritz station", lines: "Rhätische Bahn, Glacier Express, Bernina Express", lat: 46.4987, lng: 9.8435 }
    ]
  },

  // === JAPAN ===
  "Tokyo": {
    airports: [
      { name: "Narita International Airport", code: "NRT", distance: "60 km", lat: 35.7647, lng: 140.3864 },
      { name: "Haneda Airport", code: "HND", distance: "15 km", lat: 35.5494, lng: 139.7798 }
    ],
    trains: [
      { name: "Tokyo Station", lines: "Shinkansen (all lines), JR, Metro", lat: 35.6812, lng: 139.7671 },
      { name: "Shinagawa Station", lines: "Tokaido Shinkansen, JR", lat: 35.6285, lng: 139.7387 }
    ]
  },
  "Osaka": {
    airports: [
      { name: "Kansai International Airport", code: "KIX", distance: "50 km", lat: 34.4320, lng: 135.2304 },
      { name: "Osaka Itami Airport", code: "ITM", distance: "15 km", lat: 34.7855, lng: 135.4380 }
    ],
    trains: [
      { name: "Shin-Osaka Station", lines: "Tokaido/Sanyo Shinkansen", lat: 34.7336, lng: 135.5001 },
      { name: "Osaka/Umeda Station", lines: "JR, Hankyu, Hanshin", lat: 34.7024, lng: 135.4959 }
    ]
  },
  "Kyoto": {
    airports: [
      { name: "Kansai International Airport", code: "KIX", distance: "100 km", lat: 34.4320, lng: 135.2304 },
      { name: "Osaka Itami Airport", code: "ITM", distance: "50 km", lat: 34.7855, lng: 135.4380 }
    ],
    trains: [
      { name: "Kyoto Station", lines: "Tokaido Shinkansen, JR, Kintetsu", lat: 34.9858, lng: 135.7588 }
    ]
  },

  // === PORTUGAL ===
  "Lisbon": {
    airports: [
      { name: "Lisbon Humberto Delgado Airport", code: "LIS", distance: "7 km", lat: 38.7756, lng: -9.1354 }
    ],
    trains: [
      { name: "Lisboa Santa Apolónia", lines: "Alfa Pendular, IC", lat: 38.7139, lng: -9.1225 },
      { name: "Lisboa Oriente", lines: "Alfa Pendular, IC, regional", lat: 38.7678, lng: -9.0990 }
    ]
  },

  // === CHINA / HONG KONG / MACAU ===
  "Hong Kong": {
    airports: [
      { name: "Hong Kong International Airport", code: "HKG", distance: "34 km", lat: 22.3080, lng: 113.9185 }
    ],
    trains: [
      { name: "Hong Kong West Kowloon", lines: "Guangzhou–Shenzhen–HK High-Speed Rail", lat: 22.3048, lng: 114.1620 }
    ]
  },
  "Shanghai": {
    airports: [
      { name: "Shanghai Pudong International", code: "PVG", distance: "30 km", lat: 31.1443, lng: 121.8083 },
      { name: "Shanghai Hongqiao International", code: "SHA", distance: "13 km", lat: 31.1979, lng: 121.3362 }
    ],
    trains: [
      { name: "Shanghai Hongqiao Station", lines: "CRH high-speed to Beijing/Hangzhou", lat: 31.1944, lng: 121.3220 },
      { name: "Shanghai Station", lines: "CRH, conventional trains", lat: 31.2499, lng: 121.4558 }
    ]
  },
  "Beijing": {
    airports: [
      { name: "Beijing Capital International", code: "PEK", distance: "25 km", lat: 40.0799, lng: 116.6031 },
      { name: "Beijing Daxing International", code: "PKX", distance: "46 km", lat: 39.5098, lng: 116.4105 }
    ],
    trains: [
      { name: "Beijing South Station", lines: "CRH to Shanghai/Tianjin", lat: 39.8652, lng: 116.3789 },
      { name: "Beijing West Station", lines: "CRH to Xi'an/Guangzhou", lat: 39.8964, lng: 116.3228 }
    ]
  },
  "Hangzhou": {
    airports: [
      { name: "Hangzhou Xiaoshan International", code: "HGH", distance: "27 km", lat: 30.2295, lng: 120.4343 }
    ],
    trains: [
      { name: "Hangzhou East Station", lines: "CRH to Shanghai/Beijing", lat: 30.2908, lng: 120.2134 }
    ]
  },
  "Macau": {
    airports: [
      { name: "Macau International Airport", code: "MFM", distance: "5 km", lat: 22.1496, lng: 113.5920 }
    ],
    trains: []
  },

  // === SOUTH KOREA ===
  "Seoul": {
    airports: [
      { name: "Incheon International Airport", code: "ICN", distance: "52 km", lat: 37.4602, lng: 126.4407 },
      { name: "Gimpo International Airport", code: "GMP", distance: "15 km", lat: 37.5583, lng: 126.7906 }
    ],
    trains: [
      { name: "Seoul Station", lines: "KTX high-speed, AREX to airport", lat: 37.5547, lng: 126.9707 }
    ]
  },

  // === GREECE ===
  "Athens": {
    airports: [
      { name: "Athens International Airport", code: "ATH", distance: "27 km", lat: 37.9364, lng: 23.9445 }
    ],
    trains: [
      { name: "Athens Railway Station (Larissa)", lines: "Hellenic Train intercity", lat: 37.9924, lng: 23.7208 }
    ]
  },

  // === COLOMBIA ===
  "Cartagena": {
    airports: [
      { name: "Rafael Núñez International Airport", code: "CTG", distance: "3 km", lat: 10.4424, lng: -75.5130 }
    ],
    trains: []
  },

  // === NORWAY ===
  "Oslo": {
    airports: [
      { name: "Oslo Gardermoen Airport", code: "OSL", distance: "47 km", lat: 60.1976, lng: 11.1004 }
    ],
    trains: [
      { name: "Oslo S (Sentralstasjon)", lines: "Flytoget, NSB, regional", lat: 59.9109, lng: 10.7527 }
    ]
  },

  // === AUSTRALIA ===
  "Sydney": {
    airports: [
      { name: "Sydney Kingsford Smith Airport", code: "SYD", distance: "8 km", lat: -33.9461, lng: 151.1772 }
    ],
    trains: [
      { name: "Central Station", lines: "NSW TrainLink, Sydney Trains", lat: -33.8832, lng: 151.2056 }
    ]
  },
  "Melbourne": {
    airports: [
      { name: "Melbourne Tullamarine Airport", code: "MEL", distance: "23 km", lat: -37.6733, lng: 144.8433 }
    ],
    trains: [
      { name: "Southern Cross Station", lines: "V/Line regional, SkyBus", lat: -37.8183, lng: 144.9525 }
    ]
  },

  // === INDIA ===
  "Mumbai": {
    airports: [
      { name: "Chhatrapati Shivaji Maharaj Intl", code: "BOM", distance: "12 km", lat: 19.0896, lng: 72.8656 }
    ],
    trains: [
      { name: "Mumbai CSMT", lines: "Central Railway, long-distance", lat: 18.9398, lng: 72.8355 },
      { name: "Mumbai Central", lines: "Western Railway, Rajdhani", lat: 18.9692, lng: 72.8194 }
    ]
  },
  "Udaipur": {
    airports: [
      { name: "Maharana Pratap Airport", code: "UDR", distance: "22 km", lat: 24.6177, lng: 73.8961 }
    ],
    trains: [
      { name: "Udaipur City Station", lines: "Indian Railways", lat: 24.5810, lng: 73.6825 }
    ]
  },
  "Kasauli": {
    airports: [
      { name: "Chandigarh Airport", code: "IXC", distance: "60 km", lat: 30.6735, lng: 76.7885 }
    ],
    trains: [
      { name: "Kalka Railway Station", lines: "Kalka–Shimla Railway (UNESCO), 25 km", lat: 30.8440, lng: 76.9413 }
    ]
  },

  // === TAIWAN ===
  "Taipei": {
    airports: [
      { name: "Taiwan Taoyuan International", code: "TPE", distance: "30 km", lat: 25.0797, lng: 121.2342 },
      { name: "Taipei Songshan Airport", code: "TSA", distance: "5 km", lat: 25.0694, lng: 121.5525 }
    ],
    trains: [
      { name: "Taipei Main Station", lines: "THSR high-speed, TRA, Metro", lat: 25.0478, lng: 121.5170 }
    ]
  },

  // === INDONESIA ===
  "Ubud": {
    airports: [
      { name: "Ngurah Rai International Airport", code: "DPS", distance: "36 km", lat: -8.7482, lng: 115.1672 }
    ],
    trains: []
  },

  // === FRENCH POLYNESIA ===
  "Tetiaroa": {
    airports: [
      { name: "Faa'a International Airport (Tahiti)", code: "PPT", distance: "53 km (flight)", lat: -17.5537, lng: -149.6071 }
    ],
    trains: []
  },

  // === SOUTH AFRICA ===
  "Sabi Sand": {
    airports: [
      { name: "Kruger Mpumalanga Intl Airport", code: "MQP", distance: "90 km", lat: -25.3832, lng: 31.1056 },
      { name: "Skukuza Airport", code: "SZK", distance: "30 km", lat: -24.9609, lng: 31.5887 }
    ],
    trains: []
  },

  // === MALDIVES ===
  "North Malé Atoll": {
    airports: [
      { name: "Velana International Airport", code: "MLE", distance: "by speedboat", lat: 4.1918, lng: 73.5290 }
    ],
    trains: []
  },
  "Baa Atoll": {
    airports: [
      { name: "Dharavandhoo Airport", code: "DRV", distance: "15 km", lat: 5.1562, lng: 73.1302 }
    ],
    trains: []
  },

  // === COSTA RICA ===
  "Pérez Zeledón": {
    airports: [
      { name: "Juan Santamaría Intl Airport", code: "SJO", distance: "170 km", lat: 9.9939, lng: -84.2088 }
    ],
    trains: []
  },

  // === CHILE ===
  "Torres del Paine": {
    airports: [
      { name: "Punta Arenas Airport", code: "PUQ", distance: "310 km", lat: -53.0026, lng: -70.8547 },
      { name: "Puerto Natales (Teniente Gallardo)", code: "PNT", distance: "110 km", lat: -51.6715, lng: -72.5284 }
    ],
    trains: []
  },

  // === OMAN ===
  "Zighy Bay": {
    airports: [
      { name: "Khasab Airport", code: "KHS", distance: "40 km", lat: 26.1709, lng: 56.2406 }
    ],
    trains: []
  },

  // === BEST IN MAY DESTINATIONS ===
  "Santorini": {
    airports: [
      { name: "Santorini Airport", code: "JTR", distance: "6 km", lat: 36.3992, lng: 25.4793 }
    ],
    trains: []
  },
  "Amalfi": {
    airports: [
      { name: "Naples International Airport", code: "NAP", distance: "65 km", lat: 40.8860, lng: 14.2908 }
    ],
    trains: [
      { name: "Salerno Station", lines: "Trenitalia high-speed, 25 km", lat: 40.6754, lng: 14.7710 },
      { name: "Vietri sul Mare", lines: "Regional, closest to Amalfi", lat: 40.6672, lng: 14.7289 }
    ]
  },
  "Marrakech": {
    airports: [
      { name: "Marrakech Menara Airport", code: "RAK", distance: "6 km", lat: 31.6069, lng: -8.0363 }
    ],
    trains: [
      { name: "Marrakech Railway Station", lines: "ONCF national rail", lat: 31.6328, lng: -8.0148 }
    ]
  },
  "Dubrovnik": {
    airports: [
      { name: "Dubrovnik Airport", code: "DBV", distance: "20 km", lat: 42.5614, lng: 18.2682 }
    ],
    trains: []
  },
  "Aguas Calientes": {
    airports: [
      { name: "Alejandro Velasco Astete Airport (Cusco)", code: "CUZ", distance: "110 km", lat: -13.5357, lng: -71.9388 }
    ],
    trains: [
      { name: "Aguas Calientes Station", lines: "PeruRail, Inca Rail from Cusco/Ollantaytambo", lat: -13.1547, lng: -72.5233 }
    ]
  },
  "Cape Town": {
    airports: [
      { name: "Cape Town International Airport", code: "CPT", distance: "20 km", lat: -33.9649, lng: 18.6017 }
    ],
    trains: [
      { name: "Cape Town Station", lines: "Metrorail, long-distance", lat: -33.9228, lng: 18.4254 }
    ]
  },

  // === CHEAPEST DESTINATIONS ===
  "Hanoi": {
    airports: [
      { name: "Noi Bai International Airport", code: "HAN", distance: "25 km", lat: 21.2212, lng: 105.8070 }
    ],
    trains: [
      { name: "Hanoi Railway Station", lines: "Vietnam Railways, Reunification Express", lat: 21.0253, lng: 105.8413 }
    ]
  },
  "Siem Reap": {
    airports: [
      { name: "Siem Reap–Angkor International Airport", code: "SAI", distance: "40 km", lat: 13.1120, lng: 103.8133 }
    ],
    trains: []
  },
  "La Paz": {
    airports: [
      { name: "El Alto International Airport", code: "LPB", distance: "13 km", lat: -16.5133, lng: -68.1923 }
    ],
    trains: [
      { name: "Mi Teleférico (Cable Car)", lines: "10 urban cable car lines", lat: -16.4973, lng: -68.1503 }
    ]
  },
  "Kathmandu": {
    airports: [
      { name: "Tribhuvan International Airport", code: "KTM", distance: "6 km", lat: 27.6966, lng: 85.3591 }
    ],
    trains: []
  },
  "Cairo": {
    airports: [
      { name: "Cairo International Airport", code: "CAI", distance: "22 km", lat: 30.1219, lng: 31.4056 }
    ],
    trains: [
      { name: "Cairo Ramses Station", lines: "Egyptian National Railways", lat: 30.0622, lng: 31.2467 },
      { name: "Giza Station", lines: "National rail, near pyramids", lat: 30.0098, lng: 31.2072 }
    ]
  },
  "Tbilisi": {
    airports: [
      { name: "Tbilisi International Airport", code: "TBS", distance: "17 km", lat: 41.6692, lng: 44.9547 }
    ],
    trains: [
      { name: "Tbilisi Central Station", lines: "Georgian Railway", lat: 41.7269, lng: 44.7873 }
    ]
  },
  "Medellín": {
    airports: [
      { name: "José María Córdova Airport", code: "MDE", distance: "35 km", lat: 6.1645, lng: -75.4231 }
    ],
    trains: [
      { name: "San Antonio (Metro)", lines: "Medellín Metro, MetroCable", lat: 6.2518, lng: -75.5636 }
    ]
  },
  "Chiang Mai": {
    airports: [
      { name: "Chiang Mai International Airport", code: "CNX", distance: "4 km", lat: 18.7669, lng: 98.9625 }
    ],
    trains: [
      { name: "Chiang Mai Railway Station", lines: "State Railway of Thailand", lat: 18.7520, lng: 99.0157 }
    ]
  },
  "Stone Town": {
    airports: [
      { name: "Abeid Amani Karume Airport", code: "ZNZ", distance: "8 km", lat: -6.2220, lng: 39.2249 }
    ],
    trains: []
  },
  "Oaxaca": {
    airports: [
      { name: "Oaxaca International Airport", code: "OAX", distance: "8 km", lat: 16.9999, lng: -96.7266 }
    ],
    trains: []
  }
};
