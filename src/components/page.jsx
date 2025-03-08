import React from 'react';
import './style.css';
import Globe from './globe';
import TestimonialSlider from './testimonials' ;
import Mymg from './pic.jpg';
export default function Page() {
    return(
 <>

<section class="container">
<div class="content">
<h1><span>Innovative</span> Code Developer</h1>
<p>I'm Precious Adedokun, alias apcodesphere ,  a skilled developer with years of experience. I started robotics in 2018 and web development in 2023, specializing in web development, app development, cybersecurity, database management, and backend engineering.  </p> 
<p>I build reliable and scalable solutions with a focus on smooth user interactions. </p>
<p>A passionate developer with hands-on experience in building live projects. An upcoming tech content creator and speaker.  </p>
<div class="social-icons">
<a href="#"><i class="fab fa-facebook"></i></a>
<a href="#"><i class="fab fa-twitter"></i></a>
<a href="#"><i class="fab fa-instagram"></i></a>
<a href="#"><i class="fab fa-linkedin"></i></a>
</div>
</div>
<div class="profile-pic">
<img src={Mymg} alt="Profile" />
</div>
</section>
<Globe /> 
<div class="banner-container">
    <div class="banner">
    <span>✨ SECURE ✨ RELIABLE ✨ RESPONSIBLE ✨ DYNAMIC ✨ SEARCH OPTIMISED ✨ SCALABLE ✨ INTERACTIVE ✨ ENGAGING</span>
    </div>
    </div> 
<section class="services">
<h2> Capabilities<span>🔥</span></h2>
<div class="underline"></div>
<p>I specialize in various areas of programming, offering web development, app development, cybersecurity, database management, and backend engineering solutions.  </p>
<div class="services-container">
<div class="service-card">
<i class="fas fa-laptop-code"></i>
<h3>Frontend Web Development</h3>
 <p>I create responsive, user-friendly web interfaces with a focus on seamless UX, performance, and modern technologies. </p>
 </div>

<div class="service-card">
<i class="fas fa-server"></i>
<h3>Backend Web Development</h3>
<p>I build secure, scalable, and efficient backend systems, ensuring seamless data management and performance. </p></div>

<div class="service-card">
<i class="fas fa-gamepad"></i> 
<h3>Game Development</h3>
<p>I develop interactive and engaging games with a focus on performance, scalability, and immersive user experiences. </p>
</div>

<div class="service-card">
<i class="fas fa-database"></i>
<h3> Database Management</h3>
 <p>I design, optimize, and manage databases for efficient data storage, retrieval, and security. </p>
 </div> 

<div class="service-card">
<i class="fas fa-mobile-alt"></i>
<h3> App Development</h3>
 <p>I build high-performance, scalable, and user-friendly applications for web and mobile platforms. </p></div>

<div class="service-card">
<i class="fas fa-robot"></i>
<h3> Automation Engineering</h3> 
<p>I build high-performance, scalable, and user-friendly applications for web and mobile platforms. </p>
</div>

<div class="service-card">
    <i class="fas fa-search"></i>
    <h3> Search Optimisation</h3> 

 <p>I optimize websites for better search engine visibility, higher rankings, and increased organic traffic. </p>
    </div>

<div class="service-card">
        <i class="fas fa-palatte"></i>
            <h3>UI/UX Design</h3>
                <p>Designing intuitive and visually appealing interfaces with a focus on user experience and modern design trends.</p>
                </div>

                <div class="service-card">
                    <i class="fas fa-tools"></i>
                        <h3>Web Maintenance and Support</h3>
                            <p>Ensuring website security, performance, and updates for smooth and uninterrupted operation.</p>
                            </div>
</div>
</section> 
<section class="projects">
<h2>Projects</h2>
<div class="underline"></div>
<div class="projects-container">
<div class="project-card">
<div class="project-header">
<h3> Weather App</h3>
<a href="https://apweatherapp.vercel.app/ "><i class="fas fa-external-link-alt"></i></a>
</div>
<p>Stay ahead of the weather with real-time forecasts, dynamic backgrounds, and a sleek interface. Get location-based updates, theme customization, and an intuitive experience—all in one app.</p>
<div class="project-icons">
<i class="fa-brands fa-html5"></i>
<i class="fa-brands fa-css3-alt"></i>
<i class="fa-brands fa-js"></i>
<i class="fa-solid fa-database"></i>
</div>
</div>
<div class="project-card">
<div class="project-header">
<h3> To-Do List</h3>
<a href="https://ap-todo.vercel.app/ "><i class="fas fa-external-link-alt"></i></a>
</div>
<p>A hub of inspiration! Discover and share powerful quotes on life, success, and motivation. Designed for a seamless user experience, APQuotes Hub brings words that move you to your fingertips.</p>
<div class="project-icons">
<i class="fab fa-aws"></i>
<i class="fab fa-vuejs"></i>
<i class="fas fa-wave-square"></i>
<i class="fas fa-mountain"></i>
<i class="fab fa-v"></i>
</div>
</div>
<div class="project-card">
<div class="project-header">
<h3>Football Livescore Site</h3>
<a href="https://ap-sports.vercel.app "><i class="fas fa-external-link-alt"></i></a>
</div>
<p>Never miss a moment! Get live scores, match updates, and real-time stats from leagues worldwide. With a modern design and smooth experience, One Footy Stream keeps football fans connected to the game.</p>
<div class="project-icons">
<i class="fab fa-aws"></i>
<i class="fab fa-vuejs"></i>
<i class="fas fa-wave-square"></i>
<i class="fas fa-mountain"></i>
<i class="fab fa-v"></i>
</div>
</div>

</div>
</section>
<TestimonialSlider />
</>
    )
} 
