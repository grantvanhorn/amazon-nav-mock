import {
  mainMenuConfigName,
  primeVideoConfigName,
  amazonMusicConfigName,
  clothingShoesJewelryWatchesConfigName
} from './constants';

const mainNavigationConfig = [
  {
    id: '1',
    type: "header",
    copy: "Trending",
  },
  {
    id: '2',
    type: "entry",
    copy: "Best Sellers",
  },
  {
    id: '3',
    type: "entry",
    copy: "New Releases",
  },
  {
    id: '4',
    type: "entry",
    copy: "Movers & Shakers",
  },
  {
    id: '5',
    type: "divider",
  },
  {
    id: '6',
    type: "header",
    copy: "Digital Content & Devices"
  },
  {
    id: '7',
    type: "entry",
    copy: "Prime Video",
    hasSubMenu: true,
    key: primeVideoConfigName,
  },
  {
    id: '8',
    type: "entry",
    copy: "Amazon Music",
    hasSubMenu: true,
    key: amazonMusicConfigName,
  },
  {
    id: '9',
    type: "divider",
  },
  {
    id: '10',
    type: "header",
    copy: "Shop By Department"
  },
  {
    id: '11',
    type: "entry",
    copy: "Clothing, Shoes, Jewelry & Watches",
    hasSubMenu: true,
    key: clothingShoesJewelryWatchesConfigName,
  },
];

const config = {
  key: mainMenuConfigName,
  config: mainNavigationConfig,
}

export default config;
