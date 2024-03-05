function fun(){
    const type = document.getElementById("text").value;
    window.speechSynthesis.cancel();
    const say = new SpeechSynthesisUtterance(type);
    window.speechSynthesis.speak(say);

}