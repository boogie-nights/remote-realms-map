import { Location } from './location';

export interface QuestEntry {
    name: string;
    location: Location;
    requirements?: string[];
}

export const questData: QuestEntry[] = [
    {
        name: 'Culinary Assistance',
        location: { x: 1585, y: 3434 }
    },
    {
        name: 'Fisherman\'s Friend',
        location: { x: 1776, y: 3242 }
    },
    {
        name: 'Ship Together',
        location: { x: 2615, y: 3769 }
    },
    {
        name: 'Agrarian Practice',
        location: { x: 1920, y: 3231 }
    }
];
