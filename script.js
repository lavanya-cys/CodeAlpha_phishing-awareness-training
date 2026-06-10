/**
 * Phishing Awareness Training Portal - Core Systems Engine
 * Includes Search Filter Engine, LocalStorage Progress Sync, Theme Engine, and Interactive Evaluation Exam
 */

// --- 1. Question Bank Arrays ---
const EXAM_QUESTIONS = [
    {
        question: "If an email possesses a verified padlock icon (HTTPS) link, what does this guarantee regarding security infrastructure?",
        options: [
            "The site is completely authentic and safe from any fraud vectors.",
            "The site has been audited by global standard cybersecurity institutions.",
            "Traffic data between your browser and the server is encrypted, but the endpoint destination itself could still be malicious.",
            "The email source file originated inside an approved corporate registry pipeline."
        ],
        correct: 2,
        explanation: "HTTPS simply signifies data encryption in transit. Anyone, including threat actors, can deploy an SSL certificate on cloned phishing web nodes."
    },
    {
        question: "An attacker creates an exact clone of your organization's intranet access site at 'corporate-sso-login.com/portal'. This specific manipulation profile is called:",
        options: [
            "Whaling Operations",
            "Typosquatting & Domain Spoofing",
            "Vishing Vector Execution",
            "Reverse API Interception"
        ],
        correct: 1,
        explanation: "Domain spoofing and typosquatting rely on creating lookalike URLs that mimic legitimate platforms to steal active user credentials."
    },
    {
        question: "Which component represents the primary tactical focus of a 'Whaling' campaign?",
        options: [
            "Mass consumer banking accounts globally.",
            "High-level corporate executives (CEO, CFO, Board Members).",
            "Junior infrastructure system administrative assistants.",
            "Third-party logistical delivery couriers."
        ],
        correct: 1,
        explanation: "Whaling targets high-value individual targets (the 'big fish') like C-suite management layers due to their broad, uninhibited corporate access permissions."
    },
    {
        question: "What is the optimal path for inspecting the actual path of a hyperlinked text within an unverified incoming email message?",
        options: [
            "Double-click the link node immediately to review the destination address bar.",
            "Hover the mouse pointer without clicking to view the destination path preview string in the application status bar.",
            "Reply directly to the email requesting destination validation from the sender.",
            "Forward the email string to your standard external personal email engine."
        ],
        correct: 1,
        explanation: "Hovering exposes the true underlying destination URL path string without triggering code execution inside the local browser container."
    },
    {
        question: "An attacker triggers continuous push notifications on an executive's mobile device at midnight until they finally press 'Approve'. This methodology is known as:",
        options: [
            "MFA Fatigue/Prompt Bombing",
            "Spear Routing Interception",
            "Smishing Extradition",
            "Angler Protocol Hijack"
        ],
        correct: 0,
        explanation: "MFA Fatigue (Prompt Bombing) floods a target with notifications until structural exhaustion or error leads to an accidental manual approval."
    },
    {
        question: "Which of these psychological tactics is being exploited when an email states: 'System termination will execute automatically if auditing forms are not updated within 45 minutes'?",
        options: [
            "Reciprocity",
            "Scarcity",
            "Urgency",
            "Authority"
        ],
        correct: 2,
        explanation: "Urgency relies on narrow artificial time windows to force immediate action, bypassing logical, critical evaluation paths."
    },
    {
        question: "A modified email communication arrives stating a direct supplier is altering their standard banking routing numbers for pending invoices. What action should be performed first?",
        options: [
            "Process the changes immediately to avoid logistical delivery penalties.",
            "Perform out-of-band secondary validation via an established, trusted alternative telephone directory channel.",
            "Reply to the email requesting confirmation of identity.",
            "Ignore the request completely and delete the profile configuration ledger."
        ],
        correct: 1,
        explanation: "Business Email Compromise (BEC) often mimics suppliers. Out-of-band validation via a known, alternative channel prevents corporate wire fraud."
    },
    {
        question: "What makes 'Smishing' distinct from other standard phishing delivery archetypes?",
        options: [
            "It is delivered exclusively using dynamic corporate chat channels.",
            "It runs automated background software exploits via Bluetooth links.",
            "It relies on SMS messaging as its primary payload delivery vector.",
            "It targets executive staff via voice synthesis platforms."
        ],
        correct: 2,
        explanation: "Smishing is a blend of 'SMS' and 'Phishing', using mobile text messaging channels to deliver malicious links."
    },
    {
        question: "When evaluating a URL structure, from which position should you begin parsing the domain authority identity context?",
        options: [
            "From left to right starting at the protocol symbol.",
            "From right to left starting from the first single forward slash symbol configuration.",
            "By analyzing only the length of the string character components.",
            "By looking exclusively for sub-domain keyword combinations."
        ],
        correct: 1,
        explanation: "The true root domain sits directly to the left of the first single forward slash (`/`). Attackers use complex subdomains to obfuscate this root."
    },
    {
        question: "What is the primary technical objective of an 'Angler Phishing' campaign operational profile?",
        options: [
            "Deploying systemic ransomware files directly onto edge routing devices.",
            "Using fake support accounts on social media platforms to intercept consumer service requests.",
            "Mass distribution of physical USB storage units across parking facilities.",
            "Cloning internal operational payroll processing networks."
        ],
        correct: 1,
        explanation: "Angler phishing targets consumers on social channels by masquerading as official support handles responding to public complaint threads."
    },
    {
        question: "Why do threat actors frequently utilize open-source intelligence (OSINT) platforms like LinkedIn during spear phishing setup phases?",
        options: [
            "To plant backdoors directly inside the cloud provider directory.",
            "To harvest specific reporting structures, naming context, and project keywords to maximize email credibility.",
            "To automate denial of service threats against infrastructure nodes.",
            "To bypass standard cryptographic security firewalls."
        ],
        correct: 1,
        explanation: "OSINT collection gives attackers real institutional context, corporate vocabulary, and organizational structures, enhancing the persuasiveness of targeted social engineering campaigns."
    },
    {
        question: "An email profile displays an exact corporate logo and a sender label matching your CEO, but the raw header routing address points to 'exec-office@mail-router-cloud.net'. What is this an example of?",
        options: [
            "Authorized executive proxy routing.",
            "Display Name Spoofing.",
            "Multi-factor directory authentication routing.",
            "Zero-trust credential verification."
        ],
        correct: 1,
        explanation: "Display Name Spoofing alters the user-facing friendly text name while keeping the actual underlying foreign email address hidden from casual view."
    },
    {
        question: "What type of file configuration poses the highest potential vector risk when received via an untrusted inbound email attachment?",
        options: [
            "Plain text records (`.txt`)",
            "Static image files (`.png`)",
            "Executable scripts or macro-enabled documents (`.exe`, `.scr`, `.xlsm`)",
            "Audio recording container files (`.mp3`)"
        ],
        correct: 2,
        explanation: "Executables and macro-enabled documents let threat actors run malicious code directly in the target user's local workspace memory context."
    },
    {
        question: "If you detect a highly sophisticated phishing attempt in your enterprise environment, what represents the correct procedural response?",
        options: [
            "Forward the exact message to adjacent team members warning them.",
            "Delete the message immediately without notifying your cybersecurity department.",
            "Export the message context cleanly as an `.eml` attachment and deliver it directly to your designated security reporting pipeline.",
            "Attempt to negotiate with or track down the host operator infrastructure."
        ],
        correct: 2,
        explanation: "Exporting threat indicators as attachments preserves full header structures for analyst analysis, without risking accidental execution through standard forwarding paths."
    },
    {
        question: "What layer of infrastructure security is optimized to protect against authentication theft if your credentials become compromised through a phishing vector?",
        options: [
            "Intrusion Detection Systems (IDS)",
            "Robust Cryptographic Password Length Controls",
            "Multi-Factor Authentication (MFA) utilizing Hardware Keys",
            "Wired Equivalent Privacy Protocol routing arrays"
        ],
        correct: 2,
        explanation: "Strong MFA (especially hardware-bound keys) stops attackers from accessing your account even if they harvest your static username and password string."
    }
];

