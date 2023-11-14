export function getSign(date) {
    const dateArray = date.split('/')
    const dia = parseInt(dateArray[0], 10);
    const mes = parseInt(dateArray[1], 10);

    const zodiacSigns = [
        { sign: 'Aquario', start: { month: 1, day: 20 }, end: { month: 2, day: 18 } },
        { sign: 'Peixes', start: { month: 2, day: 19 }, end: { month: 3, day: 20 } },
        { sign: 'Aries', start: { month: 3, day: 21 }, end: { month: 4, day: 19 } },
        { sign: 'Touro', start: { month: 4, day: 20 }, end: { month: 5, day: 20 } },
        { sign: 'Gemeos', start: { month: 5, day: 21 }, end: { month: 6, day: 20 } },
        { sign: 'Cancer', start: { month: 6, day: 21 }, end: { month: 7, day: 22 } },
        { sign: 'Leao', start: { month: 7, day: 23 }, end: { month: 8, day: 22 } },
        { sign: 'Virgem', start: { month: 8, day: 23 }, end: { month: 9, day: 22 } },
        { sign: 'Libra', start: { month: 9, day: 23 }, end: { month: 10, day: 22 } },
        { sign: 'Escorpiao', start: { month: 10, day: 23 }, end: { month: 11, day: 21 } },
        { sign: 'Sagitario', start: { month: 11, day: 22 }, end: { month: 12, day: 21 } },
        { sign: 'Capricornio', start: { month: 12, day: 22 }, end: { month: 1, day: 19 } },
    ]

    const sign = zodiacSigns.find(sign =>
        (mes === sign.start.month && dia >= sign.start.day) ||
        (mes === sign.end.month && dia <= sign.end.day)
    );

    return sign ? sign.sign : "Desconhecido";
}