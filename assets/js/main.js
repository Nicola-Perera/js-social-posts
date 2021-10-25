/*
    Creare una pagina che elenchi una lista di post socials a partire da un array di oggetti.
    Gli attributi minimi del modello di un post: id, contenuto, immagine,
    autore (nome, avatar), numero di likes, data creazione.
    Un secondo array conterrà solo gli id dei posts a cui abbiamo dato like.
*/

// lista con i post da pubblicare nella pagina
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
        myLike: 0,
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
        myLike: 1,
        data: `13/05/90`
    }
];

// console.log(postsList);

// collegamento alla lista contenitore dei post
const postsListRef = document.getElementById('container');
// console.log(postsListRef);

for (let i = 0; i < postsList.length; i++) {
    const post = postsList[i];

    for (const key in post) {
            console.log(post[key]);
        }
    }
