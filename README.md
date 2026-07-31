# 🎨 Creative South — "Pure Imagination" (2026)

A high-performance, visually stunning retro 1970s conference landing page for **Creative South: Pure Imagination** (March 30 - April 1, 2026 | Columbus, GA). Built with modern web technologies including **React 19**, **Vite**, **Tailwind CSS v4**, **Framer Motion**, **GSAP**, **Lucide Icons**, and custom **Web Audio API** sound synthesis.

---

## 🚀 Tech Stack & Why We Used Them

### 1. **React 19**
- **Why we used it:** Provides a scalable component-based architecture ([App.jsx](file:///run/media/md-naimul-hasan-bappy/Work/CODE/Ai%20website/tickets/src/App.jsx)) to seamlessly manage complex interactive UI states, including modal popups ([TicketModal.jsx](file:///run/media/md-naimul-hasan-bappy/Work/CODE/Ai%20website/tickets/src/components/TicketModal.jsx)), side drawers ([JamDrawer.jsx](file:///run/media/md-naimul-hasan-bappy/Work/CODE/Ai%20website/tickets/src/components/JamDrawer.jsx)), talk detail popups ([ScheduleModal.jsx](file:///run/media/md-naimul-hasan-bappy/Work/CODE/Ai%20website/tickets/src/components/ScheduleModal.jsx)), and interactive laboratory controls.

### 2. **Vite**
- **Why we used it:** Ultra-fast local development server with instant Hot Module Replacement (HMR) and optimized production bundle compilation ([vite.config.js](file:///run/media/md-naimul-hasan-bappy/Work/CODE/Ai%20website/tickets/vite.config.js)).

### 3. **Tailwind CSS v4**
- **Why we used it:** Utility-first styling for custom 70s color palettes (`#6C5CE7` purple, `#E84393` pink, `#FF7640` orange, `#FFE600` yellow, `#18181b` dark background), backdrop-blur overlays, responsive grids, and typography utilities ([src/index.css](file:///run/media/md-naimul-hasan-bappy/Work/CODE/Ai%20website/tickets/src/index.css)).

### 4. **Framer Motion**
- **Why we used it:** Powers smooth spring-physics animations, floating character parallax, modal popup scale transitions, slide-out side drawers, and scroll-triggered animations.

### 5. **GSAP (GreenSock Animation Platform)**
- **Why we used it:** High-performance animation engine for complex keyframe sequences, SVG liquid flow paths, pressure gauge needle bounces, valve rotations, and conveyor belt jar movement in [SpeakersSection.jsx](file:///run/media/md-naimul-hasan-bappy/Work/CODE/Ai%20website/tickets/src/components/SpeakersSection.jsx).

### 6. **Web Audio API**
- **Why we used it:** Built a custom audio engine ([sound.js](file:///run/media/md-naimul-hasan-bappy/Work/CODE/Ai%20website/tickets/src/utils/sound.js)) that synthesizes real-time 1970s retro audio effects (pops, clicks, steam valve hiss, and celebration fanfare notes) directly in the browser with 0 external audio files.

### 7. **Canvas Confetti (`canvas-confetti`)**
- **Why we used it:** Triggers multi-colored celebratory confetti particle bursts when a user completes the ticket checkout flow in [TicketModal.jsx](file:///run/media/md-naimul-hasan-bappy/Work/CODE/Ai%20website/tickets/src/components/TicketModal.jsx).

### 8. **Lucide Icons (`lucide-react`)**
- **Why we used it:** Clean, lightweight vector iconography for navigation controls, schedule clocks, room locations, ticket passes, shopping bag, and sound mute toggles.

### 9. **Google Fonts (`Shrikhand`, `Fredoka`, `Outfit`, `Righteous`)**
- **Why we used it:** Loaded via [index.html](file:///run/media/md-naimul-hasan-bappy/Work/CODE/Ai%20website/tickets/index.html) to recreate authentic 1970s vintage display typography and 3D layered text shadow effects for headings like *"Pure Imagination"* and *"Tickets Available Now"*.

---

## ✨ Features & Component Breakdown

- **Top Announcement Marquee (`Ticker.jsx`)**: Continuous infinite scrolling ticker with star sparkle icons and ticket alerts.
- **Navbar (`Navbar.jsx`)**: Retro Creative South logo with cloud graphic, navigation links, and "Register" & "The Jam" CTAs.
- **Hero Section (`HeroSection.jsx`)**: 70s display heading with multi-layered 3D text-shadows, flowing SVG rainbow stream, interactive quote player button, mascot with blue hair and rainbow gauge, smiling daisy flower, and floating moon/cloud.
- **Speakers & Workshops Laboratory (`SpeakersSection.jsx`)**: Interactive SVG laboratory pipe system with pressure gauges, clickable steam valves, bubbling test tubes, and a moving conveyor belt with 5 colorful glass jars.
- **Wavy Schedule Timelines (`ScheduleSection.jsx`)**: Wavy SVG transitions for **Thursday 30** (Purple), **Friday 31** (Pink), and **Saturday 01** (Orange) with morning and afternoon talk slots, plus day-specific retro mascots.
- **Tickets Section & Modal (`TicketsSection.jsx`, `TicketModal.jsx`)**: Interactive pass selector (Early Bird $299, GA $349, VIP $499), quantity adjustment, promo code input (`PURE`), live price calculation, and confetti blast.
- **Side Event Drawer (`JamDrawer.jsx`)**: Slide-out drawer showcasing synthwave DJ sets, food trucks, and after party details.
- **Merch Shop Modal (`ShopModal.jsx`)**: Interactive preview overlay for conference t-shirts, pins, posters, and stickers.
- **Audio Sound Engine & Footer (`Footer.jsx`, `sound.js`)**: Real-time Web Audio sound synthesis with a dedicated mute/unmute toggle.

---

## 🛠️ Installation & Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NH-Bappy/Tickets.git
   cd Tickets
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` in your browser.

4. **Build for production:**
   ```bash
   npm run build
   ```

---

## 📜 License
© 2026 Creative South. Built with ❤️ for creators.
