
const profiles = {
    1: {
        username: "tester",
        role: "Junior Analyst",
        note: "Standard NoctiHex test account."
    },
    2: {
        username: "archive",
        role: "Incident Analyst",
        note: "DEMO RECORD: Restricted incident archive. Evidence: E03-DEMO."
    },
    3: {
        username: "nightwatch",
        role: "Monitoring",
        note: "Routine monitoring profile."
    }
};

const card = document.querySelector(".login-card");

function showProfile() {
    if (sessionStorage.getItem("nhx03_demo_login") !== "yes") {
        return;
    }

    const params = new URLSearchParams(window.location.search);
    const profileId = Number(params.get("profile") || 1);
    const profile = profiles[profileId];

    if (!profile) {
        card.innerHTML = "<h2>Profile not found</h2>";
        return;
    }

    card.innerHTML = `
        <div class="logo">NOCTI<span>HEX</span></div>
        <p class="eyebrow">NHX-03 // EMPLOYEE PORTAL</p>
        <h1>Employee Profile</h1>

        <div class="demo-notice">
            Educational IDOR simulation — no real accounts or flags.
        </div>

        <div class="credentials">
            <strong>Profile ID: ${profileId}</strong>
            <p>Username: ${profile.username}</p>
            <p>Role: ${profile.role}</p>
            <p>Note: ${profile.note}</p>
        </div>

        <p class="description" style="margin-top: 25px;">
            Investigation tip: Observe the profile number
            in the browser URL.
        </p>

        <button id="logoutButton" type="button"
            style="width:100%;padding:14px;background:#7e22ce;
            color:white;border:0;border-radius:8px;cursor:pointer;">
            LOG OUT
        </button>

        <a href="../../index.html#challenges" class="back-link">
            ← Back to Challenges
        </a>
    `;

    document.getElementById("logoutButton").addEventListener("click", () => {
        sessionStorage.removeItem("nhx03_demo_login");
        window.location.href = "index.html";
    });
}

const loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;
        const error = document.getElementById("errorMessage");

        if (username === "tester" && password === "noctihex123") {
            sessionStorage.setItem("nhx03_demo_login", "yes");
            window.location.href = "index.html?profile=1";
        } else {
            error.textContent = "Invalid username or password.";
        }
    });
}

showProfile();
