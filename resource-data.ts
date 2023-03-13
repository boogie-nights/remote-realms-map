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
        ],
    },
    {
        name: 'Willow Tree',
        requirements: [
            '30 Woodcutting'
        ],
        location: [
            { x: 1441, y: 3571, description: 'Immerbury Castle North' },
            { x: 1452, y: 3543, description: 'Immerbury Castle North' },
            { x: 1467, y: 3600, description: 'Immerbury Castle North' },
            { x: 1477, y: 3524, description: 'Immerbury Castle North' },
            { x: 1500, y: 3519, description: 'Immerbury Castle North' },
        ],
    },
];
