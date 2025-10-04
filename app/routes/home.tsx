import type { Route } from "./+types/home";
import Navbar from '~/components/Navbar';
import {Link} from "react-router";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
export function meta({}: Route.MetaArgs) {
    return [
        { title: "Skillara" },
        { name: "description", content: "Your one way stop for job search!" },
    ];
}

export default function Home() {
    // @ts-ignore
    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <nav className="navbar">
            <Link to="/">
                <p className="text-2xl font-bold text-gradient">Skillara</p>
            </Link>
            <Link to="/upload" className="primary-button w-fit">
                Upload Resume
            </Link>
        </nav>

        <section className="main-section">
            <div className="page-heading">
                <h1> Track Your Applications & Resume Ratings </h1>
                <h2> Review your submissions and check AI-powered feedback.</h2>
            </div>
        </section>
        {resumes.length > 0 && (
            <div className="resumes-section">
                {resumes.map((resume) => (
                    <ResumeCard key={resume.id} resume={resume} />
                ))}
            </div>
        )}
    </main>
}