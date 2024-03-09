import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as PaperProvider } from "react-native-paper";
import DownloadForm from "./DownloadForm";

const App = () => {
  const handleDownload = (url) => {
    // LÃ³gica para descargar el video
    console.log("Descargando video desde:", url);
  };

  return (
    <SafeAreaProvider>
      <PaperProvider>
        <DownloadForm onDownload={handleDownload} />
      </PaperProvider>
    </SafeAreaProvider>
  );
};

export default App;