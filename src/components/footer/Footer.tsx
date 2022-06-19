import React, {lazy, Suspense} from 'react';
import { Facebook, Instagram, Mail, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
import Heading from "../elements/Heading";
import { Wrapper } from "./index.styles";

// lazy media
const Image = lazy(() => import('../elements/Image'));

const Footer = () => {
    return (
        <Wrapper className="footer">
            <aside className="footerLeft">
                <Heading
                    attrLevel="h1"
                    className="logo"
                    text="LOGO"
                />
                <Heading
                    attrLevel="p"
                    className="description"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin hendrerit semper nulla, id viverra turpis iaculis ac. Donec posuere luctus diam a lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed et velit imperdiet, consectetur diam nec, facilisis turpis. Morbi quis magna eget ligula pellentesque fringilla ac id ante. Ut vel congue sem, non luctus ante. Curabitur id dui at libero viverra commodo id at dolor. Vestibulum a magna eu est tincidunt placerat. Etiam nibh nunc, aliquam a sapien eu, facilisis faucibus ipsum."
                />
                <section className="iconContainer">
                    <div className="icon">
                        <Facebook />
                    </div>
                    <div className="icon" >
                        <Instagram />
                    </div>
                    <div className="icon" >
                        <Twitter />
                    </div>
                    <div className="icon">
                        <Pinterest />
                    </div>
                </section>
            </aside>
            <section className="footerCenter">
                <Heading
                    attrLevel="h3"
                    className="title"
                    text="Useful Links" />
                <ul className="list">
                    <li className="listItem">
                        Home
                    </li>
                    <li className="listItem">
                        Man Fashion
                    </li>
                    <li className="listItem">
                        Woman Fashion
                    </li>
                    <li className="listItem">
                        Jewelry
                    </li>
                    <li className="listItem">
                        Cart
                    </li>
                    <li className="listItem">
                        My Acount
                    </li>
                    <li className="listItem">
                        Order Tracking
                    </li>
                    <li className="listItem">
                        WishList
                    </li>
                    <li className="listItem">
                        Terms
                    </li>
                </ul>
            </section>
            <aside className="footerRight">
                <Heading attrLevel="h1" className="title" text="Contact" />
                <div className="infoContainer">
                    <Room />
                    <Heading attrLevel="p" className="contact address" text="Milano, Italy." />
                </div>
                <div className="infoContainer">
                    <Phone />
                    <Heading attrLevel="p" className="contact phoneNumber" text="333 3333333" />
                </div>
                <div className="infoContainer">
                    <Mail />
                    <Heading attrLevel="p" className="contact email" text="beshorts360@gmail.com" />
                </div>
                <Suspense
                fallback={
                  <div>Loading Products...</div>
                }>
                <Image className="payment" src="https://i.ibb.co/Qfvn4z6/payment.png" alt="" />
              </Suspense>
            </aside>
        </Wrapper>
    )
};

export default Footer;