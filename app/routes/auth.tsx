import {usePuterStore} from "~/lib/puter";
import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router";


export const meta = () => ([
    { title: 'Resumind | Auth' },
    { name: 'description', content: 'Log into your account' },
]);

const Auth = () => {
    const { isLoading, auth } = usePuterStore();
    const location = useLocation();
    const next = location.search.split('next=')[1];
    const navigate = useNavigate();

    useEffect(() => {
        if (auth.isAuthenticated) {
            navigate(next);
        }
    }, [auth.isAuthenticated, next, navigate]);

    return (
        <main className="bg-[url('/images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
        <div className="gradient-border shadow-lg animate-in fade-in zoom-in duration-1000">
            <section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
                    <div className="flex flex-col items-center gap-2 text-center">
                        <h1 className="animate-in fade-in slide-in-from-top-8 duration-700">Welcome</h1>
                        <h2 className="animate-in fade-in slide-in-from-top-4 duration-700 delay-300">Log In to Continue Job Your Journey</h2>

                    </div>
                <div className="animate-in fade-in slide-in-from-bottom-4 duration-700 delay-500">
                    {isLoading ? (
                        <button className="auth-button animate-pulse transition-all duration-300 hover:scale-105">
                            <p>Signing you in...</p>
                        </button>
                    ) : (
                        <>
                            {auth.isAuthenticated ? (
                                <button className="auth-button transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95" onClick={auth.signOut}>
                                       <p>Log Out</p>
                                </button>
                            ) : (
                                <button className="auth-button transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95" onClick={auth.signIn}>
                                   <p> Log in </p>
                                </button>
                            )}
                        </>

                    )}
                </div>
            </section>
        </div>
        </main>
    );
};

export default Auth;