import React from "react";
import { View } from "react-native";

interface ProgressBarProps {
  currentStep: number; // value between 0 and 6
}

const ProgressBar: React.FC<ProgressBarProps> = ({ currentStep }) => {
  const totalSteps = 6;

  return (
    // Use absolute positioning to display at the top. Adjust these styles as needed.
    <View className="top-0 left-0 right-0 flex-row items-center justify-center p-4 z-10">
      {Array.from({ length: totalSteps }, (_, index) => {
        const isActive = index < currentStep;
        return (
          <View
            key={index}
            className={`flex-1 h-2 mx-1 rounded-full ${isActive ? "bg-blue-500" : "bg-gray-300"}`}
          />
        );
      })}
    </View>
  );
};

export default ProgressBar;
