import React from 'react';

export const Form = () => {

    return (
        <section className ="Form__container">
            <form>
                <div>
                    <label htmlFor="search">Search</label>
                    <input
                     type="text"
                     name="search"
                     value=""
                     autoComplete='off'
                     />
                </div>
            </form>
        </section>
        )
} 



