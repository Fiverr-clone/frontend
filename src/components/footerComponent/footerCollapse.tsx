import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./footer.css";

interface FooterCollapseProps {}

const FooterCollapse: FunctionComponent<FooterCollapseProps> = () => {
	return (
		<>
			<div id="footer-collapse">
				{/* Categories */}
				<div className="footer-collapse-grid">
					<ul>
						<li className="li-link">
							<h5>Categories</h5>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Programming & Development
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Digital Marketing
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Writing & Translation
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Online Courses
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Design
							</Link>
						</li>
					</ul>
				</div>
				{/* About */}
				<div className="footer-collapse-grid">
					<ul>
						<li className="li-link">
							<h5>About</h5>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Careers
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Press & News
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Partnerships
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Privacy Policy
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Terms of Service
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Intellectual Property Claims
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Investor Relations
							</Link>
						</li>
					</ul>
				</div>
				{/* Support */}
				<div className="footer-collapse-grid">
					<ul>
						<li className="li-link">
							<h5>Support</h5>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Help & Support
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Trust & Safety
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Selling on Fiverr
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Buying on Fiverr
							</Link>
						</li>
					</ul>
				</div>
				{/* Community */}
				<div className="footer-collapse-grid">
					<ul>
						<li className="li-link">
							<h5>Community</h5>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Customer Success Stories
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Community Hub
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Forum
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Events
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Blog
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Influencers
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Affiliates
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Podcast
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Invite a Friend
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Become a Seller
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Community Standards
							</Link>
						</li>
					</ul>
				</div>
				{/* More From Fiverr */}
				<div className="footer-collapse-grid">
					<ul>
						<li className="li-link">
							<h5>More From Fiverr</h5>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Fiverr Pro
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Fiverr Logo Maker
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Fiverr Guides
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Get Inspired
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Fiverr Select
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								ClearVoice
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								FiverWorkspace
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Learn
							</Link>
						</li>
						<li className="li-link">
							<Link to="/" className="link">
								Working Not Working
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</>
	);
};

export default FooterCollapse;
