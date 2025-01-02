import "../styles/components/BookGridStyles.css";
import BookCard from "../components/BookCard";
import 'rsuite/dist/rsuite.min.css'; 


const BookGrid = ({ cards, selectedImages, setSelectedImages }) => {  
    // Toggle selection state
    const toggleSelection = (id) => {
      setSelectedImages((prevState) => ({
        ...prevState,
        [id]: !prevState[id],
      }));
    };
    

    return ( 
      <div className="card-grid">
        {cards.map((card, index) => (
            <BookCard selected = {selectedImages[card.number]} key={index} imageSrc={card.imageSrc} number={card.number} onClick={() => toggleSelection(card.number)}/>
        ))}
      </div>
      ); 
  }  

export default BookGrid;