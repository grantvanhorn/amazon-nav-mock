import { primeVideoConfigName } from './constants';

const primeVideoConfig = [
  {
    id: '1',
    type: "header",
    copy: "Prime Video",
  },
  {
    id: '2',
    type: "entry",
    copy: "Prime Video",
  },
  {
    id: '3',
    type: "entry",
    copy: "Included with Prime",
  },
  {
    id: '4',
    type: "divider",
  },
  {
    id: '5',
    type: "header",
    copy: "More To Explore"
  },
  {
    id: '6',
    type: "entry",
    copy: "Amazon Originals",
  },
];

const config = {
  key: primeVideoConfigName,
  config: primeVideoConfig,
}

export default config;
