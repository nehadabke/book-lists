import "../styles/atoms/BookNumberStyles.css";

const BookNumber = ({number}) => {
    return <div className="bookNumberButton">
        <p className="bookNumber">{number}</p>
        </div>;
  }  

export default BookNumber;