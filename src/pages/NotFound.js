import { useEffect } from "react";
import { Link } from "react-router-dom";


export default function NotFound() {

    useEffect(() => {
        document.title = "Page Not Found • Instaglam";
    }, []);

    return (
        <div className="bg-gray-background container flex mx-auto max-w-screen-md items-start h-screen ">
            <div className="mx-auth max-w-screen-lg mt-5">
                <p className="text-center text-2xl font-medium mt-5">Sorry, this page isn't available.</p>
                <p className="text-center text-1xl">The link you followed may be broken, or the page may have been removed. <Link to="/" className="font-medium text-blue-medium">Go back to Instaglam.</Link></p>

            </div>
        </div>
    )
}