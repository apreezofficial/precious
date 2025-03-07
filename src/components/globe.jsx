 import { useEffect } from "react"
 import "./style.css"

 const Globe = () => {
 useEffect(() => {
 const globe = document.querySelector(".globe")
 if (!globe) return

 const handleMouseMove = (e) => {
 const { clientX, clientY } = e
 const centerX = window.innerWidth / 2
 const centerY = window.innerHeight / 2
 const rotateX = (centerY - clientY) / 10
 const rotateY = (clientX - centerX) / 10

 globe.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
 }

 document.addEventListener("mousemove", handleMouseMove)

 const updateTime = () => {
 const timeElement = document.querySelector(".time")
 if (timeElement) {
 timeElement.textContent = new Date().toLocaleTimeString()
 }
 }

 updateTime()
 const interval = setInterval(updateTime, 1000)

 return () => {
 document.removeEventListener("mousemove", handleMouseMove)
 clearInterval(interval)
 }
 }, [])

 return (
 <div className="globe-container">
 <h1>I'm very flexible with time zone communications</h1>
 <div className="globe-wrapper">
 <div className="globe"></div>
 </div>
 <div className="location">
 <span className="icon">📍</span> Remote  
 <br />
 <strong>Local Time - <span className="time"></span></strong>
 </div>
 </div>
 )
 }

 export default Globe