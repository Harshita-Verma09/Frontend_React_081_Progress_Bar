# Manual Progress Bar 

A simple manual progress bar built with React, TypeScript, and Vite. The progress bar color changes based on the current progress value.

## Features

- Manual increment/decrement of progress (0–100)
- Progress bar color changes according to progress:
  - Red (0–30%)
  - Hotpink (31–60%)
  - Orange/Yellow (61–80%)
  - Green (81–100%)
- Responsive and animated UI

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```sh
npm install
```

### Running Locally

```sh
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Building for Production

```sh
npm run build
```

### Linting

```sh
npm run lint
```

## Project Structure

```
src/
  App.tsx           # Main app component
  main.tsx          # Entry point
  component/
    ProgressBar.tsx # Progress bar component
    Progress.css    # Progress bar styles
```

## Customization

You can adjust the progress increments or colors in [`ProgressBar`](src/component/ProgressBar.tsx).
