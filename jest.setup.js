// jest.setup.js

// Mock Next.js Image component for Jest
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    // Render regular <img>, safe for Jest + JS file (no TS errors)
    return <img {...props} />;
  },
}));

// Optional: Mock framer-motion to prevent animation warnings
jest.mock("framer-motion", () => ({
  __esModule: true,
  motion: {
    div: (props) => <div {...props} />,
  },
}));
