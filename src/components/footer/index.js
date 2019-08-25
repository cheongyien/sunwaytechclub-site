import React from 'react'
import './index.scss'
import slack from 'assets/images/footer/ic_slack.png'
import telegram from 'assets/images/footer/ic_telegram.png'

export default () => (
    <>
        <div className="subfooter-container">
            <Newsletter />
            <JoinUs />
        </div>
        <div className="footer-container">
            <p className="footer-text">© 2019 Sunway Tech Club All rights reserved.</p>
        </div>
    </>
)

const Newsletter = () => (
    <div class="subfooter-item">
        <p>Subscribe newsletter</p>
        <p>Subscribe to our newsletter to keep update with us!</p>
        <input type="text" />
    </div>
)

const JoinUs = () => (
    <div class="subfooter-item">
        <p>Join Us</p>
        <p>Join our public chatroom to hangout with us!</p>
        <div className="icons-container">
            <img className="drawer-logo" src={slack} width="80" height="80" alt="slack-logo" />
            <img className="drawer-logo" src={telegram} width="80" height="80" alt="telegram-logo" />
        </div>
    </div>
)
