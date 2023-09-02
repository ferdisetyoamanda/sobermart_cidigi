import React from 'react';
import About from '../components/about/About';
import BreadCrumb from '../components/Breadcrumb';

function PageAbout() {
  const breadcrumbItems = [
    { label: 'Home', url: '/' },
    { label: 'Tentang Kami', url: '/' },
  ];
  return (
    <>
    <BreadCrumb items={breadcrumbItems} />
    <About /></>
  );
}

export default PageAbout;
