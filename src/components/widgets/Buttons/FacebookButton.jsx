import React from 'react';
import { facebook } from 'assets/icons';
import SocialMediaButton from './SocialMediaButton';

function FacebookButton() {
	return <SocialMediaButton imageUrl={facebook} to='/' />;
}

export default FacebookButton;