import React from 'react'
import './Header.css'
import logo from '../../assets/brandLogo.png'
import thumb from '../../assets/thumb.png'
import { AiOutlineStar } from 'react-icons/ai'
import { MdAddToDrive } from 'react-icons/md'
import { BsCloudCheck } from 'react-icons/bs'
import { GiBackwardTime } from 'react-icons/gi'
import { MdOutlineInsertComment } from 'react-icons/md'
import { HiOutlineVideoCamera } from 'react-icons/hi'
import { MdLockOutline } from 'react-icons/md'

const Header = () => {
    return (
        <section className='header'>
            {/* Logo */}
            <img src={logo} className='brand' alt="" />

            <div className="headerSides">

                {/* Left Header */}
                <div className="leftHeader">

                    <div className="leftHeader1">
                        <span className='heading'>Untitled document</span>

                        <div className="cta">
                            <AiOutlineStar />
                            <MdAddToDrive />
                            <BsCloudCheck />
                        </div>
                    </div>

                    <div className="leftHeader2">
                        <ul>
                            <li>File</li>
                            <li>Edit</li>
                            <li>View</li>
                            <li>Insert</li>
                            <li>Format</li>
                            <li>Tools</li>
                            <li>Extensions</li>
                            <li>Help</li>
                        </ul>
                    </div>
                </div>

                {/* Right Header */}

                <div className="rightHeader">
                    <div className="rightHeaderCTA">
                        <GiBackwardTime />
                        <MdOutlineInsertComment />
                        <HiOutlineVideoCamera /> 
                    </div>
                    <button className='shareBtn'> <MdLockOutline /> Share</button>
                    <img src={thumb} className='thumbnail' alt="" />
                </div>
            </div>

        </section>
    )
}

export default Header