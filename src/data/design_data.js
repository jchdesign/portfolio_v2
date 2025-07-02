import MultiSimCover from '../assets/MultiSim_SimManager/Cover.png';
import NearbyFlowFinal from '../assets/Nearby/FlowFinal.png';
import InterludeCover from '../assets/Interlude/interlude_cover.png';
import InterludeCard from '../assets/Interlude/interlude_final.png'

const work_data = [
    {
        key: 1,
        title: 'INTERLUDE',
        listing: 'INTERLUDE',
        role: ['JEFF CHANG', 'Product Manager, Designer, Engineer'],
        credit: 'CHANG, GUO, JOHAL, WEI',
        arranged: false,
        collab: true,
        collab_credits: 'THE UC BERKELEY SCHOOL OF INFORMATION',
        duration: 'OCT 2024 - MAY 2025',
        collaborators: [
            {
                name: 'ANITA GUO',
                role: 'UX DESIGNER'
            },
            {
                name: 'TJ JOHAL',
                role: 'DATA SCIENTIST'
            },
            {
                name: 'KAREN WEI',
                role: 'UX DESIGNER'
            },
            {
                name: 'KAY ASHAOLU',
                role: 'ADVISOR'
            }
        ],
        img: InterludeCover,
        imgCard: InterludeCard,
        miniOverview: 'Orchestrated product management, UI/UX design, and full-stack engineering to develop from 0 to 1 an application supporting the growth of emerging music artists.',
        overview: 'Orchestrated product management, UI/UX design, and full-stack engineering to develop from 0 to 1 an application supporting the growth of emerging music artists.',
        link: '/Interlude'
    },
    {
        key: 2,
        title: 'MULTIPLE SIMULATIONS AND SIMULATION MANAGER WORKFLOW REDESIGN',
        listing: 'MULTISIM + SIM MANAGER REDESIGN',
        role: ['JEFF CHANG', 'UX DESIGN INTERN'],
        credit: 'MATHWORKS', // For the program listing
        arranged: true,
        duration: 'MAY 2024 - AUG 2024',
        collab: true,
        collab_credits: 'MATHWORKS', // For the collaboration header
        collaborators: [
            {
                name: 'RAMYA ADUSUMILLI',
                role: 'UX MANAGER'
            },
            {
                name: 'VIPRESH GANGWAL',
                role: 'UX MANAGER'
            },
            {
                name: 'RAHUL KUMAR',
                role: 'PRODUCT MANAGER'
            },
            {
                name: 'MAHARSHI PATEL',
                role: 'DEVELOPER'
            },
            {
                name: 'GUY ROULEAU',
                role: 'CUSTOMER-FACING ENGINEER'
            },
            {
                name: 'REID SPENCE',
                role: 'CUSTOMER-FACING ENGINEER'
            }
        ],
        img: MultiSimCover,
        imgCard: MultiSimCover,
        miniOverview: 'Achieving cross-functional alignment on the redesign of the workflow between Simulink applications Multiple Simulations and Simulation Manager.',
        overview: 'Leading a redesign of the workflow between Simulink applications Multiple Simulations and Simulation Manager.',
        link: '/MultiSim_SimManager'
    },
    {
        key: 3,
        title: 'NEARBY: REDESIGNED',
        listing: 'NEARBY: REDESIGNED',
        role: ['JEFF CHANG', 'PRODUCT DESIGN INTERN'],
        credit: 'KARDDER',
        arranged: true,
        duration: 'JUNE 2022 - SEPT 2022',
        collab: true,
        collab_credits: 'KARDDER',
        collaborators: [
            {
                name: 'MAC XING',
                role: 'CTO'
            },
            {
                name: 'TREVOR REMEYER',
                role: 'PRODUCT DESIGN INTERN'
            },
            {
                name: 'SHIMEI GUAN',
                role: 'PRODUCT DESIGN INTERN'
            }
        ],
        img: NearbyFlowFinal,
        imgCard: NearbyFlowFinal,
        miniOverview: "Navigating through product understanding and business constraints to elevate Nearby as the core feature of Kardder.",
        overview: "Redesigning Nearby - Kardder's holy grail feature - to present Nearby as the core feature of Kardder.",
        arranged: true,
        link: '/Nearby'
    }
    // {
    //     key: 4,
    //     title: 'SF PARKS & REC PICNIC RESERVATION REDESIGN',
    //     listing: 'SF PARKS & REC REDESIGN',
    //     role: ['JEFF CHANG', 'UX Designer'],
    //     credit: 'SF PARKS & REC',
    //     arranged: true,
    //     duration: 'SEPT 2023 - OCT 2023',
    //     collab: false,
    //     collab_credits: 'PRODUCT DESIGN STUDIO PROJECT',
    //     collaborators: [

    //     ],
    //     img: Overview,
    //     miniOverview: 'Redesigning the online reservation flow in the SF Parks and Recreation website.',
    //     overview: 'Redesigning the online reservation flow in the SF Parks and Recreation website - streamlining, organizing, and reimagining critical features of the reservation process.',
    //     link: '/SFParksRec',
    // },
]

export default work_data