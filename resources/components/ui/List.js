import { View } from "react-native";
import React from "react";
import Item from "./Item";
import { STYLES } from "../../constants/STYLES";

const List = ({ data, withTitle, logoImage, singleScreen }) => {
  console.log("list", singleScreen);
  return (
    <View style={[STYLES.row, { flexWrap: "wrap" }]}>
      {data.map((item, i) => (
        <Item
          key={i}
          imageSrc={logoImage ? item.logo : item.image}
          index={i}
          title={item.title}
          showLogoImage={logoImage}
          withTitle={withTitle}
          singleScreen={singleScreen}
        />
      ))}
    </View>
  );
};

export default List;
