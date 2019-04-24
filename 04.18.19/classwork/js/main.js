const BASE_URL = 'http://jsonplaceholder.typicode.com/';

const form = document.querySelector('.post');

function getPost() {
    const req = new XMLHttpRequest();
    req.open('GET', BASE_URL + 'posts', true);
    // `${BASE_URL}posts`

    req.onload = function () {
        let posts;

        // console.log(' Response: ', this.response);
        // const posts = JSON.parse(this.response);
        // console.log(posts);

        try {
            posts = JSON.parse(this.response);
        } catch (e) {
            console.info(e);
        }

        console.log(posts);
    }
    req.send();
}

getPost();

form.addEventListener('submit', e => {
    e.preventDefault();

    const postBody = e.target['post-body'].value;
    const postTitle = e.target['post-title'].value;

    console.log(postBody);
    console.log(postTitle);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', `${BASE_URL}posts`);

    xhr.onload = function() {
        console.log('YAY! You created post!');
        console.log(this.response);
    }

    xhr.send(params);

});