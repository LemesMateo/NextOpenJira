interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description: string;
    status: string;
    createdAt: number;
}




export const seedData: SeedData = {
    entries: [
        {
            description: 'Pendiente:Cupidatat mollit excepteur ullamco dolore pariatur est consequat.',
            status: 'pending',
            createdAt: Date.now(),
        },
        {
            description: 'En-Progreso: Qui et esse deserunt esse eu voluptate dolore laborum exercitation dolor nostrud ut laborum.',
            status: 'in-progress',
            createdAt: Date.now() - 1000000,
        },
        {
            description: 'Terminadas: Ad officia eu laborum exercitation do elit veniam dolore velit ut nostrud labore aute culpa.',
            status: 'finished',
            createdAt: Date.now() - 100000,
        },
    ]
}