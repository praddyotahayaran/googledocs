import React from 'react'
import './SideBar.css'
import keep from '../../assets/keep.png'
import Calender from '../../assets/Calendar.png';
import map from '../../assets/map.png';
import todo from '../../assets/todo.png';
import contact from '../../assets/contact.png';
import {AiOutlinePlus} from 'react-icons/ai'

const SideBar = () => {
    return (
        <div className="sideBar">
            <a target='blank' href="https://calendar.google.com/calendar/u/0/r?pli=1"><img src={Calender} alt="" /></a>
            <a target='blank' href="https://www.google.com/maps"><img src={map} alt="" /></a>
            <a target='blank' href="https://keep.google.com/"><img src={keep} alt="" /></a>
            <a target='blank' href="https://play.google.com/store/apps/details?id=com.google.android.apps.tasks&hl=en&gl=US&pli=1"><img src={todo} alt="" /></a>
            <a target='blank' href="https://contacts.google.com/"><img src={contact} alt="" /></a>
            <hr style={{width: "2rem", margin: "1rem 0"}}/>
            <AiOutlinePlus style={{fontSize: "2rem"}}/>
        </div>
    )
}

export default SideBar