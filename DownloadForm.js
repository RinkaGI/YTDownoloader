import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

const DownloadForm = ({ onDownload }) => {
  const [url, setUrl] = useState("");

  const handleDownload = () => {
    // LÃ³gica para descargar el video
    onDownload(url);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="URL de YouTube"
        value={url}
        onChangeText={(text) => setUrl(text)}
        style={styles.input}
      />
      <Button title="Descargar" onPress={handleDownload} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    marginBottom: 20,
  },
});

export default DownloadForm;