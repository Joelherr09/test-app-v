const partidos = [
    {
        id: "1",
        equipo_1: "UALBA Varones",
        equipo_2: "UST Varones",
        fecha: "14-10-2023",
        hora: "15:30",
        lugar: "Polideportivo",
        estado: "terminado",
        campeonato: "LDESV",
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
        campeonato: "LDESV",
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
        campeonato: "LDESV",
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
        campeonato: "LDESD",        
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
        id: 4,
        equipo_1: "Team Voley Puni",
        equipo_2: "Club Ace Voley Ovalle",
        fecha: "04-11-2023",
        hora: "09:00",
        lugar: "Punitaqui, Liceo Alberto Gallardo Lorca",
        estado: "proximo",
        campeonato: "Amistoso",        
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
        campeonato: "LDESD",
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
        campeonato: "LDESD",
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
        campeonato: "LDESV",
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
        campeonato: "LDESV",
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
        equipo_1: "Cuadrangular Familiar",
        equipo_2: "1 Adulto/1 niño",
        fecha: "04-11-2023",
        hora: "16:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        campeonato: "LDESD",
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
        campeonato: "LDESD",
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Damas",
        fecha: "05-11-2023",
        hora: "10:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Varones",
        fecha: "05-11-2023",
        hora: "11:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Sub17 Damas",
        fecha: "05-11-2023",
        hora: "16:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Sub17 Varones",
        fecha: "05-11-2023",
        hora: "17:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        campeonato: "LDESV",
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
        equipo_1: "Torneo Playa Damas",
        equipo_2: "Pueblito Voley",
        fecha: "11-11-2023",
        hora: "09:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Torneo Playa Varones",
        equipo_2: "Pueblito Voley",
        fecha: "11-11-2023",
        hora: "09:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        campeonato: "LDESV",
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
        campeonato: "LDESV",
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
        campeonato: "LDESD",
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
        campeonato: "LDESD",
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
        campeonato: "LDESD",
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
        campeonato: "LDESD",
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
        equipo_1: "Torneo Playa Damas",
        equipo_2: "Pueblito Voley",
        fecha: "12-11-2023",
        hora: "09:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Torneo Playa Varones",
        equipo_2: "Pueblito Voley",
        fecha: "12-11-2023",
        hora: "09:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Cuadrangular Playa Mixto",
        equipo_2: "Pueblito Voley",
        fecha: "18-11-2023",
        hora: "16:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Damas",
        fecha: "19-11-2023",
        hora: "10:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Varones",
        fecha: "19-11-2023",
        hora: "11:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Sub17 Damas",
        fecha: "19-11-2023",
        hora: "16:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Sub17 Varones",
        fecha: "19-11-2023",
        hora: "17:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        campeonato: "LDESV",
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
        equipo_1: "Torneo Playa Damas",
        equipo_2: "Pueblito Voley",
        fecha: "25-11-2023",
        hora: "09:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Torneo Playa Varones",
        equipo_2: "Pueblito Voley",
        fecha: "25-11-2023",
        hora: "09:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        campeonato: "LDESV",
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
        campeonato: "LDESV",
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
        campeonato: "LDESD",
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
        campeonato: "LDESD",
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
        campeonato: "LDESD",
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
        equipo_1: "Torneo Playa Damas",
        equipo_2: "Pueblito Voley",
        fecha: "26-11-2023",
        hora: "09:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Torneo Playa Varones",
        equipo_2: "Pueblito Voley",
        fecha: "26-11-2023",
        hora: "09:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Cuadrangular Familiar",
        equipo_2: "1 Adulto/1 niño",
        fecha: "02-12-2023",
        hora: "16:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Damas",
        fecha: "03-12-2023",
        hora: "10:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Varones",
        fecha: "03-12-2023",
        hora: "11:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Sub17 Damas",
        fecha: "03-12-2023",
        hora: "16:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Sub17 Varones",
        fecha: "03-12-2023",
        hora: "17:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Cuadrangular",
        equipo_2: "Damas +40",
        fecha: "08-12-2023",
        hora: "10:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Cuadrangular",
        equipo_2: "Varones +40",
        fecha: "08-12-2023",
        hora: "16:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Torneo Playa Damas",
        equipo_2: "Pueblito Voley",
        fecha: "09-12-2023",
        hora: "09:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Torneo Playa Varones",
        equipo_2: "Pueblito Voley",
        fecha: "09-12-2023",
        hora: "09:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Torneo Playa Damas",
        equipo_2: "Pueblito Voley",
        fecha: "10-12-2023",
        hora: "09:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Torneo Playa Varones",
        equipo_2: "Pueblito Voley",
        fecha: "10-12-2023",
        hora: "09:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Cuadrangular Playa Mixto",
        equipo_2: "Pueblito Voley",
        fecha: "16-12-2023",
        hora: "16:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Damas",
        fecha: "17-12-2023",
        hora: "10:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Varones",
        fecha: "17-12-2023",
        hora: "11:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Sub17 Damas",
        fecha: "17-12-2023",
        hora: "16:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Reinas y Reyes de la Cancha",
        equipo_2: "Sub17 Varones",
        fecha: "17-12-2023",
        hora: "17:30",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
        equipo_1: "Cuadrangular Varones",
        equipo_2: "Pueblito Voley",
        fecha: "23-12-2023",
        hora: "16:00",
        lugar: "Pueblito Voley",
        estado: "proximo",
        campeonato: "CDPV",        
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
]

export default partidos