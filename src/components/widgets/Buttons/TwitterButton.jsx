import React from 'react';
import { twitter } from 'assets/icons';
import SocialMediaButton from './SocialMediaButton';

function TwitterButton(props) {
	return <SocialMediaButton imageUrl={twitter} {...props} to='' />;
}

export default TwitterButton;