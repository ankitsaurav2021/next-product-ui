import '@testing-library/jest-dom';

// Mock Next.js <Image />
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props: any) => {
    // Return basic <img> for testing
    // No Next.js optimizations
    return <img {...props} />;
  },
}));