import { Location } from './location';

export interface GroundItemEntry {
    name: string;
    location: Location[];
    level?: number;
    requirements?: string[];
}

export const groundItemData: GroundItemEntry[] = [
    {
        name: 'Logs',
        location: [
            { x: 1855, y: 3357, description: 'Immerbury Horse Pasture' },
            { x: 1865, y: 3357, description: 'Immerbury Horse Pasture' },
            { x: 1875, y: 3357, description: 'Immerbury Horse Pasture' },
        ],
    }
]
