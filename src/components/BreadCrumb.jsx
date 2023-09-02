import React from 'react';
import { Link } from 'react-router-dom';

function Breadcrumb({ items }) {
  return (
    <nav className='p-4'>
      <div className="responsive md:block hidden">
        <div className="bread-crumb m-1 bg-slate-500">
          <ol className="list-none p-0 inline-flex">
            {items.map((item, index) => (

              <div className="bread ">
                <li key={index} className="flex items-center">
                  <Link href={item.url} className="hover:text-blue-600">
                    {item.label}
                  </Link>
                  {index < items.length - 1 && (
                    <span className="mx-2">&#9656;</span>
                  )}
                </li>
              </div>



            ))}
          </ol>
        </div>
      </div>

    </nav>
  );
}

export default Breadcrumb;
