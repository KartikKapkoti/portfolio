import React, { useState, useEffect } from "react"
import { navLinks } from "../Home/data"
import "./styles.scss"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    const [currentText, setCurrentText] = useState("")
    const [textIndex, setTextIndex] = useState(0)
    const [charIndex, setCharIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const texts = [
        "Hi! there, my name is Kartik Kapkoti.",
        "I am a frontend developer.",
    ]

    useEffect(() => {
        const typeSpeed = isDeleting ? 25 : 50
        const delay = isDeleting && charIndex === 0 ? 1000 : 200

        const handleTyping = setTimeout(
            () => {
                if (charIndex < texts[textIndex].length && !isDeleting) {
                    setCurrentText((prev) => prev + texts[textIndex][charIndex])
                    setCharIndex((prev) => prev + 1)
                } else if (
                    charIndex === texts[textIndex].length &&
                    !isDeleting
                ) {
                    setIsDeleting(true)
                } else if (isDeleting && charIndex > 0) {
                    setCurrentText((prev) => prev.slice(0, -1))
                    setCharIndex((prev) => prev - 1)
                } else if (isDeleting && charIndex === 0) {
                    setIsDeleting(false)
                    setTextIndex((prev) => (prev + 1) % texts.length)
                }
            },
            charIndex === texts[textIndex].length ? delay : typeSpeed
        )

        return () => clearTimeout(handleTyping)
    }, [charIndex, isDeleting, textIndex, texts])

    const handleClick = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    return (
        <div className="container">
            <div className="header-container">
                <div className="text-overlay">
                    <h1 className="typewriter-text">{currentText}</h1>
                </div>
                <button className="hamburger-menu" onClick={toggleMenu}>
                    ☰
                </button>
                <nav className={`Navbar ${isMenuOpen ? "open" : ""}`}>
                    <ul className="navbar-list">
                        {navLinks.map((link, index) => (
                            <li key={index} className="navbar-item">
                                <button
                                    className="navbar-button"
                                    onClick={() => handleClick(link.id)}
                                >
                                    {link.label}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
