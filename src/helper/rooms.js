const rooms = [
  {
    id: 1,
    hotelName: 'Apiculate Bryum Moss',
    pricePerNight: 650,
    noOfRooms: 5,
    city: 'Quintas',
    address: '23034 Fulton Alley',
    ownerName: 'Sigmund Leiden'
  },
  {
    id: 2,
    hotelName: 'Antilles Filmy Fern',
    pricePerNight: 4399,
    noOfRooms: 9,
    city: 'Mangaratiba',
    address: '02853 Marcy Plaza',
    ownerName: 'Gail Barthorpe'
  },
  {
    id: 3,
    hotelName: 'Conimitella',
    pricePerNight: 1035,
    noOfRooms: 4,
    city: 'Coloncito',
    address: '53 Sheridan Point',
    ownerName: 'Darcy Austen'
  },
  {
    id: 4,
    hotelName: 'Hybrid Honeylocust',
    pricePerNight: 3970,
    noOfRooms: 1,
    city: 'Camindangan',
    address: '407 Sugar Junction',
    ownerName: 'Rosene Terris'
  },
  {
    id: 5,
    hotelName: 'Niaouli-tree',
    pricePerNight: 3642,
    noOfRooms: 5,
    city: 'Muurame',
    address: '644 Hoard Plaza',
    ownerName: 'Suzy Luberti'
  },
  {
    id: 6,
    hotelName: "Stephen's Stork's Bill",
    pricePerNight: 4590,
    noOfRooms: 5,
    city: 'Viga',
    address: '69 Burning Wood Circle',
    ownerName: 'Agathe Klageman'
  },
  {
    id: 7,
    hotelName: 'Devilshead',
    pricePerNight: 1662,
    noOfRooms: 2,
    city: 'Bremerhaven',
    address: '2911 Cody Place',
    ownerName: 'Monroe Chucks'
  },
  {
    id: 8,
    hotelName: 'Timberline Bluegrass',
    pricePerNight: 680,
    noOfRooms: 6,
    city: 'Oslo',
    address: '92916 Katie Alley',
    ownerName: 'Bentley Champ'
  },
  {
    id: 9,
    hotelName: "Hansen's Bird's Beak",
    pricePerNight: 4662,
    noOfRooms: 10,
    city: 'El Aïoun',
    address: '66727 Manley Street',
    ownerName: 'Lynea Sarginson'
  },
  {
    id: 10,
    hotelName: 'Slimleaf Milkweed',
    pricePerNight: 4784,
    noOfRooms: 6,
    city: 'Zhongping',
    address: '59183 3rd Alley',
    ownerName: 'Lilyan Rodrigues'
  },
  {
    id: 11,
    hotelName: 'Woolly Meadowfoam',
    pricePerNight: 1886,
    noOfRooms: 2,
    city: 'Beddeng',
    address: '21 Mccormick Road',
    ownerName: 'Marty Moxley'
  },
  {
    id: 12,
    hotelName: 'Purpledisk Honeycombhead',
    pricePerNight: 4038,
    noOfRooms: 10,
    city: 'Altona',
    address: '8 Ronald Regan Trail',
    ownerName: 'Yance Shobbrook'
  },
  {
    id: 13,
    hotelName: 'Clapdaisy',
    pricePerNight: 2770,
    noOfRooms: 3,
    city: 'Wiang Nuea',
    address: '1 Havey Junction',
    ownerName: 'Herby Beales'
  },
  {
    id: 14,
    hotelName: 'Roundleaf Orchid',
    pricePerNight: 3328,
    noOfRooms: 7,
    city: 'Puncakwangi',
    address: '938 Onsgard Junction',
    ownerName: 'Boigie Chown'
  },
  {
    id: 15,
    hotelName: 'Blackbead',
    pricePerNight: 4637,
    noOfRooms: 9,
    city: 'Seremban',
    address: '9 Red Cloud Plaza',
    ownerName: 'Anderson Seagrove'
  },
  {
    id: 16,
    hotelName: 'Cannonball Tree',
    pricePerNight: 4612,
    noOfRooms: 1,
    city: 'Lakkíon',
    address: '219 Knutson Pass',
    ownerName: 'Bentlee Liebermann'
  },
  {
    id: 17,
    hotelName: 'Grassleaf Lettuce',
    pricePerNight: 824,
    noOfRooms: 6,
    city: 'Nabeul',
    address: '413 Toban Terrace',
    ownerName: 'Judi Avrahamoff'
  },
  {
    id: 18,
    hotelName: "Douglas' Meadowfoam",
    pricePerNight: 3073,
    noOfRooms: 5,
    city: 'Barakī Barak',
    address: '977 Farragut Point',
    ownerName: 'Olivero Febvre'
  },
  {
    id: 19,
    hotelName: 'Bluehead Gilia',
    pricePerNight: 2845,
    noOfRooms: 3,
    city: 'Cahors',
    address: '4700 Laurel Avenue',
    ownerName: 'Janifer Pinching'
  },
  {
    id: 20,
    hotelName: 'Chinese Water Chestnut',
    pricePerNight: 3774,
    noOfRooms: 7,
    city: 'Punākha',
    address: '415 Paget Avenue',
    ownerName: 'Seymour Pietrasik'
  },
  {
    id: 21,
    hotelName: 'Eurasian Baneberry',
    pricePerNight: 4086,
    noOfRooms: 5,
    city: 'Tengah',
    address: '75 Gale Pass',
    ownerName: 'Izzy Thurby'
  },
  {
    id: 22,
    hotelName: 'Texas Sage',
    pricePerNight: 811,
    noOfRooms: 1,
    city: 'Grand Rapids',
    address: '73007 Cordelia Street',
    ownerName: 'Orson Apperley'
  },
  {
    id: 23,
    hotelName: 'Pineland Hawthorn',
    pricePerNight: 3602,
    noOfRooms: 9,
    city: 'Lefkímmi',
    address: '85 Walton Park',
    ownerName: 'Lowrance Schule'
  },
  {
    id: 24,
    hotelName: 'Chiricahua Mountain Tansyaster',
    pricePerNight: 4877,
    noOfRooms: 10,
    city: 'Marinhais',
    address: '74 Tony Trail',
    ownerName: 'Elita Cicutto'
  },
  {
    id: 25,
    hotelName: 'Serpentine Arnica',
    pricePerNight: 1754,
    noOfRooms: 6,
    city: 'Coruña, A',
    address: '38 Ludington Center',
    ownerName: 'Peggi Minchin'
  },
  {
    id: 26,
    hotelName: 'Lecidea Lichen',
    pricePerNight: 4377,
    noOfRooms: 6,
    city: 'Feondari',
    address: '062 Anzinger Avenue',
    ownerName: 'Britteny Kippie'
  },
  {
    id: 27,
    hotelName: 'Puerto Rico Applecactus',
    pricePerNight: 4290,
    noOfRooms: 5,
    city: 'Zougang',
    address: '986 Oneill Street',
    ownerName: 'Stella Larenson'
  },
  {
    id: 28,
    hotelName: 'Whiteflower Tansyaster',
    pricePerNight: 3059,
    noOfRooms: 2,
    city: 'San Fernando de Monte Cristi',
    address: '21 Lake View Drive',
    ownerName: 'Michael Fudger'
  },
  {
    id: 29,
    hotelName: 'Silverskin Lichen',
    pricePerNight: 4128,
    noOfRooms: 5,
    city: 'Obolo-Eke (1)',
    address: '40 Luster Trail',
    ownerName: 'Bert Geerits'
  },
  {
    id: 30,
    hotelName: 'Brake Fern',
    pricePerNight: 4283,
    noOfRooms: 1,
    city: 'Starodub',
    address: '6 Vidon Park',
    ownerName: 'Earle Rugg'
  },
  {
    id: 31,
    hotelName: 'Kaempferia',
    pricePerNight: 2357,
    noOfRooms: 10,
    city: 'Nyköping',
    address: '21550 Kinsman Court',
    ownerName: 'Emmey Strachan'
  },
  {
    id: 32,
    hotelName: 'Spoonleaf Rockcress',
    pricePerNight: 1687,
    noOfRooms: 1,
    city: 'Ardazubre',
    address: '4 Ramsey Crossing',
    ownerName: 'Sven Rubens'
  },
  {
    id: 33,
    hotelName: 'California Fagonbush',
    pricePerNight: 4499,
    noOfRooms: 9,
    city: 'Goris',
    address: '796 Prentice Avenue',
    ownerName: 'Meade Jarrold'
  },
  {
    id: 34,
    hotelName: "Brewer's Angelica",
    pricePerNight: 2173,
    noOfRooms: 2,
    city: 'Palmeira',
    address: '507 Farwell Circle',
    ownerName: 'Pacorro Mainstone'
  },
  {
    id: 35,
    hotelName: 'Vicksburg Blackberry',
    pricePerNight: 839,
    noOfRooms: 3,
    city: 'Nanyang',
    address: '6751 Paget Trail',
    ownerName: 'Douglas Cloke'
  },
  {
    id: 36,
    hotelName: 'Wedgeleaf Primrose',
    pricePerNight: 4979,
    noOfRooms: 9,
    city: 'Xindian',
    address: '994 Delladonna Lane',
    ownerName: 'Sheffield Elacoate'
  },
  {
    id: 37,
    hotelName: 'Lecidea Lichen',
    pricePerNight: 4506,
    noOfRooms: 2,
    city: 'Huangliang',
    address: '280 Bultman Hill',
    ownerName: 'Zia Gaish'
  },
  {
    id: 38,
    hotelName: 'Birdbill Dayflower',
    pricePerNight: 1637,
    noOfRooms: 8,
    city: 'Maputo',
    address: '52 Briar Crest Street',
    ownerName: 'Carmela Jeenes'
  },
  {
    id: 39,
    hotelName: 'Composite Rimmed Lichen',
    pricePerNight: 4086,
    noOfRooms: 2,
    city: 'Nantuo',
    address: '599 Kropf Trail',
    ownerName: 'Lodovico Apps'
  },
  {
    id: 40,
    hotelName: 'Waterlily',
    pricePerNight: 1181,
    noOfRooms: 9,
    city: 'Jirkov',
    address: '3664 Leroy Terrace',
    ownerName: 'Hieronymus Perulli'
  },
  {
    id: 41,
    hotelName: 'Wartycabbage',
    pricePerNight: 2310,
    noOfRooms: 2,
    city: 'Huangcun',
    address: '1220 Onsgard Plaza',
    ownerName: 'Gianna Belvard'
  },
  {
    id: 42,
    hotelName: 'Dimorphic Snapdragon',
    pricePerNight: 3421,
    noOfRooms: 10,
    city: 'Zykovo',
    address: '98347 Lake View Point',
    ownerName: 'Artair Kienle'
  },
  {
    id: 43,
    hotelName: 'Thatch Palm',
    pricePerNight: 3227,
    noOfRooms: 8,
    city: 'Zarichne',
    address: '613 Judy Avenue',
    ownerName: 'Torrance Concannon'
  },
  {
    id: 44,
    hotelName: 'Water Figwort',
    pricePerNight: 4042,
    noOfRooms: 9,
    city: 'Um Jar Al Gharbiyya',
    address: '928 Anderson Alley',
    ownerName: 'Nealson Bassham'
  },
  {
    id: 45,
    hotelName: 'Placidiopsis Lichen',
    pricePerNight: 3880,
    noOfRooms: 5,
    city: 'Quebracho',
    address: '5152 Holy Cross Place',
    ownerName: 'Josefina Ripon'
  },
  {
    id: 46,
    hotelName: "Hall's Milkvetch",
    pricePerNight: 3994,
    noOfRooms: 2,
    city: 'Hongqi',
    address: '546 Lakewood Center',
    ownerName: 'Dickie Reckus'
  },
  {
    id: 47,
    hotelName: 'Gulf Of St. Lawrence Aster',
    pricePerNight: 1013,
    noOfRooms: 2,
    city: 'Jinbi',
    address: '30520 Gerald Place',
    ownerName: 'Siouxie Cator'
  },
  {
    id: 48,
    hotelName: 'Common Threesquare',
    pricePerNight: 1267,
    noOfRooms: 4,
    city: 'Sondo',
    address: '501 Rusk Point',
    ownerName: 'Allene Addison'
  },
  {
    id: 49,
    hotelName: 'Caladium',
    pricePerNight: 4358,
    noOfRooms: 2,
    city: 'Longcheng',
    address: '935 Shopko Avenue',
    ownerName: 'Darrick Dorrian'
  },
  {
    id: 50,
    hotelName: 'Anthracothecium Lichen',
    pricePerNight: 4039,
    noOfRooms: 2,
    city: 'Ersekë',
    address: '752 Sutteridge Court',
    ownerName: 'Pieter Manion'
  },
  {
    id: 51,
    hotelName: 'Winged-lady Orchid',
    pricePerNight: 1536,
    noOfRooms: 9,
    city: 'Dahuang',
    address: '1 Hermina Plaza',
    ownerName: 'Rodolph St Louis'
  },
  {
    id: 52,
    hotelName: 'Giant Hyssop',
    pricePerNight: 2553,
    noOfRooms: 10,
    city: 'Kamieniec Ząbkowicki',
    address: '42586 Cherokee Drive',
    ownerName: 'Ruy Shafier'
  },
  {
    id: 53,
    hotelName: 'Virginia Springbeauty',
    pricePerNight: 1420,
    noOfRooms: 5,
    city: 'Akwanga',
    address: '1940 Prentice Street',
    ownerName: 'Otto Jacquet'
  },
  {
    id: 54,
    hotelName: 'Saltmarsh Umbrella-sedge',
    pricePerNight: 1581,
    noOfRooms: 2,
    city: 'Krông Kmar',
    address: '89022 Buena Vista Lane',
    ownerName: 'Jaquelyn Cottier'
  },
  {
    id: 55,
    hotelName: "Flowers' Rim Lichen",
    pricePerNight: 4202,
    noOfRooms: 3,
    city: 'Ejidal',
    address: '8921 Boyd Alley',
    ownerName: 'Ruthie Proudler'
  },
  {
    id: 56,
    hotelName: 'Marsh Silverpuffs',
    pricePerNight: 3089,
    noOfRooms: 7,
    city: 'Minshan',
    address: '1299 Little Fleur Way',
    ownerName: 'Rubi Flaherty'
  },
  {
    id: 57,
    hotelName: 'Myrionora',
    pricePerNight: 2845,
    noOfRooms: 9,
    city: 'Al Ḩarāk',
    address: '12 Anderson Lane',
    ownerName: 'Jasmine Petrushanko'
  },
  {
    id: 58,
    hotelName: 'Netted Chainfern',
    pricePerNight: 2986,
    noOfRooms: 3,
    city: 'Steblevë',
    address: '391 Blue Bill Park Park',
    ownerName: 'Grier Amiranda'
  },
  {
    id: 59,
    hotelName: 'Thelopsis Lichen',
    pricePerNight: 3057,
    noOfRooms: 2,
    city: 'Yunlong',
    address: '3 Caliangt Terrace',
    ownerName: 'Holt Krystek'
  },
  {
    id: 60,
    hotelName: 'Crested Cinquefoil',
    pricePerNight: 3999,
    noOfRooms: 9,
    city: 'Badou',
    address: '05077 North Hill',
    ownerName: 'Garland Chillcot'
  },
  {
    id: 61,
    hotelName: 'Dixie Silverback Fern',
    pricePerNight: 3171,
    noOfRooms: 5,
    city: 'Shizikeng',
    address: '734 Carey Alley',
    ownerName: 'Hubey Hens'
  },
  {
    id: 62,
    hotelName: 'Nodding Catchfly',
    pricePerNight: 1786,
    noOfRooms: 9,
    city: 'Dowlatyār',
    address: '626 Walton Circle',
    ownerName: 'Glory De Mattei'
  },
  {
    id: 63,
    hotelName: 'Bog Cyrtandra',
    pricePerNight: 2666,
    noOfRooms: 4,
    city: 'Mambalan',
    address: '641 Oneill Terrace',
    ownerName: 'Jude Ching'
  },
  {
    id: 64,
    hotelName: 'Beaked Snailfern',
    pricePerNight: 3940,
    noOfRooms: 4,
    city: 'Manchester',
    address: '10 Burning Wood Point',
    ownerName: 'Thorsten Ilchenko'
  },
  {
    id: 65,
    hotelName: "Garovagl's Miriquidica Lichen",
    pricePerNight: 1527,
    noOfRooms: 8,
    city: 'Nagbukel',
    address: '11 Pankratz Place',
    ownerName: 'Claudio Ainslie'
  },
  {
    id: 66,
    hotelName: 'Tall Woolly Buckwheat',
    pricePerNight: 3442,
    noOfRooms: 10,
    city: 'Yongchang',
    address: '4 Twin Pines Pass',
    ownerName: 'Walker Blose'
  },
  {
    id: 67,
    hotelName: 'Texas Saxifrage',
    pricePerNight: 2726,
    noOfRooms: 4,
    city: 'Novhorod-Sivers’kyy',
    address: '3 Trailsway Drive',
    ownerName: 'Neale Emtage'
  },
  {
    id: 68,
    hotelName: 'Lax Panicgrass',
    pricePerNight: 1657,
    noOfRooms: 8,
    city: 'Lewobelek',
    address: '23056 Haas Court',
    ownerName: 'Clarke Janek'
  },
  {
    id: 69,
    hotelName: 'Cootamundra Wattle',
    pricePerNight: 2374,
    noOfRooms: 10,
    city: 'Dakhla',
    address: '7169 Annamark Trail',
    ownerName: 'Shirline Shapter'
  },
  {
    id: 70,
    hotelName: 'Big Bend Barometerbush',
    pricePerNight: 3187,
    noOfRooms: 2,
    city: 'Wonokromo',
    address: '19 Bluestem Court',
    ownerName: 'Saundra Rime'
  },
  {
    id: 71,
    hotelName: 'White Spirea',
    pricePerNight: 1626,
    noOfRooms: 4,
    city: 'Kurungannyawa',
    address: '27 Starling Place',
    ownerName: 'Sandie Bottoner'
  },
  {
    id: 72,
    hotelName: 'Speedwell',
    pricePerNight: 1651,
    noOfRooms: 5,
    city: 'Zbýšov',
    address: '39636 Bay Street',
    ownerName: 'Odille Peye'
  },
  {
    id: 73,
    hotelName: 'Dwarf Checkerbloom',
    pricePerNight: 2338,
    noOfRooms: 9,
    city: 'Dengzhou',
    address: '07116 Crest Line Drive',
    ownerName: 'Nita Nornable'
  },
  {
    id: 74,
    hotelName: 'Matted Lichen',
    pricePerNight: 2011,
    noOfRooms: 1,
    city: 'Couto',
    address: '5015 Erie Court',
    ownerName: 'Laurens Bernaciak'
  },
  {
    id: 75,
    hotelName: 'Mallee Honeymyrtle',
    pricePerNight: 4843,
    noOfRooms: 6,
    city: 'Novoselë',
    address: '6 Dakota Terrace',
    ownerName: 'Tamqrah Colt'
  },
  {
    id: 76,
    hotelName: 'Myrinia Moss',
    pricePerNight: 4099,
    noOfRooms: 10,
    city: 'Dubna',
    address: '39414 Vernon Street',
    ownerName: 'Bobina Krzyzanowski'
  },
  {
    id: 77,
    hotelName: 'Rio Grande Phlox',
    pricePerNight: 4381,
    noOfRooms: 6,
    city: 'Linzi',
    address: '2 Oriole Street',
    ownerName: 'Karel Silcox'
  },
  {
    id: 78,
    hotelName: 'Fissidens Moss',
    pricePerNight: 3260,
    noOfRooms: 4,
    city: 'Dungarvan',
    address: '9960 Grover Circle',
    ownerName: 'Hal Redley'
  },
  {
    id: 79,
    hotelName: 'Guadeloupe Cucumber',
    pricePerNight: 2269,
    noOfRooms: 2,
    city: 'Victoria West',
    address: '6431 Golf Course Plaza',
    ownerName: 'Iormina Zuppa'
  },
  {
    id: 80,
    hotelName: 'Saltwood',
    pricePerNight: 3128,
    noOfRooms: 2,
    city: 'Boston',
    address: '130 Linden Pass',
    ownerName: 'Harald Kiwitz'
  },
  {
    id: 81,
    hotelName: 'Udo',
    pricePerNight: 2512,
    noOfRooms: 3,
    city: 'Wentang',
    address: '07469 Bluestem Pass',
    ownerName: 'Douglass Wellsman'
  },
  {
    id: 82,
    hotelName: 'Broomcorn Millet',
    pricePerNight: 1687,
    noOfRooms: 4,
    city: 'Tršić',
    address: '646 Merrick Parkway',
    ownerName: 'Nowell Constable'
  },
  {
    id: 83,
    hotelName: 'Paleyellow Ragwort',
    pricePerNight: 2572,
    noOfRooms: 9,
    city: 'Karangsono',
    address: '37 Eggendart Hill',
    ownerName: 'Alden Manchester'
  },
  {
    id: 84,
    hotelName: 'Stemsucker',
    pricePerNight: 1674,
    noOfRooms: 3,
    city: 'Sasayama',
    address: '5475 Sherman Parkway',
    ownerName: 'Blanche Peers'
  },
  {
    id: 85,
    hotelName: 'Forked Hareleaf',
    pricePerNight: 2985,
    noOfRooms: 4,
    city: 'Kaduheuleut',
    address: '176 Longview Terrace',
    ownerName: 'Sacha McCaffery'
  },
  {
    id: 86,
    hotelName: 'Wonder Flower',
    pricePerNight: 2426,
    noOfRooms: 10,
    city: 'Rotterdam postbusnummers',
    address: '996 Loeprich Park',
    ownerName: 'Cammie Tollet'
  },
  {
    id: 87,
    hotelName: "Parish's Yampah",
    pricePerNight: 3191,
    noOfRooms: 7,
    city: 'Puning',
    address: '6670 Reindahl Circle',
    ownerName: 'Gaylord Alston'
  },
  {
    id: 88,
    hotelName: 'Largeflower Tickseed',
    pricePerNight: 2412,
    noOfRooms: 2,
    city: 'Rahayu',
    address: '95573 Spenser Avenue',
    ownerName: 'Vernor Bygate'
  },
  {
    id: 89,
    hotelName: 'Slenderpetal Thelypody',
    pricePerNight: 481,
    noOfRooms: 3,
    city: 'Ntoum',
    address: '202 Mandrake Junction',
    ownerName: 'Natalie Couch'
  },
  {
    id: 90,
    hotelName: 'European Blackberry',
    pricePerNight: 581,
    noOfRooms: 2,
    city: 'Těšany',
    address: '20 Straubel Avenue',
    ownerName: 'Storm Iacovelli'
  },
  {
    id: 91,
    hotelName: 'Inyo Biscuitroot',
    pricePerNight: 1962,
    noOfRooms: 8,
    city: 'Boticas',
    address: '3883 Maryland Point',
    ownerName: 'Cord Slimm'
  },
  {
    id: 92,
    hotelName: 'Hairy Sandspurry',
    pricePerNight: 883,
    noOfRooms: 5,
    city: 'Tomado',
    address: '7956 Harbort Terrace',
    ownerName: 'Florance Gibling'
  },
  {
    id: 93,
    hotelName: 'Black Raspberry',
    pricePerNight: 1226,
    noOfRooms: 2,
    city: 'Naekan',
    address: '1850 Memorial Trail',
    ownerName: 'Ossie MacGraith'
  },
  {
    id: 94,
    hotelName: 'Alpine Catchfly',
    pricePerNight: 4228,
    noOfRooms: 9,
    city: 'Cajabamba',
    address: '6 Meadow Vale Road',
    ownerName: 'Pia Impett'
  },
  {
    id: 95,
    hotelName: "Hawai'i Lopleaf",
    pricePerNight: 3499,
    noOfRooms: 10,
    city: 'Tuy Phước',
    address: '4 Bartillon Plaza',
    ownerName: 'Sly Fley'
  },
  {
    id: 96,
    hotelName: 'Tulip Pricklypear',
    pricePerNight: 3863,
    noOfRooms: 10,
    city: 'Lexington',
    address: '65 Rutledge Park',
    ownerName: 'Marylee Sherrocks'
  },
  {
    id: 97,
    hotelName: "Howell's Reedgrass",
    pricePerNight: 1209,
    noOfRooms: 6,
    city: 'Montepuez',
    address: '9786 Del Sol Crossing',
    ownerName: 'Jacklyn Spiers'
  },
  {
    id: 98,
    hotelName: 'Cup Lichen',
    pricePerNight: 4471,
    noOfRooms: 6,
    city: 'General Alvear',
    address: '38 Helena Alley',
    ownerName: 'Toddie Josuweit'
  },
  {
    id: 99,
    hotelName: 'Sand Verbena',
    pricePerNight: 2800,
    noOfRooms: 8,
    city: 'Qukou',
    address: '964 Claremont Road',
    ownerName: 'Caralie Petkovic'
  },
  {
    id: 100,
    hotelName: "Pursh's Wild Petunia",
    pricePerNight: 1080,
    noOfRooms: 9,
    city: 'Zvenyhorodka',
    address: '29093 Debra Road',
    ownerName: 'Gilbertine Sculley'
  }
]
export default rooms
