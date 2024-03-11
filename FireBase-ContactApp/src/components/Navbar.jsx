import React from 'react'

const Navbar = () => {
    return (
        <div className='my-4 h-[60px] flex items-center justify-center rounded-lg
         bg-white gap-2 text-xl font-medium'>

                <img src="/logos_firebase.svg" alt="logo" />
                <h1>Firebase Contact App</h1>
        </div>
    );
};

export default Navbar