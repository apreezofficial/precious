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
    <a href="" className='logotext'>Precious! ⚡</a>
    <a href="https://tiktok.com/@apcodesphere" className='git' target='_blank'><i class="fab fa-tiktok"></i> Tiktok</a>
</div>
</>
    );
}