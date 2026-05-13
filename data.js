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
  }
};
