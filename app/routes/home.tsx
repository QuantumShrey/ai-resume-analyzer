import type { Route } from "./+types/home";
import Navbar from '~/components/Navbar';
import {Link, useLocation, useNavigate} from "react-router";
import { resumes } from "../../constants";
import ResumeCard from "~/components/ResumeCard";
import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
export function meta({}: Route.MetaArgs) {
    return [
        { title: "Skillara" },
        { name: "description", content: "Your one way stop for job search!" },
    ];
}

export default function Home() {
    const { auth } = usePuterStore();
    const navigate = useNavigate();

    useEffect(() => {
        if (!auth.isAuthenticated) navigate('/auth?next=/');

    }, [auth.isAuthenticated]);


    return <main className="bg-[url('/images/bg-main.svg')] bg-cover">
      <Navbar />


        <section className="main-section">
            <div className="page-heading py-16">
                <h1 className="animate-in fade-in slide-in-from-top-8 duration-1000"> Track Your Applications & Resume Ratings </h1>
                <h2 className="animate-in fade-in slide-in-from-top-4 duration-1000 delay-300"> Review your submissions and check AI-powered feedback.</h2>
            </div>

        {resumes.length > 0 && (
            <div className="resumes-section">
                {resumes.map((resume, index) => (
                    <div 
                        key={resume.id} 
                        className="animate-in fade-in slide-in-from-bottom-8 duration-700"
                        style={{ animationDelay: `${index * 200 + 600}ms` }}
                    >
                        <ResumeCard resume={resume} />
                    </div>
                ))}
            </div>
        )}
        </section>
    </main>
}