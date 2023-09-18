import type { Card } from './index';

export const cards: Record<string, Partial<Card> & {image: string}> = {
  "oil-03": {
    cost: 3,
    resourceType: 'oil',
    resources: 2,
    power: 1,
    image: 'oil-03.webp',
  },
  "oil-07": {
    cost: 7,
    resourceType: 'oil',
    resources: 3,
    power: 2,
    image: 'oil-07.webp',
  },
  "oil-09": {
    cost: 9,
    resourceType: 'oil',
    resources: 1,
    power: 1,
    image: 'oil-09.webp',
  },
  "oil-16": {
    cost: 16,
    resourceType: 'oil',
    resources: 2,
    power: 3,
    image: 'oil-16.webp',
  },
  "oil-26": {
    cost: 26,
    resourceType: 'oil',
    resources: 2,
    power: 5,
    image: 'oil-26.webp',
  },
  "oil-32": {
    cost: 32,
    resourceType: 'oil',
    resources: 3,
    power: 6,
    image: 'oil-32.webp',
  },
  "oil-35": {
    cost: 35,
    resourceType: 'oil',
    resources: 1,
    power: 5,
    image: 'oil-35.webp',
  },
  "oil-40": {
    cost: 40,
    resourceType: 'oil',
    resources: 2,
    power: 6,
    image: 'oil-40.webp',
  },
  "clean-50": {
    cost: 50,
    power: 6,
    image: 'clean-50.webp',
  },
  "coal-04": {
    cost: 4,
    resourceType: 'coal',
    resources: 2,
    power: 1,
    image: 'coal-04.webp',
  },
  "coal-08": {
    cost: 8,
    resourceType: 'coal',
    resources: 3,
    power: 2,
    image: 'coal-08.webp',
  },
  "coal-10": {
    cost: 10,
    resourceType: 'coal',
    resources: 2,
    power: 2,
    image: 'coal-10.webp',
  },
  "coal-15": {
    cost: 15,
    resourceType: 'coal',
    resources: 2,
    power: 3,
    image: 'coal-15.webp',
  },
  "coal-20": {
    cost: 20,
    resourceType: 'coal',
    resources: 3,
    power: 5,
    image: 'coal-20.webp',
  },
  "coal-25": {
    cost: 25,
    resourceType: 'coal',
    resources: 2,
    power: 5,
    image: 'coal-25.webp',
  },
  "coal-31": {
    cost: 31,
    resourceType: 'coal',
    resources: 3,
    power: 6,
    image: 'coal-31.webp',
  },
  "coal-36": {
    cost: 36,
    resourceType: 'coal',
    resources: 3,
    power: 7,
    image: 'coal-36.webp',
  },
  "coal-42": {
    cost: 42,
    resourceType: 'coal',
    resources: 2,
    power: 6,
    image: 'coal-42.webp',
  },
  "garbage-06": {
    cost: 6,
    resourceType: 'garbage',
    resources: 1,
    power: 1,
    image: 'garbage-06.webp',
  },
  "garbage-14": {
    cost: 14,
    resourceType: 'garbage',
    resources: 2,
    power: 2,
    image: 'garbage-14.webp',
  },
  "garbage-19": {
    cost: 19,
    resourceType: 'garbage',
    resources: 2,
    power: 3,
    image: 'garbage-19.webp',
  },
  "garbage-24": {
    cost: 24,
    resourceType: 'garbage',
    resources: 2,
    power: 4,
    image: 'garbage-24.webp',
  },
  "garbage-30": {
    cost: 30,
    resourceType: 'garbage',
    resources: 3,
    power: 6,
    image: 'garbage-30.webp',
  },
  "garbage-38": {
    cost: 38,
    resourceType: 'garbage',
    resources: 3,
    power: 7,
    image: 'garbage-38.webp',
  },
  "hybrid-05": {
    cost: 5,
    resourceType: 'hybrid',
    resources: 2,
    power: 1,
    image: 'hybrid-05.webp',
  },
  "hybrid-12": {
    cost: 12,
    resourceType: 'hybrid',
    resources: 2,
    power: 2,
    image: 'hybrid-12.webp',
  },
  "hybrid-29": {
    cost: 29,
    resourceType: 'hybrid',
    resources: 1,
    power: 4,
    image: 'hybrid-29.webp',
  },
  "hybrid-46": {
    cost: 46,
    resourceType: 'hybrid',
    resources: 3,
    power: 7,
    image: 'hybrid-46.webp',
  },
  "hybrid-21": {
    cost: 21,
    resourceType: 'hybrid',
    resources: 2,
    power: 4,
    image: 'hybridl-21.webp',
  },
  "nuclear-11": {
    cost: 11,
    resourceType: 'uranium',
    resources: 1,
    power: 2,
    image: 'nuclear-11.webp',
  },
  "nuclear-17": {
    cost: 17,
    resourceType: 'uranium',
    resources: 1,
    power: 2,
    image: 'nuclear-17.webp',
  },
  "nuclear-23": {
    cost: 23,
    resourceType: 'uranium',
    resources: 1,
    power: 3,
    image: 'nuclear-23.webp',
  },
  "nuclear-28": {
    cost: 28,
    resourceType: 'uranium',
    resources: 1,
    power: 4,
    image: 'nuclear-28.webp',
  },
  "nuclear-34": {
    cost: 34,
    resourceType: 'uranium',
    resources: 1,
    power: 5,
    image: 'nuclear-34.webp',
  },
  "nuclear-39": {
    cost: 39,
    resourceType: 'uranium',
    resources: 1,
    power: 6,
    image: 'nuclear-39.webp',
  },
  "step-3": {
    image: 'step-3.webp',
  },
  "wind-13": {
    cost: 13,
    power: 1,
    image: 'wind-13.webp',
  },
  "wind-18": {
    cost: 18,
    power: 2,
    image: 'wind-18.webp',
  },
  "wind-22": {
    cost: 22,
    power: 2,
    image: 'wind-22.webp',
  },
  "wind-27": {
    cost: 27,
    power: 3,
    image: 'wind-27.webp',
  },
  "wind-33": {
    cost: 33,
    power: 4,
    image: 'wind-33.webp',
  },
  "wind-37": {
    cost: 37,
    power: 4,
    image: 'wind-37.webp',
  },
  "wind-44": {
    cost: 44,
    power: 5,
    image: 'wind-44.webp',
  },
};
