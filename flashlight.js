class FlashLightOverlay {
    constructor(parent = document.body, innerRadius = 100, outerRadius = 200, color = '#000000') {
        this.canvas = document.createElement("canvas");
        this.canvas.className = 'flashlight-overlay-canvas';
        this.ctx = this.canvas.getContext("2d");

        this.innerRadius = innerRadius;
        this.outerRadius = outerRadius;

        this.mouse = { x: (window.innerWidth / 2), y:  (window.innerHeight / 2) };
        this.color = color;

        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;

        Object.assign(this.canvas.style, {
            display: 'none',
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: '0',
            left: '0',
            zIndex: '10000',
            pointerEvents: 'none'
        });

        parent.appendChild(this.canvas);

        this.active = false;

        window.requestAnimationFrame(() => this.draw());

        window.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        window.addEventListener('resize', (e) => {
            this.canvas.width = window.innerWidth;
            this.canvas.height = window.innerHeight;
        });
    }

    enable() {
        this.canvas.style.display = 'block';
        this.active = true;
    }

    disable() {
        this.canvas.style.display = 'none';
        this.active = false;
    }

    draw() {
        if (!this.active) {
            window.requestAnimationFrame(() => this.draw());
            return;
        }
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.fillStyle = this.color;
        this.ctx.globalCompositeOperation = 'source-over';
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

        const gradient = this.ctx.createRadialGradient(this.mouse.x, this.mouse.y,
            this.innerRadius,
            this.mouse.x, this.mouse.y,
            this.outerRadius
        );
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');

        this.ctx.globalCompositeOperation = 'destination-out';
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(this.mouse.x, this.mouse.y, this.outerRadius, 0, 2 * Math.PI);
        this.ctx.fill();
        window.requestAnimationFrame(() => this.draw());
    }
}