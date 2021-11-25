import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Side from "../components/sidebar/Side";
import Timeline from "../components/Timeline";


export default function Dashboard() {


    useEffect(() => {
        document.title = "Instaglam";
    }, []);

    return (
        <div className="bg-gray-background">
            <Navbar/>
            <div className="grid grid-cols-3 gap-4 justify-between mx-auto max-w-screen-lg"> 
                <Timeline/>
                
                <Side/>
            </div>
        </div>
    )
}