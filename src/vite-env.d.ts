/// <reference types="vite/client" />

// Vite imagetools declarations
declare module '*?format=webp' {
  const src: string;
  export default src;
}

declare module '*?format=webp&w=*' {
  const src: string;
  export default src;
}

declare module '*?optimize' {
  const src: string;
  export default src;
}

declare module '*&format=webp' {
  const src: string;
  export default src;
}