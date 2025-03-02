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
  photoUri: string | null;
  setPhotoUri: (uri: string | null) => void;
  photoBase64: string | null;
  setPhotoBase64: (base64: string | null) => void;
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
  photoUri: null,
  setPhotoUri: () => {},
  photoBase64: null,
  setPhotoBase64: () => {},
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
  const [photoUri, setPhotoUri] = useState<string | null>(null);
  const [photoBase64, setPhotoBase64] = useState<string | null>(null);

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
        photoUri,
        setPhotoUri,
        photoBase64,
        setPhotoBase64,
      }}
    >
      {children}
    </FormDataContext.Provider>
  );
};
