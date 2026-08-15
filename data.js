export const SCHOOLS = {
  ncstate: {
    name: 'NC State University', abbr: 'NCSU', color: '#cc0000',
    sections: [
      { label: 'Unlimited Dining Halls', locs: [
        { name: 'Fountain Dining Hall', b: 9.50, l: 12.50, d: 13.50, s: 5.00, isDH: true, type: 'unlimited' },
        { name: 'Clark Dining Hall', b: 9.50, l: 12.50, d: 13.50, s: 5.00, isDH: true, type: 'unlimited' },
        { name: 'Case Dining Hall', b: 9.50, l: 12.50, d: 13.50, s: 5.00, isDH: true, type: 'unlimited' },
      ]},
      { label: 'Talley Student Union (Pavilions & Level 2)', locs: [
        { name: 'Jason’s Deli', b: 0, l: 12.50, d: 12.50, s: 6.00 },
        { name: 'Moe’s Southwest Grill', b: 0, l: 11.25, d: 11.25, s: 4.00 },
        { name: 'Chick-fil-A', b: 6.75, l: 9.50, d: 9.50, s: 4.00 },
        { name: 'Panda Express', b: 0, l: 10.75, d: 11.75, s: 5.00 },
        { name: 'Tuffy’s Diner', b: 8.50, l: 11.50, d: 11.50, s: 5.00 },
        { name: 'Los Lobos', b: 0, l: 10.50, d: 10.50, s: 4.00 },
        { name: 'One Earth', b: 0, l: 11.75, d: 11.75, s: 5.00 },
        { name: 'Red Sky Pizza', b: 0, l: 11.25, d: 11.25, s: 5.00 },
        { name: 'Sushi with Gusto', b: 0, l: 12.00, d: 12.00, s: 6.00 },
        { name: 'Port City Java (Talley)', b: 5.75, l: 7.50, d: 7.50, s: 5.00 },
        { name: 'Yolo Frozen Yogurt', b: 0, l: 0, d: 0, s: 6.50 },
        { name: 'Talley Market (Howling Cow)', b: 5.00, l: 9.00, d: 9.00, s: 5.50 },
        { name: '1887 Bistro (Level 3)', b: 0, l: 14.50, d: 0, s: 0 },
        { name: 'Starbucks (Level 1)', b: 6.00, l: 8.00, d: 8.00, s: 6.00 },
      ]},
      { label: 'Atrium Food Court (North Campus)', locs: [
        { name: 'Chick-fil-A (Atrium)', b: 6.75, l: 9.50, d: 9.50, s: 4.00 },
        { name: 'Brickyard Pizza', b: 0, l: 10.50, d: 10.50, s: 5.00 },
        { name: 'Mediterranean Deli', b: 0, l: 11.50, d: 11.50, s: 5.50 },
        { name: 'Delirious', b: 0, l: 11.00, d: 11.00, s: 5.00 },
        { name: 'ZenFish', b: 0, l: 12.50, d: 12.50, s: 6.00 },
      ]},
      { label: 'Centennial Campus (Oval & Beyond)', locs: [
        { name: 'On the Oval Food Hall', b: 8.75, l: 12.25, d: 12.25, s: 5.00 },
        { name: 'Fahrenheit Pizza', b: 0, l: 11.00, d: 11.00, s: 5.00 },
        { name: 'Newton’s Grill', b: 8.50, l: 11.50, d: 11.50, s: 5.00 },
        { name: 'Flashpoint Global', b: 0, l: 12.00, d: 12.00, s: 5.00 },
        { name: 'Cold Fusion (Salads/Subs)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
        { name: 'Gravity Cafe', b: 8.50, l: 11.75, d: 11.75, s: 4.00 },
        { name: 'Common Grounds (Hunt)', b: 5.50, l: 7.25, d: 7.25, s: 5.00 },
        { name: 'Port City Java (EB II)', b: 5.75, l: 7.50, d: 7.50, s: 5.00 },
      ]},
      { label: 'Cafes & Specialty Locations', locs: [
        { name: 'La Farm Bakery (Park Shops)', b: 7.50, l: 11.50, d: 11.50, s: 6.00 },
        { name: 'Hill of Beans (D.H. Hill)', b: 5.50, l: 7.25, d: 7.25, s: 5.00 },
        { name: 'Elements Cafe (Jordan Hall)', b: 6.00, l: 10.50, d: 0, s: 5.00 },
        { name: 'Smoothie King (Carmichael)', b: 8.25, l: 8.25, d: 8.25, s: 5.00 },
        { name: 'Terrace Dining (Lonnie Poole)', b: 0, l: 14.00, d: 16.00, s: 6.00 },
        { name: 'Wolves’ Den (CVM)', b: 8.50, l: 11.50, d: 0, s: 5.00 },
      ]},
      { label: 'Markets (Dining Dollars)', locs: [
        { name: 'Bragaw Market', b: 5.00, l: 10.00, d: 10.00, s: 5.00 },
        { name: 'Wolf Village Market', b: 5.00, l: 10.00, d: 10.00, s: 5.00 },
        { name: 'Wolf Ridge Market', b: 5.00, l: 10.00, d: 10.00, s: 5.00 },
        { name: 'McCullers’ Market', b: 5.00, l: 10.00, d: 10.00, s: 5.00 },
        { name: 'Centennial Market', b: 5.00, l: 10.00, d: 10.00, s: 5.00 },
      ]}
    ]
  },

  uncc: {
    name: 'UNC Charlotte', abbr: 'UNCC', color: '#00703c',
    sections: [
      { label: 'Unlimited Dining Halls', locs: [
        { name: 'SoVi', b: 9.57, l: 12.68, d: 14.23, s: 5.00, isDH: true, type: 'unlimited' },
        { name: 'Crown Commons', b: 9.57, l: 12.68, d: 14.23, s: 5.00, isDH: true, type: 'unlimited' },
      ]},
      { label: 'Retail Dining', locs: [
        { name: 'Chick-fil-A', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
        { name: 'Bojangles', b: 7.75, l: 9.75, d: 9.75, s: 4.00 },
        { name: 'Wendy’s', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
        { name: 'Salsarita’s', b: 0, l: 11.50, d: 11.50, s: 5.00 },
        { name: 'Shake Smart', b: 8.50, l: 8.50, d: 8.50, s: 5.00 },
        { name: 'Panda Express', b: 0, l: 11.50, d: 11.50, s: 5.00 },
        { name: 'Subway', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
        { name: 'Moe’s Southwest Grill', b: 0, l: 11.25, d: 11.25, s: 4.00 },
        { name: 'Starbucks (All Locs)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      ]}
    ]
  },

  uncch: {
    name: 'UNC Chapel Hill', abbr: 'UNC', color: '#7BAFD4',
    sections: [
      { label: 'Unlimited Dining Halls', locs: [
        { name: 'Top of Lenoir', b: 13.25, l: 16.75, d: 17.75, s: 5.00, isDH: true, type: 'unlimited' },
        { name: 'Chase Hall', b: 13.25, l: 16.75, d: 17.75, s: 5.00, isDH: true, type: 'unlimited' },
      ]},
      { label: 'Retail & Union', locs: [
        { name: 'Chick-fil-A', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
        { name: 'Alpine Bagel', b: 8.25, l: 10.25, d: 10.25, s: 4.00 },
        { name: 'Burrito Bowl', b: 0, l: 11.75, d: 11.75, s: 5.00 },
        { name: 'Mediterranean Deli', b: 0, l: 12.00, d: 12.00, s: 5.00 },
        { name: 'CholaNad', b: 0, l: 14.00, d: 14.00, s: 5.00 },
        { name: 'Bandido’s Mexican Cafe', b: 0, l: 11.50, d: 11.50, s: 4.00 },
        { name: 'Alpaca Peruvian Chicken', b: 0, l: 13.25, d: 13.25, s: 5.00 },
        { name: 'Starbucks', b: 6.00, l: 8.50, d: 8.50, s: 5.00 },
      ]}
    ]
  },

  uncw: {
    name: 'UNC Wilmington', abbr: 'UNCW', color: '#006666',
    sections: [
      { label: 'Unlimited Dining Halls', locs: [
        { name: 'Wagoner Dining Hall', b: 10.00, l: 12.50, d: 13.50, s: 5.00, isDH: true, type: 'unlimited' },
        { name: 'The Shore', b: 10.00, l: 12.50, d: 13.50, s: 5.00, isDH: true, type: 'unlimited' },
      ]},
      { label: 'Retail & Specialty', locs: [
        { name: 'Dub’s Cafe', b: 9.50, l: 12.00, d: 12.00, s: 5.00, isDH: true },
        { name: 'Chick-fil-A', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
        { name: 'Panda Express', b: 0, l: 11.75, d: 11.75, s: 5.00 },
        { name: 'Mooyah', b: 0, l: 12.25, d: 12.25, s: 5.00 },
        { name: 'Subway', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
        { name: 'Einstein Bros Bagels', b: 7.50, l: 9.50, d: 0, s: 4.00 },
        { name: 'Port City Java', b: 5.75, l: 7.50, d: 7.50, s: 4.00 },
        { name: 'Dunkin’', b: 4.00, l: 6.00, d: 6.00, s: 4.00 },
      ]}
    ]
  },

  rit: {
    name: 'Rochester Institute of Technology', abbr: 'RIT', color: '#F76902',
    sections: [
      { label: 'Unlimited Dining Halls', locs: [
        { name: 'Gracie’s', b: 9.00, l: 14.50, d: 15.50, s: 5.00, isDH: true, type: 'unlimited' },
      ]},
      { label: 'Retail & Academic', locs: [
        { name: 'The Commons', b: 11.00, l: 11.00, d: 11.00, s: 5.00 },
        { name: 'Salsarita’s', b: 0, l: 11.25, d: 11.25, s: 5.00 },
        { name: 'Artisan Jet', b: 7.50, l: 10.25, d: 10.25, s: 4.00 },
        { name: 'Ctrl Alt Deli', b: 8.25, l: 10.50, d: 10.50, s: 4.00 },
        { name: 'Ritz Sports Zone', b: 0, l: 11.50, d: 11.50, s: 5.00 },
        { name: 'Beanz', b: 7.50, l: 9.00, d: 9.00, s: 4.00 },
        { name: 'Midnight Oil', b: 7.00, l: 12.00, d: 12.00, s: 5.00 },
        { name: 'Nathan’s Soup & Salad', b: 0, l: 10.00, d: 10.00, s: 4.00 },
      ]}
    ]
  },
  uchicago: {
  name: 'University of Chicago', abbr: 'UChicago', color: '#800000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Baker Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Cathey Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Bartlett Dining Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Grounds of Being', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Ex Libris Café', b: 6.50, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'C-Shop (Hutch Commons)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Cobb Coffee Shop', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Plein Air Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Starbucks (Reg. Hall)', b: 6.00, l: 9.00, d: 9.00, s: 4.00 },
      { name: 'Subway (Campus North)', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Woodlawn Market', b: 7.00, l: 10.50, d: 10.50, s: 5.00 },
    ]}
  ]
},
duke: {
  name: 'Duke University', abbr: 'Duke', color: '#00539b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Marketplace', b: 10.00, l: 13.00, d: 15.00, s: 5.50, isDH: true, type: 'unlimited' },
      { name: 'West Union Great Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Sazon', b: 7.00, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Panda Express', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Il Forno', b: 7.50, l: 12.00, d: 12.50, s: 5.00 },
      { name: 'The Skillet', b: 8.00, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Beyu Blue Coffee', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Sprout', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Loop Pizza Grill', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Красный (Red Mango)', b: 6.00, l: 9.00, d: 9.00, s: 4.00 },
      { name: 'Twinnie\'s', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
    ]}
  ]
},
jhu: {
  name: 'Johns Hopkins University', abbr: 'JHU', color: '#002d72',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Fresh Food Café (FFC)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Nolan\'s', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Levering Kitchen', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Charmery (Ice Cream)', b: 0, l: 0, d: 0, s: 5.00 },
      { name: 'Chick-fil-A', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Subway', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Starbucks (Brody)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Blue Jay\'s Perch', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Common Grounds', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Bulldog Pizza', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
northwestern: {
  name: 'Northwestern University', abbr: 'NU', color: '#4e2a84',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Sargent Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Allison Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Elder Dining Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Fran\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Protein Bar & Kitchen', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'MOD Pizza (Norris)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Subway', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Starbucks (Norris)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Tech Express', b: 7.00, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Wildcat Deli', b: 7.50, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Café Bergson', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
penn: {
  name: 'University of Pennsylvania', abbr: 'Penn', color: '#011f5b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: '1920 Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Hillel (Falk Dining Commons)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Houston Market', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Joe\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Accenture Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (Huntsman)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Chick-fil-A', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Beefsteak', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Free Byrd', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Gourmet Grocer', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
princeton: {
  name: 'Princeton University', abbr: 'Princeton', color: '#ff6600',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Rockefeller College Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Whitman College Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Forbes College Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Frist Campus Center Food Gallery', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Studio 34 Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Coffee Club', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Late Meal at Frist', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Small World Coffee (Campus Loc.)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Tiger Tea Room', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Witherspoon Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
mit: {
  name: 'Massachusetts Institute of Technology', abbr: 'MIT', color: '#a31f34',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Maseeh Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Next House Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Baker House Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Forbes Family Café (Stata)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Cafe 4', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Bosworth Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Sana Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Coffeehouse', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Subway (Stratton)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Sam\'s at LaVerde\'s', b: 7.00, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Refresh Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
    ]}
  ]
},
harvard: {
  name: 'Harvard University', abbr: 'Harvard', color: '#a51c30',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Annenberg Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Adams House Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Quincy House Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Fly-By Lunch (Annenberg)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Greenhouse Café (SEC)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Loker Café (Smith Center)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Cabot Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Northwest Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Darwin\'s Ltd. (Campus Loc.)', b: 7.50, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Tatte Bakery (Smith Center)', b: 7.00, l: 10.00, d: 10.00, s: 4.50 },
    ]}
  ]
},
stanford: {
  name: 'Stanford University', abbr: 'Stanford', color: '#8c1515',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Wilbur Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Stern Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Branner Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Coupa Café (Campus Loc.)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'The Axe and Palm', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Tresidder Union Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Ike\'s Place', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'CoHo (Coffee House)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Bytes Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Lakeside Bowl (Munger)', b: 7.00, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Green Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
yale: {
  name: 'Yale University', abbr: 'Yale', color: '#00356b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Commons Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Berkeley College Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Silliman College Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Blue State Coffee (Campus Loc.)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Elm Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Book Trader Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Bass Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Durfee\'s Sweet Shop', b: 0, l: 0, d: 0, s: 4.50 },
      { name: 'Good Nature Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Farnam Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Kosher Kitchen at Slifka', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
caltech: {
  name: 'California Institute of Technology', abbr: 'Caltech', color: '#ff6c0c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Chandler Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Broad Café', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Red Door Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Automat', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Board & Care', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Athenaeum Grill', b: 7.50, l: 11.00, d: 11.50, s: 4.50 },
      { name: 'Ricketts House Snack Shop', b: 0, l: 0, d: 0, s: 4.00 },
      { name: 'Avery Dining Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'CoffeeLab', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
    ]}
  ]
},
cornell: {
  name: 'Cornell University', abbr: 'Cornell', color: '#b31b1b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Robert Purcell Marketplace', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Okenshields (Willard Straight)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Risley Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Trillium', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Mattin\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Terrace Restaurant', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Amit Bhatia Libe Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Bear Necessities', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Goldie\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Café Jennie (Statler)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'RPCC Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
brown: {
  name: 'Brown University', abbr: 'Brown', color: '#4e3629',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Sharpe Refectory', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Verney-Woolley Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Blue Room', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Josiah\'s', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Jo\'s (Late Night)', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Ivy Room', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Andrews Commons Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Gourmet Café (Faunce)', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Campus Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
dartmouth: {
  name: 'Dartmouth College', abbr: 'Dartmouth', color: '#00693e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Class of 1953 Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Foco (Home Plate)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Novack Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Courtyard Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'King Arthur Baking Café', b: 7.00, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Collis Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Late Night Collis', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Hop Snack Bar', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Baker-Berry Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
columbia: {
  name: 'Columbia University', abbr: 'Columbia', color: '#b9d9eb',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'John Jay Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Ferris Booth Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'JJ\'s Place (Late Night)', b: 0, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Blue Java Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Fac Shack', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chef Mike\'s Sub Shop', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Café East (SIPA)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Community Food & Juice (Campus Loc.)', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Robert F. Smith Café (Butler)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Grace\'s Market Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
berkeley: {
  name: 'University of California, Berkeley', abbr: 'Cal', color: '#003262',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Crossroads Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Foothill Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Clark Kerr Dining Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Golden Bear Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Bear Market Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Free Speech Movement Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Panda Express (MLK)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Yali\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Fixx Coffee Bar', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Subway (MLK)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'The Terrace', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
    ]}
  ]
},
vanderbilt: {
  name: 'Vanderbilt University', abbr: 'Vandy', color: '#866d4b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Rand Dining Center', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'E. Bronson Ingram Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Commons Dogwood Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Local Java', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Suzie\'s (Central Library)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Pub at Overcup Oak', b: 7.50, l: 11.00, d: 11.50, s: 4.50 },
      { name: 'Kissam Kitchen', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Grins Vegetarian Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Blair School Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
umich: {
  name: 'University of Michigan–Ann Arbor', abbr: 'Michigan', color: '#00274c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'South Quad Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Bursley Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'East Quad Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Wendy\'s (Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Kosher Deli & Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Blue Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Sweetwaters Coffee (Campus Loc.)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Wilson Student Team Project Center Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Study', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'MoJo\'s Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
ucla: {
  name: 'University of California, Los Angeles', abbr: 'UCLA', color: '#2774ae',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'De Neve Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Bruin Plate', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Feast at Rieber', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Study at Hedrick', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Bruin Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Rendezvous', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Panda Express (Ackerman)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Northern Lights Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Café 1919', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Southern Lights Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Epicuria at Covel', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
    ]}
  ]
},
rice: {
  name: 'Rice University', abbr: 'Rice', color: '#00205b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'South Servery', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'North Servery', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Sammy\'s Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Coffeehouse (RMC)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Brochstein Pavilion', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Fondren Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Rice Coffeehouse Grill', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Baker College Kitchen', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Cohen House Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
    ]}
  ]
},
notredame: {
  name: 'University of Notre Dame', abbr: 'Notre Dame', color: '#0c2340',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'North Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'South Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Duncan Student Center Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Reckers', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Subway (LaFortune)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Chick-fil-A (Duncan)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Modera', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Star Ginger', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'The Huddle Convenience Store', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Waddick\'s Café', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Au Bon Pain (Hesburgh)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
wustl: {
  name: 'Washington University in St. Louis', abbr: 'WashU', color: '#a51417',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Bear\'s Den', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The Explore Café (South 40)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Ibby\'s', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Fresh Fusion', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Danforth University Center Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Ursa\'s Coffee', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Whispers Café (Law School)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Millbrook Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Center Court', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
emory: {
  name: 'Emory University', abbr: 'Emory', color: '#012169',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Dobbs Common Table', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Cox Hall Food Court', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Kaldi\'s Coffee (Campus Loc.)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Chick-fil-A (Cox Hall)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Cox Hall)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Jimmy John\'s', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Highland Bakery Café', b: 7.00, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Einstein Bros. Bagels', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'WoodPEC Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
georgetown: {
  name: 'Georgetown University', abbr: 'Georgetown', color: '#041e42',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Leo J. O\'Donovan Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Hoya Court', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Epicurean & Company', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Vittles', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Uncommon Grounds', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'The Corp Midnight MUG', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Cosi (Campus Loc.)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Bulldog Tavern', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Einstein Bros. Bagels', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
uva: {
  name: 'University of Virginia', abbr: 'UVA', color: '#232d4b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Observatory Hill Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Newcomb Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Runk Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Crossroads (Newcomb)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Runk Late Night', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Bodo\'s Bagels (Campus Loc.)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Chick-fil-A (Newcomb)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Java City', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Subway (Newcomb)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Pav\'s Café (Alderman)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Fresh Food Company', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
unc: {
  name: 'University of North Carolina–Chapel Hill', abbr: 'UNC', color: '#7bafd4',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Chase Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Lenoir Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Rams Head Market', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Alpine Bagel Company', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Top of Lenoir', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (Undergraduate Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Chick-fil-A (Lenoir)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Nourish', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Time-Out Restaurant (Campus Loc.)', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
usc: {
  name: 'University of Southern California', abbr: 'USC', color: '#990000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'USC Village Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Everybody\'s Kitchen', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Parkside Restaurant & Grill', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Lab Gastropub', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Trojan Grounds Coffee', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Chick-fil-A (USC Village)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Seeds Marketplace', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (USC Village)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Vish Sushi', b: 0, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Traditions Marketplace', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Kaffeeklatsch Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
cmu: {
  name: 'Carnegie Mellon University', abbr: 'CMU', color: '#c41230',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Resnik Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The Underground', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Entropy+', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Tepper Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'La Prima Espresso', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'De Fer Coffee & Tea', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'The Exchange', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Schatz Dining Room', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Stack\'d Underground', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
ucsd: {
  name: 'University of California, San Diego', abbr: 'UCSD', color: '#182b49',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Foodworx (Sixth College)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: '64 Degrees (Seventh College)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Cusp Dining Hall (Muir)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Price Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Perks Coffee', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Roots (Sixth College)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Subway (Price Center)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Foodie\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Whitejackets', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Rady\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
uflorida: {
  name: 'University of Florida', abbr: 'UF', color: '#0021a5',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Fresh Food Company (Gator Corner)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The Basement (Broward)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Reitz Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Reitz Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Library West)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Wendy\'s (Reitz Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Krishna Lunch (Plaza of Americas)', b: 0, l: 9.00, d: 9.00, s: 3.50 },
      { name: 'Subway (Hub)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Gator Dining Late Night', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Moe\'s Southwest Grill', b: 0, l: 11.25, d: 11.25, s: 4.00 },
    ]}
  ]
},
utaustin: {
  name: 'University of Texas at Austin', abbr: 'UT Austin', color: '#bf5700',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Jester City Market', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Kins Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'J2 Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Kins Market', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Cypress Bend Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Chick-fil-A (Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Littlefield Patio Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Cafe Blue', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Prufrock\'s Coffee', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
    ]}
  ]
},
gatech: {
  name: 'Georgia Institute of Technology', abbr: 'Georgia Tech', color: '#b3a369',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Brittain Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'North Avenue Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Steak \'n Shake (Student Center)', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Panda Express (Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Waffle House Express', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Starbucks (Clough)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Junior\'s Grill', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'West Village Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
uiuc: {
  name: 'University of Illinois Urbana-Champaign', abbr: 'UIUC', color: '#e84a27',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Ikenberry Dining Hall (Field of Greens)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'PAR Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'ISR Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Bookmark Café (Undergrad Library)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Illini Union Bookstore Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Subway (Illini Union)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Panda Express (Illini Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Cafe Sprout', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'InfusionTea', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Papa John\'s (Union)', b: 0, l: 11.00, d: 11.00, s: 4.00 },
    ]}
  ]
},
wisc: {
  name: 'University of Wisconsin–Madison', abbr: 'UW–Madison', color: '#c5050c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Gordon Avenue Market', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Carson\'s Market (Dejope)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Rheta\'s Market (Elizabeth Waters)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Union South Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Babcock Hall Dairy Store', b: 0, l: 0, d: 0, s: 4.50 },
      { name: 'Peet\'s Coffee (Memorial Union)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Freshens (Union South)', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Terrace Grill (Memorial Union)', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Panda Express (Union South)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Steenbock\'s on Orchard', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
    ]}
  ]
},
bostoncollege: {
  name: 'Boston College', abbr: 'BC', color: '#98002e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Corcoran Commons (Lower)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'McElroy Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Hillside Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Eagle\'s Nest', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chocolate Bar Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Late Night at Addie\'s', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Ninja Chicken', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Roggie\'s', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Stuart Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
rochester: {
  name: 'University of Rochester', abbr: 'Rochester', color: '#00457c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Danforth Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Douglass Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Pura Vida Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Pit', b: 0, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (Rush Rhees Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Hillside Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Sabor Latin Grill', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Common Grounds Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Genesee Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
tufts: {
  name: 'Tufts University', abbr: 'Tufts', color: '#3e8ede',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Dewick-MacPhie Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Carmichael Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Commons Marketplace', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Hodgdon Food-on-the-Run', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Kindlevan Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Tower Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Pin Point Café', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Kung Fu Tea (Campus Loc.)', b: 0, l: 9.00, d: 9.00, s: 4.00 },
      { name: 'Skulley\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
nyu: {
  name: 'New York University', abbr: 'NYU', color: '#57068c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Kimmel Marketplace', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Palladium Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Third North Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Weinstein Marketplace', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Global Café (Kimmel)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chick-fil-A (Kimmel)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Think Coffee (Campus Loc.)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Panda Express (Kimmel)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Bobst Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Kosher Eats at Weinstein', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Sushi Deli Express', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
ucirvine: {
  name: 'University of California, Irvine', abbr: 'UCI', color: '#0064a4',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Anteatery', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Brandywine', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Hill', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Student Center)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Chick-fil-A (Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Ring Road Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Zot-N-Go', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Zot Zot Sushi', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
ucdavis: {
  name: 'University of California, Davis', abbr: 'UC Davis', color: '#002855',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Tercero Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Segundo Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Cuarto Dining Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Silo Market', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (Silo)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Coffee House (CoHo)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Peet\'s Coffee (MU)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Games Area Grill', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Crepeville (Campus Loc.)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Junction Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
ucsb: {
  name: 'University of California, Santa Barbara', abbr: 'UCSB', color: '#003660',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Carrillo Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'De La Guerra Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Ortega Dining Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Arbor', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (UCen)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Freebirds World Burrito', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Woodstock\'s Pizza (Campus Loc.)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Buchanan Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Corwin Pavilion Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Courtyard Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
bu: {
  name: 'Boston University', abbr: 'BU', color: '#cc0000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Warren Towers Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'West Campus Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Marciano Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'GSU Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (GSU)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Late Night Kitchen', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Fresh Food Co.', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Blaze Pizza (Campus Loc.)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'BU Beach Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Buick Street Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
osu: {
  name: 'Ohio State University–Columbus', abbr: 'Ohio State', color: '#bb0000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Kennedy Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Traditions at Scott', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Traditions at Kennedy', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Woody\'s Tavern', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Sloopy\'s Diner', b: 7.50, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (Ohio Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Ohio Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Bibibop Asian Grill', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Espress-OH', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Union Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
uga: {
  name: 'University of Georgia', abbr: 'UGA', color: '#ba0c2f',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Bolton Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Snelling Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Oglethorpe Dining Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Niche (Tate Center)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chick-fil-A (Tate)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Tate)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Jittery Joe\'s (Campus Loc.)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Chic-Fil-A (Snelling)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Bolton Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Vending @ MLC', b: 0, l: 0, d: 0, s: 3.50 },
    ]}
  ]
},
purdue: {
  name: 'Purdue University–West Lafayette', abbr: 'Purdue', color: '#ceb888',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Wiley Dining Court', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Ford Dining Court', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Windsor Dining Court', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Pete\'s Za', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Panda Express (PMU)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Which Wich', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Starbucks (PMU)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Boiler Bytes Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Earhart Dining Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'The Sushi Bar', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
tamu: {
  name: 'Texas A&M University', abbr: 'Texas A&M', color: '#500000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Sbisa Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Duncan Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Southside Market', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (MSC)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (MSC)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Which Wich (Commons)', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Starbucks (Sterling C. Evans Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'The Alley', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Freshii', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Prairie Street Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
umd: {
  name: 'University of Maryland–College Park', abbr: 'Maryland', color: '#e21833',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: '251 North', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Yahentamitsi Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'South Campus Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Stamp Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chick-fil-A (Stamp)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Stamp)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Marathon Deli', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'R.J. Bentley\'s (Campus Loc.)', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Terp Turf', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Maryland Food Co-op', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
uw: {
  name: 'University of Washington', abbr: 'UW', color: '#4b2e83',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Local Point (McMahon)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Center Table (Elm)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Terry Café', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'By George', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Suzzallo Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'District Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Panda Express (HUB)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Bubble Bar', b: 0, l: 9.00, d: 9.00, s: 4.00 },
      { name: 'Starbucks (HUB)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Pagliacci Pizza (Campus Loc.)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
psu: {
  name: 'Penn State University–University Park', abbr: 'Penn State', color: '#041e42',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Findlay Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Waring Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Pollock Dining Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Well (HUB)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (HUB)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (HUB)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Berkey Creamery', b: 0, l: 0, d: 0, s: 5.00 },
      { name: 'Starbucks (HUB)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'McAllister Deli', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'West Side Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
miami: {
  name: 'University of Miami', abbr: 'Miami', color: '#f47321',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Mahoney/Pearson Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Hecht/Stanford Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (UC)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (UC)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Richter Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Canefe', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Rathskeller', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Subway (UC)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Sushi Maki (Campus Loc.)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
cwru: {
  name: 'Case Western Reserve University', abbr: 'CWRU', color: '#0a304e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Leutner Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Fribley Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Den', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Jolly Scholar', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Templin Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Fribley Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Roc Java', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Wade Commons Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Subway (Tinkham Veale)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
    ]}
  ]
},
wakeforest: {
  name: 'Wake Forest University', abbr: 'Wake Forest', color: '#9e7e38',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Pit', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Cafe Deac', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Barn', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Benson University Center Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chick-fil-A (Benson)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Einstein Bros. Bagels', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Java City', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Subway (Benson)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Wake N Shaker', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
lehigh: {
  name: 'Lehigh University', abbr: 'Lehigh', color: '#663399',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Rathbone Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Lower Cort Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Rathbone Marketplace', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Star Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Grille (Farrington Square)', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Provider\'s Fresh Foods', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Terrace Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Brodhead House', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'UMOJA Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
villanova: {
  name: 'Villanova University', abbr: 'Villanova', color: '#00205b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Dougherty Hall Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Donahue Hall Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Holy Grounds Coffee', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Belle Air Terrace', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'The Spit (Late Night)', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Cara\'s Marketplace', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panera Bread (Campus Loc.)', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'The Nook', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'St. Mary\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
northeastern: {
  name: 'Northeastern University', abbr: 'Northeastern', color: '#d41b2c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Stetson East Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'International Village Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Levine Marketplace', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Rebecca\'s Café (Campus Loc.)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Sacco\'s Bowl Haven', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Chick-fil-A (Curry Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Curry Student Center)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'UBurger', b: 7.50, l: 11.00, d: 11.00, s: 4.00 },
      { name: 'Popeyes (Curry Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Qdoba (Campus Loc.)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
rutgers: {
  name: 'Rutgers University–New Brunswick', abbr: 'Rutgers', color: '#cc0033',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Busch Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Livingston Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Neilson Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'RU Hungry (Late Night)', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Panda Express (Busch Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Livingston)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (College Ave Student Center)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Halal Shack', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Grease Trucks (Campus Loc.)', b: 0, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Redd\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
yeshiva: {
  name: 'Yeshiva University', abbr: 'Yeshiva', color: '#0033a0',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Glueck Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Stern Dining Hall (Midtown)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Nagel Bagel Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Café Cocoa', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Kosher Deli Corner', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Golan Heights Grill', b: 0, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Sam\'s Bagels', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Uptown Pizza', b: 0, l: 11.00, d: 11.00, s: 4.00 },
      { name: 'Muss Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
vt: {
  name: 'Virginia Tech', abbr: 'Virginia Tech', color: '#630031',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Owens Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'D2 Dining Hall (Dietrick)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'West End Market', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Deet\'s Place', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chick-fil-A (Squires)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (West End)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Deet\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Hokie Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Turner Place Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Au Bon Pain (Squires)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
uconn: {
  name: 'University of Connecticut', abbr: 'UConn', color: '#000e2f',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Northwest Marketplace', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'McMahon Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Whitney Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'UConn Dairy Bar', b: 0, l: 0, d: 0, s: 5.00 },
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Union Street Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Starbucks (Homer Babbidge Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Blaze Pizza (Campus Loc.)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Overtime', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
wm: {
  name: 'William & Mary', abbr: 'W&M', color: '#115740',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Sadler Center Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The Caf (Dining Hall)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Meridian', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Sadler Center Center Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chick-fil-A (Sadler)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'The Daily Grind', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Colonial Grounds', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Marketplace at Sadler', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Swem Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
baylor: {
  name: 'Baylor University', abbr: 'Baylor', color: '#003015',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'East Village Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Penland Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Bill Daniel Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (SUB)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Common Grounds (Campus Loc.)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Starbucks (Moody Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Baylor Sciences Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Baylor Store Deli', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Draft Sports Grill', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
    ]}
  ]
},
syracuse: {
  name: 'Syracuse University', abbr: 'Syracuse', color: '#f76900',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Ernie Davis Dining Center', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Shaw Dining Center', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Graham Dining Center', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Schine Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (Schine)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Bird Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Kimmel Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Sadler Dining Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Halal Shack (Schine)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Orange Blend Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
stevens: {
  name: 'Stevens Institute of Technology', abbr: 'Stevens', color: '#a32638',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Pierce Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Jacobus Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Ducibella Family Dining Hall Retail', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Café Zeppelin', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Attic Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Bissinger Academic Complex Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Stevens Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Peirce Snack Bar', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Howe Center Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
clemson: {
  name: 'Clemson University', abbr: 'Clemson', color: '#f56600',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Schilletter Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Clemson House Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Core Campus Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Fernow Street Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chick-fil-A (Hendrix)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Hendrix)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Cooper Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Tiger Town Tavern', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'The 1907', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Hendrix Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
pitt: {
  name: 'University of Pittsburgh', abbr: 'Pitt', color: '#003594',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Market Central', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Litchfield Towers Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Perch (William Pitt Union)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chick-fil-A (Towers)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Towers)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Hillman Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Freshii (Towers)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'O\'Hara Student Center Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Chick-fil-A Express', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
    ]}
  ]
},
fsu: {
  name: 'Florida State University', abbr: 'FSU', color: '#782f40',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Suwannee Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Fresh Food Company', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Seminole Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chick-fil-A (Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Strozier Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Jimmy John\'s (Union)', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'P.O.D. Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Moe\'s Southwest Grill', b: 0, l: 11.25, d: 11.25, s: 4.00 },
    ]}
  ]
},
fordham: {
  name: 'Fordham University', abbr: 'Fordham', color: '#860038',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Marketplace (Rose Hill)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'McMahon Dining Hall (Lincoln Center)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Ram Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (McShane)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Urban Kitchen', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Community Dining Room', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'The Grill on Fordham Road', b: 7.50, l: 11.00, d: 11.00, s: 4.00 },
      { name: 'C-Store Express', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Rodrigue\'s Coffee House', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
    ]}
  ]
},
iub: {
  name: 'Indiana University Bloomington', abbr: 'IU Bloomington', color: '#990000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Wright Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Read Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Forest Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Sugar & Spice Bakery Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Chick-fil-A (IMU)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (IMU)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Wells Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Feast Marketplace', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'The Globe Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Runcible Spoon Express', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
udel: {
  name: 'University of Delaware', abbr: 'UDel', color: '#00539f',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Perkins Student Center Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Pencader Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Scrounge', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chick-fil-A (Trabant)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Trabant)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Morris Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Blue & Gold Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Trabant Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Kate\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
american: {
  name: 'American University', abbr: 'AU', color: '#002649',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Terrace Dining Room (TDR)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Cassell Community Kitchen', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Eagle\'s Nest Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Bene Pizzeria', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Starbucks (MGC)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Freshii (MGC)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'The Tavern', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Subway (MGC)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Battelle-Tompkins Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
umass: {
  name: 'University of Massachusetts Amherst', abbr: 'UMass Amherst', color: '#881c1c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Worcester Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Franklin Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Berkshire Dining Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'People\'s Market', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Blue Wall Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Panda Express (Blue Wall)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Campus Center)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Halal Shack (Blue Wall)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Braza Grill', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Cape Cod Lounge Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
smu: {
  name: 'Southern Methodist University', abbr: 'SMU', color: '#354ca1',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Umphrey Lee Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Varsity Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Hughes-Trigg Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (Fondren Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Willy\'s Southern-Style', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Einstein Bros. Bagels', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Moe\'s Southwest Grill (Hughes-Trigg)', b: 0, l: 11.25, d: 11.25, s: 4.00 },
      { name: 'Mane Course Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Pony Express', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
pepperdine: {
  name: 'Pepperdine University', abbr: 'Pepperdine', color: '#004b8d',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Caf (Sandbar)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Waves Café', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Tyler Campus Center Coffee House', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Freebirds World Burrito', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Habit Burger Grill', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'RJ\'s Underground', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Wave Grill', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Java Blue', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Boone Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
wpi: {
  name: 'Worcester Polytechnic Institute', abbr: 'WPI', color: '#ac2b37',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Morgan Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Forkey Dining Hall (Founders)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Goat\'s Head', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Balcony Grille (Morgan)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Campus Center Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Dunkin\' (Campus Loc.)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Anna Maria Culinary Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Gordon Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Cove', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
msu: {
  name: 'Michigan State University', abbr: 'MSU', color: '#18453b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Brody Square', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Case Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Akers Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Sparty\'s (Union)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (Union)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Panda Express (Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'MSU Dairy Store', b: 0, l: 0, d: 0, s: 5.00 },
      { name: 'The Gallery (Brody)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Skandia Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Bento Sushi (Campus Loc.)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
uiowa: {
  name: 'University of Iowa', abbr: 'Iowa', color: '#ffcd00',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Burge Market Place', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Catlett Market Place', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Hillcrest Market Place', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'IMU Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (IMU)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Main Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Caribou Coffee (Campus Loc.)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Hawkeye Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Baxa\'s Pizza', b: 0, l: 11.00, d: 11.00, s: 4.00 },
      { name: 'Bijou Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
denver: {
  name: 'University of Denver', abbr: 'DU', color: '#8b1f2f',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Community Commons Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Nagel Hall Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Beans Café & Bakery', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Pioneer Grille', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Boettcher West Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Cherrington Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Driscoll Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Joy Burger Bar (Campus Loc.)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Sturm Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
lmu: {
  name: 'Loyola Marymount University', abbr: 'LMU', color: '#8003a0',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Lair Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The Lion\'s Den', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Iggy\'s Diner', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'The Living Room Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'C-Store (University Hall)', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Jamba Juice (Campus Loc.)', b: 0, l: 9.00, d: 9.00, s: 4.50 },
      { name: 'Panda Express (Malone)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (William H. Hannon Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'La Monica Family Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
miamioh: {
  name: 'Miami University (Ohio)', abbr: 'Miami OH', color: '#c41230',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Bell Tower Place', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Maplestreet Station', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Western Dining Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Pulley Diner', b: 7.50, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Emporium', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (King Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Panda Express (Armstrong)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Armstrong)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Records & Relics Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Bagel & Deli Shop', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
usandiego: {
  name: 'University of San Diego', abbr: 'USD', color: '#004a92',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Tu Mercado', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The Meeting Place', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'La Paloma Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Aromas Coffee & Tea', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Pintail Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'C-Store (Student Life Pavilion)', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Sports Center Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Jenny Craig Pavilion Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Torero Store Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
auburn: {
  name: 'Auburn University', abbr: 'Auburn', color: '#0c2340',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Edge', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Terrell Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Au Bon Pain (Library)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'War Eagle Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Common Grounds Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Subway (Haley Center)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Plainsman Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
clark: {
  name: 'Clark University', abbr: 'Clark', color: '#c8102e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Higgins University Center Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Blackstone Hall Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Grind Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Bistro', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Jonas Clark Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'C-Store Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Kneller Dining Hall Retail', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Goddard Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
alabama: {
  name: 'University of Alabama', abbr: 'Alabama', color: '#9e1b32',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Lakeside Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Burke Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The Fresh Foods Company', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Ferguson Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Ferguson Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Gorgas Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Julia\'s Southern-Style', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'The Egg & I', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Bama Dining Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Manderson Landing Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
elon: {
  name: 'Elon University', abbr: 'Elon', color: '#73000a',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Colonnades Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Harden Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Acorn Coffee Shop', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'McMichael Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Irazu (Global Market)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Zesto Sushi & More', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Lakeside Dining Retail', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Historic Neighborhood Kitchen', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Moseley Center Marketplace', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
utk: {
  name: 'University of Tennessee–Knoxville', abbr: 'Tennessee', color: '#ff8200',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Presidential Court Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Southern Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Morrill Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Hodges Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Vol Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Qdoba (Student Union)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'P.O.D. Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Barley\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
jmu: {
  name: 'James Madison University', abbr: 'JMU', color: '#450084',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'D-Hall (Gibbons Dining Hall)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'East Campus Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Market One', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chick-fil-A (Festival)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Top Dog Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Java City (Carrier Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Blue Ridge Hall Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Mrs. Green\'s Natural Market', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Festival Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
mines: {
  name: 'Colorado School of Mines', abbr: 'Mines', color: '#21294c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Slate Café (Landen Dining Hall)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Table Mountain Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'B&L Bagels Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Hub Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Friedhoff Hall Grab-n-Go', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Ore House Coffee', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Mines Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Volk Gymnasium Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
marquette: {
  name: 'Marquette University', abbr: 'Marquette', color: '#003366',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Cobeen Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Schroeder Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Brew Coffeehouse', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Union Market Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Jimmy John\'s (AMU)', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Starbucks (Raynor Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Real Chili', b: 0, l: 11.00, d: 11.00, s: 4.00 },
      { name: 'Café 1881', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Panda Express (AMU)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
    ]}
  ]
},
oregon: {
  name: 'University of Oregon', abbr: 'Oregon', color: '#154733',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Carson Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Hamilton Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Barnhart Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Fresh Marketplace (EMU)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (EMU)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Knight Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Taylor\'s Bar & Grill (Campus Loc.)', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Falling Sky Pizzeria', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Common Grounds Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Duck Store Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
drexel: {
  name: 'Drexel University', abbr: 'Drexel', color: '#07294d',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Handschumacher Dining Center', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Northside Dining Terrace', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Handschumacher)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Nesbitt Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Urban Eatery', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (Hagerty Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'MacAlister Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Bentley Hall Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Northside Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
buffalo: {
  name: 'University at Buffalo (SUNY)', abbr: 'UB', color: '#005bbb',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'C3 Dining Hall (Ellicott)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Governors Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'South Lake Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Silverman Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'C4 Late Night', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Tim Hortons (Campus Loc.)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Bert\'s Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Wings Over Buffalo', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
binghamton: {
  name: 'Binghamton University (SUNY)', abbr: 'Binghamton', color: '#005a43',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Hinman Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Susquehanna Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Appalachian Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'C4 (College-in-the-Woods)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'The Marketplace at Hinman', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (Bartle Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Panda Express (University Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Old Union Diner', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Late Nite Binghamton', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Events Center Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
usf: {
  name: 'University of San Francisco', abbr: 'USF', color: '#00543c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Gleeson Dining Hall (Market Café)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The Fromm Dining Room', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Crossroads Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Jamba Juice (Campus Loc.)', b: 0, l: 9.00, d: 9.00, s: 4.50 },
      { name: 'Starbucks (Gleeson Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'War Memorial Gym Grill', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Market Café Express', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Presidio Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
fiu: {
  name: 'Florida International University', abbr: 'FIU', color: '#081e3f',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Panther Dining Hall (Everglades)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Fresh Food Company (South Dining)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (GC)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (GC)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Green Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Subway (GC)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Pow Wow Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'GC Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Moe\'s Southwest Grill', b: 0, l: 11.25, d: 11.25, s: 4.00 },
    ]}
  ]
},
cuboulder: {
  name: 'University of Colorado Boulder', abbr: 'CU Boulder', color: '#cfb87c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Center for Community (C4C)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Sewall Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Farrand Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Alferd Packer Grill', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (UMC)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Norlin Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Baja Fresh (UMC)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Buffs Bagels', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Grizzly Peak Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'C4C Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
rutgerscamden: {
  name: 'Rutgers University–Camden', abbr: 'Rutgers–Camden', color: '#cc0033',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Fireside Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Sojourner Truth Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Campus Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Subway (Campus Center)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Starbucks (Campus Center)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Fireside Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Robeson Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Cooper Street Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
tcu: {
  name: 'Texas Christian University', abbr: 'TCU', color: '#4d1979',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Market Square', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Deco Deli & Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Brown-Lupton Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (BLUU)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Mary Couts Burnett Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Sub Zero Ice Cream', b: 0, l: 0, d: 0, s: 4.50 },
      { name: 'Market Square Deli', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Frog Bites', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Union Grounds Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
slu: {
  name: 'St. Louis University', abbr: 'SLU', color: '#003da5',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Grand Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Fusz Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Fresh Foodery', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Billiken Bytes (Late Night)', b: 0, l: 10.00, d: 10.00, s: 4.50 },
      { name: 'Einstein Bros. Bagels', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Panera Bread (Campus Loc.)', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Simon Rec Center Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Center Court Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Reinert Hall Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
depaul: {
  name: 'DePaul University', abbr: 'DePaul', color: '#0057b8',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Stuart Center Dining Hall (Lincoln Park)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'University Hall Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Refectory', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (Schmitt Academic Center)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Common Grounds Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Corcoran House Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Loop Café (Loop Campus)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Munchie Mart', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
iit: {
  name: 'Illinois Institute of Technology', abbr: 'IIT', color: '#c8102e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Commons Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Vandercook Café', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Bog', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Copi Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'MTCC Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (Galvin Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Grover Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'State Street Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
rpi: {
  name: 'Rensselaer Polytechnic Institute', abbr: 'RPI', color: '#cc0000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Commons Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Russell Sage Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Sage Dining Retail', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Rathskeller (The Rat)', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Union Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Blitman Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Barh Cafeteria', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Foundry Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
scu: {
  name: 'Santa Clara University', abbr: 'SCU', color: '#862633',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Benson Memorial Center Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Casa Italiana Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Bronco', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'MarketPlace at Benson', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Spoon', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'The Grill (Benson)', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Bene Bagel Bakery', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Sunken Garden Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
brandeis: {
  name: 'Brandeis University', abbr: 'Brandeis', color: '#003c6c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Sherman Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Usdan Café', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Stein (The Faculty Club)', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Ollie\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Java City (Goldfarb Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Provisions on Demand (POD)', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Louis' + " Deli", b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Hoot Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
howard: {
  name: 'Howard University', abbr: 'Howard', color: '#003da5',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Punchout Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Cook Hall Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Blackburn Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Blackburn)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Founders Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Subway (Blackburn)', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Bison Grille', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Blackburn Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
gwu: {
  name: 'George Washington University', abbr: 'GWU', color: '#00274c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Pelham Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Shenkman Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'District House Food Hall', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Chick-fil-A (District House)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Gelman Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Whole Foods Market (Campus Loc.)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'GWorld Deli', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Founding Farmers (Campus Loc.)', b: 8.00, l: 12.00, d: 12.50, s: 5.00 },
    ]}
  ]
},
tulane: {
  name: 'Tulane University', abbr: 'Tulane', color: '#006747',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Bruff Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The Wave Refectory', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'PJ\'s Coffee (Campus Loc.)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'The Boot Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Yulman Stadium Concessions', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Wilson Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'LBC Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Zeitgeist Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
chapman: {
  name: 'Chapman University', abbr: 'Chapman', color: '#93272c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Randall Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Somerville Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Attallah Piazza Market', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Global Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Einstein Bros. Bagels', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Panthers Deli', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Sushi Hub', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Center Court Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
gonzaga: {
  name: 'Gonzaga University', abbr: 'Gonzaga', color: '#002967',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The COG (Center for Community & Justice)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Crosby Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Bulldog Grill (COG)', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Zag Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Jamba Juice (Campus Loc.)', b: 0, l: 9.00, d: 9.00, s: 4.50 },
      { name: 'Molloy Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Foley Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Kennel Club Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
loyolachicago: {
  name: 'Loyola University Chicago', abbr: 'Loyola Chicago', color: '#9d2235',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Simpson Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'De Nobili Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Fresh Food Company', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (Information Commons)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Ramblin\' Root Beer Stand', b: 0, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'The Café at Loyola Hall', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Halas Rec Center Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Damen Student Center Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
uvm: {
  name: 'University of Vermont', abbr: 'UVM', color: '#154734',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Harris Millis Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Central Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Redstone Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Marché (Davis Center)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Brennan\'s Pub & Bistro', b: 7.50, l: 11.50, d: 11.50, s: 4.50 },
      { name: 'Starbucks (Bailey/Howe Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'New World Tortilla', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Simpson Dining Retail', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Catamount Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
unh: {
  name: 'University of New Hampshire', abbr: 'UNH', color: '#003595',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Holloway Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Philbrook Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Stillings Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'MUB Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Wildcatch (Sushi)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Union Court Panda Express', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Bagelry', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Dairy Bar Ice Cream', b: 0, l: 0, d: 0, s: 4.50 },
      { name: 'We The People Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
utah: {
  name: 'University of Utah', abbr: 'Utah', color: '#be0000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Peterson Heritage Center', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Officers Circle Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Skull (Union Building)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Marriott Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Crimson Kitchen', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Block U Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Peterson Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
iastate: {
  name: 'Iowa State University', abbr: 'Iowa State', color: '#c8102e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Seasons Marketplace (Friley)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Union Drive Marketplace', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Conversations Café (Maple)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Hub City Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Panda Express (MU)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (MU)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Parks Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Cyclone Country Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'The Caf at MacKay', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
    ]}
  ]
},
oregonstate: {
  name: 'Oregon State University', abbr: 'Oregon State', color: '#dc4405',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Arnold Dining Center', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'West Dining Center', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'McNary Dining Center', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: '1868 Market (MU)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (MU)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Valley Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Beaver Store Deli', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Dixon Recreation Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Cascadia Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
wsu: {
  name: 'Washington State University', abbr: 'WSU', color: '#981e32',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Southside Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Northside Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Hillside Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Ferdinand\'s Ice Cream Shoppe', b: 0, l: 0, d: 0, s: 5.00 },
      { name: 'Panda Express (CUB)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Terrell Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Crimson Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Cougar Country Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Grill on the Hill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
arizona: {
  name: 'University of Arizona', abbr: 'Arizona', color: '#ab0520',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Park Student Union Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Highland Market', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Coronado Market', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Main Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Cactus Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Wildcat Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Core Coffee', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
    ]}
  ]
},
asu: {
  name: 'Arizona State University–Tempe', abbr: 'ASU', color: '#8c1d40',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Manzanita Hall Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Hassayampa Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Barrett Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Memorial Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Memorial Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Hayden Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Devil\'s Advocate Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Farmer Education Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'MU Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
    ]}
  ]
},
csu: {
  name: 'Colorado State University', abbr: 'CSU', color: '#1e4d2b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Braiden Hall Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Corbett/Parmelee Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Durward Hall Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Ramskeller', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Panda Express (LSC)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Morgan Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Rams Horn Express', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Spoons Bistro', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Green & Gold Grill', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
    ]}
  ]
},
unl: {
  name: 'University of Nebraska–Lincoln', abbr: 'Nebraska', color: '#d00000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Cather Dining Center', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Selleck Dining Center', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Harper Dining Center', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Nebraska Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Nebraska Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Love Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Runza (Campus Loc.)', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Husker Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Barnstormer Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
kansas: {
  name: 'University of Kansas', abbr: 'KU', color: '#0051ba',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Mrs. E\'s Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Studio 2 Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'GSP/Corbin Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Kansas Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Kansas Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Anschutz Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Jayhawk Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Market 4 Union Station', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Mrs. E\'s Express', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
missouri: {
  name: 'University of Missouri–Columbia', abbr: 'Mizzou', color: '#f1b82d',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Rollins Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Plaza 900 Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Mark Twain Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (MU Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (MU Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Ellis Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Tiger Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Mort\'s (Fine Arts)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'MizzouMade Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
kentucky: {
  name: 'University of Kentucky', abbr: 'Kentucky', color: '#0033a0',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Champions Kitchen', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The 90', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'K Lair Food Court Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Gatton Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Gatton Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (William T. Young Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Blue Grass Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Wildcat Pantry', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Fresh Food Company', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
    ]}
  ]
},
arkansas: {
  name: 'University of Arkansas', abbr: 'Arkansas', color: '#9d2235',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Brough Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Pomfret Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Mullins Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Razorback Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Union Station Market Place', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'ARKU Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
lsu: {
  name: 'Louisiana State University', abbr: 'LSU', color: '#461d7c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: '5 (Five Dining Hall)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: '459 Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The 5 East Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (LSU Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Middleton Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Highland Coffees (Campus Loc.)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Tiger Land Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'PJ\'s Coffee (Campus Loc.)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
    ]}
  ]
},
msstate: {
  name: 'Mississippi State University', abbr: 'Mississippi State', color: '#660000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Perry Cafeteria', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The Fresh Food Company', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Mitchell Memorial Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Bully\'s Corral', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Maroon Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
olemiss: {
  name: 'University of Mississippi', abbr: 'Ole Miss', color: '#14213d',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Rebel Market', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Residential College South Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (J.D. Williams Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Grove Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Rebel Market Express', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
okstate: {
  name: 'Oklahoma State University', abbr: 'Oklahoma State', color: '#ff7300',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Perkins Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Kerr-Drummond Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Edmon Low Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Cowboy Kitchen', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Union Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
oklahoma: {
  name: 'University of Oklahoma', abbr: 'Oklahoma', color: '#841617',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Couch Restaurants', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Cross Neighborhood Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Bizzell Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Ozzi\'s Deli', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Crimson Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
unm: {
  name: 'University of New Mexico', abbr: 'UNM', color: '#ba0c2f',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'La Posada Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Casas del Rio Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (SUB)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (SUB)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Zimmerman Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Lobo Rainforest Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'SUB Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
    ]}
  ]
},
unr: {
  name: 'University of Nevada–Reno', abbr: 'Nevada', color: '#003366',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Downunder Café', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Argenta Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Joe Crowley Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Mathewson-IGT Knowledge Center)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Wolf Pack Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Fuel Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
sdsu: {
  name: 'San Diego State University', abbr: 'SDSU', color: '#a6192e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Piazza Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Chabad House Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Conrad Prebys Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Aztec Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Love Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Aztec Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Habit Burger Grill', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Roasted Bean Café', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
    ]}
  ]
},
calpolyslo: {
  name: 'Cal Poly San Luis Obispo', abbr: 'Cal Poly SLO', color: '#154734',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Vista Grande Restaurant', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: '19 Metro Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Red Radish Pizza', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Panda Express (UU)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Kennedy Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Mustang Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Backstage Pizza', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
calpolypomona: {
  name: 'Cal Poly Pomona', abbr: 'Cal Poly Pomona', color: '#017a53',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Bronco Student Center Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The Overlook (Encinitas)', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Bronco Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Bronco Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (University Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Farm Store Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Bronco Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
sjsu: {
  name: 'San Jose State University', abbr: 'SJSU', color: '#0055a2',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Dining Commons (Campus Village)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Spartan Village Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (MLK Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Spartan Marketplace', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Barcelona Bar (Campus Loc.)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
csulb: {
  name: 'California State University–Long Beach', abbr: 'CSULB', color: '#f7a81b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Beachside Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Hillside Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (USU)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (USU)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (University Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Niner Fusion Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Beach Bites Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
ucr: {
  name: 'University of California–Riverside', abbr: 'UCR', color: '#003da5',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Lothian Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Glen Mor Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (HUB)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (HUB)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Rivera Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Highlander Union Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Habit Burger Grill', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
ucmerced: {
  name: 'University of California–Merced', abbr: 'UC Merced', color: '#002856',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Pavilion', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Dining Commons at Sierra Terraces', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Bobcat Lair)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Kolligian Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Bobcat Lair Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Yablokoff-Wallace Dining Center Retail', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
hawaii: {
  name: 'University of Hawaiʻi at Mānoa', abbr: 'UH Mānoa', color: '#024731',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Gateway Café (Hale Aloha)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Hale Wainani Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Campus Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Hamilton Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'L&L Hawaiian Barbecue', b: 0, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Rainbow Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Paradise Palms Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
    ]}
  ]
},
temple: {
  name: 'Temple University', abbr: 'Temple', color: '#9e1b32',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Morgan Hall Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Johnson & Hardwick Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Charles Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Saxbys (Campus Loc.)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Owl Shop Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
nmt: {
  name: 'New Mexico Institute of Mining and Technology', abbr: 'NM Tech', color: '#8a1538',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Fidel Center Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Fidel Center Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Jones Annex Snack Bar', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Cramer Hall Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Skeen Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
rosehulman: {
  name: 'Rose-Hulman Institute of Technology', abbr: 'Rose-Hulman', color: '#c8102e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Hulman Memorial Union Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Worx Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Six Pack Deli', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Hulman Union Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Logan Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
kettering: {
  name: 'Kettering University', abbr: 'Kettering', color: '#003057',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Campus Center Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Bulldog Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Campus Center Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Kettering Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
floridatech: {
  name: 'Florida Institute of Technology', abbr: 'Florida Tech', color: '#582c83',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Panther Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Crawford Green Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Fine Coffee & Tea Co.', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Southgate Deli', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Panther Plunge Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
embryriddle: {
  name: 'Embry-Riddle Aeronautical University–Daytona Beach', abbr: 'Embry-Riddle', color: '#003876',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Vernon L. Bowman Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Hunt Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Eagle\'s Nest Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'The Hangar Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
clarkson: {
  name: 'Clarkson University', abbr: 'Clarkson', color: '#006a4d',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Marshall Hall Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'The Bagelry & Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Union Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Golden Knight Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Clarkson Hall Snack Bar', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'CU Coffee House', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
    ]}
  ]
},
wit: {
  name: 'Wentworth Institute of Technology', abbr: 'Wentworth', color: '#00205b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Watson Dining Center', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Leopard\'s Den', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Watson Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Beatty Hall Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Douglas D. Schumann Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
rit: {
  name: 'Rochester Institute of Technology', abbr: 'RIT', color: '#f76902',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Gracie\'s', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Global Village Kate Gleason Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Ctrl+Alt+Deli', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'The Corner Store', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'RITz Sports Zone', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Panda Express (Campus Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Wallace Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Crossroads Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Artesano Bakery & Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
mse: {
  name: 'Milwaukee School of Engineering', abbr: 'MSOE', color: '#c8102e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Marketplace Café', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Regal Ware Room', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Raider Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Kern Center Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
ltu: {
  name: 'Lawrence Technological University', abbr: 'LTU', color: '#003da5',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'University Commons Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Blue Devil Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'University Commons Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Buell Building Snack Bar', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
newschool: {
  name: 'The New School', abbr: 'The New School', color: '#e2231a',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Kerrey Hall Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'University Center Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Starbucks (University Center)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Loeb Hall Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Arnhold Hall Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
pratt: {
  name: 'Pratt Institute', abbr: 'Pratt', color: '#e4002b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Refectory (Main Dining Hall)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Bird Sanctuary Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Cafeteria Higgins Hall', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Pratt Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'ARC Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
saic: {
  name: 'School of the Art Institute of Chicago', abbr: 'SAIC', color: '#000000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Jones Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Trolley Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Papermaker Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Sharp Building Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
scad: {
  name: 'Savannah College of Art and Design', abbr: 'SCAD', color: '#00263a',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Montgomery Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Compass Point Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Hive (Student Center)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Starbucks (Jen Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Gryphon Bakery & Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'ShopSCAD Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
artcenter: {
  name: 'ArtCenter College of Design', abbr: 'ArtCenter', color: '#f26522',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'South Campus Café', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Hillside Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Design Store Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Wind Tunnel Grab-n-Go', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
reed: {
  name: 'Reed College', abbr: 'Reed', color: '#a4123f',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Commons Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Paradox Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Cerulean Blue Café (Library)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Commons Grab-n-Go', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
oberlin: {
  name: 'Oberlin College', abbr: 'Oberlin', color: '#c40626',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Stevenson Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Lord-Saunders Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The \'Sco', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Slow Train Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'DeCafé (Wilder Hall)', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Azariah\'s Café (Mudd Library)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
kenyon: {
  name: 'Kenyon College', abbr: 'Kenyon', color: '#722d3f',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Peirce Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Village Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Wiggin Street Coffee', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Peirce Pub', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
denison: {
  name: 'Denison University', abbr: 'Denison', color: '#c8102e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Curtis Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Slayter Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Hummingbird Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Silverstein Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Slayter Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
dickinson: {
  name: 'Dickinson College', abbr: 'Dickinson', color: '#b1181e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Caf (Holland Union Building)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'HUB Snack Shop', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Old West Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Biddle House Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
lafayette: {
  name: 'Lafayette College', abbr: 'Lafayette', color: '#870a3b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Marquis Hall Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Simon Center Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Gilberts Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Skillman Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Farinon Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
bucknell: {
  name: 'Bucknell University', abbr: 'Bucknell', color: '#003865',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Bostwick Marketplace', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Hulmeville Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Terrace Room', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Bison Marketplace', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Uptown Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Elaine Langone Center Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
union: {
  name: 'Union College (NY)', abbr: 'Union', color: '#eaab00',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'West College Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Rathskeller Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Old Chapel Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Reamer Campus Center Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
trinity: {
  name: 'Trinity College (CT)', abbr: 'Trinity', color: '#00263a',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Mather Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Cave', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Peter B\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Bistro (Mather)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
    ]}
  ]
},
connecticutcollege: {
  name: 'Connecticut College', abbr: 'Conn College', color: '#003865',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Harris Refectory', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Oasis Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Coffee Grounds', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'The 1962 Room', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
bates: {
  name: 'Bates College', abbr: 'Bates', color: '#792024',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Commons Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Ronj (Coffeehouse)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Chase Hall Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Commons Grab-n-Go', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
colby: {
  name: 'Colby College', abbr: 'Colby', color: '#003a63',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Dana Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Roberts Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Bob\'s Diner', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Cotter Union Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Foss Dining Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
skidmore: {
  name: 'Skidmore College', abbr: 'Skidmore', color: '#f4791f',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Murray-Aikins Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Spa Café (Case Center)', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Northwoods Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Burgess Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
gettysburg: {
  name: 'Gettysburg College', abbr: 'Gettysburg', color: '#f04e23',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Servo (Servery Dining Hall)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Bullet Hole', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'CUB Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Musselman Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
franklinmarshall: {
  name: 'Franklin & Marshall College', abbr: 'F&M', color: '#00274c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'College Square Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Iron Bean Coffee', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'The Ware Center Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Botanical Gardens Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
muhlenberg: {
  name: 'Muhlenberg College', abbr: 'Muhlenberg', color: '#00304d',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Seegers Union Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Cellar', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Muhlenberg Trolley Stop Deli', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Seegers Union Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
furman: {
  name: 'Furman University', abbr: 'Furman', color: '#582c83',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Younts Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Grill at Trone Center', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Paladin Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Cherrydale Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
rhodes: {
  name: 'Rhodes College', abbr: 'Rhodes', color: '#003057',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Lynx Lair', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Kettle', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Zach\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Barret Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
centre: {
  name: 'Centre College', abbr: 'Centre', color: '#001e62',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Cowan Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Benny\'s Java', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Cowan Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Crounse Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
sewanee: {
  name: 'Sewanee: The University of the South', abbr: 'Sewanee', color: '#8a2432',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'McClurg Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Blue Chair Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Stirling\'s Coffee House', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'McClurg Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
stolaf: {
  name: 'St. Olaf College', abbr: 'St. Olaf', color: '#4a2377',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Stav Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Cage', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Stav Underground', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Cage Coffee Shop', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
    ]}
  ]
},
macalester: {
  name: 'Macalester College', abbr: 'Macalester', color: '#002e5d',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Cafe Mac', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Loch Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Kagin Commons Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Grille Nation', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
lawrenceuniv: {
  name: 'Lawrence University', abbr: 'Lawrence', color: '#002649',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Andrew Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Grill at Andrew Commons', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Cafe (Warch Campus Center)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Skyline Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
wheatonma: {
  name: 'Wheaton College (MA)', abbr: 'Wheaton MA', color: '#002d5b',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Chase Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Lyon\'s Den', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Emerson Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Balfour-Hood Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
bard: {
  name: 'Bard College', abbr: 'Bard', color: '#c8102e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Kline Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Down the Road Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Kline Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Manor House Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
ucf: {
  name: 'University of Central Florida', abbr: 'UCF', color: '#000000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Knights Plaza Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Libra Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (John C. Hitt Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Knight\'s Pantry Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Wackadoo\'s Bar & Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
usf: {
  name: 'University of South Florida', abbr: 'USF', color: '#006747',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Fresh Food Company', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Beef O Bradys Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Marshall Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Marshall Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Bulls Country Café', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Reddick Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
fau: {
  name: 'Florida Atlantic University', abbr: 'FAU', color: '#003366',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Breezeway Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Owl Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Burrow Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
unccharlotte: {
  name: 'University of North Carolina–Charlotte', abbr: 'UNCC', color: '#00703c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'SoVi', b: 9.57, l: 12.68, d: 14.23, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Crown Commons', b: 9.57, l: 12.68, d: 14.23, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Chick-fil-A', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Bojangles', b: 7.75, l: 9.75, d: 9.75, s: 4.00 },
      { name: 'Wendy\'s', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Salsarita\'s', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Panda Express', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Subway', b: 8.00, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Starbucks (All Locs)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
    ]}
  ]
},
appstate: {
  name: 'Appalachian State University', abbr: 'App State', color: '#000000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Central Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Trivette Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Plemmons Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Char Grill', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
      { name: 'Crossroads Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
ecu: {
  name: 'East Carolina University', abbr: 'ECU', color: '#592a8a',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'West End Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Todd Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Joyner Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Pirate\'s Landing Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
gmu: {
  name: 'George Mason University', abbr: 'George Mason', color: '#006633',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Southside Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Ike\'s Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Johnson Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Johnson Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Fenwick Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Rachel\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
odu: {
  name: 'Old Dominion University', abbr: 'ODU', color: '#003057',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Ted Constant Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Webb Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Webb Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Monarch Grounds Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Webb Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
vcu: {
  name: 'Virginia Commonwealth University', abbr: 'VCU', color: '#000000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Shafer Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Cabell Library Café Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Commons)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Commons)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Cabell Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Lulu\'s Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
towson: {
  name: 'Towson University', abbr: 'Towson', color: '#ffbb00',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Newell Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'West Village Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (University Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (University Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Cook Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Tiger Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
rowan: {
  name: 'Rowan University', abbr: 'Rowan', color: '#5c068c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Chamberlain Student Center Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Holly Pointe Commons', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Campbell Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Profs Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
njit: {
  name: 'New Jersey Institute of Technology', abbr: 'NJIT', color: '#cc0000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Redwood Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Campus Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Campus Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Van Houten Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Highlander Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
illinoisstate: {
  name: 'Illinois State University', abbr: 'ISU', color: '#ce0f3d',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Linkins Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Watterson Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Bone Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Bone Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Starbucks (Milner Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Redbird Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
portlandstate: {
  name: 'Portland State University', abbr: 'PSU', color: '#7c1c26',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Victor\'s Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Viking Pavilion Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Starbucks (Millar Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Ondine Residence Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Food Cart Pod (Campus Loc.)', b: 0, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
uportland: {
  name: 'University of Portland', abbr: 'UOP', color: '#461d7c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Commons Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Cove', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Pilot House Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Bauccio Commons Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
seattleu: {
  name: 'Seattle University', abbr: 'SU', color: '#a1093e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Cherry Street Market', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Vi Hilbert Hall Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'The Bottom Line Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Chieftain Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'C-Street Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
    ]}
  ]
},
belmont: {
  name: 'Belmont University', abbr: 'BU', color: '#003057',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'McAfee Concourse Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Bruin Grille', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Beans Coffee Company', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Fidelity Hall Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
creighton: {
  name: 'Creighton University', abbr: 'CU', color: '#00478e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Brandeis Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Gallagher Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Bluejay Underground', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Panda Express (Skutt Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Starbucks (Reinert-Alumni Library)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
      { name: 'Café Divino', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
xavier: {
  name: 'Xavier University', abbr: 'XU', color: '#0c2340',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Kennedy Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Bombers Café', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Café Ambrosia', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Gallagher Student Center Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
marist: {
  name: 'Marist College', abbr: 'MC', color: '#c8102e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Cannavino Library Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'North End Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'The Cabaret', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Foxtrot Grill', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Fireside Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
uidaho: {
  name: 'University of Idaho', abbr: 'UID', color: '#8b8681',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Wallace Dining Center', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Idaho Commons)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Idaho Commons)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Vandal Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Einstein Bros. Bagels', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
montanastate: {
  name: 'Montana State University', abbr: 'MSU', color: '#00355f',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Miller Dining Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Hannon Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (SUB)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (SUB)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Bobcat Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Ramble Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
umontana: {
  name: 'University of Montana', abbr: 'UMT', color: '#772432',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Food Zoo', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (UC)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Grizzly Grocery', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'UC Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Break Espresso', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
    ]}
  ]
},
uwyo: {
  name: 'University of Wyoming', abbr: 'UWY', color: '#492f24',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Washakie Dining Center', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Cowboy Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Coe Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
sdstate: {
  name: 'South Dakota State University', abbr: 'SDS', color: '#003da5',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Market at Larson Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Jackrabbit Grille', b: 7.50, l: 11.00, d: 11.00, s: 4.50 },
      { name: 'Union Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Starbucks (Hilton Coliseum)', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
    ]}
  ]
},
usdakota: {
  name: 'University of South Dakota', abbr: 'USD', color: '#cc0000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Coyote Café Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Muenster Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Muenster Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Charlie\'s Coffee', b: 6.00, l: 8.50, d: 8.50, s: 4.00 },
    ]}
  ]
},
ndsu: {
  name: 'North Dakota State University', abbr: 'NDS', color: '#ffc72c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Union Dining Room', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Residence Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Memorial Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Memorial Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Bison Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
und: {
  name: 'University of North Dakota', abbr: 'UND', color: '#009a44',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Wilkerson Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Fighting Hawks Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Terrace Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
uaf: {
  name: 'University of Alaska Fairbanks', abbr: 'UAF', color: '#00274c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Lola Tilly Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Wood Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Wood Center Food Court', b: 7.00, l: 10.50, d: 10.50, s: 4.50 },
      { name: 'Nanook Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
uaa: {
  name: 'University of Alaska Anchorage', abbr: 'UAA', color: '#00549e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Creekside Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Seawolf Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Consortium Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
boisestate: {
  name: 'Boise State University', abbr: 'BSU', color: '#0033a0',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Farmhouse (SUB)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Chaffee Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Bronco Shop Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Albertsons Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
idahostate: {
  name: 'Idaho State University', abbr: 'ISU', color: '#f47321',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Pond Student Union Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Pond Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Bengal Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Eli\'s Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
nau: {
  name: 'Northern Arizona University', abbr: 'NAU', color: '#003561',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Views Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Ponderosa Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (duBois Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (duBois Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Lumberjack Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
usu: {
  name: 'Utah State University', abbr: 'USU', color: '#00274c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Junction Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (TSC)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (TSC)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Aggie Blue Bikes Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Hub & Spoke Diner', b: 7.50, l: 10.50, d: 10.50, s: 4.00 },
    ]}
  ]
},
weberstate: {
  name: 'Weber State University', abbr: 'WSU', color: '#4b0082',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Cove Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Shepherd Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Wildcat Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Stewart Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
ewu: {
  name: 'Eastern Washington University', abbr: 'EWU', color: '#a10022',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Tawanka Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (PUB)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Eagles Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'JFK Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
wwu: {
  name: 'Western Washington University', abbr: 'WWU', color: '#003466',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Fairhaven Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Vendors Row Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Viking Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Viking Union Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Miller Hall Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
cwu: {
  name: 'Central Washington University', abbr: 'CWU', color: '#000000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Holmes Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (SURC)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Wildcat Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'SURC Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
unco: {
  name: 'University of Northern Colorado', abbr: 'UNC', color: '#5b2b83',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Holmes Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (University Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Bear Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Michener Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
cmu: {
  name: 'Colorado Mesa University', abbr: 'CMU', color: '#7a1e2f',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Maverick Grill Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (University Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Maverick Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Tomlinson Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
gcu: {
  name: 'Grand Canyon University', abbr: 'GCU', color: '#5c068c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Grille at GCU', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Antelope Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Union)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Lope Shop Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
      { name: 'Canyon Activities Center Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
cmich: {
  name: 'Central Michigan University', abbr: 'CMU', color: '#6a0032',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Real Food on Campus (Robinson)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Woldt-Larzelere Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Bovee UC)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Bovee UC)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Chippewa Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
emich: {
  name: 'Eastern Michigan University', abbr: 'EMU', color: '#00694e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Eastern Eateries (Dining Commons)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Eagle Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Halle Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
nmu: {
  name: 'Northern Michigan University', abbr: 'NMU', color: '#00543c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Marketplace', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (University Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Wildcat Den', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Café Bella (Library)', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
gvsu: {
  name: 'Grand Valley State University', abbr: 'GVSU', color: '#0033a0',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Fresh Food Company (Kirkhof)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Kleiner Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Kirkhof Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Kirkhof Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Laker Marketplace', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
ferris: {
  name: 'Ferris State University', abbr: 'FSU', color: '#c8102e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Rock Café (Rock Dining Hall)', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (University Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Bulldog Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'FLITE Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
wiu: {
  name: 'Western Illinois University', abbr: 'WIU', color: '#663399',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Corbin/Olson Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (University Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Leatherneck Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Malpass Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
siuc: {
  name: 'Southern Illinois University Carbondale', abbr: 'SIUC', color: '#8a0303',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Trueblood Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Grinnell Dining Hall', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Saluki Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
niu: {
  name: 'Northern Illinois University', abbr: 'NIU', color: '#c8102e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Neptune Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Grant Towers Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Holmes Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Huskie Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Founders Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
uwm: {
  name: 'University of Wisconsin–Milwaukee', abbr: 'UWM', color: '#000000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Sandburg Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Panther Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
      { name: 'Golda Meir Library Café', b: 6.50, l: 9.50, d: 9.50, s: 4.00 },
    ]}
  ]
},
uwosh: {
  name: 'University of Wisconsin–Oshkosh', abbr: 'UWO', color: '#000000',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Blackhawk Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Reeve Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Titan Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
uwgb: {
  name: 'University of Wisconsin–Green Bay', abbr: 'UWGB', color: '#00543c',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'The Marketplace at Phoenix Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (University Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Phoenix Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
uwlax: {
  name: 'University of Wisconsin–La Crosse', abbr: 'UWL', color: '#8a2432',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Whitney Center Dining', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Eagle Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
uwstout: {
  name: 'University of Wisconsin–Stout', abbr: 'UWS', color: '#003d63',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Commons Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Memorial Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Blue Devil Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
mnsu: {
  name: 'Minnesota State University, Mankato', abbr: 'MNSU', color: '#582c83',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Carkoski Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Centennial Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Maverick Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
scsu: {
  name: 'St. Cloud State University', abbr: 'SCSU', color: '#c8102e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Garvey Commons', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Atwood Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Husky Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
umd: {
  name: 'University of Minnesota Duluth', abbr: 'UMD', color: '#7a1e2f',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Bulldog Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Kirby Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Bulldog Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
sdsmt: {
  name: 'South Dakota School of Mines & Technology', abbr: 'SDSMT', color: '#003057',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Surbeck Center Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Surbeck Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Hardrocker Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
mst: {
  name: 'Missouri University of Science and Technology', abbr: 'MST', color: '#3b2071',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Havener Center Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
      { name: 'Residential Commons Dining', b: 9.00, l: 12.00, d: 14.00, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Havener Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Miner Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
ucm: {
  name: 'University of Central Missouri', abbr: 'UCM', color: '#231f20',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Elliott Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Elliott Student Union)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Mule Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
wsu: {
  name: 'Wichita State University', abbr: 'WSU', color: '#ffc82e',
  sections: [
    { label: 'Unlimited Dining Halls', locs: [
      { name: 'Shocker Dining Hall', b: 9.50, l: 12.50, d: 14.50, s: 5.00, isDH: true, type: 'unlimited' },
    ]},
    { label: 'Retail Dining', locs: [
      { name: 'Panda Express (Rhatigan Student Center)', b: 0, l: 11.50, d: 11.50, s: 5.00 },
      { name: 'Chick-fil-A (Rhatigan Student Center)', b: 7.25, l: 10.25, d: 10.25, s: 4.00 },
      { name: 'Shocker Market', b: 7.00, l: 10.00, d: 10.00, s: 4.00 },
    ]}
  ]
},
};

function ensureAverageCosts() {
  const coffeeKeywords = ['starbuck', 'java', 'dunkin', 'coffee', 'cafe', 'beans', 'port city', 'portcity'];
  Object.values(SCHOOLS).forEach(school => {
    school.sections.forEach(section => {
      section.locs.forEach(loc => {
        if (loc.averageCost === undefined || loc.averageCost === null) {
          // Dining halls / all-you-can-eat
          if (loc.isDH === true || loc.type === 'unlimited') {
            loc.averageCost = 0.00;
            return;
          }

          const name = (loc.name || '').toLowerCase();
          if (coffeeKeywords.some(k => name.includes(k))) {
            loc.averageCost = 5.00;
            return;
          }

          // Fallback for retail / fast food
          loc.averageCost = 11.00;
        } else {
          // Coerce to number if present
          loc.averageCost = Number(loc.averageCost);
          if (Number.isNaN(loc.averageCost)) loc.averageCost = 11.00;
        }
      });
    });
  });
}

ensureAverageCosts();
