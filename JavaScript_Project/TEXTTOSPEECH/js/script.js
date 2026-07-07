function convert() {
    let text = document.getElementById("text").value;
    console.log(text);
    
    let spch = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(spch);
}
function fun(){

    let a = new webkitSpeechRecognition();
    a.start();
    a.continuous = true;
    
    a.onresult = (e) => {
        let b = e.results[0][0].transcript;
        document.getElementById("t").innerHTML = b;
    }
}