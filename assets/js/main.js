/*
    Creare una pagina che elenchi una lista di post socials a partire da un array di oggetti.
    Gli attributi minimi del modello di un post: id, contenuto, immagine,
    autore (nome, avatar), numero di likes, data creazione.
    Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
*/

const postsList = [
    {
        id: `vacanze`,
        contenuto: `itinerario del viaggio`,
        immagine: `https//`,
        autore: {
            nome: `Nicola`,
            avatar: `foto profilo`
        },
        likes: 123,
        data: `25/10/21`
    },

    {
        id: `sport`,
        contenuto: `partita di calcio`,
        immagine: `https//`,
        autore: {
            nome: `Francesco`,
            avatar: `foto profilo`
        },
        likes: 789,
        data: `13/05/90`
    }
];

console.log(postsList);