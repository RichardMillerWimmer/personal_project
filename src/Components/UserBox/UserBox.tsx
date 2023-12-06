import Button from '../Button/Button';
import { Product } from '../../redux/productsReducer';

function UserBox(props: Product) {
    const { image_one, name, description } = props
    return (
        <div className="userBox">
            <img src={image_one} alt={name} />
            <div className='textBox'>
                <h2>{name}</h2>
                <p>{description}</p>
                {/* <Button onClick={downloadProduct}>download</Button> */}
                <a href={image_one} download={name} target='_blank' rel="noreferrer"><Button>download</Button></a>
            </div>
        </div >
    );
};

export default UserBox;