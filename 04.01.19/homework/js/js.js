a = function (e, o) {
    var t = document.createElement("link");
    t.rel = "stylesheet", t.type = "text/css", t.id = "sprd-css", t.href = e + "/shopfiles/css/shop_prefixed." + o + ".css";
    var n = document.getElementById("sprd-css");
    n && n.parentNode.removeChild(n), document.head.appendChild(t)
}


function createDiv(text, o) {
    var t = document.createElement("div");
    t.classList.add('form__elements');

    t.innerHTML = text;
    
    o ? o.parentNode.insertBefore(t, o) : document.body.appendChild(t)
    
    return t;
}

function createInput() {
    var input = document.createElement("input");
    input.className = "input__field";
    input.type = "text";
    input.name = "child";
    input.id = "child";
    return input;
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

// createDiv(text);
// createLabel(text);
// createInput();

// t.style.cssText = "color:white;background-color:red;padding:5em;font-weight:bold;text-align:center;"

// <div class="form__elements">
// <label class="form__elements-label" for="sex">Sex:</label>
// <input class="input__field" type=text name="sex" id="sex">
// </div>