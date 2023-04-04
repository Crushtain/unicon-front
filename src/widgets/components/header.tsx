// @ts-ignore
import Link from 'next/link'
import { GrProjects } from 'react-icons/gr';

const Header = () => {
    return(
        <header>
            <div>
            <GrProjects/>
            </div>

            <nav>
                <Link href='/'>Home</Link>
                <Link href='/projects'>Projects</Link>
                <Link href='/materials'>Materials</Link>
                <Link href='/about/about'>About</Link>
            </nav>
        </header>
    )
}

export default Header;