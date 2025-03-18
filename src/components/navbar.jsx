import React from 'react'
import './style.css'
function Alink({text, link}) {
   return (
    <a href={link}>{text}</a>
   )
}
export default function Navbar(){
    return (
<>
<div className="navbar">
    <div className='logotext'>Precious! ⚡</div>
    <a href="https://github.com/apreezofficial" className='git' target='_blank'><i class="fab fa-github"></i> github</a>
</div>
</>
    );
}
