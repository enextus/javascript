a = function (e, o) {
    var t = document.createElement("link");
    t.rel = "stylesheet", t.type = "text/css", t.id = "sprd-css", t.href = e + "/shopfiles/css/shop_prefixed." + o + ".css";
    var n = document.getElementById("sprd-css");
    n && n.parentNode.removeChild(n), document.head.appendChild(t)
}


function createInput() {
    var input = document.createElement("input");
    input.className = "input__field";
    input.type = "text";
    input.name = "child";
    input.id = "child";
    return input;
}

function createChildInputDiv(innerHTML, o) {
    var div = document.createElement("div");

    div.className = 'form__elements';

    // div.classList.add('form__elements');

    // var i = createInput();

    // t.innerHTML = i;

    // o ? o.parentNode.insertBefore(t, o) : document.body.appendChild(t)
    // document.body.appendChild(t);

}

function createLabel(text) {
    var label = document.createElement("label");
    label.classList.add('form__elements-label');
    label.htmlFor = 'child';
    var text = document.createTextNode(text);
    label.appendChild(text);
    return label;
}

var text = "Child";
var innerHTML = createLabel(text);


// t.style.cssText = "color:white;background-color:red;padding:5em;font-weight:bold;text-align:center;"

// <div class="form__elements">
// <label class="form__elements-label" for="sex">Sex:</label>
// <input class="input__field" type=text name="sex" id="sex">
// </div>







var label = document.createElement("label");
label.classList.add('form__elements-label');
label.htmlFor = 'surname' + numberOfFileds;
var text = document.createTextNode("Surname");
label.appendChild(text);

childiv.appendChild(label);

var input = document.createElement("input");
input.className = "input__field";
input.type = "text";
input.name = "surname" + numberOfFileds;
input.id = "surname" + numberOfFileds;

childiv.appendChild(input);

var label = document.createElement("label");
label.classList.add('form__elements-label');
label.htmlFor = 'age' + numberOfFileds;
var text = document.createTextNode("Age");
label.appendChild(text);

childiv.appendChild(label);

var input = document.createElement("input");
input.className = "input__field";
input.type = "text";
input.name = "age" + numberOfFileds;
input.id = "age" + numberOfFileds;

childiv.appendChild(input);

var label = document.createElement("label");
label.classList.add('form__elements-label');
label.htmlFor = 'sex' + numberOfFileds;
var text = document.createTextNode("Sex");
label.appendChild(text);

childiv.appendChild(label);

var input = document.createElement("input");
input.className = "input__field";
input.type = "text";
input.name = "sex" + numberOfFileds;
input.id = "sex" + numberOfFileds;

childiv.appendChild(input);