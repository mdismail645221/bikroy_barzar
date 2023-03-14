import React from 'react';
import '../SubmitForm/SubmitForm.css'

const SubmitForm = () => {
    return (
        <section className='mb-24 bg-[#FFF2F1] p-44'>
            <div className='submitContainer'>
                <h3>LET'S STAY IN TOUCH</h3>
                <p>Get updates on sales specials and more</p>
                <div className='inputContainer'>
                    <input type='text'  />
                    <button value='Submit'>Submit</button>
                </div>
            </div>
        </section>
    );
};

export default SubmitForm;