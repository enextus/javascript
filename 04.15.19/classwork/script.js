const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://jsonplaceholder.typicode.com/posts/1');
xhr.addEventListener('load', e => {
    console.log(e);
    console.log(e.target.responce);


    const post = JSON.parse(e.target.responce);
    console.log(post);

    const article = document.createElement('article');
    const title = document.createElement('h1');


})

xhr.send();

