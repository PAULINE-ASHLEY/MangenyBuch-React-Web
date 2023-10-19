import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function LinkButton(props) {
	const { children } = props;
	const newProps = {
		className:
			'btn btn-link justify-start text-base-100 capitalize py-1 px-1 h-min max-w-[max-content] font-normal',
		...props,
	};

	return <Link {...newProps}>{children} </Link>;
}

LinkButton.propTypes = {
	to: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default LinkButton;