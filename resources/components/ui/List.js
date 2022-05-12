import { View } from "react-native";
import React from "react";
import Item from "./Item";
import { STYLES } from "../../constants/STYLES";

const List = ({ data, withTitle }) => {
  return (
    <View style={[STYLES.row, { flexWrap: "wrap" }]}>
      {data.map((item, i) => (
        <Item
          key={i}
          imageSrc={item.image}
          index={i}
          title={withTitle ? item.title : ""}
        />
      ))}
    </View>
  );
};

export default List;
