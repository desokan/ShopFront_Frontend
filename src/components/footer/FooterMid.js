import classes from "./FooterMid.module.css"
import LogoSvg from "../svgs/LogoSvg.js"
import { Twitter, Facebook, Pintrest, Youtube, Instagram } from "../svgs/social-icons"

const FooterMid = () => {
    return (
        <>
            <section className={classes.footerMidContainer}>
                <div>
                    <LogoSvg fontColor={'#FFFFFF'} />
                    <p>1418 River Drive, Suite 35 Cottonhall, CA 9622 <br/> United States <br/> <br/> sale@uomo.com <br/> +1 246-345-0695</p>
                    <div className={classes.socialIconContainer}>
                        <Facebook/>
                        <Twitter/>
                        <Instagram/>
                        <Youtube/>
                        <Pintrest/>
                    </div>
                </div>
                <div><h4>Company</h4></div>
                <div><h4>Shop</h4></div>
                <div><h4>Help</h4></div>
                <div><h4>Subscribe</h4></div>

            </section>
        </>
    )
}

export default FooterMid;