import React from 'react';
import '../SubmitForm/SubmitForm.css'

const SubmitForm = () => {
    return (
        <section className='mb-24 bg-[#FFF2F1] py-24'>
            <div className='submitContainer'>
                <div>
                    <h3 className='text-3xl font-bold'>LET'S STAY IN TOUCH</h3>
                    <p className='text-2xl font-semibold'>Get updates on sales specials and more</p>
                </div>
                <form className='inputContainer'>
                    <input className='w-[400px] py-2 border bottom-2 ' type='text' />
                    <button className='btn btn-primary inline' value='Submit'>Submit</button>
                </form>
            </div>
        </section>
    );
};

export default SubmitForm;