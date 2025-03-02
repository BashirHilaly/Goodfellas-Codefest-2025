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
  address: string;
  setAddress: (address: string) => void;
  zipcode: number;
  setZipcode: (zipcode: number) => void;
  timeframe: Timeframe;
  setTimeframe: (time: Timeframe) => void;
  image: string;
  setImage: (image: string) => void;
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
  address: "",
  setAddress: () => {},
  zipcode: 0,
  setZipcode: () => {},
  timeframe: "Within 1-2 Weeks",
  setTimeframe: () => [],
  image: "",
  setImage: () => {},
});

export const FormDataProvider = ({ children }: { children: ReactNode }) => {
  const [projectDescription, setProjectDescription] = useState("");
  const [roomType, setRoomType] = useState<RoomType>("Kitchen");
  const [roomWidth, setRoomWidth] = useState(0);
  const [roomLength, setRoomLength] = useState(0);
  const [usedMaterials, setUsedMaterials] = useState<string[]>([]);
  const [address, setAddress] = useState("");
  const [zipcode, setZipcode] = useState(0);
  const [timeframe, setTimeframe] = useState<Timeframe>("Within 1-2 Weeks");
  const [image, setImage] = useState("");
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
        address,
        setAddress,
        zipcode,
        setZipcode,
        timeframe,
        setTimeframe,
        image,
        setImage,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
