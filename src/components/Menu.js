import React from 'react';
import { Link } from 'react-scroll';

export default function Menu() {
    return (
        <div className="header">
            <ul class="nav-menu">
                <li class="icon-box active">
                    <Link href="/">
                        <i class="fa fa-home"></i>
                        <h2>Home</h2>
                    </Link>
                </li>
                <li class="icon-box">
                    <Link href="/">
                        <i class="fa fa-user"></i>
                        <h2>About</h2>
                    </Link>
                </li>
                <li class="icon-box">
                    <Link href="/">
                        <i class="fa fa-briefcase"></i>
                        <h2>Portfolio</h2>
                    </Link>
                </li>
                <li class="icon-box">
                    <Link href="/">
                        <i class="fa fa-envelope-open"></i>
                        <h2>Contact</h2>
                    </Link>
                </li>
                <li class="icon-box">
                    <Link href="/">
                        <i class="fa fa-comments"></i>
                        <h2>Blog</h2>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
