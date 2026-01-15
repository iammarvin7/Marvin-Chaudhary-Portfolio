export const content = {
    hero: {
        name: "Marvin Chaudhary",
        title: "Software Engineer",
        tagline: "Building scalable, accessible, and performant web applications."
    },
    about: "I’m someone who’s driven by the idea that things should be better because I was there. I’m naturally curious, deeply motivated by growth, and energized by helping others find opportunities they might not see on their own. I care about learning the right way, through discipline, consistency, and real effort, and I push myself through intense periods of study because I believe mastery comes from going deeper than what’s required. What keeps me going is impact: creating environments where people can build real things, learn practical skills, and feel more confident than they did before. I’m not satisfied with leaving systems, teams, or communities the same way I found them; I want to improve them, even in small but meaningful ways. That mindset shapes how I learn, how I collaborate, and how I approach every problem I work on",
    education: [
        {
            school: "[Your University]",
            degree: "B.S. Computer Science",
            year: "202X"
        }
    ],
    achievements: [
        {
            title: "International DECA ICDC 2025 - 9th Place",
            description: "Competed internationally in Business Ethics, demonstrating strong ethical decision-making and presentation skills among top global competitors in San Francisco.",
            location: "San Francisco, CA"
        },
        {
            title: "Missouri State DECA 2025 - 2nd Place",
            description: "Awarded for excellence in International Marketing, showcasing strategic business acumen at the state level in Columbia, MO.",
            location: "Columbia, MO"
        },
        {
            title: "Atlassian ForgeHack 2025 - Finalist",
            description: "Recognized as a finalist in a global hackathon based in Sydney for developing innovative solutions on the Atlassian Forge platform.",
            location: "Sydney, Australia (Remote)"
        },
        {
            title: "Vibeathon 2025 - Winner ($2500)",
            description: "Secured $2500 and three podium finishes in a single competition in Joplin, MO, delivering high-impact code solutions under pressure.",
            location: "Joplin, MO"
        }
    ],
    experience: [
        {
            company: "[Company Name]",
            role: "Software Engineering Intern",
            date: "Jan 2023 - Present",
            description: [
                "Developed and maintained features for web applications using React and Node.js.",
                "Collaborated with cross-functional teams to define requirements and deliver solutions.",
                "Optimized application performance, reducing load times by 20%."
            ]
        },
        {
            company: "[Previous Company]",
            role: "Developer",
            date: "2022 - 2023",
            description: [
                "Implemented responsive UI components conforming to design specs.",
                "Wrote comprehensive unit tests to ensure code reliability."
            ]
        }
    ],
    projects: [
        {
            title: "Aladdin (AI Job Search Platform)",
            description: "Aladdin is an AI-powered job application platform built to simplify the internship and new-grad job search for software engineers. It automatically collects and filters relevant computer science roles, scores opportunities based on resume fit, and helps users generate tailored resumes and cover letters using AI. The platform also tracks applications and securely stores documents, reducing manual effort and making the job search more focused and efficient.",
            stack: ["Next.js", "TypeScript", "Tailwind CSS", "PostgreSQL", "AWS", "LLMs"],
            link: "https://github.com/Marvyn007/Aladdin",
            demo: "https://aladdin-51nc.vercel.app/",
            previewImage: "/images/projects/aladdin-preview.png"
        },
        {
            title: "Amor+Chai (E-Commerce Platform)",
            description: "A full-stack e-commerce solution delivering a seamless shopping experience for premium teas. Features secure payment processing via Stripe, real-time database management with Supabase, and immersive 3D product visualizations using Three.js to engage customers.",
            stack: ["Next.js", "Stripe", "Supabase", "Three.js", "Framer Motion"],
            link: "https://github.com/iammarvin7/Amor-Chai",
            demo: "https://drinkamorchai.store/",
            previewImage: "/images/projects/amor-chai-preview.png"
        },
        {
            title: "TurboMC: Sub-Second Monte Carlo Options Pricer",
            description: "Implemented Monte Carlo simulation for European options pricing with 10M+ path executions and <0.05% pricing error. Engineered C++ multi-threading solution achieving 6.9x speedup (44.25s → 6.45s) for call options and 6.8x (42.45s → 6.28s) for put options. Optimized with OpenMP parallel processing, reducing 10M simulation runtime by 90% (6.3s → 0.7s) across 8 CPU cores.",
            stack: ["C++", "Multi-threading", "OpenMP"],
            link: "https://github.com/iammarvin7/TurboMC-Sub-Second-Monte-Carlo-Options-Pricer",
            demo: null
        },
        {
            title: "Ravi’s Study Program: Leetcode Bot",
            description: "Engineered a Discord.py bot with OAuth2 and RESTful API integration to automate LeetCode data tracking, creating a data pipeline that eliminated manual spreadsheet entry for students.",
            stack: ["Python", "Discord.py", "Google API"],
            link: "https://github.com/iammarvin7/RSP-Bot",
            demo: null
        },
        {
            title: "Technical Indicator LFT System",
            description: "Developed an algorithmic trading system using Python and Pandas to back-test RSI/Bollinger strategies, achieving 342.42% ROI on TSLA data (vs. 196% benchmark) via optimized risk parameters.",
            stack: ["Python", "TA-Lib", "Pandas"],
            link: "https://github.com/iammarvin7/Technical-Indicator-LFT-System",
            demo: null
        }
    ],
    skills: [
        "JavaScript (ES6+)", "TypeScript", "React", "Node.js", "Python", "SQL", "Git", "HTML/CSS", "AWS"
    ],
    contact: {
        email: "marvin@example.com",
        github: "https://github.com/iammarvin7",
        linkedin: "https://linkedin.com/in/marvin-chaudhary",
        location: "San Francisco, CA"
    }
};
