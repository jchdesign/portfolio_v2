import DLPoster from '../assets/DirtyLaundry/DLPoster.png';
import DLCover from '../assets/DirtyLaundry/DLCover.png';
import OHPoster from '../assets/OniriaHill/OHPoster.png';
import BrightSideCover from '../assets/BrightSide/BrightSideCover.png';

const film_data = [
    {
        key: 1,
        title: 'LOOK ON THE BRIGHT SIDE',
        listing: 'LOOK ON THE BRIGHT SIDE',
        role: ['JEFF CHANG', 'Composer'],
        credit: 'CAP STUDIOS', // For the program listing
        arranged: true,
        duration: 'MAR 2025 - MAY 2025',
        collab: true,
        collab_credits: 'CAP STUDIOS', // For the collaboration header
        collaborators: [
            {
                name: 'MYLA PITZER',
                role: 'Director'
            },
            {
                name: 'SYDNIE PITZER',
                role: 'Director'
            },
            {
                name: 'CAP Studios',
                role: 'Production Studio'
            }
        ],
        img: BrightSideCover,
        imgCard: BrightSideCover,
        miniOverview: 'Scoring the emotional journey of an artist facing a degenerative eye disorder.', 
        overview: 'I work alongside directors Myla Pitzer and Sydnie Pitzer to craft a score capturing the heartache, acceptance, and hope of Eden — an artist confronting a degenerative eye disorder.',
        link: '/BrightSide'
    },
    {
        key: 2,
        title: 'DIRTY LAUNDRY',
        listing: 'DIRTY LAUNDRY',
        role: ['JEFF CHANG', 'Composer, Sound Designer, Boom Op'],
        credit: 'CAP STUDIOS', // For the program listing
        arranged: true,
        duration: 'SEPT 2024 - DEC 2024',
        collab: true,
        collab_credits: 'CAP STUDIOS', // For the collaboration header
        collaborators: [
            {
                name: 'Gerry Ramos',
                role: 'Director'
            },
            {
                name: 'CAP Studios',
                role: 'Production Studio'
            }
        ],
        img: DLCover,
        imgCard: DLCover,
        miniOverview: 'Telling the sonic story of Isa in the coming-of-age dramedy Dirty Laundry.', 
        overview: 'With the production team at the Cinematic Arts and Production Studio, I tell the sonic story of Isa in the coming-of-age dramedy Dirty Laundry.',
        link: '/DirtyLaundry'
    },
    {
        key: 2,
        title: 'ONIRIA HILL',
        listing: 'ONIRIA HILL',
        role: ['JEFF CHANG', 'COMPOSER'],
        credit: 'MARTÍNEZ', // For the program listing
        arranged: true,
        duration: 'OCT 2024 - PRESENT',
        collab: true,
        collab_credits: 'CHUCHO MARTÍNEZ', // For the collaboration header
        collaborators: [
            {
                name: 'CHUCHO MARTÍNEZ',
                role: 'Director'
            }
        ],
        img: OHPoster,
        imgCard: OHPoster,
        miniOverview: 'Loss, grief, and hope in a score exploring the rift between memory and reality.',
        overview: "In a score that explores the rift between memory and reality, I embrace Chucho Martínez's vision of a journey through loss, grief, and hope.",
        link: '/OniriaHill'
    }
]

export default film_data