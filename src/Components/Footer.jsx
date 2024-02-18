import React from 'react'

function Footer() {
    return (
        < >
            <div className=" bg-info text-light p-5 row mt-5">
                <div className=" col-lg-3">
                    <img height={'50px'} src="https://vectorseek.com/wp-content/uploads/2023/12/Visit-Saudi-Logo-Vector.svg-.png" alt="" />
                    <p className='mt-2'>Copyright © 2024 Saudi Tourism</p>
                    <p>Authority. All rights reserved</p>
                </div>
                <div className="col-lg-3">
                    <h4 style={{ height: '35px' }}>Seasons & Events</h4>
                    <p>Riyad seasion</p>
                    <p>Jeddha Events Calander</p>
                    <p>Diriyah Season</p>
                 </div>
                <div className="col-lg-3">
                    <h4 style={{ height: '35px' }}>Discover Saudi</h4>
                    <p>See & Do</p>
                    <p>Plan Your Trip</p>
                    <p>Travel Essentials</p>
                    <p>Saudi Rewards</p>

                </div>
                <div className="col-lg-3">
                    <h4 style={{ height: '35px' }}>Useful Information</h4>
                    <p> About Saudi</p>
                    <p> Saftey Travel Tips</p>
                    <p>Useful Conatct</p>
                    <p>Travel Guidelines</p>
                </div>
            </div>

        </>
    )
}

export default Footer