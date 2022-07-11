import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories }) => {
    
    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => setinputValue( e.target.value );

    const handleSubmit = (e) => {
        e.preventDefault();
        //console.log('Submit Hecho');
        if (inputValue.trim().length > 2) {
            setCategories( categorias => [inputValue, ...categorias, ]);
            setinputValue('');    
        }
        
    };

    return (
        <form onSubmit={handleSubmit}>            
            <input 
                type="text" 
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>
    );
};

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
};