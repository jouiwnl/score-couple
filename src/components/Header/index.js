import React from 'react';

import { HeaderWrapper, Logo, HeaderButton } from './styles'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

export default function() {
    return (
        <>
					<header>
						<HeaderWrapper>
							<Logo>
								<img src={logo} alt="logo"></img>
							</Logo>
							<HeaderButton>
								<Link to="/" style={{ color: '#FFF', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
									<HomeIcon/>
									Home
								</Link>
							</HeaderButton>
							
						</HeaderWrapper>
					</header>
        </>
    )

}