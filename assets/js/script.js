const chatWindow = document.getElementById('chatWindow');
const form = document.getElementById('chatForm');
const input = document.getElementById('messageInput');

const models = [
    { name: "Ai", img: "assets/images/iron-man-g224939067_1280.jpg" },
    { name: "user", img: "assets/images/futuristic-iron-man-ai-art-4.png" }
];

function appendMessage({ who = 'user', text = '', meta = '' }) {
    const wrap = document.createElement('div');
    wrap.classList.add('flex', 'items-start', 'gap-2', 'md:gap-3');
    if (who === 'user') wrap.classList.add('justify-end');

    const avatar = document.createElement('div');
    avatar.className = 'w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold';
    const avatarImg = document.createElement('img');
    avatarImg.src = who === 'user' ? models[1].img : models[0].img;
    avatarImg.alt = who === 'user' ? 'User Avatar' : 'AI Avatar';
    avatarImg.className = 'w-full h-full rounded-full object-cover';
    avatar.appendChild(avatarImg);


    const bubble = document.createElement('div');
    bubble.className = 'message max-w-full md:max-w-xl px-3 md:px-4 py-2 md:py-3 rounded-2xl text-sm';
    bubble.style.background = who === 'user' ? 'linear-gradient(90deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))' : 'linear-gradient(90deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))';
    bubble.innerHTML = '<div>' + text + '</div>' + (meta ? `<div class="text-xs text-slate-400 mt-1 md:mt-2">${meta}</div>` : '');

    if (who === 'user') {
        wrap.appendChild(bubble);
        wrap.appendChild(avatar);
    } else {
        wrap.appendChild(avatar);
        wrap.appendChild(bubble);
    }


    chatWindow.appendChild(wrap);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}


function showTyping() {
    const wrap = document.createElement('div');
    wrap.className = 'flex items-start gap-2 md:gap-3 typing-placeholder';
    const avatar = document.createElement('div'); avatar.className = 'w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center font-bold'; avatar.style.background = 'linear-gradient(90deg,#6366f1,#00f5a0)'; avatar.textContent = 'AI';
    const bubble = document.createElement('div'); bubble.className = 'message max-w-full md:max-w-xl px-3 md:px-4 py-2 md:py-3 rounded-2xl text-sm';
    bubble.innerHTML = `<div class="typing-dots"><span style="background:var(--neon-2)"></span><span style="background:var(--neon-1)"></span><span style="background:var(--neon-2)"></span></div>`;
    wrap.appendChild(avatar); wrap.appendChild(bubble);
    chatWindow.appendChild(wrap);
    chatWindow.scrollTop = chatWindow.scrollHeight;
    return wrap;
}


function generateBotReply(userText) {
    const lower = userText.toLowerCase();
    if (!userText.trim()) return "Say something, challenger...";
    if (lower.includes('hello') || lower.includes('hi')) return 'Hey! Ready to level up?';
    if (lower.includes('strategy')) return 'Tip: Control resources, then rotate to objectives.';
    if (lower.includes('avatar')) return 'Avatar unlocked: Neon Warden!';
    if (lower.includes('help')) return 'I can guide you: build guides, tactics, or match sim.';
    return "Interesting... (demo reply)";
}


form.addEventListener('submit', (e) => {
    e.preventDefault();
    const text = input.value.trim();
    if (!text) return;
    appendMessage({ who: 'user', text: text });
    input.value = '';


    const placeholder = showTyping();
    setTimeout(() => {
        placeholder.remove();
        const reply = generateBotReply(text);
        appendMessage({ who: 'bot', text: reply });
    }, 900 + Math.min(2000, text.length * 40));
});


document.getElementById('quickEmote').addEventListener('click', () => {
    appendMessage({ who: 'user', text: '⚡ Quick emote!' });
    const ph = showTyping();
    setTimeout(() => { ph.remove(); appendMessage({ who: 'bot', text: '⚡ Emote registered.' }) }, 800);
});


input.focus();
window.addEventListener('keydown', (e) => { if (e.key === '/') { e.preventDefault(); input.focus(); } });