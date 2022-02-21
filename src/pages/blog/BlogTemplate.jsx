import React from 'react';
import './blogTemplate.css';

function BlogTemplate({ blog }) {
    const { id, title, image, category, subCategory, descripton, time } = blog;
  return <div className='blogtemplate-container'>
    <div className='blogtemplate'>
        <img src= {image} />
        <div className='blog-details'>
            <p className='subcategory'> { subCategory } </p>
            <p className='title' > { title } </p>
            <p className='category' > <span>{ category }</span> | <span>{ time }mins read</span> </p>
        </div>
    </div>
  </div>;
}

export default BlogTemplate;
