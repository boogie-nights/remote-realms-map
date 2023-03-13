import { Location } from './location';

export interface ResourceEntry {
    name: string;
    location: Location[];
    level?: number;
    requirements?: string[];
}

export const resourceData: ResourceEntry[] = [
    {
        name: 'Flax',
        requirements: [
            '10 Gathering'
        ],
        location: [
            { x: 1972, y: 3298 }
        ],
    },
    {
        name: 'Oak Tree',
        requirements: [
            '15 Woodcutting'
        ],
        location: [
            { x: 1538, y: 3530, description: 'Immerbury' },
            { x: 1541, y: 3582, description: 'Immerbury' },
            { x: 1681, y: 3305, description: 'Immerbury' },
            { x: 1678, y: 3194, description: 'Immerbury' },
            { x: 1722, y: 3202, description: 'Immerbury' },
            { x: 1951, y: 3411, description: 'Immerbury' },
            { x: 1995, y: 3377, description: 'Immerbury' },
            { x: 1697, y: 3435, description: 'Immerbury Mayor\'s House' },
            { x: 1696, y: 3412, description: 'Immerbury Mayor\'s House' },
            { x: 1722, y: 3202, description: 'Immerbury' },
            { x: 1957, y: 3215, description: 'Immerbury Rune Altar' },
            { x: 2016, y: 3212, description: 'Immerbury Rune Altar' },
            { x: 1963, y: 3147, description: 'Immerbury Rune Altar' },
            { x: 1887, y: 3491, description: 'Immerbury' },
            { x: 1826, y: 3509, description: 'Immerbury' },
        ],
    },
    {
        name: 'Willow Tree',
        requirements: [
            '30 Woodcutting'
        ],
        location: [
            { x: 1997, y: 3449, description: 'Immerbury Coast East' },
            { x: 1979, y: 3462, description: 'Immerbury Coast East' },
            { x: 1968, y: 3476, description: 'Immerbury Coast East' },
            { x: 1964, y: 3497, description: 'Immerbury Coast East' },
            { x: 1441, y: 3571, description: 'Immerbury Castle North' },
            { x: 1452, y: 3543, description: 'Immerbury Castle North' },
            { x: 1467, y: 3600, description: 'Immerbury Castle North' },
            { x: 1477, y: 3524, description: 'Immerbury Castle North' },
            { x: 1500, y: 3519, description: 'Immerbury Castle North' },
            { x: 1805, y: 3375, description: 'Immerbury Horse Pasture' },
            { x: 1828, y: 3362, description: 'Immerbury Horse Pasture' },
            { x: 1873, y: 3329, description: 'Immerbury Horse Pasture' },
            { x: 1900, y: 3332, description: 'Immerbury Horse Pasture' },
            { x: 1845, y: 3347, description: 'Immerbury Horse Pasture' },
        ],
    },
    {
        name: 'Yew Tree',
        requirements: [
            '60 Woodcutting'
        ],
        location: [
            { x: 1672, y: 3380, description: 'Immerbury Castle South' },
        ],
    },
];
