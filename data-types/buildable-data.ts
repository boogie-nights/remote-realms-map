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
            { x: 1816, y: 3621, description: 'Directly North of Immerbury' }
        ],
        requirements: [
            '1 Carpentry',
            'A Hammer'
        ]
    }
]
