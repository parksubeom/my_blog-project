import React from 'react';

export const Form = () => {

    return (
        <section className ="Form__container">
            <form>
                <div className='search_form'>
                    <label htmlFor="search">Search</label>
                    <input
                     type="text"
                     name="search"                    
                     autoComplete='off'
                     id ="search_input"
                     />
                </div>
            </form>
        </section>
        )
} 