// --- 2. State Tracking Engine ---
let userProgress = {
    completedModules: [],
    quizHighScore: 0
};

let currentQuestionIndex = 0;
let interactiveQuizScore = 0;
let hasAnsweredCurrentQuestion = false;

// --- 3. Initial Initialization Routines ---
document.addEventListener("DOMContentLoaded", () => {
    initializeProgressTracking();
    initializeThemeEngine();
    initializeSearchEngine();
    initializeQuizEngine();
});

// --- 4. Theme Management Engine ---
function initializeThemeEngine() {
    const themeToggleBtn = document.getElementById("themeToggle");
    const htmlElement = document.documentElement;

    // Check localStorage cache for existing configurations
    const savedTheme = localStorage.getItem("portal-theme") || "dark";
    htmlElement.setAttribute("data-theme", savedTheme);
    updateThemeIcon(savedTheme);

    themeToggleBtn.addEventListener("click", () => {
        const currentTheme = htmlElement.getAttribute("data-theme");
        const nextTheme = currentTheme === "dark" ? "light" : "dark";
        
        htmlElement.setAttribute("data-theme", nextTheme);
        localStorage.setItem("portal-theme", nextTheme);
        updateThemeIcon(nextTheme);
    });
}

function updateThemeIcon(theme) {
    const icon = document.querySelector("#themeToggle i");
    if (theme === "light") {
        icon.className = "fa-solid fa-moon";
    } else {
        icon.className = "fa-solid fa-sun";
    }
}

