import './footer.css';
import FooterItem from "../FooterItem";

const Footer = () => {
	return(
	<div className="common-footer">
		<FooterItem content="First element" isLowerCaseText={true} />
		<FooterItem content="Second element" isLowerCaseText={true} />
		<FooterItem content="Third element" isLowerCaseText={false} />
		<FooterItem content="Fourth element" isLowerCaseText={false} />
	</div>
	);
}
export default Footer;