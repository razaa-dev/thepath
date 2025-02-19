import { useState, useEffect } from "react";

// Define the type for mouse position
interface MousePosition {
  x: number | null;
  y: number | null;
}

const useMousePosition = (): MousePosition => {
  // Initialize the state with null values for x and y
  const [mousePosition, setMousePosition] = useState<MousePosition>({ x: null, y: null });

  // Define the update function with proper event typing
  const updateMousePosition = (e: MouseEvent): void => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    // Add event listener for mousemove
    window.addEventListener("mousemove", updateMousePosition);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []);

  return mousePosition;
};

export default useMousePosition;
