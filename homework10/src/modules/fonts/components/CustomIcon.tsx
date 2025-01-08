import { createIconSet } from "@expo/vector-icons";
import { useLoadFonts } from "../hooks/useLoadFonts";

interface CustomIconProps {
  name: string;
  size?: number;
  color?: string;
}

export default function CustomIcon({
  name,
  size = 24,
  color = "#000",
}: CustomIconProps) {
  const { iconMap } = useLoadFonts();

  if (!iconMap) return null;

  const IconSet = createIconSet(iconMap, "Typicons", "typicons.ttf");

  return <IconSet name={name} size={size} color={color} />;
}
