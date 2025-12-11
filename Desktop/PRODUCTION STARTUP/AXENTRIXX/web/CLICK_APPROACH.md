// Simple script to add close button functionality to overlays
// Run this to update the about page with click-to-toggle and close button

const X = require('lucide-react').X;

// This shows the approach:
// 1. Change badges from onMouseEnter/Leave to onClick
// 2. Add close button (X icon) to each overlay
// 3. Close button sets hoveredFounder to null
