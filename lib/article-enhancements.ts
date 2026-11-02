export type ArticleEnhancement = {
  focus: string;
  workflow: string[];
  example: string;
  checklist: string[];
  caveat: string;
  source: [string, string][];
};

export const articleEnhancements: Record<string, ArticleEnhancement> = {
  "how-to-choose-ai-tools": {
    "focus": "Choose by task fit, privacy, output quality, and total cost—not popularity.",
    "workflow": [
      "Write one recurring task in a single sentence.",
      "Define what a useful result must include and what errors would make it unusable.",
      "Compare two or three tools using the same sample input and scoring criteria.",
      "Check data controls, export options, usage limits, accessibility, and current pricing before adopting one."
    ],
    "example": "Illustrative comparison: for meeting-note summaries, score each candidate on factual accuracy against the supplied notes, action-item extraction, export format, and time needed to correct mistakes. A tool that writes elegantly but invents decisions should score poorly.",
    "checklist": [
      "The tool solves a recurring task rather than adding another dashboard.",
      "You understand what happens to submitted data.",
      "You checked current plan limits and cancellation terms.",
      "A human review step is defined for consequential outputs."
    ],
    "caveat": "Feature lists and pricing change. Recheck the provider's current plan and privacy documentation before choosing.",
    "source": [
      [
        "OpenAI privacy controls",
        "https://openai.com/policies/privacy-policy/"
      ],
      [
        "Google Gemini Apps Privacy Hub",
        "https://support.google.com/gemini/answer/13594961"
      ]
    ]
  },
  "write-better-ai-prompts": {
    "focus": "A reusable prompt should specify the task, context, constraints, output format, and review criteria.",
    "workflow": [
      "State the deliverable and its intended reader.",
      "Provide relevant source material and context; label assumptions clearly.",
      "Set constraints such as length, tone, format, and excluded content.",
      "Ask the assistant to flag missing information instead of guessing.",
      "Review factual claims and revise the prompt based on specific gaps."
    ],
    "example": "Weak: “Write a marketing plan.” Better: “Create a 2-week Instagram content outline for a Lahore-based home bakery. Audience: office workers ordering birthday cakes. Budget: organic only. Return a table with date, post format, hook, caption angle, and call to action. Do not invent sales data; list any assumptions separately.”",
    "checklist": [
      "Task and audience are explicit.",
      "Context is relevant and non-sensitive.",
      "Output format is specified.",
      "Constraints and success criteria are testable.",
      "Claims are checked against reliable sources."
    ],
    "caveat": "More detail is not always better. Include only context that changes the answer, and never treat a confident AI response as proof.",
    "source": [
      [
        "OpenAI prompt engineering guide",
        "https://platform.openai.com/docs/guides/prompt-engineering"
      ],
      [
        "Google Gemini prompting strategies",
        "https://ai.google.dev/gemini-api/docs/prompting-strategies"
      ]
    ]
  },
  "simple-cybersecurity-habits": {
    "focus": "Reduce common account risks through unique passwords, multifactor authentication, updates, and recovery planning.",
    "workflow": [
      "Secure the primary email account first because it often controls password resets.",
      "Replace reused passwords on important accounts with unique passwords.",
      "Enable multifactor authentication and store recovery codes safely.",
      "Turn on automatic security updates where practical.",
      "Keep a separate backup of important files and test restoring one file."
    ],
    "example": "If one password has been reused for email, shopping, and social accounts, change the email password first, then update the other accounts individually. Do not share verification codes with anyone who contacts you.",
    "checklist": [
      "Primary email has a unique password.",
      "MFA is enabled on important accounts.",
      "Recovery options are current.",
      "Devices and browsers receive security updates.",
      "Backups can actually be restored."
    ],
    "caveat": "No single habit makes an account invulnerable. For workplace or financial accounts, follow the provider's and organization's security requirements.",
    "source": [
      [
        "CISA Secure Our World",
        "https://www.cisa.gov/secure-our-world"
      ],
      [
        "NIST Digital Identity Guidelines",
        "https://pages.nist.gov/800-63-3/"
      ]
    ]
  },
  "best-free-productivity-tools": {
    "focus": "Build a small workflow around tasks, notes, calendar events, and file storage before adding more apps.",
    "workflow": [
      "List the three types of work you need to organize.",
      "Choose one task list, one note system, and one calendar you can access reliably.",
      "Create a simple naming rule for projects and notes.",
      "Review the system weekly and remove fields or apps you do not use.",
      "Check export options and account recovery before storing important work."
    ],
    "example": "A student could keep assignments in one task list, class notes in one searchable notebook, and exam dates in a calendar. The same deadline should not be copied into several competing systems unless there is a clear reason.",
    "checklist": [
      "Each app has a distinct job.",
      "The free plan's limits are understood.",
      "Data can be exported or backed up.",
      "Notifications are limited to useful reminders."
    ],
    "caveat": "“Free” plans can change limits or introduce paid features. Check current terms and privacy settings before uploading sensitive material.",
    "source": [
      [
        "Google Calendar Help",
        "https://support.google.com/calendar/"
      ],
      [
        "Microsoft To Do support",
        "https://support.microsoft.com/todo"
      ]
    ]
  },
  "how-to-improve-computer-performance": {
    "focus": "Identify the bottleneck before disabling software, deleting files, or buying hardware.",
    "workflow": [
      "Restart the computer and note which task feels slow.",
      "Open Task Manager and compare CPU, memory, and disk use while reproducing the slowdown.",
      "Review Startup apps and disable only programs you recognize and do not need at sign-in.",
      "Use Windows Storage settings to review temporary files and installed apps.",
      "Check ventilation, updates, and the requirements of the software you use."
    ],
    "example": "If memory use is high only when many browser tabs are open, close unused tabs and compare performance before considering a RAM upgrade. If disk use remains high while idle, identify the process before changing settings.",
    "checklist": [
      "The slowdown is reproducible.",
      "Resource usage was observed during the slowdown.",
      "Unknown system processes were not terminated.",
      "Important files are backed up before cleanup.",
      "Hardware upgrades are based on a diagnosed limitation."
    ],
    "caveat": "Task Manager readings vary with workload. Avoid registry cleaners, driver-updater bundles, and deleting unfamiliar Windows folders.",
    "source": [
      [
        "Microsoft: Tips to improve PC performance",
        "https://support.microsoft.com/windows/tips-to-improve-pc-performance-in-windows-"
      ],
      [
        "Microsoft: Storage settings",
        "https://support.microsoft.com/windows/free-up-drive-space-in-windows"
      ]
    ]
  },
  "cloud-storage-vs-local-storage": {
    "focus": "Compare access, offline availability, recovery, privacy, and ongoing cost rather than treating either option as a complete backup.",
    "workflow": [
      "Classify files by sensitivity and how often you need access.",
      "Estimate storage required now and over the next year.",
      "Check sync, version history, sharing controls, and offline access.",
      "Keep a separate backup for files that would be difficult to replace.",
      "Test restoring a file before relying on the setup."
    ],
    "example": "A working project folder may sync to cloud storage for access across devices, while a separate external drive stores periodic backups. Sync alone may also sync accidental deletion, so it is not the same as an independent backup.",
    "checklist": [
      "You know which files are stored where.",
      "Sensitive files have appropriate access controls.",
      "Offline access requirements are covered.",
      "A separate recovery copy exists.",
      "You have tested a restore."
    ],
    "caveat": "Cloud availability depends on internet access, account access, provider policies, and subscription status. Local drives can fail, be lost, or be damaged.",
    "source": [
      [
        "CISA: Secure cloud business applications",
        "https://www.cisa.gov/resources-tools/resources/secure-cloud-business-applications"
      ],
      [
        "Microsoft OneDrive help",
        "https://support.microsoft.com/onedrive"
      ]
    ]
  },
  "how-to-spot-phishing-emails": {
    "focus": "Treat unexpected requests for credentials, payment, or urgent action as unverified until checked independently.",
    "workflow": [
      "Pause when a message creates urgency or threatens account closure.",
      "Inspect the full sender address and the actual destination of links without opening them.",
      "Do not open unexpected attachments or enable macros.",
      "Contact the organization through its official app, saved number, or manually typed website.",
      "Report and delete confirmed phishing messages using your provider's process."
    ],
    "example": "An email claiming that a parcel is held and demanding a small fee should be checked through the courier's official website using the tracking number you already have—not through the message's payment link.",
    "checklist": [
      "Sender identity is independently verified.",
      "Link destination matches the real organization domain.",
      "Unexpected files are treated cautiously.",
      "Requests for codes or passwords are rejected.",
      "Suspicious messages are reported."
    ],
    "caveat": "Sender names and logos can be spoofed, and legitimate services sometimes send automated notices. Verify the request through a separate trusted channel.",
    "source": [
      [
        "CISA: Recognize and report phishing",
        "https://www.cisa.gov/secure-our-world/recognize-and-report-phishing"
      ],
      [
        "Google Gmail phishing guidance",
        "https://support.google.com/mail/answer/8253"
      ]
    ]
  },
  "browser-extensions-security-guide": {
    "focus": "Browser extensions can read or change website data depending on their permissions, so install as few as necessary.",
    "workflow": [
      "Identify the exact browser task an extension should improve.",
      "Check its publisher, update history, reviews, and privacy disclosures.",
      "Read requested permissions and ask whether they fit the feature.",
      "Install from the browser's official store and avoid sideloaded copies.",
      "Review installed extensions periodically and remove unused ones."
    ],
    "example": "A screenshot extension may reasonably need access to the active tab, while a simple color-picker should prompt questions if it requests access to all data on every website.",
    "checklist": [
      "The extension solves a specific need.",
      "Publisher and source are credible.",
      "Permissions match the feature.",
      "Unused extensions are removed.",
      "Sensitive accounts are used with a minimal extension set."
    ],
    "caveat": "Store availability and positive reviews do not guarantee safety. Permissions and ownership can change after installation.",
    "source": [
      [
        "Chrome Web Store safety",
        "https://support.google.com/chrome_webstore/answer/2664769"
      ],
      [
        "Chrome extension permissions",
        "https://developer.chrome.com/docs/extensions/develop/concepts/declare-permissions"
      ]
    ]
  },
  "ai-hallucinations-and-fact-checking": {
    "focus": "Verify the claim itself, not the fluency of the AI response or the presence of plausible-looking citations.",
    "workflow": [
      "Separate the answer into individual factual claims.",
      "Identify which claims are current, numerical, legal, medical, or otherwise high impact.",
      "Open cited primary sources and confirm that they actually support the claim.",
      "Check dates, definitions, and context rather than matching keywords alone.",
      "Remove or qualify claims that cannot be verified."
    ],
    "example": "If an assistant says a software feature launched in a particular month, look for the provider's release note. A search result snippet or another AI-generated answer is not sufficient confirmation.",
    "checklist": [
      "Claims are checked individually.",
      "Sources are primary where possible.",
      "Dates and context match the statement.",
      "Unsupported claims are removed or labelled uncertain.",
      "Important decisions receive qualified human review."
    ],
    "caveat": "AI systems can invent references and misread real documents. Citation formatting does not prove that a source exists or supports the statement.",
    "source": [
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ],
      [
        "Google: About AI-generated content in Search",
        "https://developers.google.com/search/docs/fundamentals/using-gen-ai-content"
      ]
    ]
  },
  "how-to-back-up-important-files": {
    "focus": "A backup plan is useful only if it is separate from the original and can be restored.",
    "workflow": [
      "Identify irreplaceable files and where they currently live.",
      "Choose at least one separate backup destination.",
      "Automate a schedule that matches how often files change.",
      "Keep a copy disconnected or protected from routine account/device access where practical.",
      "Restore a sample file and check that it opens correctly."
    ],
    "example": "For a folder of project files, keep the working copy on the computer, a synced copy for convenience, and a periodic separate backup on an external drive. Confirm the external copy is readable before deleting anything.",
    "checklist": [
      "Important folders are included.",
      "Backup frequency matches the value of the files.",
      "The backup is separate from the original.",
      "Access credentials are recoverable.",
      "A restore test has succeeded."
    ],
    "caveat": "Synchronization is not always backup: deletions and corruption may synchronize too. Consider ransomware and physical loss in your plan.",
    "source": [
      [
        "CISA: Data backup options",
        "https://www.cisa.gov/stopransomware/ransomware-guide"
      ],
      [
        "Microsoft: Back up and restore with File History",
        "https://support.microsoft.com/windows/backup-and-restore-with-file-history"
      ]
    ]
  },
  "ssd-vs-hdd-explained": {
    "focus": "Compare workload, capacity, cost per gigabyte, durability, and interface before choosing a drive.",
    "workflow": [
      "Check the device's supported drive size and interface.",
      "Estimate how much active storage and archive storage you need.",
      "Compare SSD and HDD capacity at the same budget.",
      "For a system drive, consider responsiveness and application load times.",
      "Keep backups regardless of drive type."
    ],
    "example": "An SSD can be a sensible choice for an operating-system drive where responsiveness matters; a larger HDD may be economical for a media archive that is accessed less often. Actual performance depends on model and connection.",
    "checklist": [
      "Form factor and interface are compatible.",
      "Capacity includes room for growth.",
      "The workload matches the drive type.",
      "Reviews measure the relevant use case.",
      "A backup plan exists."
    ],
    "caveat": "SSD and HDD performance varies substantially by model. Do not infer speed from the technology label alone.",
    "source": [
      [
        "Kingston SSD knowledge center",
        "https://www.kingston.com/en/blog/pc-performance/ssd-vs-hdd"
      ],
      [
        "Crucial SSD buying guide",
        "https://www.crucial.com/articles/about-ssd"
      ]
    ]
  },
  "how-to-organize-digital-files": {
    "focus": "Use a small folder structure, predictable filenames, and one archive rule to make files easier to retrieve.",
    "workflow": [
      "Create a small set of top-level folders based on work areas.",
      "Use a consistent filename pattern such as YYYY-MM-DD_project_description.",
      "Separate active work from completed archives.",
      "Use search and tags for details that do not need another folder.",
      "Back up the structure before a large reorganization."
    ],
    "example": "A project file might be named “2026-11-03_client-brief_v02.docx”. The date, project, document purpose, and version make it easier to identify without opening every file.",
    "checklist": [
      "Top-level folders are limited and understandable.",
      "Filenames describe contents and versions.",
      "Duplicates are reviewed before deletion.",
      "Archived work is still searchable.",
      "The organized files are backed up."
    ],
    "caveat": "There is no universal folder taxonomy. Choose names that match how you search and avoid moving shared folders without checking links and permissions.",
    "source": [
      [
        "Microsoft OneDrive file organization",
        "https://support.microsoft.com/onedrive"
      ],
      [
        "Google Drive organize files",
        "https://support.google.com/drive/answer/2375091"
      ]
    ]
  },
  "two-factor-authentication-guide": {
    "focus": "Two-factor authentication adds a separate proof of identity, but recovery and phishing resistance still matter.",
    "workflow": [
      "Start with email and accounts that can reset other passwords.",
      "Open the account's official security settings directly.",
      "Choose an available authenticator, passkey, or security key option based on the account and your needs.",
      "Save recovery codes somewhere separate and secure.",
      "Review trusted devices and recovery methods periodically."
    ],
    "example": "If an account offers both SMS codes and an authenticator app, compare the account provider's security guidance and your access needs. A passkey or security key may offer stronger phishing resistance where supported.",
    "checklist": [
      "MFA is enabled on priority accounts.",
      "Recovery codes are stored safely.",
      "Recovery email and phone are current.",
      "Unknown sessions are signed out.",
      "Codes are never shared with callers or chat messages."
    ],
    "caveat": "MFA methods differ in security and recovery trade-offs. Follow the account provider's instructions and keep a safe recovery route.",
    "source": [
      [
        "CISA: More than a password",
        "https://www.cisa.gov/mfa"
      ],
      [
        "NIST: Multi-factor authentication",
        "https://pages.nist.gov/800-63-3/"
      ]
    ]
  },
  "how-to-keep-software-updated": {
    "focus": "Updates address security issues and bugs, but should be installed through trusted update channels.",
    "workflow": [
      "Turn on automatic updates for supported operating systems and browsers.",
      "Enable updates inside frequently used apps or use their official updater.",
      "Restart when required so updates finish applying.",
      "Back up important work before major operating-system upgrades.",
      "Check release notes when an update changes a workflow you depend on."
    ],
    "example": "If a browser update is available, use the browser's built-in About or Update page rather than downloading an installer from a pop-up advertisement.",
    "checklist": [
      "Operating system updates are current.",
      "Browsers and important apps are updated.",
      "Updates come from official sources.",
      "Restart requirements are completed.",
      "Unsupported software is identified for replacement."
    ],
    "caveat": "Some legacy devices no longer receive security updates. Check the manufacturer's support lifecycle and plan a safe migration.",
    "source": [
      [
        "Microsoft Windows Update",
        "https://support.microsoft.com/windows/windows-update"
      ],
      [
        "Google Chrome update help",
        "https://support.google.com/chrome/answer/95414"
      ]
    ]
  },
  "ai-for-beginners-practical-guide": {
    "focus": "Understand AI as a family of techniques and start with low-risk tasks where outputs are easy to review.",
    "workflow": [
      "Choose a narrow task such as outlining notes or explaining a concept.",
      "Provide the relevant context and desired output format.",
      "Ask the tool to identify assumptions and uncertainty.",
      "Check important facts against trusted sources.",
      "Avoid uploading confidential or personal data without permission."
    ],
    "example": "A beginner can paste their own non-sensitive study notes and ask for a 10-question revision quiz. They should compare the questions with the original notes and correct any missing or inaccurate points.",
    "checklist": [
      "The task is specific and low risk.",
      "Input material can be shared safely.",
      "The result is checked against source material.",
      "AI output is edited before reuse.",
      "Limitations are understood."
    ],
    "caveat": "AI tools do not understand every topic reliably and can generate inaccurate or biased content. Human judgement remains necessary.",
    "source": [
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ],
      [
        "Google AI learning resources",
        "https://ai.google/education/"
      ]
    ]
  },
  "how-to-use-ai-for-research": {
    "focus": "Use AI to organize a research process, while keeping source discovery and evidence verification traceable.",
    "workflow": [
      "Turn the research question into smaller subquestions.",
      "Use AI to draft search terms and identify concepts to investigate.",
      "Find primary documents, official datasets, or peer-reviewed work independently.",
      "Build a claim-to-source table and record publication dates.",
      "Use AI to summarize only documents you have actually opened, then verify the summary."
    ],
    "example": "For a question about a software API change, ask AI to list the terms to search, then locate the provider's changelog and documentation. Record the exact version and date rather than relying on a generated summary.",
    "checklist": [
      "The research question is specific.",
      "Primary sources are prioritized.",
      "Every important claim maps to a source.",
      "Dates and versions are recorded.",
      "AI-generated references are independently opened."
    ],
    "caveat": "AI search summaries can omit context or invent citations. Do not cite a document you have not inspected.",
    "source": [
      [
        "Google Scholar Help",
        "https://scholar.google.com/intl/en/scholar/help.html"
      ],
      [
        "NIST AI Risk Management Framework",
        "https://www.nist.gov/itl/ai-risk-management-framework"
      ]
    ]
  },
  "best-browser-productivity-tips": {
    "focus": "Improve browser workflow with a small set of built-in features rather than accumulating extensions.",
    "workflow": [
      "Pin only the tabs you use daily.",
      "Use bookmarks folders for recurring reference pages.",
      "Learn the browser's tab search and keyboard shortcuts.",
      "Separate work profiles when account contexts must remain distinct.",
      "Review downloads and permissions periodically."
    ],
    "example": "If you repeatedly open the same documentation pages, save them in one bookmarks folder and name it for the project. This is easier to maintain than leaving dozens of tabs open.",
    "checklist": [
      "Pinned tabs are limited.",
      "Bookmarks have clear names.",
      "Browser profiles do not mix accounts accidentally.",
      "Downloads are reviewed.",
      "Extensions and site permissions are minimized."
    ],
    "caveat": "Shortcuts and settings vary by browser and operating system. Verify the instructions for the browser version you use.",
    "source": [
      [
        "Chrome keyboard shortcuts",
        "https://support.google.com/chrome/answer/157179"
      ],
      [
        "Microsoft Edge help",
        "https://support.microsoft.com/microsoft-edge"
      ]
    ]
  },
  "how-to-write-clear-technical-documentation": {
    "focus": "Good technical documentation helps a reader complete a defined task and recover when something goes wrong.",
    "workflow": [
      "Name the reader, task, and prerequisites.",
      "List the steps in the order they must be performed.",
      "Use the exact labels readers see in the interface or command line.",
      "Show expected results after important steps.",
      "Add troubleshooting for likely errors and state the version tested, if actually tested."
    ],
    "example": "Instead of “configure the environment,” write “Open the project root, create a file named .env.local, add the required variable, save it, and restart the development server.” Do not include real secrets in published examples.",
    "checklist": [
      "Audience and prerequisites are stated.",
      "Steps are numbered and actionable.",
      "Expected results are visible.",
      "Warnings appear before risky actions.",
      "Version-specific details are identified."
    ],
    "caveat": "Do not claim that instructions were tested on a version unless someone actually followed them on that version.",
    "source": [
      [
        "Google developer documentation style guide",
        "https://developers.google.com/style"
      ],
      [
        "Microsoft Writing Style Guide",
        "https://learn.microsoft.com/style-guide/welcome/"
      ]
    ]
  },
  "understanding-password-managers": {
    "focus": "A password manager can help create unique passwords, but the master account and recovery process need careful protection.",
    "workflow": [
      "Choose a reputable manager and review its security model and independent assessments.",
      "Create a strong, unique master password.",
      "Enable available MFA and secure account recovery.",
      "Import passwords carefully and remove duplicates after checking them.",
      "Update reused or weak passwords on important accounts."
    ],
    "example": "If the same password is used on three websites, generate a separate password for each site and update them one at a time. Keep recovery information separate from the password vault.",
    "checklist": [
      "Provider and security model reviewed.",
      "Master password is unique.",
      "MFA is enabled where supported.",
      "Recovery plan is stored securely.",
      "Important reused passwords are replaced."
    ],
    "caveat": "A password manager concentrates access in one account. Protect it carefully and understand the provider's recovery and export process.",
    "source": [
      [
        "CISA: Use strong passwords",
        "https://www.cisa.gov/secure-our-world/use-strong-passwords"
      ],
      [
        "NIST Digital Identity Guidelines",
        "https://pages.nist.gov/800-63-3/"
      ]
    ]
  },
  "how-to-clean-up-your-email-inbox": {
    "focus": "Use search, labels, unsubscribe controls, and a repeatable review routine instead of manually opening every message.",
    "workflow": [
      "Search for large attachments and old promotional mail first.",
      "Unsubscribe using the provider's controls or the sender's legitimate unsubscribe option.",
      "Create a few labels or folders for recurring categories.",
      "Use filters only for predictable senders and messages.",
      "Archive or delete in batches after reviewing the selection."
    ],
    "example": "Search for newsletters you no longer read, review the sender list, then unsubscribe from the ones you recognize. Avoid clicking unsubscribe links in suspicious messages.",
    "checklist": [
      "Important mail is not bulk-deleted.",
      "Filters are narrow and reviewed.",
      "Unwanted legitimate newsletters are unsubscribed.",
      "Spam is reported through the mail provider.",
      "Recovery and security messages remain accessible."
    ],
    "caveat": "Email search syntax varies. Never open suspicious attachments or use an unsubscribe link from a message that may be phishing.",
    "source": [
      [
        "Gmail search operators",
        "https://support.google.com/mail/answer/7190"
      ],
      [
        "Microsoft Outlook rules",
        "https://support.microsoft.com/outlook"
      ]
    ]
  },
  "ai-image-generators-explained": {
    "focus": "Image generators turn text or image inputs into visual outputs, but results need review for accuracy, rights, and suitability.",
    "workflow": [
      "Write a brief describing subject, purpose, audience, and required dimensions.",
      "Specify composition, visual style, and elements to exclude.",
      "Generate a small set of variations and compare them against the brief.",
      "Inspect text, hands, logos, faces, and factual details for errors.",
      "Check the tool's current commercial-use and content terms before publishing."
    ],
    "example": "For a blog header, specify a wide 16:9 composition, one clear focal subject, space for a title, no embedded text, and a restrained palette. Review the final image at mobile size before using it.",
    "checklist": [
      "Purpose and aspect ratio are clear.",
      "Prompt avoids unnecessary personal data.",
      "Output is inspected for visual defects.",
      "Rights and platform terms are checked.",
      "Image is accessible and appropriately optimized."
    ],
    "caveat": "Generated images can contain artifacts and may raise copyright, likeness, trademark, or disclosure questions. Rules vary by tool and jurisdiction.",
    "source": [
      [
        "OpenAI image generation documentation",
        "https://platform.openai.com/docs/guides/images"
      ],
      [
        "Adobe generative AI user guidelines",
        "https://www.adobe.com/legal/licenses-terms/adobe-gen-ai-user-guidelines.html"
      ]
    ]
  },
  "how-to-speed-up-a-website": {
    "focus": "Measure page performance first, then prioritize image weight, render-blocking resources, and layout stability.",
    "workflow": [
      "Test representative pages with PageSpeed Insights on mobile and desktop.",
      "Record the Core Web Vitals and note the specific failing metric.",
      "Resize and compress oversized images; use modern formats where supported.",
      "Reduce unnecessary JavaScript and third-party scripts.",
      "Retest the same URLs after each meaningful change."
    ],
    "example": "If a hero image is several megabytes, create a correctly sized responsive version and compare the page's image transfer size and Largest Contentful Paint before and after. Do not claim a speed improvement without measuring it.",
    "checklist": [
      "A baseline test is saved.",
      "The same page and device profile are retested.",
      "Images have appropriate dimensions and alt text.",
      "Third-party scripts are justified.",
      "Real-user Core Web Vitals are reviewed when data is available."
    ],
    "caveat": "Lab scores vary with network and device simulation. Field data and user experience may differ; avoid promising a fixed score.",
    "source": [
      [
        "Google PageSpeed Insights",
        "https://pagespeed.web.dev/"
      ],
      [
        "web.dev Core Web Vitals",
        "https://web.dev/articles/vitals"
      ]
    ]
  },
  "safe-public-wifi-practices": {
    "focus": "Treat public Wi-Fi as an untrusted network and protect accounts, device sharing, and sensitive activity.",
    "workflow": [
      "Confirm the network name with venue staff rather than trusting a lookalike name.",
      "Keep device firewall and security updates enabled.",
      "Disable automatic connection to unknown open networks.",
      "Use HTTPS sites and avoid ignoring certificate warnings.",
      "Use your mobile connection for sensitive activity if the network seems suspicious."
    ],
    "example": "At a cafe, ask staff for the exact Wi-Fi name. Do not join a second network with a similar name just because it has a stronger signal.",
    "checklist": [
      "Network name was confirmed.",
      "Device is updated and protected.",
      "File sharing is disabled on public networks.",
      "Sensitive transactions use trusted connections.",
      "You forget the network after use if it is not needed."
    ],
    "caveat": "HTTPS protects data in transit to a site but does not make a fake website trustworthy. A VPN does not protect against phishing or malware by itself.",
    "source": [
      [
        "CISA: Secure public Wi-Fi",
        "https://www.cisa.gov/news-events/news/using-public-wi-fi-networks"
      ],
      [
        "FTC: Online security",
        "https://consumer.ftc.gov/identity-theft-and-online-security"
      ]
    ]
  },
  "how-to-choose-a-laptop-for-work": {
    "focus": "Match a laptop to actual workloads, portability, repairability, battery needs, and total budget.",
    "workflow": [
      "List the applications and tasks you use, including any demanding workloads.",
      "Check minimum and recommended requirements from software publishers.",
      "Choose memory and storage with realistic headroom for your use.",
      "Compare display, keyboard, ports, weight, battery, warranty, and repair options.",
      "Check upgrade limits and local service availability before purchase."
    ],
    "example": "For browser-based office work, video calls, and many tabs, prioritize a comfortable keyboard, adequate memory, webcam, and battery. For video editing or 3D work, compare the exact CPU/GPU requirements of the software instead of relying on a generic “fast laptop” label.",
    "checklist": [
      "Workload is defined.",
      "Software requirements are checked.",
      "Memory and storage are sufficient.",
      "Ports and display fit daily use.",
      "Warranty and service options are understood."
    ],
    "caveat": "Specifications alone do not establish real-world quality. Check model-specific reviews, configuration differences, and local warranty terms.",
    "source": [
      [
        "Microsoft Windows 11 specifications",
        "https://www.microsoft.com/windows/windows-11-specifications"
      ],
      [
        "Intel processor information",
        "https://www.intel.com/content/www/us/en/products/details/processors.html"
      ]
    ]
  },
  "how-to-learn-coding-consistently": {
    "focus": "Build a repeatable learning loop: small concepts, active practice, debugging, and finished projects.",
    "workflow": [
      "Choose one language or stack for a defined learning period.",
      "Break the topic into small weekly outcomes.",
      "Type and modify examples rather than only watching tutorials.",
      "Build a small project that uses the concept without copying a full solution.",
      "Write down bugs, what caused them, and how you fixed them."
    ],
    "example": "After learning array methods, build a small expense list that can add items, calculate a total, and filter entries. Then change the requirements and solve the new problem without following the tutorial line by line.",
    "checklist": [
      "Weekly outcomes are realistic.",
      "Practice includes writing code independently.",
      "Errors are investigated rather than hidden.",
      "Projects have a clear finished scope.",
      "Progress is reviewed through working features."
    ],
    "caveat": "Learning speed varies. Avoid switching frameworks whenever a new trend appears; finish small projects before expanding the stack.",
    "source": [
      [
        "MDN Learn Web Development",
        "https://developer.mozilla.org/en-US/docs/Learn"
      ],
      [
        "freeCodeCamp curriculum",
        "https://www.freecodecamp.org/learn/"
      ]
    ]
  },
  "understanding-two-factor-backups": {
    "focus": "A personal account safety review should cover sign-in protection, recovery routes, trusted devices, and backup access.",
    "workflow": [
      "List important accounts and rank them by impact if lost.",
      "Enable MFA on email, cloud storage, banking, and social accounts.",
      "Review recovery email addresses, phone numbers, and backup codes.",
      "Remove old devices and sessions you no longer recognize.",
      "Check that important files and recovery information are backed up separately."
    ],
    "example": "For a primary email account, confirm the recovery phone is still yours, remove an old laptop from signed-in devices, and store the account's recovery codes in a secure place separate from the device.",
    "checklist": [
      "High-impact accounts are prioritized.",
      "MFA and recovery methods are current.",
      "Old sessions are reviewed.",
      "Backup codes are protected.",
      "Important data has a separate backup."
    ],
    "caveat": "This checklist reduces common gaps but cannot guarantee account security. Follow each provider's official recovery instructions.",
    "source": [
      [
        "CISA Secure Our World",
        "https://www.cisa.gov/secure-our-world"
      ],
      [
        "Google Account Security Checkup",
        "https://myaccount.google.com/security-checkup"
      ]
    ]
  },
  "how-to-use-spreadsheets-for-planning": {
    "focus": "A useful planning spreadsheet has consistent fields, simple formulas, and a review process.",
    "workflow": [
      "Define the question the sheet should answer.",
      "Create one row per task or item and one column per attribute.",
      "Use consistent date, currency, and status formats.",
      "Use filters and simple formulas before adding complex automation.",
      "Check formulas with a few manually calculated examples."
    ],
    "example": "A weekly task tracker can use columns for task, owner, due date, status, and notes. A COUNTIF formula can count tasks marked “Done”; verify the result against a manual count on a small sample.",
    "checklist": [
      "Each row represents one record.",
      "Column names are clear.",
      "Formats are consistent.",
      "Formulas are tested with known values.",
      "Sensitive data is not shared publicly."
    ],
    "caveat": "Spreadsheet formulas and separators can differ by locale and application. Validate totals before using them for financial or operational decisions.",
    "source": [
      [
        "Microsoft Excel help",
        "https://support.microsoft.com/excel"
      ],
      [
        "Google Sheets function list",
        "https://support.google.com/docs/table/25273"
      ]
    ]
  },
  "how-to-evaluate-software-reviews": {
    "focus": "Evaluate reviews by evidence, recency, reviewer context, and consistency—not star ratings alone.",
    "workflow": [
      "Identify the feature or use case you need the software for.",
      "Check review dates and whether the product version is current.",
      "Look for detailed descriptions of the reviewer's workflow and limitations.",
      "Compare recurring themes across independent sources.",
      "Confirm important claims against official documentation or a trial."
    ],
    "example": "If several recent reviews praise an app's interface but mention export limits, check the current plan comparison page to see whether the limitation applies to the tier you would use.",
    "checklist": [
      "Reviews are recent and version-relevant.",
      "Reviewer use cases match yours.",
      "Repeated pros and cons are noted.",
      "Sponsored or affiliate relationships are considered.",
      "Key claims are independently verified."
    ],
    "caveat": "Reviews can be incentivized, outdated, or based on unusual use cases. A high rating is not a substitute for checking your own requirements.",
    "source": [
      [
        "FTC: Endorsements and reviews",
        "https://www.ftc.gov/business-guidance/advertising-marketing/endorsements-influencers-reviews"
      ],
      [
        "Google Search review guidance",
        "https://developers.google.com/search/docs/specialty/ecommerce/write-high-quality-reviews"
      ]
    ]
  },
  "understanding-search-engine-optimization": {
    "focus": "SEO helps search engines discover, understand, and present useful pages; it cannot guarantee rankings.",
    "workflow": [
      "Make sure important pages can be crawled and return the intended status code.",
      "Give each page a descriptive title and a useful meta description.",
      "Use clear headings and internal links that help readers navigate.",
      "Create content that answers a real question with sufficient detail and evidence.",
      "Use Search Console to inspect indexing and search performance."
    ],
    "example": "For a guide about website image optimization, use a title that accurately describes the task, explain the steps, link to relevant related guides, and include a before/after measurement only if you actually measured it.",
    "checklist": [
      "Pages are crawlable and indexable as intended.",
      "Canonical URLs are consistent.",
      "Titles describe page content accurately.",
      "Internal links help readers.",
      "Search Console issues are reviewed."
    ],
    "caveat": "No plugin, keyword density, word count, or sitemap guarantees indexing or ranking. Search engines make their own crawling and ranking decisions.",
    "source": [
      [
        "Google SEO Starter Guide",
        "https://developers.google.com/search/docs/fundamentals/seo-starter-guide"
      ],
      [
        "Google Search Central documentation",
        "https://developers.google.com/search/docs"
      ]
    ]
  },
  "how-to-manage-digital-distractions": {
    "focus": "Reduce interruptions by changing notification defaults, workspace cues, and task boundaries.",
    "workflow": [
      "Record the main sources of interruption for a typical work session.",
      "Turn off nonessential notifications and badges.",
      "Keep only the tabs and apps needed for the current task open.",
      "Work in a defined block with a clear stopping point.",
      "Review which changes actually reduced interruptions and keep those."
    ],
    "example": "During a 30-minute writing block, silence social notifications, keep the reference document and editor open, and write down unrelated tasks for later instead of switching immediately.",
    "checklist": [
      "The biggest distraction sources are identified.",
      "Notifications are intentionally configured.",
      "Current-task apps are easy to access.",
      "Breaks are planned.",
      "The routine is adjusted based on experience."
    ],
    "caveat": "A strict focus system is not suitable for every job or accessibility need. Keep alerts required for safety, caregiving, or urgent responsibilities.",
    "source": [
      [
        "Microsoft Focus in Windows",
        "https://support.microsoft.com/windows/focus"
      ],
      [
        "Apple Focus support",
        "https://support.apple.com/en-us/HT212608"
      ]
    ]
  },
  "how-to-check-information-online": {
    "focus": "Verify online information by tracing it to its original source and checking date, context, and corroboration.",
    "workflow": [
      "Pause before sharing emotionally charged or surprising claims.",
      "Find the original report, document, dataset, or announcement.",
      "Check who published it and when it was published or updated.",
      "Compare the claim with independent reliable sources.",
      "Inspect images or quotes in their original context before drawing conclusions."
    ],
    "example": "If a social post claims a new law has taken effect, locate the official government publication and check its date and scope. A screenshot of a headline is not enough to establish the current legal position.",
    "checklist": [
      "Original source is located.",
      "Author or publisher is identifiable.",
      "Publication date and context are checked.",
      "Independent corroboration is available.",
      "Unverified claims are not presented as fact."
    ],
    "caveat": "Multiple sites may repeat the same incorrect source. Corroboration is strongest when sources are genuinely independent.",
    "source": [
      [
        "International Fact-Checking Network",
        "https://ifcncodeofprinciples.poynter.org/"
      ],
      [
        "Google Fact Check Explorer",
        "https://toolbox.google.com/factcheck/explorer"
      ]
    ]
  }
};
