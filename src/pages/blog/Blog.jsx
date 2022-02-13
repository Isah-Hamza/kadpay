import React from 'react';
import './blog.css';

import BlogTemplate from './BlogTemplate.jsx';
import image1 from '../../images/img/image1.jpg';
import image2 from '../../images/img/image2.jpg';
import image3 from '../../images/img/image3.webp';

import ArrowRight from '@material-ui/icons/KeyboardArrowRightRounded';
import ArrowLeft from '@material-ui/icons/KeyboardArrowLeftRounded';


function Blog() {
    

    const blogs = [
        {
            id: 1,
            title: '5 Steps to Create an Outstanding Marketing Plan [Free Templates]',
            category: 'Marketing',
            subCategory: 'Marketing and Strategy',
            image:image1,
            description : `Wall Street stocks declined on Monday amid intensified bets on Fed interest rate hikes after a strong US jobs report. Oil prices climbed. 
            Bitcoin gained on Tesla’s investment filing. Asia-Pacific`,
            time : '10'
        },
        {
            id: 2,
            title: 'How to Share an Instagram Story in Under 5 Steps',
            category: 'Marketing',
            subCategory: 'Instagram and Marketing',
            image:image2,
            description : `Wall Street stocks declined on Monday amid intensified bets on Fed interest rate hikes after a strong US jobs report. Oil prices climbed. 
            Bitcoin gained on Tesla’s investment filing. Asia-Pacific`,
            time : '15'
        },
        {
            id: 3,
            title: 'Resume Tips to Get You The Job You Want, Straight from Recruiters',
            category: 'Marketing',
            subCategory: 'Resume and Cover Letter',
            image:image3,
            description : `Wall Street stocks declined on Monday amid intensified bets on Fed interest rate hikes after a strong US jobs report. Oil prices climbed. 
            Bitcoin gained on Tesla’s investment filing. Asia-Pacific`,
            time : '15'
        },
    ]

  return <div className='blog-container'>

        <div className='categories'>
            <p className='active'>All</p>
            <p>Marketing</p>
            <p>Politics</p>
        </div>
        <div className='blogs'>
        {
            blogs.map(blog => {
                console.log(blog)
                return <BlogTemplate blog = {blog} key = {blog.id} />
            })
            }
        {   
            blogs.map(blog => {
                console.log(blog)
                return <BlogTemplate blog = {blog} key = {blog.id} />
            })
            }
            {
                blogs.map(blog => {
                console.log(blog)
                return <BlogTemplate blog = {blog} key = {blog.id} />
            })
            }
        {
            blogs.map(blog => {
            console.log(blog)
            return <BlogTemplate blog = {blog} key = {blog.id} />
        })
        }
        </div>
        <div className='controls'>
            <button className='back' ><ArrowLeft/><ArrowLeft/></button>
            <button className='forward' > <ArrowRight/><ArrowRight/> </button>
        </div>

  </div>;
}

export default Blog;
