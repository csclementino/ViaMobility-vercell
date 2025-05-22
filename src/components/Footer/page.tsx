import React from "react";

interface FooterProps {
    texto?: string;
    children?: React.ReactNode;
    className?: string;
}

const Footer: React.FC<FooterProps> = ({ texto, children, className = "" }) => {
    return (
      <footer className={`fixed bottom-0 left-0 right-0 p-4 z-[1000] flex flex-col items-center justify-evenly ${className}`}>
        {texto}
        {children}
      </footer>
    );
};

export default Footer;