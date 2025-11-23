// Use CommonJS because Jest setup cannot use ES imports
require("@testing-library/jest-dom");
const React = require("react");

// Mock Next.js Image
jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    return React.createElement("img", props);
  },
}));
