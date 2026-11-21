import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  SectionList,
  Image,
  StyleSheet,
  Alert,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";

const datasource = [
  {
    title: "Real Madrid",
    color: "#C9A227",
    backgroundColor: "#FFF8E1",
    data: [
      { key: "Jude Bellingham", position: "Midfielder", number: 5, image: "https://images.fotmob.com/image_resources/playerimages/1077894.png" },
      { key: "Arda Güler", position: "Midfielder", number: 15, image: "https://images.fotmob.com/image_resources/playerimages/1253890.png" },
    ],
  },
  {
    title: "Manchester City",
    color: "#4A90C8",
    backgroundColor: "#E3F1FB",
    data: [
      { key: "Erling Haaland", position: "Forward", number: 9, image: "https://images.fotmob.com/image_resources/playerimages/737066.png" },
      { key: "Rayan Cherki", position: "Midfielder", number: 10, image: "https://images.fotmob.com/image_resources/playerimages/1104053.png" },
    ],
  },
  {
    title: "Paris Saint-Germain",
    color: "#004170",
    backgroundColor: "#DDE6F0",
    data: [
      { key: "Ousmane Dembélé", position: "Forward", number: 10, image: "https://images.fotmob.com/image_resources/playerimages/692984.png" },
      { key: "Désiré Doué", position: "Forward", number: 14, image: "https://images.fotmob.com/image_resources/playerimages/1339208.png" },
    ],
  },
  {
    title: "Bayern Munich",
    color: "#DC052D",
    backgroundColor: "#FDE2E6",
    data: [
      { key: "Harry Kane", position: "Forward", number: 9, image: "https://images.fotmob.com/image_resources/playerimages/194165.png" },
      { key: "Michael Olise", position: "Forward", number: 17, image: "https://images.fotmob.com/image_resources/playerimages/1029063.png" },
    ],
  },
];

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F4F6F8" },
  listContent: { paddingTop: 50, paddingHorizontal: 12, paddingBottom: 20 },
  banner: {
    backgroundColor: "#1B5E20",
    borderRadius: 14,
    paddingVertical: 18,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  titleStyle: { fontSize: 24, fontWeight: "bold", color: "white", marginLeft: 10 },
  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 14,
    marginBottom: 10,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
  },
  headerText: { fontSize: 20, fontWeight: "bold", marginLeft: 8 },
  itemStyle: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 2,
    borderRadius: 14,
    padding: 12,
    marginBottom: 10,
  },
  textBox: { flex: 1, marginLeft: 8 },
  nameText: { fontSize: 19, fontWeight: "bold", color: "#212121" },
  positionText: { fontSize: 14, color: "#555555", marginTop: 4 },
  numberBadge: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },
  numberText: { fontSize: 16, fontWeight: "bold", color: "white" },
  imageStyle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    borderWidth: 2,
    backgroundColor: "white",
  },
});

const renderItem = ({ item, section }) => (
    <TouchableOpacity
        style={[
          styles.itemStyle,
          { backgroundColor: section.backgroundColor, borderColor: section.color },
        ]}
        onPress={() =>
            Alert.alert(item.key, `${section.title}\n${item.position} • #${item.number}`)
        }
    >
      <View style={styles.textBox}>
        <Text style={styles.nameText}>{item.key}</Text>
        <Text style={styles.positionText}>{item.position}</Text>
        <View style={[styles.numberBadge, { backgroundColor: section.color }]}>
          <Text style={styles.numberText}>{item.number}</Text>
        </View>
      </View>
      <Image
          source={{ uri: item.image }}
          style={[styles.imageStyle, { borderColor: section.color }]}
      />
    </TouchableOpacity>
);

const App = () => (
    <View style={styles.screen}>
      <SectionList
          contentContainerStyle={styles.listContent}
          sections={datasource}
          renderItem={renderItem}
          keyExtractor={(item) => item.key}
          stickySectionHeadersEnabled={false}
          ListHeaderComponent={
            <View style={styles.banner}>
              <FontAwesome6 name="futbol" size={26} color="white" />
              <Text style={styles.titleStyle}>Football Players</Text>
            </View>
          }
          renderSectionHeader={({ section }) => (
              <View
                  style={[
                    styles.headerStyle,
                    { backgroundColor: section.backgroundColor, borderColor: section.color },
                  ]}
              >
                <FontAwesome6 name="shield-halved" size={18} color={section.color} />
                <Text style={[styles.headerText, { color: section.color }]}>
                  {section.title}
                </Text>
              </View>
          )}
      />
    </View>
);

export default App;