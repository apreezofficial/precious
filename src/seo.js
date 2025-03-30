// SEO.js - Website Structured Data 
function SEO() { const structuredData = { "@context": "https://schema.org", "@type": "Person", "name": "APCodeSphere", "url": "https://apcodesphere.vercel.app", "description": "APCodeSphere is a full-stack developer, cybersecurity expert, and AI enthusiast offering web development, cybersecurity training, and programming mentorship.", "sameAs": [ "https://twitter.com/apcodesphere", "https://www.linkedin.com/in/apcodesphere", "https://github.com/apreezofficial" ], "jobTitle": "Full-Stack Developer & Cybersecurity Expert", "worksFor": { "@type": "Organization", "name": "APCodeSphere Tech" } };

return ( <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} /> ); }

export default SEO;

