import React from "react";

const Chip = ({ text }: { text: string }) => (
  <div className="bg-primary py-1 px-2 text-md rounded-full font-medium">
    {text}
  </div>
);

export default Chip;
