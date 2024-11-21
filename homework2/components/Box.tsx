import { View } from 'react-native';

interface BoxProps
{
  color: string,
  size: number
}

export const Box = ({color, size}: BoxProps) => (
  <View style={{width: size, height: size, backgroundColor: color}}/>
);