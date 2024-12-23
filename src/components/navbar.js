'use client';
import { useRouter } from "next/navigation";
import "../app/globals.css";
import Link from 'next/link';
import React from 'react';

export default function NavBar() {
    /* nav bar options */
    const options = [
        {label: "resume", link: "/resume"},
        {label: "projects", link: "/projects"}
      ];
    const title = 'Kaitlyn Peters';

    const router = useRouter();

    /* function for linking pages */
    const goToRoute = (link) => {
        router.push(link);
    };

    return(
        <div className="navbar">
            <div className="navbar-title">
                <div className="text">
                    <button onClick={() => goToRoute("/home")} type="button" className="text">
                        <h1>{ title }</h1>
                    </button>
                </div>
            </div>
            {/* navbar buttons */}
            <div className="navbar-container">
                <div className="nav-text">
                    {options.map((option) =>  (
                        <Link key={option.label} href={option.link}>
                            <button type="button">
                                <p>{option.label}</p>
                            </button>
                        </Link>
                        // <button 
                        //     key={option.label}
                        //     onClick={() => goToRoute(option.link)}
                        //     type="button">
                        //         <p>{option.label}</p>
                        // </button>
                    ))}
                </div>
            </div>
        </div>
    );
}