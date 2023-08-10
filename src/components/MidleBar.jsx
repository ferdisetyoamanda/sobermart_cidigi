import React from 'react';
import { FiBell, FiHeart, FiShoppingCart, FiSearch } from 'react-icons/fi'; // Impor ikon pencarian

import SobermartLogo from '../../public/soblogo.png';

function MidleBar() {
    return (
        <div className="p-2 bg-white text-black text-sm border-b border-gray-300">
            <div className="header-wrapper flex justify-between">
                <div className="header-items-left flex items-center">
                    <img src={SobermartLogo} alt="Sobermart Logo" className="w-40 h-10 mr-10" /> {/* Ubah ukuran sesuai kebutuhan */}
                    <div className="header-items-midle flex  ">
                        {/* Konten bagian tengah, termasuk input pencarian dan ikon */}
                        <div className="relative flex ">
                            <div className="drop-down-header">
                                <select className="bg-white p-2 text-black hover:text-blue-600">
                                    <option value="id">Bahasa: Indonesia</option>

                                    <option value="en">Bahasa: Inggris</option>
                                </select>
                            </div>
                            <div className="search">
                                <input
                                    type="text"
                                    placeholder="Cari..."
                                    className="border border-gray-300 py-2 px-2 focus:outline-none focus:border-blue-500"
                                />
                            </div>
                            <div className="icon-search ">
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
                                    <button className="hover:text-blue-600">
                                        <FiSearch className="w-6 h-6" />
                                    </button>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
                <div className="flex items-center space-x-2 headr-items-right justify-end">
                    <div className="icon">
                        <button className="hover:text-blue-600">
                            <FiBell className='w-6 h-6 mx-2' />
                        </button>
                    </div>
                    <div className="icon">
                        <button className="hover:text-blue-600">
                            <FiHeart className='w-6 h-6 mx-2' />
                        </button>
                    </div>
                    <div className="icon">
                        <button className="hover:text-blue-600">
                            <FiShoppingCart className='w-6 h-6 mx-4' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MidleBar;
