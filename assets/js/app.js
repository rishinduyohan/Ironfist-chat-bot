const mic = document.querySelector('.mices');

document.getElementById('speak-mic').addEventListener('click', function () {
    const chatWindow = document.getElementById('chatWindow');
    chatWindow.classList.add('animate__animated', 'animate__pulse');
    chatWindow.style.boxShadow = '0 0 40px 10px #141757ff, 0 0 80px 20px #1e0b61ff, 0 0 120px 30px #04052cff';
    setTimeout(() => {
        chatWindow.classList.remove('animate__animated', 'animate__pulse');
        chatWindow.style.boxShadow = '';
    }, 700);
});

function speak(text) {
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

function wishMe(){
    var day = new Date();
    var hour = day.getHours();

    if (hour >= 0 && hour < 12) {
        speak("Good Morning Challenger...");
    }
    else if (hour >= 12 && hour < 18) {
        speak("Good Afternoon Master...");
    }
    else if (hour >= 18 && hour < 24) {
        speak("Good Evening Boss...");
    }
}
window.addEventListener('load', () => {
    speak("Welcome to IronFist-9..");
    wishMe();
});

function takeCommand(message) {
    if (message.includes('hey') || message.includes('hello')) {
        speak("Hello Sir How may I Help You?");
    }
    else if (message.includes("open google")) {
        window.open("https://www.google.com", "_blank");
        speak("Opening Google...")
    }
    else if (message.includes("open youtube")) {
        window.open("https://www.youtube.com", "_blank");
        speak("Opening Youtube...")
    }
    else if (message.includes("open facebook")) {
        window.open("https://web.facebook.com/profile.php?id=100084494679441", "_blank");
        speak("Opening facebook...")
    }
    else if (message.includes("open Instagram")) {
        window.open("https://www.instagram.com/rishix_b/", "_blank");
        speak("Opening facebook...")
    }
    else if (message.includes('what is') || message.includes('who is') || message.includes('how is')) {
        window.open(`https://www.google.com/search?q=${message.replace(" ", "+")}`, "_blank");
        const finalText = "This is what I found on..." + message;
        speak(finalText);
    }
    else if(message.includes('wikipedia')){
        window.open(`https://en.wikipedia.org/wiki/${message.replace("wikipedia","")}`,"_blank");
        const finalText = "This is what I found on wikipedia..."+message;
        speak(finalText);
    }
    else if(message.includes('time')){
        const time = new Date().toLocaleString(undefined,{hour: "numeric",minute: "numeric",second: "numeric"});
        const finalText = "Time is... "+time;
        speak(finalText);
    }
    else if(message.includes('date')||message.includes('day')||message.includes('today')){
        const day = new Date().toLocaleString(undefined,{month: "short",day: "numeric",year: "numeric"});
        const finalText = "Today is... "+day;
        speak(finalText);
    }
    else if(message.includes('calculator')){
        window.open('Calculator:///')
        const finalText = "Opening Calculator";
        speak(finalText);
    }
    else{
        window.open(`https://www.google.com/search?q=${message.replace(" ","+")}`,"_blank");
        const finalText = "I found some information about "+message+" on google";
        speak(finalText);
    }
}

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();

recognition.onresult = (event)=>{
    const currentIndex = event.resultIndex;
    const transcript = event.results[currentIndex][0].transcript; 
    const textContent = transcript;
    takeCommand(textContent.toLowerCase())
}

mic.addEventListener('click',()=>{
    recognition.start();
});
