import React from 'react';

const Register = () => {



    const handleSubmit = event => {
        event.preventDefault();
        
    }



    return (
        <section className='container mx-auto my-16'>
            <form onSubmit={handleSubmit} className=" border mx-auto">
                <label htmlFor="">NAME:</label>
                <input type="text" />
            </form>
        </section>
    );
};

export default Register;