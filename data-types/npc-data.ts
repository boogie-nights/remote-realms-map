import { Location } from './location';

export interface NpcEntry {
  name: string;
  location: Location[];
  level?: number;
  requirements?: string[];
}

export const npcData: NpcEntry[] = [
  {
    name: 'Clint Eastwood',
    location: [
      { x: 1900, y: 3222, description: 'Immerbury Field' },
    ],
  },
  {
    name: 'Chicken',
    location: [
      { x: 1613, y: 3217, description: 'Immerbury Farm' },
      { x: 1601, y: 3219, description: 'Immerbury Farm' },
      { x: 1594, y: 3209, description: 'Immerbury Farm' },
      { x: 1598, y: 3198, description: 'Immerbury Farm' },
      { x: 1623, y: 3213, description: 'Immerbury Farm' },
    ],
    level: 2,
  },
  {
    name: 'Sailor',
    location: [
      { x: 1472, y: 3249, description: 'Immerbury Dock' },
    ],
  },
  {
    name: 'Captain Barbarossa',
    location: [
      { x: 1463, y: 3310, description: 'Immerbury Dock' },
    ],
  },
  {
    name: 'Commander Keenan',
    location: [
      { x: 1493, y: 3561, description: 'Immerbury Castle' },
    ],
  },
  {
    name: 'Knight',
    location: [
      { x: 1480, y: 3580, description: 'Immerbury Castle' },
    ],
    level: 52,
  },
  {
    name: 'Knight',
    location: [
      { x: 1475, y: 3552, description: 'Immerbury Castle North' },
      { x: 1509, y: 3578, description: 'Immerbury Castle North' },
      { x: 1493, y: 3577, description: 'Immerbury Castle North' },
      { x: 1507, y: 3555, description: 'Immerbury Castle North' },
    ],
    level: 51,
  },
  {
    name: 'Farmer',
    location: [
      { x: 1557, y: 3215, description: 'Immerbury Fields West' },
      { x: 1619, y: 3235, description: 'Immerbury Fields Middle' }
    ],
    level: 10,
  },
  {
    name: 'Farmer',
    location: [
      { x: 1628, y: 3193, description: 'Immerbury Hen house' },
    ],
    requirements: [
      '7 Thieving'
    ]
  },
  {
    name: 'Cow',
    location: [
      { x: 1906, y: 3269, description: 'Immerbury East' },
      { x: 1911, y: 3284, description: 'Immerbury East' },
      { x: 1832, y: 3291, description: 'Immerbury East' },
      { x: 1854, y: 3296, description: 'Immerbury East' },
      { x: 1881, y: 3283, description: 'Immerbury East' },
    ],
    level: 9,
  },
  {
    name: 'Man',
    location: [
      { x: 1618, y: 3403, description: 'Immerbury Castle South' },
      { x: 1583, y: 3320, description: 'Immerbury Storage Barn' },
      { x: 1635, y: 3310, description: 'Immerbury Storage Barn' },
      { x: 1603, y: 3404, description: 'Immerbury Castle South' },
      { x: 1642, y: 3130, description: 'Immerbury Church' },
      { x: 832, y: 4014, description: 'Gesterville' },
      { x: 864, y: 3979, description: 'Gesterville' },
      { x: 860, y: 3932, description: 'Gesterville' },
    ],
    level: 3,
  },
  {
    name: 'Man',
    location: [
      { x: 1671, y: 3427, description: 'Immerbury Castle South' },
      { x: 1709, y: 3403, description: 'Immerbury Castle South' },
      { x: 857, y: 3903, description: 'Gesterville' },
    ],
    level: 10,
  },
  {
    name: 'Woman',
    location: [
      { x: 1664, y: 3311, description: 'Immerbury Storage Barn' },
      { x: 1794, y: 3435, description: 'Immerbury General Store' },
      { x: 1767, y: 3377, description: 'Immerbury Bank' },
      { x: 1603, y: 3131, description: 'Immerbury Church' },
      { x: 801, y: 3870, description: 'Gesterville south house' },
    ],
    level: 3,
  },
  {
    name: 'Woman',
    location: [
      { x: 1685, y: 3424, description: 'Immerbury Storage Barn' },
      { x: 799, y: 3911, description: 'Gesterville bar' },
    ],
    level: 10,
  },
  {
    name: 'Goblin',
    location: [
      { x: 1654, y: 3165, description: 'Immerbury South Near Farms' },
    ],
    level: 10,
  },
  {
    name: 'Mount Vendor',
    location: [
      { x: 1829, y: 3377, description: 'Immerbury Horse Pasture' },
    ]
  },
  {
    name: 'Old Man Bob',
    location: [
      { x: 1700, y: 3386, description: 'Immerbury House Near Bank' },
    ]
  },
  {
    name: 'Town Mayor',
    location: [
      { x: 1723, y: 3456, description: 'Immerbury Mayor\'s House' },
    ]
  },
  {
    name: 'Tipman',
    location: [
      { x: 1751, y: 3450, description: 'Immerbury General Store Alley' },
    ]
  },
  {
    name: 'Lucy',
    location: [
      { x: 1751, y: 3450, description: 'Immerbury General Store' },
    ]
  },
  {
    name: 'Lupur',
    location: [
      { x: 1751, y: 3450, description: 'Immerbury Rune Store' },
    ]
  },
  {
    name: 'Inn Keeper',
    location: [
      { x: 16557, y: 3538, description: 'Immerbury Inn' },
    ]
  },
  {
    name: 'Cook',
    location: [
      { x: 1575, y: 3429, description: 'Immerbury Castle South' },
    ]
  },
  {
    name: 'Captain Hammock',
    location: [
      { x: 1707, y: 3521, description: 'Immerbury North' },
    ]
  },
  {
    name: 'Herman',
    location: [
      { x: 1687, y: 3616, description: 'Immerbury North' },
    ]
  },
  {
    name: 'Roger',
    location: [
      { x: 1570, y: 3552, description: 'Immerbury North' },
    ]
  },
  {
    name: 'Lars',
    location: [
      { x: 1616, y: 3295, description: 'Immerbury' },
    ]
  },
  {
    name: 'William',
    location: [
      { x: 1607, y: 3426, description: 'Immerbury' },
    ]
  },
  {
    name: 'Catelyn',
    location: [
      { x: 2060, y: 3291, description: 'Immerbury Beach East' },
    ]
  },
  {
    name: 'Horse',
    location: [
      { x: 1842, y: 3360, description: 'Immerbury Horse Pasture' },
      { x: 1875, y: 3340, description: 'Immerbury Horse Pasture' },
      { x: 1905, y: 3353, description: 'Immerbury Horse Pasture' },
      { x: 1885, y: 3375, description: 'Immerbury Horse Pasture' },
    ],
  },
  {
    name: 'Unicorn',
    location: [
      { x: 1024, y: 3799, description: 'South-east of Gesterville' },
      { x: 1001, y: 3752, description: 'South-east of Gesterville' },
    ],
    level: 25
  },
  {
    name: 'Bear',
    location: [
      { x: 1191, y: 3812, description: 'South-east of Gesterville' },
    ],
    level: 37
  },
  {
    name: 'Grizzly Bear',
    location: [
      { x: 1436, y: 4138, description: 'East of Brie' },
      { x: 1663, y: 3801, description: 'West of Carpentry Bench North of Immerbury' },
    ],
    level: 45
  },
  {
    name: 'Wolf',
    location: [
      { x: 1754, y: 3782, description: 'North of Carpentry Bench North of Immerbury' },
      { x: 1829, y: 3754, description: 'North of Carpentry Bench North of Immerbury' },
      { x: 1822, y: 3823, description: 'North of Carpentry Bench North of Immerbury' },
      { x: 1957, y: 3780, description: 'North east of Immerbury on Coast' },
      { x: 1968, y: 3813, description: 'North east of Immerbury on Coast' },
      { x: 1946, y: 3819, description: 'North east of Immerbury on Coast' },
      { x: 2009, y: 3829, description: 'North east of Immerbury on Coast' },
      { x: 1988, y: 3840, description: 'North east of Immerbury on Coast' },
    ],
    level: 26
  },
  {
    name: 'Monk',
    location: [
      { x: 1125, y: 4084, description: 'Brei' },
      { x: 1155, y: 4089, description: 'Brei' },
      { x: 1273, y: 4107, description: 'Brei' },
    ],
  },
  {
    name: 'Brother Sigmund',
    location: [
      { x: 1233, y: 4105, description: 'Brei' },
    ],
  },
  {
    name: 'Sylvia',
    location: [
      { x: 889, y: 3940, description: 'Gesterville' },
    ],
  },
  {
    name: 'Green',
    location: [
      { x: 1886, y: 3765, description: 'North of Immerbury' },
    ],
  },
  {
    name: 'Blue',
    location: [
      { x: 2204, y: 3893, description: 'North of Immerbury' },
    ],
  },
  {
    name: 'Harald',
    location: [
      { x: 2601, y: 3786, description: 'South of Hindsborough' },
    ],
  },
  {
    name: 'Slayer Master',
    location: [
      { x: 1398, y: 3929, description: 'South-east of Brie' },
    ],
  },
  {
    name: 'Dan',
    location: [
      { x: 1610, y: 3769, description: 'West of Carpentry Bench North of Immerbury' },
    ],
  },
];
