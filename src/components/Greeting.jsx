import React, { useEffect, useState } from "react";

export default function Greeting() {
  const [greeting, setGreeting] = useState("");

  const getTimeBasedGreeting = () => {
    const hour = new Date().getHours();
    if (hour >= 5 && hour < 12) {
      return "Good Morning!";
    } else if (hour >= 12 && hour < 17) {
      return "Good Afternoon!";
    } else if (hour >= 17 && hour < 22) {
      return "Good Evening!";
    } else {
      return "Sweet Dreams!";
    }
  };

  useEffect(() => {
    setGreeting(getTimeBasedGreeting());
  }, []);

  return (
    <div className="container relative">
      <h1 className="text-md font-medium text-indigo-500 text-right top-10 absolute left-6 greeting-selection">
        {greeting}
      </h1>
    </div>
  );
}
