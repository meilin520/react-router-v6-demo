import React from 'react';
import { useParams } from 'react-router-dom';
import { getImageById } from '../assets/images';

const ImageView = () => {
    let { id } = useParams('id');
    let image = getImageById(Number(id));

    if (!image) return <div>Image not found</div>;

    return (
        <div>
            <h1>{image.title}</h1>
            <img width={400} height={400} src={image.src} alt="" />
        </div>
    );
}

export default ImageView;