import React from "react";
import "../styles/Home.css";
import { FaClock } from "react-icons/fa";
import { BsRecycle } from "react-icons/bs";
import { IoMdWallet } from "react-icons/io";
import { BiSolidBellRing } from "react-icons/bi";
import { FaLocationDot } from "react-icons/fa6";
import { BsCloudHail } from "react-icons/bs";
import { TbWind } from "react-icons/tb";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineShoppingBag } from "react-icons/md";
import { IoMdTrophy } from "react-icons/io";
import { MdOutlineModeStandby } from "react-icons/md";

const Home = () => {
    
  return (
    <div className="home-wrapper">
      <div className="home-container">
        {/* Header Section */}
        <div className="header">
          <div className="header-content">
            <div className="user-info">
              <h3>Hey</h3>
              <h3>Keerthana</h3>
            </div>
            <div className="icons">
            <BiSolidBellRing className="bell-icon"/> &nbsp;&nbsp;
              <FaClock className="timer-icon" />&nbsp;&nbsp;
              <img
                src="https://s3-alpha-sig.figma.com/img/a465/8326/7142dddef9fbc43ef144181048eade3c?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PJrYww3BKGIu-gnw6rJvREIFwI~aJcFRNoESAIORxiuUsFmH9~lqlCi0Dt2eapIwI2ojbXOvjT3GoiSQ2nSEDSGkhdJUYNln9Zx3wHWkI1B7pK4Q1vyOK0qxGnIxFpirWyTwrclugTCnOXzlVSHLjc48tanKE0lZrqQGR7NxOFhXNr~qSAQGKKZyrQt3bO7xE4axF6cvCkFE00KnAuJvLfZLZx7MewgFNW6K8UQZaDue-34OiPsm-GSTKfHvDU4Kp~3Zs4XJpUf9uXJaYWdhQdh40NfIV-Dpge8UofijIRi9lJdGlyzSbFIOH-Nz314f2m2fT8Q9sE7ER~Ls7cILYA__" // Replace with actual profile image URL
                alt="Profile"
                className="profile-pic"
              />
            </div>
          </div>
        </div>

        <div className="overlap-section">
          <div className="card recycle-card"><BsRecycle className="recycle-icon"/>
          <br/>
          Recycle Request</div>
          <div className="card wallet-card">
            <IoMdWallet className="wallet-icon" />
            <br/>
            Reward Balance
            </div>
        </div>

        {/* Weather & Air Quality Section */}
        <div className="weather-card">
          <div className="air-quality">
            <p className="air">Air-Quality Index</p>
            <h1>26</h1>
            <p>Good</p>
          </div>
          <div className="weather-info">
          <p className="chennai"><FaLocationDot className="location"/> Chennai</p>
            <p className="weather-rain"><BsCloudHail /> 16°C Rain</p>
            <p className="weather-wind"><TbWind /> 30 MPH Wind</p>
          </div>
        </div>

        {/* Reward Cards */}
        <div className="reward-container">
          <div className="reward-card amazon-card">
            <img
              src="https://i.pinimg.com/originals/01/ca/da/01cada77a0a7d326d85b7969fe26a728.jpg"
              alt="Amazon Gift Card"
            />
            <p className="amazon">Amazon Gift Card</p>
          </div>
          <div className="reward-card cash-voucher">
            <p>Cash Voucher</p>
            <p>200/-</p>
          </div>
        </div>

        {/* Fashion Sale Banner */}
        <div className="fashion-sale">
  <h5>
    <span className="red-text">RIGHT TO</span> <br /> FASHION <br /> SALE
  </h5>
  <div className="fashion-grid">
    <div className="fashion-box shift-down">
      <img src="https://s3-alpha-sig.figma.com/img/42a1/c804/91b139e7c13020ce163f8ba62f7a7066?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=i20oFJV1IatHlC1JoyCSzFUBzeeUscsrQDsbEmrEEpwshcwdYt-apPIt-rd4doBuU2c5dL~TyHvgpHpmDtF0lxxESjTI5AEyvelRmzwP0etF3yF0zuPNjWRPcgKGOz-rjLDYwkV~gpauqfj8QACOd6mIWfuDYocOraLp~VjSZdvKSGFLBFLK~GR1gw8TE8PBHnDpXPydc3GMfc6v5aiDDZLWQ9KuXLBBkKL~6TVj1fdzA9eNOFh8Yz8zybCr5NLgifKn3CqtGrvsPYwknJ2qYFbI0SHNEC8KQZ0m7qa~trs0Dqzb-xXzQ~Ym4gd9s1Uha1Re4kdIuBdHXXivjW7cXA__" alt="Fashion Item 1" />
    </div>
    <div className="fashion-column">
      <div className="fashion-box">
        <img src="https://s3-alpha-sig.figma.com/img/3cbf/8a94/a180fe5d3d2f70d5ea8b0fb28107d7bf?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=jRyQtxeVNY1~jKOw9Gp70cbuAznPIYKJcbwCbH49xjpb~ArBhSfevObYSbbMvF2udS6GrsQkGBvMJzYB8is03rkcyNQHn-aXj8N5Lf-1SyvetX-VWIdcwsDJCPQvZZfMrVBlpY2Cu3-xHt9ID4Np8CyoKWJu7JDqkzmuMwTDgkm8U44sCoZCelcC0hUPaaUeyMGefJIj00DspMDY4yDIEpWQHo-o4i2JcZRU1A4W7IIlSajRu0zdzChCd0~kKUsuRGzuZpMJzsbIwEAk5ScvYPUozy6-V9BV-AokpwJqhQVRKVc4WbXA3zfthBWHeqRq9gTLtkKiSERodHYiLTjMOQ__" alt="Fashion Item 2" />
      </div>
      <div className="fashion-box">
        <img src="https://s3-alpha-sig.figma.com/img/cb58/351f/bb166f0385da48f3661a0a02e270fa58?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=WiyOpWkqbq3OQ6zec17fh86Ub36cB8zW2xa4kwv7xxzcqIKjHeHavvaupe4Am~40FcexkHxJoI60cYyYekarO8AJ-hkzCBsDl7yXoW4sDoZ6Tra6DS0toeF4kAbDRQk9zFzVWh-JwGYdPXrpPjKNxUjpRBzufTIM4ZNnzjC1Rf88x1N9LNMH1D8lXSD0Ri7I9t~-lv28AM-k92gywaoBRrIeFhHZEwZ5-ipHk6rLnRhqlbuNPof52cglx4y5w3qHnhi2jum8mh22bjEb0~XMBIzBNZpiNbSDhgWZLMVTNi~ybBY-VxFCPKXZVeRurBbQCyka8JoBVGP3Gkyyp2BYbw__" alt="Fashion Item 3" />
      </div>
    </div>
    <div className="fashion-box shift-down">
      <img src="https://s3-alpha-sig.figma.com/img/07f3/1541/56dbcbb2e109452e0a8c6809d802e68f?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ImJmRnFMUlnJLh8Bm03oiRGzHHWR4V6JtXkKYfnhRWzUgi-YZGUKexXjcH6DAshZEpz5v5zDCC9jScNspkYYJFwCHVf-0kmYguhlHrNLO8ni-UqzivsdpFT689ZoMQ4w5JiMSQPv5dnCl5S9GvQegvekyan-DZOK3Klo-otpUPjil51LFn~jU2uJfN5c0YryXbrWRaqgnlt8Es-Gk7T8Gl8x35IgBdyLO2P7QotzPr4pLk4GLtJeMAc7tfgQi7k03ZD1JibWENSVO99KEfXWpAhDNYhSKUcd2wxndZ20ydLKd9TShqRaaCQZQijZOk7BLaskfFD0ep05BEyHGP7rjg__" alt="Fashion Item 4" />
    </div>
    <div className="fashion-column">
      <div className="fashion-box">
        <img src="https://s3-alpha-sig.figma.com/img/9589/3e80/28c3f7487fd315913148579b7419afff?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=NNcho99nbW8Glq7pkodFNuQ5VV5kXAeMGkRwnTXHCYazyGjlEa2BO70XgJDzgaR3eVvF3NkLqch0w7-a-SvCxlQqRW3~qzVgArdExq~OJNLBY2fb74O4qPkBePqEFt7jBKvEdgYVaazoTF47Mxdt33WWEkYkZ3rHuIXNzTx7HL5ar66c6CC4G1r4TL~ZDMLVV8Hk1stnwsrf1jAMU~0gZptEzNndvFGG51cwynt5-hqZ~UzNl19YB91~zjJcE9PLTvI8f3yURGNTTP~S-HC8USD4sgoCvWNI1WbSpYbOWPhIDrgc-qKxONRyDS6gpgaJV8VjfFl5NAXeGgMkH~C6xQ__" alt="Fashion Item 5" />
      </div>
      <div className="fashion-box">
        <img src="https://as2.ftcdn.net/jpg/02/36/25/95/1000_F_236259559_epyTfarPC7ZCsDJ49w02fxmCM7mOgbtA.jpg" alt="Fashion Item 6" />
      </div>
    </div>
    <div className="fashion-box">
      <img src="https://s3-alpha-sig.figma.com/img/942a/9925/b158947fbe24e5466ebc3ab6805284f1?Expires=1739750400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=THYT85fBZ2R9-ldsZu4afONSFL6ssNlM66dx5msyHkHDoi8dXyJZwNLfzvckrHiq9wXaL8No5uEeFZjFQyJ9jKlnkxNbcmDfruq5X6EuiGuzDS4Xex5CoOnMyHZXLlVzRGyLyUsGl9QkP619d~3-miKWhHX8m7HP4Vuy0HRYzFcUc5VKC2~V2DO-xRV-7i70HO0PZckjzQGEG9vUW9JJb5RVY5L5D7HsMjxMkezVY4bIsOeoHqI5r~fPs~6hSPMjalN3mtMtkCBDNR1FzlPNgDxYdpFZBVFJkt86PUmEGLpSvovhmrnvMbABfpACXtwmFy8mrJZmRxC-Djnjc5hYBg__" alt="Fashion Item 7" />
    </div>
  </div>
  <button className="shop-now">SHOP NOW</button>
</div>

        {/* Bottom Navigation */}
        <div className="bottom-nav">
          <button className="nav-btn"><AiFillHome /></button>
          <button className="nav-btn"><MdOutlineShoppingBag /></button>
          <button className="nav-btn"><IoMdTrophy /></button>
          <button className="nav-btn"><MdOutlineModeStandby /></button>
        </div>
      </div>
    </div>
  );
};

export default Home;
