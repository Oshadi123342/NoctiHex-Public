
/* NHX-05 — Misplaced Trust
   Safe browser-based Linux terminal simulation.
   No real system commands are executed.
*/

const form = document.getElementById("terminal-form");
const input = document.getElementById("command");
const output = document.getElementById("terminal-output");

const BACKUP_DIR = "/opt/noctihex/backups/";
const BACKUP_TOOL = "/usr/local/bin/nocti-backup";

function printLine(message, color = "#4ade80") {
    const line = document.createElement("p");
    line.textContent = message;
    line.style.color = color;
    line.style.whiteSpace = "pre-wrap";
    line.style.overflowWrap = "anywhere";
    line.style.fontFamily = "Consolas, monospace";

    output.appendChild(line);
    output.scrollTop = output.scrollHeight;
}

function runCommand(command) {
    const cmd = command.trim();

    if (!cmd) return;

    printLine("analyst@noctihex:~$ " + cmd, "#22d3ee");

    if (cmd === "clear") {
        output.replaceChildren();
        return;
    }

    if (cmd === "help") {
        printLine(
`Available training commands:

help
whoami
id
pwd
ls
ls /opt/noctihex/backups
sudo -l
cat /root/flag.txt
cat /opt/noctihex/backups/readme.txt
sudo /usr/local/bin/nocti-backup <path>
clear`
        );
        return;
    }

    if (cmd === "whoami") {
        printLine("analyst");
        return;
    }

    if (cmd === "id") {
        printLine("uid=1000(analyst) gid=1000(analyst)");
        return;
    }

    if (cmd === "pwd") {
        printLine("/home/analyst");
        return;
    }

    if (cmd === "ls") {
        printLine("Documents  notes.txt");
        return;
    }

    if (cmd === "ls /opt/noctihex/backups") {
        printLine("readme.txt");
        return;
    }

    if (cmd === "sudo -l") {
        printLine(
`User analyst may run the following command:

(root) NOPASSWD: /usr/local/bin/nocti-backup`
        );
        return;
    }

    if (cmd === "cat /root/flag.txt") {
        printLine(
            "cat: /root/flag.txt: Permission denied",
            "#fb7185"
        );
        return;
    }

    if (cmd === "cat /opt/noctihex/backups/readme.txt") {
        printLine("Nightly backup archive.");
        return;
    }

    const prefix = "sudo " + BACKUP_TOOL + " ";

    if (cmd.startsWith(prefix)) {
        const path = cmd.slice(prefix.length).trim();

        if (!path.startsWith(BACKUP_DIR)) {
            printLine("path not allowed", "#fb7185");
            return;
        }

        // Simulate Linux path normalization.
        // This is a string operation, not filesystem access.
        const parts = [];

        for (const part of path.split("/")) {
            if (part === "..") {
                parts.pop();
            } else if (part && part !== ".") {
                parts.push(part);
            }
        }

        const resolvedPath = "/" + parts.join("/");

        if (resolvedPath === BACKUP_DIR + "readme.txt") {
            printLine("Nightly backup archive.");
            return;
        }

        if (resolvedPath === "/root/flag.txt") {
            printLine(
`Evidence verification: SUCCESS

DEMO RECORD: Restricted backup evidence recovered.
Evidence fragment: E05-DEMO

This is a simulation, not the original CTF flag.`
            );
            return;
        }

        printLine(
            "cat: " + path + ": No such file or directory",
            "#fb7185"
        );
        return;
    }

    printLine(
        "Command not available in this training demo. Type 'help'.",
        "#fb7185"
    );
}

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const command = input.value;
    input.value = "";

    runCommand(command);
    input.focus();
});

input.focus();
