import React from "react";
import { Link } from "react-router-dom";

const MailButton = ({ mailto, label }) => {
    return ( 
        <Link
            to='#'
            className="hover:text-white"
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
        >
           {label}
        </Link>
     );
}
 
export default MailButton;