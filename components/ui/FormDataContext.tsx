// FormDataContext.tsx
import React, { createContext, useState, ReactNode } from "react";

export type RoomType =
  | "Kitchen"
  | "Bathroom"
  | "Bedroom"
  | "Livingroom"
  | "Garage"
  | "Basement"
  | "Attic"
  | "Hallway"
  | "Dining room"
  | "Closet"
  | "Laundry Room"
  | "Guest room"
  | "Home Office";

export type Timeframe =
  | "Within 1-2 Weeks"
  | "1 Month"
  | "2 Months"
  | "3 Months"
  | "6 Months"
  | "1 Year";

type FormDataContextType = {
  projectDescription: string;
  setProjectDescription: (desc: string) => void;
  roomType: RoomType;
  setRoomType: (room: RoomType) => void;
  roomWidth: number;
  setRoomWidth: (width: number) => void;
  roomLength: number;
  setRoomLength: (length: number) => void;
  usedMaterials: string[];
  setUsedMaterials: (materials: string[]) => void;
  timeframe: Timeframe;
  setTimeframe: (time: Timeframe) => void;
};

export const FormDataContext = createContext<FormDataContextType>({
  projectDescription: "",
  setProjectDescription: () => {},
  roomType: "Kitchen",
  setRoomType: () => {},
  roomWidth: 0,
  setRoomWidth: () => {},
  roomLength: 0,
  setRoomLength: () => {},
  usedMaterials: [],
  setUsedMaterials: () => {},
  timeframe: "Within 1-2 Weeks",
  setTimeframe: () => [],
});

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [projectDescription, setProjectDescription] = useState("");
  const [roomType, setRoomType] = useState<RoomType>("Kitchen");
  const [roomWidth, setRoomWidth] = useState(0);
  const [roomLength, setRoomLength] = useState(0);
  const [usedMaterials, setUsedMaterials] = useState<string[]>([]);
  const [timeframe, setTimeframe] =
    useState<Timeframe>("Within 1-2 Weeks");

  return (
    <FormDataContext.Provider
      value={{
        projectDescription,
        setProjectDescription,
        roomType,
        setRoomType,
        roomWidth,
        setRoomWidth,
        roomLength,
        setRoomLength,
        usedMaterials,
        setUsedMaterials,
        timeframe,
        setTimeframe,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
