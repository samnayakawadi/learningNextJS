import Image from "next/image"
import Link from "next/link"

const Navbar = () => {
    return (
        <div className="box m-2">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link href="/">
                        <a className="navbar-item">
                            {/* <img src="/cdaclogo.png" width="50" height="100" /> */}
                            <Image src="/cdaclogo.png" width="50" height="30" alt="" />
                        </a>
                    </Link>
                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">

                        <Link href="/ninjas">
                            <a className="navbar-item">
                                Ninjas
                            </a>
                        </Link>

                        <Link href="/ninjas/list">
                            <a className="navbar-item">
                                {"Ninjas's"} List
                            </a>
                        </Link>

                        <Link href="/about">
                            <a className="navbar-item">
                                About
                            </a>
                        </Link>

                    </div>

                    {/* <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <a className="button is-primary">
                                    <strong>Sign up</strong>
                                </a>
                                <a className="button is-light">
                                    Log in
                                </a>
                            </div>
                        </div>
                    </div> */}
                </div>
            </nav>
        </div>
    )
}

export default Navbar