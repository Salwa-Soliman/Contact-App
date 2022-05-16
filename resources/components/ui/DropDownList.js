import React from "react";
import { Select, View, CheckIcon } from "native-base";
const DropDownList = ({ data, placeholder, selectedItem, setSelectedItem }) => {
  return (
    <View mb={3}>
      <Select
        selectedValue={selectedItem}
        minWidth="200"
        accessibilityLabel={placeholder}
        placeholder={placeholder}
        _selectedItem={{
          bg: "teal.600",
          endIcon: <CheckIcon size="5" />,
        }}
        onValueChange={(itemValue) => setSelectedItem(itemValue)}
      >
        {data.map((item, i) => (
          <Select.Item key={i} label={item} value={item} />
        ))}
      </Select>
    </View>
  );
};

export default DropDownList;
