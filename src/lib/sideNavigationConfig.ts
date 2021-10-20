const sideNavigationConfig = [
  {
    // main entry
    name: 'Trending',
    // list of subentries
    entries: [
      {
        name: 'Best Sellers',
        subEntries: null,
      },
      {
        name: 'New Releases',
        subEntries: null,
      },
      {
        name: 'Movers & Shakers',
        subEntries: null,
      },
    ],
  },
  {
    // main entry
    name: 'Digital Content & Devices',
    entries: [
      {
        name: 'Primve Video',
        subEntries: [
          {
            name: "Prime Video",
            rightMenuEntries: [
              {
                name: "Prime Video"
              },
              {
                name: "Included with Prime"
              },
              {
                name: "Prime Video Channels"
              },
            ],
          },
          {
            name: "More To Explore",
            rightMenuEntries: [
              {
                name: "Amazon Originals"
              },
              {
                name: "Kids"
              },
              {
                name: "Coming soon"
              },
            ],
          },
        ],
      },
      {
        name: 'Amazon Music',
        subEntries: [
          {
            name: "Stream Music",
            rightMenuEntries: [
              {
                name: "Amazon Music Unlimited"
              },
              {
                name: "Amazon Music Prime"
              },
              {
                name: "Free Streaming Music"
              },
            ],
          },
          {
            name: "Buy Music",
            rightMenuEntries: [
              {
                name: "CDs & Vinyl"
              },
              {
                name: "Download Store"
              },
              {
                name: "Artist Merch Shop"
              },
            ],
          },
        ],
      },
    ],
  },
  {
    // main entry
    name: 'Shop By Department',
    entries: [
      {
        name: 'Clothing, Shoes, Jewelry & Watches',
        subEntries: [
          {
            name: "Clothing, Shoes, Jewelry & Watches",
            rightMenuEntries: [
              {
                name: "Amazon Fashion"
              },
              {
                name: "Women"
              },
              {
                name: "Men"
              },
              {
                name: "Girls"
              },
              {
                name: "Boys"
              },
            ],
          },
          {
            name: "More To Explore",
            rightMenuEntries: [
              {
                name: "Our Brands"
              },
              {
                name: "The Shop by Shopbop"
              },
            ],
          },
        ],
      },
      {
        name: 'Amazon Fresh',
        subEntries: [
          {
            name: "Amazon Fresh",
            rightMenuEntries: [
              {
                name: "All Amazon Fresh"
              },
            ],
          },
        ],
      },
    ],
  },
];

export default sideNavigationConfig;
