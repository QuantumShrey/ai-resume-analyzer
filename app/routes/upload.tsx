import {type FormEvent, useState} from 'react';
import Navbar from "~/components/Navbar";
import FileUploader from "~/components/FileUploader";

const Upload = () => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [statusText, setStatusText] = useState('');
    const [file, setFile] = useState<File | null>(null);

    const handleFileSelect = (file: File | null) => {
        setFile(file)
    }

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const form = e.currentTarget.closest('form');
        if(!form) return;
        const formData = new FormData(form);

        const companyName = formData.get('company-Name');
        const jobTitle = formData.get('job-title');
        const jobDescription = formData.get('job-description');

        console.log({
            companyName, jobTitle, jobDescription, file
        })
    }

    return (

     <main className="bg-[url('/images/bg-main.svg')] bg-cover">
        <Navbar />


        <section className="main-section">
            <div className="page-heading py-16">
                <h1 className="animate-in fade-in slide-in-from-top-8 duration-1000"> Smart feedback for your dream job </h1>
                {isProcessing ? (
                    <>
                    <h2 className="animate-in fade-in slide-in-from-bottom-4 duration-700">{statusText}</h2>
                    <img src="/images/resume-scan.gif" className="w-full animate-in zoom-in duration-1000 delay-300" />
                    </>
                ) : (
                    <h2 className="animate-in fade-in slide-in-from-top-4 duration-1000 delay-300">Drop your resume for an ATS Score and improvement tips </h2>
                )}
                {!isProcessing && (
                    <form id="upload-form" onSubmit={handleSubmit} className="flex flex-col gap-4 mt-8 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
                        <div className="form-div animate-in fade-in slide-in-from-left-4 duration-700 delay-700">
                            <label htmlFor="company-name">Company Name</label>
                            <input 
                                type="text" 
                                name="company-name" 
                                placeholder="Company Name" 
                                id="company-name" 
                                className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                            />
                        </div>
                        <div className="form-div animate-in fade-in slide-in-from-right-4 duration-700 delay-800">
                            <label htmlFor="job-title">Job Title</label>
                            <input 
                                type="text" 
                                name="job-title" 
                                placeholder="Job Title" 
                                id="job-title" 
                                className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                            />
                        </div>
                        <div className="form-div animate-in fade-in slide-in-from-left-4 duration-700 delay-900">
                            <label htmlFor="job-description">Your Job Description</label>
                            <textarea 
                                rows={5} 
                                name="job-description" 
                                placeholder="Job description" 
                                id="job-description" 
                                className="transition-all duration-300 focus:scale-[1.02] focus:shadow-lg"
                            />
                        </div>
                        <div className="form-div animate-in fade-in slide-in-from-bottom-4 duration-700 delay-1000">
                            <label htmlFor="uploader">Upload Resume</label>
                            <FileUploader onFileSelect={handleFileSelect} />
                        </div>

                        <button className="primary-button animate-in fade-in zoom-in duration-700 delay-1100 transition-all hover:scale-105 hover:shadow-lg active:scale-95" type="submit">
                            Analyze Resume
                        </button>

                    </form>
                    )}
            </div>
        </section>
     </main>
    );
};

export default Upload;