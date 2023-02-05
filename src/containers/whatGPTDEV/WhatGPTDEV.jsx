import React from 'react'
import { Feature } from '../../components'
import './whatGPTDEV.css'

const WhatGPTDEV = () => {
  return (
    <div className='gptdev__whatgptdev section-margin' id='wgptdev'>
      <div className='gptdev__whatgptdev-feature'>
        <Feature title="What is GPT-DEV?" 
        text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by."/>
      </div>
      <div className='gptdev__whatgptdev-heading'>
        <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
        <p>Explore The Library</p>
      </div>
      <div className='gptdev__whatgptdev-container'>
        <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. '/>
        <Feature title='Knowledgebase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
        <Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b'/>
      </div>
    </div>
  )
}

export default WhatGPTDEV
