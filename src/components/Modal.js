import React, { useEffect, useState } from 'react';
import SkillsBar from './SkillsBar';

import Spinner from './spinner/Spinner';
import { getBreedImages } from '../services/getBreedImages';
import no_img from '../img/no_img.png';

const Modal = ({activeBreed, handleClose, modalType}) => {

    const [loading, setLoading] = useState(false);
    const [images, setImages] = useState([]);

    const {name, temperament, origin, description, life_span, alt_names, affection_level, child_friendly, dog_friendly, energy_level, health_issues, intelligence, shedding_level, social_needs, stranger_friendly, image} = activeBreed;

    const skills = {affection_level, energy_level, health_issues, intelligence, shedding_level, social_needs, child_friendly, dog_friendly, stranger_friendly};


    useEffect(() => {  
        setLoading(true)
        getBreedImages(activeBreed.id)
            .then(images => {
                setImages(images)   
                setLoading(false)
            })
    }, [activeBreed]);


    // TODO: Cerrar el modal al hacer click fuera
    return (
        <div className="modal">
            <div className="modal__content">
                <div className="modal__content__inner" style={{overflowY: modalType === 'images' ? 'hidden': 'auto'}}>
                    <button className="closeButton" type="button" aria-label="close" title="Cerrar" onClick={handleClose}>
                        <span className="closeButton__label">
                            <svg className="closeButton__label-svg" focusable="false" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
                            </svg>
                        </span>
                    </button>

                    <h3 className="modalTitle">{name} {alt_names ? <span style={{fontSize:'2.1rem'}}>{`(${alt_names})`}</span> : ''}</h3>
                    <div className="modalContent">
                    { modalType === 'images' ?
                        <div className="gallery">
                            {loading 
                                ? <Spinner/>
                                :(
                                    images.map( (img) => 
                                        <div className="gallery__item" key={img}>
                                            <img src={img} alt={name}/>
                                        </div>
                                    )
                                )
                            }
                        </div>
                    : (<>
                        <div className="modalContent__main">
                            <img src={(image && Object.keys(image).length > 0 ) ? image.url : no_img} alt={name} className="modalContent__main-picture"/>
                            <div className="modalContent__main-text">
                                <p>{description}</p>
                                <div>
                                    <h3>Temperamento</h3>
                                    <div className="chip-container">
                                    {
                                        temperament.split(',').map( (t) => <span key={t}className="chip">{t}</span>)
                                    }
                                    </div>
                                </div>
                            </div>
                        </div>

                        <h3 className="modalTitlesInline">País de origen:</h3> 
                        <span> {origin}</span>
                        
                        <br/>

                        <h3 className="modalTitlesInline">Esperanza de vida:</h3> 
                        <span> {life_span} años</span>
                                             
                        <h3>Skills</h3>
                        <div className="skills-component">
                            {
                            Object.entries(skills).map((skill) => {
                                return(
                                    <SkillsBar
                                        key={skill[0]}
                                        skillName={skill[0]}
                                        skillValue={skill[1]}
                                    />
                                )
                            })
                            }
                        </div>
                        </>)
                    }
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Modal;
