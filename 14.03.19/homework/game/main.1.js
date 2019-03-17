

let rand = (n1, n2) => Math.floor((Math.random() * 10) + 1);

let myGame = () => {
    
    let num = rand();

    return (inputVar) => {

        if (inputVar === num) {
            num = rand(1, 10);
            return true;
        } else {
            return false;
        };
    };

}

let game = myGame();
