import Link from "next/link";
import logoImg from "../../public/images/logo.png";

export default function MainHeader(){
    return (
        <>
            <header>
                <Link href="/">
                    <img src={logoImg.src} alt="food Image"/>
                    NextLevel food
                </Link>


                <nav>
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