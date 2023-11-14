const FooterItem = (props) => {
	const { content, isLowerCaseText } = props;
	let textToRender;
	if(isLowerCaseText) {
		textToRender = content.toLowerCase();
	}
	else {
		textToRender = content;
	}
	return (
		<div>{ textToRender }</div>
	)
}

export default FooterItem;