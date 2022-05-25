import React from 'react';

import { HeaderWrapper, HeaderActionsWrapper, Logo, HeaderButton, SignOut } from './styles'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom';
import { signOut } from 'firebase/auth'
import { auth } from '../../firebase'
import HomeIcon from '@mui/icons-material/Home';
import LogoutIcon from '@mui/icons-material/Logout'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function() {

	const handleSignOut = () => {
		toast.promise(
			signOut(auth),
			{
				pending: 'Deslogando...',
				success: 'Deslogado com sucesso!',
				error: 'Erro ao deslogar!'
			}
		)
	}

    return (
        <>
					<header>
						<HeaderWrapper>
							<HeaderActionsWrapper>
								<Logo>
									<img src={logo} alt="logo"></img>
								</Logo>
								<HeaderButton>
									<Link to="/" style={{ color: '#FFF', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
										<HomeIcon/>
										Home
									</Link>
								</HeaderButton>
							</HeaderActionsWrapper>
							<SignOut onClick={handleSignOut}>
								<LogoutIcon />
							</SignOut>
						</HeaderWrapper>
					</header>
        </>
    )

}