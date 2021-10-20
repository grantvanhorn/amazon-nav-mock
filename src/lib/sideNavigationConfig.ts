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
            ],
          },
        ],
      },
    ],
  },
];

export default sideNavigationConfig;