// --- 5. Search Filtering Logic ---
function initializeSearchEngine() {
    const searchInput = document.getElementById("moduleSearch");
    
    searchInput.addEventListener("input", (e) => {
        const searchString = e.target.value.toLowerCase().trim();
        const modules = document.querySelectorAll(".module-card");

        modules.forEach(module => {
            const moduleText = module.textContent.toLowerCase();
            if (moduleText.includes(searchString)) {
                module.style.display = "block";
                module.style.opacity = "1";
            } else {
                module.style.opacity = "0";
                // Delay hiding element slightly to preserve structural animation smooth transitions
                setTimeout(() => {
                    if(module.style.opacity === "0") module.style.display = "none";
                }, 200);
            }
        });
    });
}

// --- 6. Core Progress Tracking Engine ---
function initializeProgressTracking() {
    const cachedProgress = localStorage.getItem("phishaware-progress");
    if (cachedProgress) {
        try {
            userProgress = JSON.parse(cachedProgress);
        } catch(e) {
            console.error("Progress cache state corrupted. Resetting profile values.");
        }
    }
    renderProgressState();
}

function toggleModuleComplete(moduleId) {
    const index = userProgress.completedModules.indexOf(moduleId);
    if (index === -1) {
        userProgress.completedModules.push(moduleId);
    } else {
        userProgress.completedModules.splice(index, 1);
    }
    
    localStorage.setItem("phishaware-progress", JSON.stringify(userProgress));
    renderProgressState();
}

function renderProgressState() {
    const totalModulesCount = 7;
    const completedCount = userProgress.completedModules.length;
    const computePercentage = Math.round((completedCount / totalModulesCount) * 100);

    // Render metrics across DOM nodes
    document.getElementById("progressPercent").textContent = `${computePercentage}%`;
    document.getElementById("overallProgressBar").style.width = `${computePercentage}%`;

    // Audit and update individual module card UI frames
    for (let i = 1; i <= totalModulesCount; i++) {
        const moduleCard = document.getElementById(`m${i}`);
        if (!moduleCard) continue;

        const btn = moduleCard.querySelector(".toggle-completion-btn");
        
        if (userProgress.completedModules.includes(i)) {
            moduleCard.classList.add("completed-unit");
            btn.innerHTML = `<i class="fa-solid fa-circle-check"></i> Unit Complete`;
        } else {
            moduleCard.classList.remove("completed-unit");
            btn.innerHTML = `<i class="fa-regular fa-circle-check"></i> Mark Complete`;
        }
    }
}

// --- 7. Assessment Exam Logic Engine ---
function initializeQuizEngine() {
    const startBtn = document.getElementById("startQuizBtn");
    const nextBtn = document.getElementById("nextQuestionBtn");
    const restartBtn = document.getElementById("restartQuizBtn");

    startBtn.addEventListener("click", startAssessment);
    nextBtn.addEventListener("click", advanceQuestion);
    restartBtn.addEventListener("click", resetQuizState);
}

function startAssessment() {
    document.getElementById("quiz-start-screen").classList.add("hidden");
    document.getElementById("quiz-play-screen").classList.remove("hidden");
    currentQuestionIndex = 0;
    interactiveQuizScore = 0;
    presentQuestion();
}

