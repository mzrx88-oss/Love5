document.addEventListener("DOMContentLoaded", function() {
    const loginBtn = document.getElementById("loginBtn");
    const passInput = document.getElementById("passInput");

    if (loginBtn) {
        loginBtn.onclick = function() {
            if (passInput.value === "1102008") {
                document.getElementById("login-screen").style.display = "none";
                document.getElementById("main-content").style.display = "block";
                startTimer(); 
            } else {
                alert("كلمة السر غلط يا دودة ركزي💖");
                passInput.value = "";
            }
        };
    }
});

function startTimer() {
    // بداية الحكاية 15/6/2025
    const startDate = new Date(2025, 5, 15, 0, 0, 0); 

    function update() {
        const now = new Date();
        const diff = now - startDate;

        if (diff < 0) return;

        // الأيام تراكمية (239 يوم...)
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        // الساعات والدقائق والثواني بتصفر عند 60
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);

        setElementText("days", days);
        setElementText("hours", hours);
        setElementText("minutes", minutes);
        setElementText("seconds", seconds);
        setElementText("months", Math.floor(days / 30.44));
        setElementText("years", Math.floor(days / 365.25));
    }

    function setElementText(id, value) {
        const el = document.getElementById(id);
        if (el) el.innerText = value;
    }

    update();
    setInterval(update, 1000);
}

// السطرين دول هما اللي هيشغلوا زرار الذكريات يا بطل
function showMemories() {
    const memPage = document.getElementById("memories-page");
    if (memPage) {
        memPage.style.display = "block"; 
        memPage.scrollIntoView({ behavior: 'smooth' });
    }
}
