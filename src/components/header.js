import React from "react";

const getYear = () => {
    const now = new Date();
    return now.getFullYear();
}
const Header = () => {
    return (
        <div>this year is {getYear()}</div>
    )
}
export default Header;