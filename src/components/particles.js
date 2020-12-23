import React from 'react';

/**
 * Render a storm of particles that are really pretty
 */
class Particles {

    /**
     * Create a class to handle particle updating and rendering
     * 
     * @param {HTMLCanvasElement} canvas to render
     * @param {int} maxParticles number of particles to render
     */
    constructor(canvas, maxParticles) {
        if (!canvas) {
            throw new Error('Couldn\'t create particles because canvas doesn\'t exist');
        }
        this.canvas = canvas;
        this.context = canvas.getContext('2d');
        this.particles = [];
        this.maxParticles = maxParticles;
        this.width = canvas.clientWidth;
        this.height = canvas.clientHeight;
        canvas.height = this.height;
        canvas.width = this.width;
        this.angle = 0;
        this.deltaTime = 1 / 60;

        for (let i = 0; i < maxParticles; i++) {
            this.particles.push({
                x: Math.random() * this.width,
                y: Math.random() * this.height,
                radius: Math.random() * 5 + 1,
                density: Math.random() * maxParticles,
                red: Math.floor((Math.random() * 255)),
                green: Math.floor((Math.random() * 255)),
                blue: Math.floor((Math.random() * 255)),
                alpha: 1.0,
            });
        }

        // on resize, resize height and width
        window.addEventListener('resize', () => {
            this.width = canvas.clientWidth;
            this.header = canvas.clientHeight;
            canvas.height = this.height;
            canvas.width = this.width;
        });
    }

    /**
     * Update the particles in the canvas
     */
    update() {
        this.angle += 0.01;
        for (let i = 0; i < this.maxParticles; i++) {
            let particle = this.particles[i];
            // update coordinates
            // density calculates how much the angle influences the flake
            //// y is always going down so its the acceleration
            const x = this.angle + particle.density;
            particle.y += (Math.cos(x) + particle.radius / 2);
            // particle.y += Math.sin(x);// + 1 + particle.radius / 2;
            //// x is what makes the particles sway from left to right
            particle.x += Math.sin(x);

            // Send particles to opposite sides of the screen if threshold is crossed
            if (particle.x > this.width + particle.radius
                || particle.y < -1 * particle.radius
                || particle.y > this.height + particle.radius) {
                particle.x = Math.random() * this.width;
                particle.y = 0;
                particle.alpha = 1.0;
            }
            // if (particle.y > this.height - 100) {
            const unitVector = (this.height - particle.y) / this.height
            particle.alpha = -1 * Math.pow(unitVector, 3) + Math.pow(unitVector, 2) + 3 * unitVector;
            // }
        }
    }

    /**
     * Render the particles on the canvas
     */
    render() {
        this.context.clearRect(0, 0, this.width, this.height);
        for (let i = 0; i < this.maxParticles; i++) {
            let particle = this.particles[i];
            this.context.beginPath();
            this.context.fillStyle = `rgba(${this.particles[i].red},${this.particles[i].green},${this.particles[i].blue},${this.particles[i].alpha})`;
            this.context.moveTo(particle.x, particle.y);
            this.context.arc(particle.x, particle.y, particle.radius, 0, 2 * Math.PI);
            this.context.fill();
        }
    }
}

const ParticleCanvus = ({ className }) => {
    let particles = null;

    const update = () => {
        // get context
        if (!particles) {
            let canvas = document.getElementById('bg-canvas');
            if (canvas) {
                particles = new Particles(canvas, 25);
            } else {
                if (typeof window !== 'undefined') {
                    window.requestAnimationFrame(update);
                }
                return;
            }
        }
        particles.update();
        particles.render();
        if (typeof window !== 'undefined') {

            window.requestAnimationFrame(update);
        }
    }
    if (typeof window !== 'undefined') {
        window.requestAnimationFrame(update);
    }

    return <canvas id="bg-canvas" className="home--background"></canvas>
}

export default ParticleCanvus;
