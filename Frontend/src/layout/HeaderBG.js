import React from 'react';
import { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core";


const useStyles = makeStyles({
    canvasBG: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: 200,
        zIndex: -1
    }
})

const HeaderBG = () => {
    const styles = useStyles();

    const canvRef = useRef();

    useEffect(() => {
        if(!canvRef) return;
        const canvas = canvRef.current;
        const ctx = canvas.getContext('2d');

        if(!ctx) return;


        const resizeHandler = () => {
            canvas.width = window.innerWidth;
        }

        window.addEventListener('resize', resizeHandler);

        return () => window.removeEventListener('resize', resizeHandler);
    });

    return <canvas ref={canvRef} className={styles.canvasBG} />
}

export default HeaderBG;