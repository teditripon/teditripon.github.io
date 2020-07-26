var count = 0;
var btn;

const messages = ["No you didn't!!!",
    "What you doing? It said DO NOT CLICK!",
    "Try that again I dare you!",
    "Nope! Not gonna happen!",
    "Social distancing Mate, heard of it?",
    "Ohhh dont give up, come on it's getting fun",
    "You almost did it. One more time if you dare",
    "Fine You Win Click Me at your own risk!!!"]
function onInit() {
    btn = document.getElementById('theButton');
}

function showDate() {
    document.getElementById('demo').innerHTML = Date()
};

function runAway() {
    if (count >= 7) {
        return
    };
    count++;
    let top = Math.random() * 100;
    let left = Math.random() * 100;
    left = left > 90 ? left-10 : left;
    top = top > 90 ? top-10 : top;

    btn.style.left = left + "%";
    btn.style.top = top + "%";

    btn.innerHTML = messages[count]


}
function wasClicked() {
    let resp = confirm("Do you think you won?")
    if (resp) {
        btn.innerHTML = messages[count]

        while (true) { }
    } else {
        alert("You may prove worthy after all!")
    }
}