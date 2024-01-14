import React from "react";
import { Text } from "react-native";

type Prop = {
  textBody: string;
  color?: string;
  fontSize?: number;
  fontFamily?: string;
  textAlign?: "auto" | "left" | "right" | "center" | "justify";
  marginTop?: number;
  marginBottom?: number;
  marginLeft?: number;
  marginRight?: number;
  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingBottom?: number;
  paddingTop?: number;
  alignSelf?: "center" | "auto" | "baseline" | "flex-end" | "flex-start" | "stretch";
  fontStyle?: "italic";
};
// create a different heading component
const TextBox: React.FC<Prop> = props => {
  return (
    <Text
      style={{
        color: props.color || "#FFFFFF",
        fontSize: props.fontSize || 16,
        fontFamily: props.fontFamily || "Poppins-Regular",
        textAlign: props.textAlign,
        marginTop: props.marginTop || 0,
        marginBottom: props.marginBottom || 0,
        marginLeft: props.marginLeft || 0,
        marginRight: props.marginRight || 0,
        padding: props.padding || 0,
        paddingLeft: props.paddingLeft || 0,
        paddingRight: props.paddingRight || 0,
        paddingBottom: props.paddingBottom || 0,
        paddingTop: props.paddingTop || 0,
        alignSelf: props.alignSelf,
        fontStyle: props.fontStyle || "normal"
      }}>
      {props.textBody}
    </Text>
  );
};

export { TextBox };
