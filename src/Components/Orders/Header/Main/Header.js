import React, { useState } from 'react'

import SearchResults from '../SearchResults/SearchResults'
import HeaderOverlay from '../HeaderOverlay/HeaderOverlay'
import HeaderContent from '../HeaderContent/HeaderContent'
import './Header.css'


export default function Header({change}) {

  return (
    <div className='header-main-wrapper'>
        <HeaderContent change={change}  />
    </div>

  )
}