function presentQuestion() {
    hasAnsweredCurrentQuestion = false;
    document.getElementById("nextQuestionBtn").classList.add("hidden");
    document.getElementById("feedbackContainer").classList.add("hidden");

    const currentQuestionData = EXAM_QUESTIONS[currentQuestionIndex];
    
    // Process progress metric bars
    document.getElementById("currentQuestionNum").textContent = currentQuestionIndex + 1;
    document.getElementById("liveScore").textContent = interactiveQuizScore;
    
    const computeBarWidth = Math.round((currentQuestionIndex / EXAM_QUESTIONS.length) * 100);
    document.getElementById("quizLiveProgress").style.width = `${computeBarWidth}%`;

    // Mount Question Text
    document.getElementById("questionContainer").textContent = currentQuestionData.question;

    // Build Options Nodes dynamically
    const optionsContainer = document.getElementById("optionsContainer");
    optionsContainer.innerHTML = "";

    currentQuestionData.options.forEach((optionText, index) => {
        const optionButton = document.createElement("button");
        optionButton.className = "option-btn";
        optionButton.innerHTML = `<span style="color:#38bdf8; margin-right:8px; font-weight:700;">${String.fromCharCode(65 + index)}.</span> ${optionText}`;
        optionButton.addEventListener("click", () => evaluateOptionSelection(index, optionButton));
        optionsContainer.appendChild(optionButton);
    });
}

function evaluateOptionSelection(selectedIdx, clickedButton) {
    if (hasAnsweredCurrentQuestion) return; // Locks input during feedback loop
    hasAnsweredCurrentQuestion = true;

    const currentQuestionData = EXAM_QUESTIONS[currentQuestionIndex];
    const optionButtons = document.querySelectorAll(".options-grid .option-btn");
    const feedbackBox = document.getElementById("feedbackContainer");

    // Disable inputs across options matrix
    optionButtons.forEach(btn => btn.setAttribute("disabled", "true"));

    if (selectedIdx === currentQuestionData.correct) {
        interactiveQuizScore++;
        clickedButton.classList.add("correct-choice");
        feedbackBox.className = "feedback-box correct-style";
        feedbackBox.innerHTML = `<strong><i class="fa-solid fa-circle-check"></i> Correct:</strong> ${currentQuestionData.explanation}`;
    } else {
        clickedButton.classList.add("wrong-choice");
        // Emphasize correct answer choice path
        optionButtons[currentQuestionData.correct].classList.add("correct-choice");
        feedbackBox.className = "feedback-box wrong-style";
        feedbackBox.innerHTML = `<strong><i class="fa-solid fa-triangle-exclamation"></i> Incorrect:</strong> ${currentQuestionData.explanation}`;
    }

    document.getElementById("liveScore").textContent = interactiveQuizScore;
    feedbackBox.classList.remove("hidden");
    document.getElementById("nextQuestionBtn").classList.remove("hidden");
}

function advanceQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < EXAM_QUESTIONS.length) {
        presentQuestion();
    } else {
        renderQuizResults();
    }
}

function renderQuizResults() {
    document.getElementById("quiz-play-screen").classList.add("hidden");
    const resultsScreen = document.getElementById("quiz-results-screen");
    resultsScreen.classList.remove("hidden");

    const calculatedPercentage = Math.round((interactiveQuizScore / EXAM_QUESTIONS.length) * 100);
    const hasPassed = calculatedPercentage >= 80;

    const iconBox = document.getElementById("resultIcon");
    const heading = document.getElementById("resultHeading");
    const summary = document.getElementById("resultSummary");
    const badgeBox = document.getElementById("resultBadge");

    if (hasPassed) {
        iconBox.className = "result-metric-icon pass";
        iconBox.innerHTML = `<i class="fa-solid fa-award"></i>`;
        heading.innerHTML = `Assessment Passed!`;
        heading.style.color = "var(--success)";
        summary.innerHTML = `Verification Profile Complete. You scored <strong>${calculatedPercentage}%</strong> (${interactiveQuizScore}/${EXAM_QUESTIONS.length} Questions Correct).`;
        badgeBox.innerHTML = `<span class="cert-badge"><i class="fa-solid fa-shield-halved"></i> Human Firewall Certification Cleared</span>`;
    } else {
        iconBox.className = "result-metric-icon fail";
        iconBox.innerHTML = `<i class="fa-solid fa-shield-catastrophic"></i>`;
        heading.innerHTML = `Passing Score Not Achieved`;
        heading.style.color = "var(--danger)";
        summary.innerHTML = `You scored <strong>${calculatedPercentage}%</strong> (${interactiveQuizScore}/${EXAM_QUESTIONS.length} Questions Correct). Compliance validation requires a minimum score of 80%.`;
        badgeBox.innerHTML = "";
    }

    // Cache metrics inside highscore ledger if higher
    if (calculatedPercentage > userProgress.quizHighScore) {
        userProgress.quizHighScore = calculatedPercentage;
        localStorage.setItem("phishaware-progress", JSON.stringify(userProgress));
    }
}

function resetQuizState() {
    document.getElementById("quiz-results-screen").classList.add("hidden");
    startAssessment();
}