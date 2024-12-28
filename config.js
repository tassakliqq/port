import { FaDiscord, FaGithub, FaMapPin } from "react-icons/fa";
import { HiCode, HiCube, HiDatabase, HiMail } from "react-icons/hi";

export const config = {
    developer: {
        name: "oknuzay",
    },
    social: {
        github: "oknuzay",
        discord: "1280171966107746462"
    },
    NAV_ITEMS: [
        { href: '/projects', label: 'Projects' },
        { href: '/contact', label: 'Contact' }
    ],
    recentTracks: false, // Enable/disable Spotify recent tracks
    projects: [
        {
            id: 1,
            title: "Portfolio",
            description: "A modern and responsive portfolio website to showcase my projects, skills, and experiences. Built with Next.js and styled using TailwindCSS, this site provides a seamless user experience and a clean design that adapts to all devices.",
            image: "/projects/portfolio-app.png",
            technologies: ["Next.js", "TailwindCSS", "Vercel"],
            github: "https://github.com/oknuzay/",
            demo: "https://fr3zy.vercel.app"
        },
    ],
    skills: [
        {
            title: "Frontend",
            icon: <HiCode />,
            description: "Modern web interfaces",
            bgClass: "bg-blue-500/10",
            iconClass: "text-blue-500",
            skills: [
                { name: "Next.js 15", level: "Advanced", hot: true },
                { name: "React", level: "Advanced" },
                { name: "TailwindCSS", level: "Expert" },
                { name: "JavaScript", level: "Advanced" },
            ]
        },
        {
            title: "Backend",
            icon: <HiDatabase />,
            description: "Server & Database",
            bgClass: "bg-emerald-500/10",
            iconClass: "text-emerald-500",
            skills: [
                { name: "Node.js", level: "Advanced" },
                { name: "MongoDB", level: "Expert" hot: true},
                { name: "Express.js", level: "Advanced" }
            ]
        },
        {
            title: "Programs & Tools",
            icon: <HiCube />,
            description: "Development & Productivity Tools",
            bgClass: "bg-orange-500/10",
            iconClass: "text-orange-500",
            skills: [
                { name: "VS Code", level: "Expert", hot: true },
                { name: "Photoshop", level: "Intermediate" },
                { name: "Git", level: "Intermediate" }
            ]
        }
    ],
    contactInfo: [
        {
            icon: <FaDiscord className="w-5 h-5" />,
            label: "Discord",
            value: "oknuzay",
            link: `https://discord.com/users/1280171966107746462`
        },
        {
            icon: <FaGithub className="w-5 h-5" />,
            label: "GitHub",
            value: "@oknuzay",
            link: `https://github.com/oknuzay`
        },
        {
            icon: <FaMapPin className="w-5 h-5" />,
            label: "Location",
            value: "Turkey",
            link: null
        }
    ]
}
