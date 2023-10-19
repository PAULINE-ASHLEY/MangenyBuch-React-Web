import React from 'react';
import { location } from 'assets/images';
import SocialMediaButton from './SocialMediaButton';

function LocationButton(props) {
	return <SocialMediaButton imageUrl={location} {...props} to='' />;
}

export default LocationButton;
