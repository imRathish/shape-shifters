# Drag-and-Drop Shape Transformation Application

An interactive, single-page React application with **drag-and-drop** functionality where shapes transform based on the quadrant they are dropped into.

## 📂 Project Overview
The application layout is divided into four quadrants:
- **Top Left:** Shapes remain circles.
- **Top Right:** Shapes transform into hexagons.
- **Bottom Left:** Shapes transform into squares.
- **Bottom Right:** Shapes transform into triangles.

When the app loads, **five draggable circles** are displayed in the **Top Left quadrant**. Shapes can be dragged across quadrants, instantly transforming based on where they are dropped.

---

## 🛠️ Tech Stack
- ReactJS
- react-dnd for drag-and-drop support
- HTML5 Backend (via `react-dnd-html5-backend`)
- CSS Grid for responsive quadrant layout

---

## 📦 Installation

```bash
git clone https://github.com/imRathish/shape-shifters.git
cd shape-shifters
npm install
npm run dev
