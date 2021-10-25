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
        immagine: `https://i.picsum.photos/id/876/300/300.jpg?hmac=0z82x1fBm9aEHm_PXKutEx5QszAhpu-TjYk5CoSSeug`,
        autore: {
            nome: `Nicola`,
            avatar: `https://i.picsum.photos/id/177/300/300.jpg?hmac=iqXyonsAi67PWRf_09YhPkmp81Thf9Pch6MNvOkGiGo`
            
        },
        likes: 123,
        myLike: 0,
        data: `25/10/21`
    },

    {
        id: `sport`,
        contenuto: `partita di calcio`,
        immagine: `https://i.picsum.photos/id/640/300/300.jpg?hmac=gJjzkqqcGzn0WH0oXNjktCL4kTTnFGPJg_J3yK4O0-8`,
        autore: {
            nome: `Francesco`,
            avatar: `https://i.picsum.photos/id/370/300/300.jpg?hmac=uPgN6G6WHxo15EQGDINlk-XITx5JruJvSuTSHC2eVzA`
        },
        likes: 789,
        myLike: 1,
        data: `13/05/90`
    },

    {
        id: `sport`,
        contenuto: `partita di calcio`,
        immagine: `https://i.picsum.photos/id/1022/300/300.jpg?hmac=3C_A5sVNnYzG-YGGgkUMD9h7xx3CvX7-ielXa7qD5nw`,
        autore: {
            nome: `Francesco`,
            avatar: `https://i.picsum.photos/id/804/300/300.jpg?hmac=GdEls3mVX5M9dDhc3JbnyK97Ls7Yl9ax0VphYK1vMDw`
        },
        likes: 789,
        myLike: 1,
        data: `13/05/90`
    },

    {
        id: `sport`,
        contenuto: `partita di calcio`,
        immagine: `https://i.picsum.photos/id/1022/300/300.jpg?hmac=3C_A5sVNnYzG-YGGgkUMD9h7xx3CvX7-ielXa7qD5nw`,
        autore: {
            nome: `Francesco`,
            avatar: `https://i.picsum.photos/id/804/300/300.jpg?hmac=GdEls3mVX5M9dDhc3JbnyK97Ls7Yl9ax0VphYK1vMDw`
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
    // const post = postsList[i];

    // for (const key in post) {
    //         console.log(post[key]);
    //     }
    const thisPost = `<div id="post_${i}" class="post">
       <div class="author row">

           <div class="avatar">
            <img src="${postsList[i].autore.avatar}" alt="">
           </div>

           <div class="name_date">
               <h3 class="author_name">${postsList[i].autore.nome}</h3>
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

        // collegamento al pulsante like del post
        const like_button = document.getElementById(`button_${i}`);
        like_button.addEventListener('click', function() {
            console.log(like_button);
        });
        
    }

    // console.log(postsList[1].autore.avatar);
