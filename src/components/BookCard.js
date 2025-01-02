import "../styles/components/BookCardStyles.css";
import BookNumber from "../atoms/BookNumber";

const BookCard = ({ imageSrc, selected, number, onClick }) => {
    function getOverlayClass(selectedState) {
        if (selectedState) {
            return "selectedOverlay";
        }
        return "overlay";
    }
    return (
    <div className="container" role="button" onClick={onClick}>
        <img src={imageSrc} alt="Your Image" className="image"></img>
        <div className={getOverlayClass(selected)}></div>
        <div className="circle">
            <BookNumber number={number}/>
        </div>
    </div>
    ); 
  }; 

export default BookCard;