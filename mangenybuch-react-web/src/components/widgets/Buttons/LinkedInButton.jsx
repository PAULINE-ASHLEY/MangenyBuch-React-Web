import React from 'react';
import { linkedin } from 'assets/icons';
import SocialMediaButton from './SocialMediaButton';

function LinkedInButton(props) {
	return <SocialMediaButton imageUrl={linkedin} {...props} to='' />;
}

export default LinkedInButton;