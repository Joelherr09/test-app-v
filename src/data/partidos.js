const partidos = [
    {
        id: "1",
        equipo_1: "UALBA Varones",
        equipo_2: "UST Varones",
        fecha: "14-10-2023",
        hora: "15:30",
        lugar: "Polideportivo",
        estado: "terminado",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [18, 17],
                sets: 0,
            },
            equipo_2: {
                puntos: [25, 25],
                sets: 2,
            },
        },
    },
    {
        id: "2", 
        equipo_1: "Inacap Varones",
        equipo_2: "UCEN Varones",
        fecha: "14-10-2023",
        hora: "17:00",
        lugar: "Polideportivo",
        estado: "terminado",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [19, 22],
                sets: 0,
            },
            equipo_2: {
                puntos: [25, 25],
                sets: 2,
            },
        },
    },
    {
        id: "3",
        equipo_1: "UST Varones",
        equipo_2: "ULS Varones",
        fecha: "14-10-2023",
        hora: "18:30",
        lugar: "Polideportivo",
        estado: "terminado",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [25, 25],
                sets: 2,
            },
            equipo_2: {
                puntos: [22, 23],
                sets: 0,
            },
        },
    },
    {
        id: 4,
        equipo_1: "UCN Damas",
        equipo_2: "ULS Damas",
        fecha: "04-11-2023",
        hora: "09:00",
        lugar: "Polideportivo",
        estado: "proximo",
        campeonato: "LDES",        
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 5,
        equipo_1: "UALBA Damas",
        equipo_2: "UST Damas",
        fecha: "04-11-2023",
        hora: "10:30",
        lugar: "Polideportivo",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 6,
        equipo_1: "Inacap Damas",
        equipo_2: "UCEN Damas",
        fecha:"04-11-2023",
        hora: "12:00",
        lugar: "Polideportivo",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 7,
        equipo_1: "UALBA Varones",
        equipo_2: "Inacap Varones",
        fecha:"04-11-2023",
        hora: "13:30",
        lugar: "Polideportivo",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 8,
        equipo_1: "UCN Varones",
        equipo_2: " UCEN Varones",
        fecha:"04-11-2023",
        hora: "15:00",
        lugar: "Polideportivo",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 9,
        equipo_1: "UALBA Damas",
        equipo_2: "Inacap Damas",
        fecha:"04-11-2023",
        hora: "16:30",
        lugar: "Polideportivo",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 10,
        equipo_1: "UCN Damas",
        equipo_2: "UCEN Damas",
        fecha:"04-11-2023",
        hora: "18:00",
        lugar: "Polideportivo",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 11,
        equipo_1: "UCEN Varones",
        equipo_2: "ULS Varones",
        fecha:"11-11-2023",
        hora: "09:00",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 12,
        equipo_1: "UST Varones",
        equipo_2: "Inacap Varones",
        fecha:"11-11-2023",
        hora: "10:30",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 13,
        equipo_1: "UCN Varones",
        equipo_2: "UALBA Varones",
        fecha:"11-11-2023",
        hora: "12:00",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 14,
        equipo_1: "UCEN Damas",
        equipo_2: "ULS Damas",
        fecha:"11-11-2023",
        hora: "13:30",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 15,
        equipo_1: "UST Damas",
        equipo_2: "Inacap Damas",
        fecha:"11-11-2023",
        hora: "15:00",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 16,
        equipo_1: "UCN Damas",
        equipo_2: "UALBA Damas",
        fecha:"11-11-2023",
        hora: "16:30",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 17,
        equipo_1: "UST Damas",
        equipo_2: "ULS Damas",
        fecha:"11-11-2023",
        hora: "18:00",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 18,
        equipo_1: "Inacap Varones",
        equipo_2: "ULS Varones",
        fecha:"25-11-2023",
        hora: "09:00",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 19,
        equipo_1: "UCEN Varones",
        equipo_2: "UALBA Varones",
        fecha:"25-11-2023",
        hora: "10:30",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 20,
        equipo_1: "UST Varones",
        equipo_2: "UCN Varones",
        fecha:"25-11-2023",
        hora: "12:00",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 21,
        equipo_1: "Inacap Damas",
        equipo_2: "ULS Damas",
        fecha:"25-11-2023",
        hora: "13:30",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 22,
        equipo_1: "UCEN Damas",
        equipo_2: "UALBA Damas",
        fecha:"25-11-2023",
        hora: "15:00",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    },
    {
        id: 23,
        equipo_1: "UST Damas",
        equipo_2: "UCN Damas",
        fecha:"25-11-2023",
        hora: "16:30",
        lugar: "Techado TB",
        estado: "proximo",
        campeonato: "LDES",
        resultado: {
            equipo_1: {
                puntos: [0, 0, 0],
                sets: 0,
            },
            equipo_2: {
                puntos: [0, 0, 0],
                sets: 0,
            },
        },
    }
]

export default partidos