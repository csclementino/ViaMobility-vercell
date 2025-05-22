import React from "react";

interface HeaderProps {
    texto?: string;
    children?: React.ReactNode;
    className?: string;
}

const Header: React.FC<HeaderProps> = ({ texto, children, className = "" }) => {
    return (
      <header className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full flex flex-col items-center justify-center ${className}`}>
        {texto}
        {children}
      </header>
    );
};

export default Header;