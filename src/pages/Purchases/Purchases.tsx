import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import "./Purchases.css";
import NavbarCombined from "../../components/navbarCombined/NavbarCombined";
import Footer from "../../components/footerComponent/footer";

interface PurchasesProps {}

const Purchases: FunctionComponent<PurchasesProps> = () => {
	const currentUser = {
		id: 1,
		username: "Anna",
		isSeller: true,
	};

	return (
		<>
			<NavbarCombined />
			<div className="purchases">
				<div className="container">
					<div className="title">
						<h1>My Purchases</h1>
					</div>
					<table>
						<tr>
							<th>Image</th>
							<th>Title</th>
							<th>Price</th>
							<th>Freelancer</th>
							<th>Contact</th>
						</tr>
						<tr>
							<td>
								<img
									className="image"
									src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
							</td>
							<td>Stunning concept art</td>
							<td>59$</td>
							<td>Maria Anders</td>
							<td>
								<img className="message" src="./img/message.png" alt="" />
							</td>
						</tr>
						<tr>
							<td>
								<img
									className="image"
									src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
							</td>
							<td>Ai generated concept art</td>
							<td>79$</td>
							<td>Francisco Chang</td>
							<td>
								<img className="message" src="./img/message.png" alt="" />
							</td>
						</tr>
						<tr>
							<td>
								<img
									className="image"
									src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
							</td>
							<td>High quality digital character</td>
							<td>110$</td>
							<td>Roland Mendel</td>
							<td>
								<img className="message" src="./img/message.png" alt="" />
							</td>
						</tr>
						<tr>
							<td>
								<img
									className="image"
									src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
							</td>
							<td>Illustration hyper realistic painting</td>
							<td>39$</td>
							<td>Helen Bennett</td>
							<td>
								<img className="message" src="./img/message.png" alt="" />
							</td>
						</tr>
						<tr>
							<td>
								<img
									className="image"
									src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
							</td>
							<td>Original ai generated digital art</td>
							<td>119$</td>
							<td>Yoshi Tannamuri</td>
							<td>
								<img className="message" src="./img/message.png" alt="" />
							</td>
						</tr>
						<tr>
							<td>
								<img
									className="image"
									src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
							</td>
							<td>Text based ai generated art</td>
							<td>49$</td>
							<td>Giovanni Rovelli</td>
							<td>
								<img className="message" src="./img/message.png" alt="" />
							</td>
						</tr>
					</table>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Purchases;
