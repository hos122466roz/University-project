import React from 'react';
import { FiSearch } from "react-icons/fi";

const Search = ({search}) => {
    return (
        <>
        <div className='modal-search'  onClick={search}></div>
            <div className='search-continer'>
                <form action="">
                    <input type="text" placeholder=' جستجو کنید...'/>
                    <button className='byn'> <FiSearch/></button>
                </form>
            </div>
         


        </>
    );
};

export default Search;