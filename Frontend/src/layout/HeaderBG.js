import React from 'react';
import { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";

import {noise} from '@chriscourses/perlin-noise'


let firstRender = true;

const useStyles = makeStyles(theme => ({
    canvasBG: {
        width: 'calc(100% - 457px)',
        height: 200,
        zIndex: -1,
        display: 'none',

        '@media (min-width: 650px)': {
          display: 'block',
        }
    }
}));


const mouse = {
    x: undefined,
    y: undefined,
    radius: 30
}

class Particle {
  constructor({x, y, size=1, color='red', ih, iw}) {
    this.x = x;
    this.y = y;
    this.baseX = x;
    this.baseY = y;
    this.baseSize = 0;
    this.size = size;
    this.color = color;
    this.density = Math.random() * 2 + 5
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.baseSize, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.closePath();
  }

  update(ctx) {
      if (this.baseSize < this.size) this.baseSize += 0.01;
      if (Math.abs(this.x - this.baseX) < 10) this.x += Math.random() * 2 - 1;
      if (Math.abs(this.y - this.baseY) < 10) this.y += Math.random() * 2 - 1;

      if (Math.abs(this.x - this.baseX) > 5) {
        let dx = this.x - this.baseX;
        this.x -= dx / 10;
      }
      if (Math.abs(this.y - this.baseY) > 5) {
        let dy = this.y - this.baseY;
        this.y -= dy / 10;
      }
    this.draw(ctx);
  }
}

class FloatingParticle extends Particle {
  constructor({ x, y, radius, color, velocity }) {
    super({x, y, radius, color});

    this.prevPosition = {
      x: this.x,
      y: this.y
    }
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    }
    this.acceleration = {
      x: 0,
      y: 0
    }
  }

  draw(ctx) {
    ctx.save()
    ctx.globalAlpha = 0.1
    ctx.beginPath()
    ctx.moveTo(this.prevPosition.x, this.prevPosition.y)
    ctx.lineTo(this.x, this.y)
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.baseSize
    ctx.stroke()
    ctx.closePath()
    ctx.restore()
    this.prevPosition.x = this.x
    this.prevPosition.y = this.y
  }

  update(vectors, canvas, ctx) {
    this.draw(ctx)
    const locationOnGrid = {
      x: Math.floor(this.x / 10),
      y: Math.floor(this.y / 10)
    }
    const index =
      locationOnGrid.x + locationOnGrid.y * Math.floor(canvas.height / 10)
    const force = vectors[index]

    if (force) {
      this.acceleration.x = force.x
      this.acceleration.y = force.y
      this.velocity.x += this.acceleration.x
      this.velocity.y += this.acceleration.y

      this.velocity.x = this.velocity.x < -10 ? -10 : this.velocity.x
      this.velocity.x = this.velocity.x > 10 ? 10 : this.velocity.x

      this.velocity.y = this.velocity.y < -10 ? -10 : this.velocity.y
      this.velocity.y = this.velocity.y > 10 ? 10 : this.velocity.y

      this.x += this.velocity.x
      this.y += this.velocity.y

      if (this.x > canvas.width) {
        this.x = 0
        this.prevPosition.x = this.x
        this.prevPosition.y = this.y
      }
      if (this.x < 0) {
        this.x = canvas.width
        this.prevPosition.x = this.x
        this.prevPosition.y = this.y
      }
      if (this.y > canvas.height) {
        this.y = 0
        this.prevPosition.x = this.x
        this.prevPosition.y = this.y
      }
      if (this.y < 0) {
        this.y = canvas.height
        this.prevPosition.x = this.x
        this.prevPosition.y = this.y
      }
    }
  }
}

let floatingParticles;
let particles;
let increment = 0.0085;
let size = 3;
let vectors;
let skip = 4;
let ih;
let iw;

function placeText(ctx) {
    const fontSize = 200;

    ctx.font = `${fontSize}px Arial`;
    ctx.fontWeight = "bold";
    ctx.textAlign = "center";
    ctx.baseline = "middle";
    ctx.fillText('❤', iw / 2, ih/2 + fontSize/3);
    const textCoordinates = ctx.getImageData(0, 0, iw, ih).data;

  particles = [];
  for (let y = 0; y < ih; y += skip) {
    for (let x = 0; x < iw; x += skip) {
      let opacityIndex = (x + y * iw) * 4 + 3;
      if (textCoordinates[opacityIndex] > 0) {
        particles.push(new Particle({x, y, ih, iw}));
      }
    }
  }
}

function init(canvas, ctx) {
  ih = canvas.height;
  iw = canvas.width;
  placeText(ctx)
  vectors = []
  floatingParticles = []
  for (let i = 0; i < 200; i++) {
    floatingParticles.push(
      new FloatingParticle({
        x: 0,
        y: ih * Math.random(),
        radius: size * Math.random(),
        color: 'red',
        velocity: {
          x: Math.random(),
          y: Math.random()
        }
      })
    )
  }
  ctx.fillStyle = 'rgba(255,255,255,1)'
  ctx.fillRect(0, 0, canvas.width, canvas.height)
}


const HeaderBG = () => {
    const styles = useStyles();

    const canvRef = useRef();

    useEffect(() => {
        if(!canvRef) return;
        const canvas = canvRef.current;
        const ctx = canvas.getContext('2d');

        if(!ctx) return;

        let frame;
        let time = 0
        function animate() {
            frame = requestAnimationFrame(animate);
            time += 1

            if(parseInt(time) % 3 !== 0) return;

            vectors = []
            let xOffset = 0
            for (let x = 0; x < canvas.width; x += 10) {
              let yOffset = 0
              for (let y = 0; y < canvas.height; y += 10) {
                const noiseValue = noise(xOffset, yOffset) * Math.PI * 8
                vectors.push({
                  x: Math.cos(noiseValue),
                  y: Math.sin(noiseValue)
                })
          
                yOffset += increment
              }
              xOffset += increment
            }
            floatingParticles.forEach((particle) => {
              particle.update(vectors, canvas, ctx)
            })

            for (let i = 0; i < particles.length; i++) {
              particles[i].update(ctx);
            }

            ctx.fillStyle = 'rgba(255,255,255,0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

        // const mouseMoveHandler = (e) => {
        //     mouse.x = e.clientX - 230;
        //     mouse.y = e.clientY;
        // }

        let timeout;

        const resizeHandler = () => {
          clearTimeout(timeout);
            timeout = setTimeout(() => {
              canvas.width = window.innerWidth - 457;
              canvas.height = 200;
              init(canvas, ctx);
            }, firstRender ? 0 : 200)
          firstRender = false;
        }
        resizeHandler();

        init(canvas, ctx);
        animate();

        window.addEventListener('resize', resizeHandler);
        // window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            clearTimeout(timeout);
            window.cancelAnimationFrame(frame);
            window.removeEventListener('resize', resizeHandler);
            // window.removeEventListener('mousemove', mouseMoveHandler);
        };
    });

    return <canvas ref={canvRef} className={styles.canvasBG} />
}

export default HeaderBG;