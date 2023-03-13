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
    }
];
