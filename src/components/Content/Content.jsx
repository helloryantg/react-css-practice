import React from 'react'
import './Content.scss'
import SideBar from '../SideBar/SideBar'
import HotelView from '../HotelView/HotelView'

const Content = () => {
    return (
        <div className="content">
            <SideBar />
            <HotelView />
        </div>
    )
}

export default Content