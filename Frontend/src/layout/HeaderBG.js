import React from 'react';
import { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";

import {noise} from '@chriscourses/perlin-noise'

const useStyles = makeStyles({
    canvasBG: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 200,
        zIndex: -1
    }
});


const mouse = {
    x: undefined,
    y: undefined
}

class Particle {
  constructor({ x, y, radius, color, velocity }) {
    this.x = x
    this.y = y
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
    this.radius = radius
    this.color = color
  }

  draw(ctx) {
    //   console.log('odległość: ' + + Math.sqrt(Math.pow(mouse.x - this.x, 2) + Math.pow(mouse.y - this.y, 2)));
    // if(Math.sqrt(Math.pow(mouse.x - this.x, 2) + Math.pow(mouse.y - this.y, 2)) < 200) {
    //     this.color = this.color !== 'red' && `hsl(${200}, 50%, 50%)`;
    // } else {
    //     this.color = 'red'
    // }
    ctx.save()
    ctx.globalAlpha = 0.1
    ctx.beginPath()
    ctx.moveTo(this.prevPosition.x, this.prevPosition.y)
    ctx.lineTo(this.x, this.y)
    ctx.strokeStyle = this.color
    ctx.lineWidth = this.radius
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

let particles
let increment = 0.0085
let size = 3
let vectors

function init(canvas, ctx) {
  vectors = []
  particles = []
  for (let i = 0; i < 200; i++) {
    particles.push(
      new Particle({
        x: 0,
        y: canvas.height * Math.random(),
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
            particles.forEach((particle) => {
              particle.update(vectors, canvas, ctx)
            })
            console.log(mouse.y);

            ctx.fillStyle = 'rgba(255,255,255,0.2)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);
          }

        const mouseMoveHandler = (e) => {
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        }

        const resizeHandler = () => {
            canvas.width = window.innerWidth;
            canvas.height = 200;
        }
        resizeHandler();

        init(canvas, ctx);
        animate();

        window.addEventListener('resize', resizeHandler);
        window.addEventListener('mousemove', mouseMoveHandler);

        return () => {
            window.cancelAnimationFrame(frame);
            window.removeEventListener('resize', resizeHandler);
            window.removeEventListener('mousemove', mouseMoveHandler);
        };
    });

    return <canvas ref={canvRef} className={styles.canvasBG} />
}

export default HeaderBG;