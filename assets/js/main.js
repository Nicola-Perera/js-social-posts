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
        contenuto: `itinerario del viaggio: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit qui ratione vitae sit quod illum possimus fuga voluptates quo dolorum earum, aperiam ipsa rem maiores maxime consectetur sequi iusto adipisci magnam natus, tenetur totam quibusdam cupiditate minima. Aliquam deleniti in earum odio aliquid numquam veritatis accusamus, amet sed eum sapiente.`,
        immagine: `https://i.picsum.photos/id/876/300/300.jpg?hmac=0z82x1fBm9aEHm_PXKutEx5QszAhpu-TjYk5CoSSeug`,
        autore: {
            nome: `Nicola`,
            cognome: 'Perera',
            avatar: `https://i.picsum.photos/id/177/300/300.jpg?hmac=iqXyonsAi67PWRf_09YhPkmp81Thf9Pch6MNvOkGiGo`
            
        },
        likes: 123,
        data: `25/10/21`
    },

    {
        id: `sport`,
        contenuto: `partita di calcio: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit qui ratione vitae sit quod illum possimus fuga voluptates quo dolorum earum, aperiam ipsa rem maiores maxime consectetur sequi iusto adipisci magnam natus, tenetur totam quibusdam cupiditate minima. Aliquam deleniti in earum odio aliquid numquam veritatis accusamus, amet sed eum sapiente.`,
        immagine: `https://i.picsum.photos/id/640/300/300.jpg?hmac=gJjzkqqcGzn0WH0oXNjktCL4kTTnFGPJg_J3yK4O0-8`,
        autore: {
            nome: `Francesco`,
            cognome: 'Marangon',
            avatar: `https://i.picsum.photos/id/370/300/300.jpg?hmac=uPgN6G6WHxo15EQGDINlk-XITx5JruJvSuTSHC2eVzA`
        },
        likes: 789,
        data: `13/05/90`
    },

    {
        id: `lavoro`,
        contenuto: `riunione: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit qui ratione vitae sit quod illum possimus fuga voluptates quo dolorum earum, aperiam ipsa rem maiores maxime consectetur sequi iusto adipisci magnam natus, tenetur totam quibusdam cupiditate minima. Aliquam deleniti in earum odio aliquid numquam veritatis accusamus, amet sed eum sapiente.`,
        immagine: `https://i.picsum.photos/id/1022/300/300.jpg?hmac=3C_A5sVNnYzG-YGGgkUMD9h7xx3CvX7-ielXa7qD5nw`,
        autore: {
            nome: `Vittorio`,
            cognome: 'Emanuele',
            avatar: `https://i.picsum.photos/id/1061/300/300.jpg?hmac=UaTB_zKDW_DwYBLy4W6fW9C2-_ZvCKmbkON_bZxVZDg`
        },
        likes: 35,
        data: `29/02/19`
    },

    {
        id: `famiglia`,
        contenuto: `pranzo di natale: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit qui ratione vitae sit quod illum possimus fuga voluptates quo dolorum earum, aperiam ipsa rem maiores maxime consectetur sequi iusto adipisci magnam natus, tenetur totam quibusdam cupiditate minima. Aliquam deleniti in earum odio aliquid numquam veritatis accusamus, amet sed eum sapiente.`,
        immagine: `https://i.picsum.photos/id/844/300/300.jpg?hmac=cz7Fh4OjTE9Wv0TUWuua5rr-sqsA6-_NcVlD_SqcgS4`,
        autore: {
            nome: `Federico`,
            cognome: 'Stoppa',
            avatar: ``
        },
        likes: 97,
        data: `31/12/96`
    },

    {
        id: `amici`,
        contenuto: `discoteca: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit qui ratione vitae sit quod illum possimus fuga voluptates quo dolorum earum, aperiam ipsa rem maiores maxime consectetur sequi iusto adipisci magnam natus, tenetur totam quibusdam cupiditate minima. Aliquam deleniti in earum odio aliquid numquam veritatis accusamus, amet sed eum sapiente.`,
        immagine: `https://i.picsum.photos/id/70/300/300.jpg?hmac=oRHyAIWwDMXlW_uD8tkIiRYsMVJivtQabzxyQooNIyI`,
        autore: {
            nome: `Andrea`,
            cognome: 'Sartori',
            avatar: `https://i.picsum.photos/id/524/300/300.jpg?hmac=MpxUkv6gcBsbfdS64thmQBCSgpyfNIXq2Y8_Gx3SupA`
        },
        likes: 615,
        data: `01/01/01`
    }

    
];

// collegamento alla lista contenitore dei post
const postsListRef = document.getElementById('container');

// post a cui ho messo like
const likedPostsList = [1,3];

for (let i = 0; i < postsList.length; i++) {
    
    // creo e aggiungo il post alla dom
    const thisPost = `<div id="post_${i}" class="post">
       <div class="author row">

           <div id="avatar_${i}" class="avatar">
            <img src="${postsList[i].autore.avatar}" alt="">
           </div>

           <div class="name_date">
               <h3 class="author_name">${postsList[i].autore.nome} ${postsList[i].autore.cognome}</h3>
               <p class="date">${postsList[i].data}</p>
           </div>

       </div>

       <p class="content">${postsList[i].contenuto}</p>
       <div class="image">
       <img src="${postsList[i].immagine}" alt=""></div>

       <div class="likes row">
           <button id="button_${i}" class="like_button">Mi Piace</button>
           <p class="current_likes">Piace a ${postsList[i].likes} persone</p>
       </div>

    </div>`
    postsListRef.innerHTML += thisPost;

    if (postsList[i].autore.avatar == '') {
        const firtNameFirstLetter = postsList[i].autore.nome[0];
        const secondNameFirstLetter = postsList[i].autore.cognome[0];
        const missingAvatar = document.getElementById(`avatar_${i}`);
        missingAvatar.innerHTML = `<h1>${firtNameFirstLetter} ${secondNameFirstLetter}</h1>`
    }
    
    // collegamento al pulsante like del post
    const like_button = document.getElementById(`button_${i}`);
    
    // button click function
    like_button.addEventListener('click', function() {

        if (!likedPostsList.includes(i)) {
        likedPostsList.push(i);
        }

        document.getElementById(`post_${i}`).classList.add('liked_post');
        const totalLikesCount = postsList[i].likes + 1;

        const finalLikesCount = document.getElementsByClassName('likes');
        const totalLikes =` <button id="button_${i}" class="like_button liked_button">Mi Piace</button>
                            <p class="current_likes">Piace a ${totalLikesCount} persone</p>`;
        finalLikesCount[i].innerHTML = totalLikes;
        if (likedPostsList.includes(i)) {
        
            const likedPost = document.getElementsByClassName(`button_${i}`)
            likedPost.classList.add('liked_button');
        }
    });


}


// console.log(likedPostList);

    
