import React from 'react'
import './blog.css';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './import';

const Blog = () => {
  return (
    <div className='gptdev__blog section__padding' id='blog'>
      <div className='gptdev__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, 
We are blogging about it.</h1>
      </div>
      <div className='gptdev__blog-container'>
        <div className='gptdev__blog-container_groupA'>
          <Article imageUrl={blog01} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
        <div className='gptdev__blog-container_groupB'>
          <Article imageUrl={blog02} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imageUrl={blog03} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imageUrl={blog04} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
          <Article imageUrl={blog05} date='Sep 26, 2021' title='GPT-3 and Open  AI is the future. Let us exlore how it is?'/>
        </div>
      </div>
    </div>
  )
}

export default Blog
