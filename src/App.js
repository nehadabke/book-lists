import BookGrid from "./components/BookGrid";
import Header from "./atoms/Header";
import { nytCards } from "./consts/NytBookList";
import ProgressBar from "./components/ProgressBar";
import React, { useState, useEffect, useMemo } from 'react';
import "./styles.css";
const App = () => {
      // State to manage selected images
      const [selectedImages, setSelectedImages] = useState(() => {
        const storedImages = localStorage.getItem('selectedImages');
        return storedImages ? JSON.parse(storedImages) : {};
      });
    
      // This useEffect will run whenever selectedImages changes
      useEffect(() => {
        localStorage.setItem('selectedImages', JSON.stringify(selectedImages));
      }, [selectedImages]);

      const completedTasksCount = useMemo(() => {
        return Object.values(selectedImages).filter(Boolean).length;
      }, [selectedImages]);
    
  return (
      <div>
          <Header title={"THE 100 BEST BOOKS OF THE 21ST CENTURY"} />
          <p className="subtitle">(according to the New York Times)</p>
          <ProgressBar value={completedTasksCount} />
          <BookGrid cards={nytCards} selectedImages={selectedImages} setSelectedImages={setSelectedImages} />
      </div>
  );
};

export default App;
