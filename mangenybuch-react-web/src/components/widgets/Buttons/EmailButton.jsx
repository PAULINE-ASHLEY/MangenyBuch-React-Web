import React from 'react';
import { email } from 'assets/images';
import SocialMediaButton from './SocialMediaButton';

function EmailButton(props) {
	return <SocialMediaButton imageUrl={email} {...props} to='' />;
}

export default EmailButton;
