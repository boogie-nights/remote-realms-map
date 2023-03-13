import { Location } from './location';

export interface BuildableEntry {
    name: string;
    location: Location[];
    level?: number;
    requirements?: string[];
}

export const buildableData: BuildableEntry[] = [
    {
        name: 'Birdhouse',
        location: [
            { x: 1816, y: 3621, description: 'Directly North of Immerbury' },
            { x: 1773, y: 3836, description: 'Directly North of Immerbury' },
            { x: 1883, y: 3812, description: 'Directly North of Immerbury' },
            { x: 1984, y: 3915, description: 'Directly North of Immerbury' },
            { x: 1902, y: 3734, description: 'Directly North of Immerbury' },
        ],
        requirements: [
            '1 Carpentry',
            'A Hammer'
        ]
    },
    {
        name: 'Masonry Deposit Box',
        location: [
            { x: 2335, y: 4012, description: 'West of Ruins of Hindsboro' },
        ],
        requirements: [
            '35 Masonry',
            '45 Masonry',
        ]
    }
]
