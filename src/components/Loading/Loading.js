import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center'>
            <div className='w-12  h-12  rounded-full animate-spin my-12' style={{border: "5px dashed #F50808"}}></div>
        </div>
    );
};

export default Loading;