import React from 'react'
import './Anjana.css';
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

const Anjana = ({deleteItems, items}) => {
    const imgName = ['Anj1.JPG', 'Anj2.PNG', 'Anj3.JPG', 'Anj4.PNG', 'Anj5.JPG', 'Anj6.JPG', 'Anj7.JPG', 'frnd.jpg'];
    const images = imgName.map(image => {
        return <img key={image} src={require(`./images/${image}`)} className="img-style" />
    });
    
    const listItem = (<div className="img-container">
    <p>Hello Anjusee</p>
            {images}
        </div>)

    return (
        <div>
        <FlipMove duration={800} easing="ease-in-out">
        {listItem}
        </FlipMove>
        </div>
    )
}

export default Anjana
