import React from 'react';

import { HeaderLine, HeaderWrapper, Logo } from './styles'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';

export default function() {
    return (
        <>
					<header>
						<HeaderWrapper>
							<Link to="/">
								<Logo>
									<img src={logo} alt="logo"></img>
								</Logo>
							</Link>
						</HeaderWrapper>
					</header>
					<HeaderLine />
        </>
    )

}