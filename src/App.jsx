import { useState } from 'react'
import './App.css'
import { LOGO_DATA } from './Logo'
import { motion } from 'framer-motion'

function App() {

  return (
    <>
      <motion.div className='main-container'
        initial={{ y: 0, opacity: 1 }}
        animate={{
          y: -80,
          opacity: [1, 1, 0]   // stay visible then fade
        }}
        transition={{
          y: {
            delay: 1.2,
            duration: 0.6,
            ease: "easeOut"
          },
          opacity: {
            times: [0, 0.75, 1],   // hold most of the time
            duration: 4.5,        // total timeline
            ease: "easeOut"
          }
        }}>
        <motion.div className="main-container-SVG">
          <svg viewBox={LOGO_DATA.viewBox} width="500" height="500">
            <motion.path d={LOGO_DATA.paths.star}
              fill="white"
              animate={{
                x: [-80, 0],
                y: [-80, 0],
                scale: [0.2, 0.5, 0.9],
                rotate: [0, 180],  // spins while moving
                opacity: [0, 1],
                filter: [
                  "drop-shadow(0 0 2px rgba(255,255,255,0.4)) drop-shadow(0 0 10px rgba(255,255,255,0.4))",
                  "drop-shadow(0 0 8px rgba(255,255,255,0.5)) drop-shadow(0 0 30px rgba(255,255,255,0.6))",
                  "drop-shadow(0 0 2px rgba(255,255,255,0.4)) drop-shadow(0 0 10px rgba(255,255,255,0.4))"
                ]
              }}
              initial={{
                x: -100,
                y: -100,
                scale: 0.3,
                rotate: 0,
                opacity: 0,
                filter: "drop-shadow(0 0 0px rgba(255,255,255,0))"
              }}
              transition={{
                duration: 1.2,
                ease: "easeOut"
              }}
            />
            <defs>
              <clipPath id="pedestal-clip">
                <motion.rect
                  x="0"
                  y="0"
                  width="0"
                  height="500"
                  initial={{ width: 0 }}
                  animate={{ width: 500 }}
                  transition={{ duration: 2 }}
                />
              </clipPath>
            </defs>

            {/* First Need to Show the Black Pedestal */}
            <path
              d={LOGO_DATA.paths.pedestal}
              fill="black"
            />

            {/* 🤍 White Fill That Animates Left → Right */}
            <path
              d={LOGO_DATA.paths.pedestal}
              fill="white"
              clipPath="url(#pedestal-clip)"
            />

            {/* 🤍 White Border */}
            <path
              d={LOGO_DATA.paths.pedestal}
              fill="none"
              stroke="white"
              strokeWidth="2"
            />
            {/* <motion.path
            d={LOGO_DATA.paths.pedestal}
            variants={pedestalVariants}
            fill="white"
          /> */}
          </svg>
        </motion.div>
        <motion.div
          className="main-conatiner-text"
          initial={{ opacity: 0, y: 20 }}   // small lift effect
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,        // starts when container moves
            duration: 0.8,
            ease: "easeOut"
          }}
        >
          <h1> ELEVATE</h1>
        </motion.div>
      </motion.div>
    </>
  )
}

export default App
