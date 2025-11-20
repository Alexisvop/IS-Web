    const sections = document.querySelectorAll("section");
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.05 });  

    sections.forEach(section => observer.observe(section));
    
    setTimeout(() => {
        sections.forEach(section => {
            if (!section.classList.contains('visible')) {
                section.classList.add('visible');
            }
        });
    }, 100);  
