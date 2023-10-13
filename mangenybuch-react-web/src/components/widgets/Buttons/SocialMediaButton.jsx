import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function SocialMediaButton({ imageUrl, to }) {
	return (
		<Link to={to} className='btn btn-ghost btn-sm btn-square'>
			<img src={imageUrl} className='aspect-auto object-cover' alt='' />
		</Link>
	);
}

SocialMediaButton.propTypes = {
	imageUrl: PropTypes.string.isRequired,
	to: PropTypes.string.isRequired,
};

export default SocialMediaButton;