import type { ReactNode } from "react";

/*
    Ce composant sert uniquement à donner
    le même design aux pages Login et Register.

    Ainsi, on évite de copier le même code
    dans plusieurs pages.
*/

interface Props {
    children: ReactNode;
}

function AuthLayout({ children }: Props) {

    return (

        <div className="flex min-h-screen items-center justify-center bg-slate-100">

            {/* Carte centrale */}
            <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-lg">

                {children}

            </div>

        </div>

    );

}

export default AuthLayout;