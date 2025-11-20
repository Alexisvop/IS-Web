(function() {
    'use strict';

    function initReferencias() {
        setupSmoothScroll();
        
        adjustTooltipsForMobile();
        
        setupKeyboardNavigation();
        
        setupClickableTooltips();
    }


    function setupSmoothScroll() {
        const referencias = document.querySelectorAll('.ref');
        
        referencias.forEach(ref => {
            ref.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'center'
                    });
                    
                    highlightReference(targetElement);
                }
            });
        });
    }

    function highlightReference(element) {
        element.classList.add('highlight');
        
        setTimeout(() => {
            element.classList.remove('highlight');
        }, 2000);
    }


    function adjustTooltipsForMobile() {
        if (window.innerWidth <= 768) {
            const tooltips = document.querySelectorAll('.ref-tooltip');
            
            tooltips.forEach(tooltip => {
                tooltip.style.width = '90vw';
                tooltip.style.maxWidth = '280px';
            });
        }
    }

    function setupKeyboardNavigation() {
        const referencias = document.querySelectorAll('.ref');
        
        referencias.forEach(ref => {
            ref.setAttribute('tabindex', '0');
            ref.setAttribute('role', 'link');
            
            ref.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
    }

    window.addEventListener('resize', () => {
        adjustTooltipsForMobile();
    });

    function crearReferencia(refNumber, refId, tipo, tooltipData, urlExterna = null) {
    const { autor, titulo, detalle } = tooltipData;
    const etiquetaTipo = tipo === 'cita-textual' ? 'CITA TEXTUAL' : 'Fuente sugerida';
    
    const urlFinal = urlExterna || `#${refId}`;
    const textoLink = urlExterna ? 'Ver fuente original' : ' Ver referencia completa';
    
    return `
        <a href="${urlFinal}" class="ref ${tipo}" data-ref="${refNumber}" ${urlExterna ? 'target="_blank" rel="noopener noreferrer"' : ''}>
            [${refNumber}]
            <span class="ref-tooltip">
                <strong>${autor}</strong>
                <em>${tipo === 'cita-textual' ? etiquetaTipo : titulo}</em>
                <br>${detalle}
                <br><br>${textoLink}
            </span>
        </a>
    `;
}

    function crearItemBibliografia(refId, refNumber, citaCompleta, url = null) {
        const linkHTML = url ? 
            `<br><a href="${url}" target="_blank" rel="noopener noreferrer">${url}</a>` : 
            '';
        
        return `
            <div class="bib-item" id="${refId}">
                <span class="bib-number">[${refNumber}]</span>
                ${citaCompleta}
                ${linkHTML}
            </div>
        `;
    }
    window.Referencias = {
        crear: crearReferencia,
        crearBibItem: crearItemBibliografia,
        init: initReferencias
    };

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initReferencias);
    } else {
        initReferencias();
    }

})();