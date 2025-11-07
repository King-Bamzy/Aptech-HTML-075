// bg.js — subtle matrix-style background animation
(function(){
    const canvas = document.getElementById('bg-canvas');
    if(!canvas) return;
    const ctx = canvas.getContext('2d');

    // responsive resize handling
    let glyphSize = 18; // will be recomputed
    let cols = 0;
    let ypos = [];

    function resize(){
        const dpr = Math.max(1, window.devicePixelRatio || 1);
        canvas.width = Math.floor(window.innerWidth * dpr);
        canvas.height = Math.floor(window.innerHeight * dpr);
        canvas.style.width = window.innerWidth + 'px';
        canvas.style.height = window.innerHeight + 'px';

        // compute glyph size based on viewport width so mobile gets smaller glyphs
        const vw = window.innerWidth;
        if(vw < 400) glyphSize = 12;
        else if(vw < 700) glyphSize = 14;
        else if(vw < 1100) glyphSize = 16;
        else glyphSize = 18;

        // scale for device pixel ratio for crisp text
        const scaledGlyph = Math.max(10, Math.round(glyphSize * dpr));
        cols = Math.floor(canvas.width / scaledGlyph) + 1;
        ypos = new Array(cols).fill(0).map(()=>Math.floor(Math.random()*50));
        // set font size on context using scaled glyph
        ctx.font = `${scaledGlyph}px monospace`;
        ctx.textBaseline = 'top';
    }
    window.addEventListener('resize', resize);
    resize();

    const glyphs = 'abcdefghijklmnopqrstuvwxyz0123456789あいうえお❤';

    function draw(){
        // darker overlay to keep trails but allow stronger glyphs
        ctx.fillStyle = 'rgba(0, 8, 20, 0.32)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        // ctx.font already set in resize to account for DPR
        for(let i=0; i<cols; i++){
            // draw multiple glyphs per column per frame sometimes for density
            const repeats = Math.random() > 0.7 ? 2 : 1;
            for(let r=0; r<repeats; r++){
                const text = glyphs.charAt(Math.floor(Math.random() * glyphs.length));
                // x/y are in canvas pixels which are scaled by DPR
                const scaledGlyph = parseInt(ctx.font, 10);
                const x = i * scaledGlyph;
                const y = (ypos[i] + r) * scaledGlyph;

                // stronger color palette but still soft
                if(text === '❤'){
                    ctx.fillStyle = 'rgba(255,105,180,1)'; // brighter pink for hearts
                } else {
                    ctx.fillStyle = 'rgba(40,200,110,0.98)'; // richer green
                }

                ctx.fillText(text, x, y);
            }

            // reset chain occasionally to create varied columns
            if((ypos[i] * parseInt(ctx.font,10)) > canvas.height + Math.random() * 3000) ypos[i] = 0;
            ypos[i] += Math.random() > 0.9 ? 0 : 1; // some columns pause randomly
        }
        requestAnimationFrame(draw);
    }

    // Recompute columns when resized
    // kept for redundancy: also update columns if any other change occurs
    window.addEventListener('orientationchange', resize);

    draw();
})();
