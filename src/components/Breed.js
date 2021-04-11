import { useState } from 'react';

import Modal from './Modal';
import no_img from '../img/no_img.png';

const Breed = ({breed}) => {

    const {id, name, description, image} = breed;

    const [open, setOpen] = useState(false);
    const [modalType, setmodalType] = useState('details');

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
        <div key={id} className="breed-card">
            <img src={(image && Object.keys(image).length > 0 ) ? image.url : no_img} alt={name} title="Ver galería"  className="breed-card__img"
                onClick={() => {
                    setmodalType('images')
                    handleOpen();
                }}
            />
            <div className="breed-card__content">
                <div className="breed-card__content-txt">
                    <h3>{name}</h3>
                    <p>{description.slice(0, 130)}...</p>
                </div>
                <button   
                    className="breed-card__content-btn"               
                    onClick={() => {
                        setmodalType('details')
                        handleOpen();
                    }}>Ver detalles</button>
            </div>
        </div>

        {
        open ?
            <Modal
                activeBreed={breed}
                handleClose={handleClose}
                modalType={modalType}
            />
        :null
        }
        </>
    )
    
}


export default Breed;