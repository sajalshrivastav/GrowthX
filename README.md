# GrowthX SDE Frontend Assignment - Animation Replication

## Project Overview
This project is a high-performance replication of the GrowthX brand animation, built entirely with code (no Lottie). The animation features a synchronized entrance of a "Star" emblem, a "Pedestal" reveal, and a sophisticated glowing "bloom" effect.

## 🚀 Tech Stack
- **React 18** (via Vite)
- **Framer Motion** (Animation Engine)
- **SVG** (Resolution-independent graphics)
- **CSS3** (Responsive layout & Typography)

## 🛠️ Key Implementation Details

### 1. The Entrance (The Star)
The star enters from the top-left using a combination of:
- **Translation** (x,y movement)
- **Scaling** (starts small, grows to full size)
- **Rotation** (spins while in flight for a dynamic feel)
- **SVG Filters**: Implemented a layered `drop-shadow` filter to create a "bloom" effect that pulses infinitely after landing, giving the emblem a premium, light-emitting quality.

### 2. The Pedestal Reveal
To replicate the smooth fill effect without using video or Lottie:
- Used an **SVG `clipPath`** animated with Framer Motion.
- A `rect` inside the `clipPath` expands its width from 0 to 500, creating a perfect left-to-right wipe reveal of the white pedestal fill.
- Layered a sharp 2px stroke on top to maintain crisp edges throughout the transition.

### 3. Responsive Design
- **Fluid Typography**: Used CSS `clamp()` for the "ELEVATE" text to ensure it remains legible and aesthetically pleasing on screens ranging from mobile phones to 4K monitors.
- **SVG ViewBox Styling**: Configured with `overflow: visible` to ensure that glowing filters are never clipped, even at the edges of the SVG container.

## 📝 Performance & Constraints
- **Zero Assets**: No external images or Lottie JSON files are loaded. All SVG paths are contained within a local `Logo.jsx` file, resulting in near-instant load times.
- **No Dynamic Imports**: Following the assignment constraints, all logic and data are loaded statically to ensure the animation is ready as soon as the DOM is parsed.
- **Hardware Acceleration**: Transitions are mapped to CSS transforms, ensuring a smooth 60fps experience even on mobile devices.

## 🤖 AI Usage
AI tools (ChatGPT/Antigravity) were utilized in the following capacity:
- **SVG Path Refinement**: Assisting in converting visual concepts into precise SVG path coordinates.
- **Math for Animations**: Calculating the timing and delay offsets for the `clipPath` and `drop-shadow` keyframes.
- **Optimization**: Suggesting CSS `clamp()` for responsive font handling.

## 🏃 How to Run Locally

1. **Clone the repository**:
   ```bash
   git clone <your-repo-link>
   cd GrowthX
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```
