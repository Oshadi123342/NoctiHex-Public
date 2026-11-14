<div align="center">

# 🌌 NOCTIHEX
### Echoes of the Dark Network

**Explore. Investigate. Decode.**

*A cybersecurity Capture the Flag experience, presented as a static public practice website.*

![Project](https://img.shields.io/badge/PROJECT-NoctiHex-9B5DE5?style=for-the-badge)
![Cybersecurity](https://img.shields.io/badge/FOCUS-Cybersecurity-00D9FF?style=for-the-badge)
![CTF](https://img.shields.io/badge/FORMAT-CTF-FF4D8D?style=for-the-badge)
![GitHub Pages](https://img.shields.io/badge/DEPLOY-GitHub%20Pages-222222?style=for-the-badge&logo=github)

---

**Six challenges · Four downloadable investigations · Two interactive browser simulations**

</div>

## 🕵️ About the Project

**NoctiHex — Echoes of the Dark Network** is a cybersecurity-themed Capture the Flag (CTF) learning experience. Players investigate fictional incidents, inspect evidence, solve puzzles, and explore security concepts through a collection of challenges.

This repository contains the **public, static practice edition** of NoctiHex. It is designed to run on **GitHub Pages**, without exposing the original vulnerable Docker services or private organizer infrastructure.

> [!NOTE]
> This is a practice website, **not the full CTFd competition platform**. The browser simulations are educational demonstrations; they do not run real Linux commands or connect to a live vulnerable server. The public edition does not provide live flag submission or a scoreboard.

## ⚡ Challenge Lineup

| ID | Challenge | Category | Points | Public Edition |
|:--:|---|---|--:|---|
| `NHX-01` | **Whispers in the Static** | 🖼️ Steganography | 100 | 📥 Downloadable evidence |
| `NHX-02` | **Cipher at Dusk** | 🔐 Cryptography | 100 | 📥 Downloadable evidence |
| `NHX-03` | **Mirror Account** | 🌐 Web Security | 200 | 🧪 Interactive browser demo |
| `NHX-04` | **Packet After Midnight** | 📡 Network Forensics | 200 | 📥 Downloadable packet capture |
| `NHX-05` | **Misplaced Trust** | 🐧 Linux Security | 300 | 🧪 Interactive terminal simulation |
| `NHX-06` | **NoctiCore** | 🧩 Reverse Engineering | 500 | 📥 Downloadable Linux executable |

**Total challenge value in the original CTF: 1,400 points.** The public edition presents these challenges for self-guided practice, without score tracking.

## ✨ Features

- 🌙 Dark, cybersecurity-inspired interface
- 💜 Purple and cyan visual accents
- 🧠 Challenges covering multiple security disciplines
- 🖥️ Browser-based demonstrations for **NHX-03** and **NHX-05**
- 📂 Downloadable investigation artifacts
- 📱 Responsive web design
- 🚀 Static hosting compatible with GitHub Pages

## 🛠️ Built With

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-181717?style=flat-square&logo=github&logoColor=white)

The original, separate CTF platform also uses backend services and containers. **Those services are not part of this static website.**

## 📁 Project Structure

```text
NoctiHex-Public/
├── index.html
├── style.css
├── script.js
├── assets/
├── demos/
│   ├── nhx03/
│   │   ├── index.html
│   │   ├── style.css
│   │   └── script.js
│   └── nhx05/
│       ├── index.html
│       ├── style.css
│       └── script.js
├── downloads/
│   ├── midnight_signal.png
│   ├── dusk_message.txt
│   ├── midnight_traffic.pcap
│   └── nocticore
└── README.md
```

## 🚀 Run Locally

1. Download or clone this repository.
2. Open the `NoctiHex-Public` folder in **Visual Studio Code**.
3. Open `index.html` with a local static web server, such as the **Live Server** VS Code extension.
4. Explore the challenge cards and launch the browser demonstrations.

**Example local URL:** `http://127.0.0.1:5500/`

No backend, database, Docker service, or login server is required for the public website.

## 🌍 GitHub Pages Deployment

After reviewing the public files and pushing the repository to GitHub:

1. Open the repository's **Settings** → **Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Select the publishing branch (usually `main`) and the **`/ (root)`** folder.
4. Save and wait for GitHub Pages to publish the site.

**Website URL after deployment:** `https://YOUR-USERNAME.github.io/NoctiHex-Public/`

> Replace `YOUR-USERNAME` with your GitHub username after deployment.

## 🛡️ Safety and Scope

- All scenarios and accounts are fictional and intended for authorized learning.
- **NHX-03** and **NHX-05** on this site are JavaScript-based simulations, not live vulnerable services.
- Do not deploy the original intentionally vulnerable Docker/SSH services to a public network.
- Do not publish private credentials, `.env` files, organizer solutions, or internal deployment configuration.
- The **NHX-06** download is a Linux executable. Analyze unfamiliar executables only in an isolated virtual machine or sandbox, not on a personal host.
- Review all downloadable artifacts before making the repository public.

## 🎯 Learning Objectives

Practice identifying hidden evidence, decoding messages, recognizing broken access control, investigating network captures, understanding path-validation weaknesses, and exploring executable verification logic.

## 🤝 Project Credits

NoctiHex is a collaborative university cybersecurity project. This repository presents its static public practice edition.

---

<div align="center">

### 🌑 The network has secrets. Can you uncover them?

**NOCTIHEX · ECHOES OF THE DARK NETWORK**

*Built for learning, investigation, and responsible cybersecurity practice.*

</div>
