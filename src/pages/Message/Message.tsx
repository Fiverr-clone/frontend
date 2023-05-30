import "./Message.css";
import { FunctionComponent, useEffect, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Link, useParams, useNavigate } from "react-router-dom";
import Loading from "../../components/loading/loading";
import Footer from "../../components/footerComponent/footer";
import NavbarCombined from "../../components/navbarCombined/NavbarCombined";
import UserIcon from "../../assets/user.png";
import Cookies from "js-cookie";
import Swal from "sweetalert2";

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

const CREATE_MESSAGE = gql`
	mutation CreateMessage($conversationId: ID!, $userId: ID!, $desc: String!) {
		createMessage(
			conversationId: $conversationId
			userId: $userId
			desc: $desc
		) {
			id
		}
	}
`;

interface MessageProps {}

const Message: FunctionComponent<MessageProps> = () => {
	const { conversationId } = useParams<{ conversationId: string }>();
	const userId = Cookies.get("userId");
	const [receiverUsername, setReceiverUsername] = useState("");
	const { loading, error, data } = useQuery(GET_MESSAGES, {
		variables: { userId, conversationId },
	});
	const [createMessage] = useMutation(CREATE_MESSAGE);
	const [message, setMessage] = useState("");
	const HandleCreateMessage = () => {
		createMessage({
			variables: {
				conversationId,
				userId,
				desc: message,
			},
		})
			.then((response) => {
				window.location.reload();
				setMessage("");
			})
			.catch((error) => {
				Swal.fire({
					icon: "error",
					title: "Something went wrong",
					showConfirmButton: false,
					timer: 2000,
				});
			});
	};
	// useEffect(() => {
	// 	if (data && data.message && data.message.length > 0) {
	// 		const username = data.message[0].Conversation.receiver.username;
	// 		setReceiverUsername(username);
	// 	}
	// }, [data]);
	useEffect(() => {
		if (data && data.message && data.message.length > 0) {
			const message = data.message[0];
			const isTransmitter = message.Conversation.transmitter.id === userId;
			const username = isTransmitter
				? message.Conversation.receiver.username
				: message.Conversation.transmitter.username;
			setReceiverUsername(username);
		}
	}, [data, userId]);

	if (!data) {
		return null;
	}

	return (
		<>
			<NavbarCombined />
			{loading && <Loading />}
			{error && <p>Something went wrong ! </p>}
			{!loading && !error && data && (
				<div className="message">
					<div className="container">
						<span className="breadcrumbs">
							<div>{receiverUsername}</div>
						</span>
						<hr />
						<div className="messages">
							{data.message.map((message: any) => {
								const isOwner = message.userId === userId;
								return (
									<div
										className={isOwner ? "item owner" : "item "}
										key={message.id}
									>
										<img src={UserIcon} alt="User-Icon" />
										<p>{message.desc}</p>
									</div>
								);
							})}
						</div>
						<hr />
						<div className="write">
							<textarea
								placeholder="Write a message"
								value={message}
								onChange={(e) => setMessage(e.target.value)}
							/>
							<button
								className="send-msg"
								onClick={() => {
									HandleCreateMessage();
								}}
							>
								Send
							</button>
						</div>
					</div>
				</div>
			)}
			<Footer />
		</>
	);
};

export default Message;
