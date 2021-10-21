import { amazonMusicConfigName } from './constants';

const amazonMusicConfig = [
  {
    id: '1',
    type: "header",
    copy: "Stream Music",
  },
  {
    id: '2',
    type: "entry",
    copy: "Amazon Music Unlimited",
  },
  {
    id: '3',
    type: "entry",
    copy: "Amazon Music Prime",
  },
  {
    id: '4',
    type: "divider",
  },
  {
    id: '5',
    type: "header",
    copy: "Buy Music"
  },
  {
    id: '6',
    type: "entry",
    copy: "CDs & Vinyl",
  },
];

const config = {
  key: amazonMusicConfigName,
  config: amazonMusicConfig,
};

export default config;
