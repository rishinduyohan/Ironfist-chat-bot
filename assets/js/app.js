const mic = document.getElementById('speak-mic');

document.getElementById('speak-mic').addEventListener('click', function() {
            const chatWindow = document.getElementById('chatWindow');
            chatWindow.classList.add('animate__animated', 'animate__pulse');
            chatWindow.style.boxShadow = '0 0 40px 10px #a78bfa, 0 0 80px 20px #f472b6, 0 0 120px 30px #818cf8';
            setTimeout(() => {
              chatWindow.classList.remove('animate__animated', 'animate__pulse');
              chatWindow.style.boxShadow = '';
            }, 700);
          });
function speak(text){
    const text_speak = new SpeechSynthesisUtterance(text);
    text_speak.rate = 1;
    text_speak.volume = 1;
    text_speak.pitch = 1;

    window.speechSynthesis.speak(text_speak);
}

const wishMe=()=>{
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
    speak("Welcome to IronFist-9..");
    wishMe();
});

function takeCommand(message){
    if(message.includes('hey') || message.includes('hello')){
        speak("Hello Sir How may I Help You?");
    }
    else if(message.includes("open google")){
        window.open("https://www.google.com","_blank");
        speak("Opening Google...")
    }
    else if(message.includes("open youtube")){
        window.open("https://www.youtube.com","_blank");
        speak("Opening Youtube...")
    }
    else if(message.includes("open facebook")){
        window.open("https://www.facebook.com","_blank");
        speak("Opening facebook...")
    }
    else if(message.includes('what is')||message.includes('who is')||message.includes('how is')){
        window.open(`https://www.google.com/search?q=${message.replace(" ","+")}`,"_blank");
        const finalText = "This is what I found on..."+message;
        speak(finalText);
    }
}

// const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// let recognition;
// if (SpeechRecognition) {
//     recognition = new SpeechRecognition();
// } else {
//     alert("Speech Recognition is not supported in this browser.");
// }

// recognition.onresult = (event)=>{
//     const currentIndex = event.resultIndex;
//     const transcript = event.results[currentIndex][0].transcript;
//     content.textContent = transcript;
//     takeCommand(transcript.toLowerCase());
// }

// mic.addEventListener('click',()=>{
//     recognition.start();
// });
