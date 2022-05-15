import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position : "relative",
        top : "100vh",
        width: "100%",
        fontSize: "11px",
    }
    return (
        <>
        <footer className="bg-dark text-light" style = {footerStyle}>
            <p className="text-center">
             copright &copy; MyTodoList.com all rights are reserved           
            </p>
        </footer>
        </>
    )
}
