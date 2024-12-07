import React, { useState, useEffect } from "react"
import "./styles.scss"
import { quotes } from "./data"
import messages from "./messages"

const Carousel = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % quotes.length)
    }

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? quotes.length - 1 : prevIndex - 1
        )
    }

    // Auto-play functionality
    useEffect(() => {
        const interval = setInterval(goToNext, 5000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="carousel">
            <h1>{messages.title}</h1>
            <div className="carousel-content">{quotes[currentIndex]}</div>
            <div className="carousel-arrows">
                <button className="carousel-arrow prev" onClick={goToPrevious}>
                    &lt;
                </button>
                <button className="carousel-arrow next" onClick={goToNext}>
                    &gt;
                </button>
            </div>
            <div className="carousel-controls">
                {quotes.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-indicator ${
                            index === currentIndex ? "active" : ""
                        }`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default Carousel
