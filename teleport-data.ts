export interface TeleportEntry {
    name: string;
    location: Location;
    requirements?: string[];
}

export const teleportData = [
    {
        name: 'Immerbury Teleport',
        location: { x: 1626, y: 3416 }
    },
    {
        name: 'Al Aljar Teleport',
        requirements: [
            'The Lost Quarter Quest',
            '25 Magic'
        ],
        location: { x: 3137, y: 3004 }
    }
];
