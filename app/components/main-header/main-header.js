import Link from "next/link";
import logoImg from "../../../assets/logo.png";
import classes from "../main-header/main-header.module.css";
import Image from "next/image";
import MainHeaderBackground from "../main-header/main-header-background";

export default function MainHeader() {
    return (
        <>
            <MainHeaderBackground />
            <header className={classes.header} >
                <Link className={classes.logo} href="/">
                    <Image src={logoImg} alt="food Image" priority />
                    NextLevel food
                </Link>
                <nav className={classes.nav} >
                    <ul>
                        <li>
                            <Link href="/meals">Browse Meals</Link>
                        </li>
                        <li>
                            <Link href="/community">Foodies community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}