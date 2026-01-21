window.function = function (color1, color2) {
  // Extract values, default to black and white if missing
  const c1 = color1.value || "#051937";
  const c2 = color2.value || "#A8EB12";

  // Create an SVG string for the gradient
  // Using a 100x100 square with a diagonal gradient
  const svg = `
<svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${c1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${c2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="100" height="100" fill="url(#grad)" />
</svg>`;

  // Encode the SVG to base64
  // We use encodeURIComponent to ensure special characters are handled, 
  // but btoa requires binary strings.
  // For simple hex colors and standard SVG tags, btoa usually works on the string directly.
  // However, to be safe with utf8 characters if they ever appear (unlikely in hex), 
  // we can just use the utf8 to base64 pattern or just stick to simple btoa for this specific use case.
  
  const base64 = btoa(svg);
  
  // Return the Data URI
  return `data:image/svg+xml;base64,${base64}`;
};
