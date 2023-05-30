import "./Message.css";
import { FunctionComponent, useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/loading";
import Footer from "../../components/footerComponent/footer";
import NavbarCombined from "../../components/navbarCombined/NavbarCombined";
import Cookies from "js-cookie";

const GET_MESSAGES = gql`
	query getAllMessages($userId: ID!, $conversationId: ID!) {
		message(userId: $userId, conversationId: $conversationId) {
			id
			userId
			desc
			User {
				id
				username
			}
			Conversation {
				id
				transmitter {
					id
					username
				}
				receiver {
					id
					username
				}
			}
		}
	}
`;

interface MessageProps {}

const Message: FunctionComponent<MessageProps> = () => {
	const { conversationId } = useParams<{ conversationId: string }>();
	const userId = Cookies.get("userId");
	// const [isTransmitter, setTransmitter] = useState(false);
	const { loading, error, data } = useQuery(GET_MESSAGES, {
		variables: { userId, conversationId },
	});
	// useEffect(() => {
	// 	if (data && data.message.length > 0) {
	// 		const conversation = data.message[0].Conversation;
	// 		if (conversation && conversation.transmitter.id === userId) {
	// 			setTransmitter(true);
	// 		}
	// 	}
	// }, [data, userId]);
	if (!data) {
		return null;
	}

	return (
		<>
			<NavbarCombined />
			{loading && <Loading />}
			{error && <p>Something went wrong ! </p>}
			{!loading && !error && (
				<div className="message">
					<div className="container">
						<span className="breadcrumbs">
							<Link to="/messages">Messages</Link> &nbsp;John Doe
							{/* {data.message.Conversation.receiver.username} */}
						</span>

						<div className="messages">
							{data.message.map((message: any) => {
								// const isTransmitter =
								// 	message.Conversation.transmitter.id === userId;
								const isOwner = message.userId === userId;
								return (
									<div
										className={isOwner ? "item owner" : "item "}
										key={message.id}
									>
										<p>{message.desc}</p>
									</div>
								);
							})}
						</div>
						<hr />
						<div className="write">
							<textarea placeholder="write a message" />
							<button>Send</button>
						</div>
					</div>
				</div>
			)}
			<Footer />
		</>
	);
};

export default Message;
