const mic = document.querySelector('.mic');
const content = document.querySelector('.content');
function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

wishMe=()=>{
    var day = new Date();
    var hour = day.getHours();

    if(hour>=0 && hour<12){
        speak("Good Morning Challenger...");
    }
    else if(hour>=12 && hour<18){
        speak("Good Afternoon Master...");
    }
    else if(hour>=18 && hour<24){
        speak("Good Evening Boss...");
    }
}
window.addEventListener('load', ()=>{
    speak("Initializing IronFist..");
    wishMe();
});

function takeCommand(){
    if(MessageChannel.includes('hey') || message.includes('hello')){
        speak("Hello Sir How may I Help You?");
    }else{
        speak("Make more intellegent...")
    }
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript;
    content.textContent = transcript;
    takeCommand(textContent.toLowerCase());
}

btn.addEventListener('click',()=>{
    content.textContent = "Listning...";
    recognition.start();
});
