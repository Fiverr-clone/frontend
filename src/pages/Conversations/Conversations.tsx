import React, { FunctionComponent, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Conversations.css";
import { gql, useMutation, useQuery } from "@apollo/client";
import NavbarCombined from "../../components/navbarCombined/NavbarCombined";
import Footer from "../../components/footerComponent/footer";
import Cookies from "js-cookie";
import Loading from "../../components/loading/loading";

const GET_CONVERSATIONS = gql`
	query getAllConversations($userId: ID!) {
		conversationsByUserId(userId: $userId) {
			id
			lastMessage
			readByUser
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
`;

const COMPLETE_ORDER = gql`
	mutation UpdateConversation($id: ID!) {
		updateConversation(id: $id) {
			id
			readByUser
		}
	}
`;

interface ConversationsProps {}

const Conversations: FunctionComponent<ConversationsProps> = () => {
	const navigate = useNavigate();
	const userId = Cookies.get("userId");
	const [updateConversation] = useMutation(COMPLETE_ORDER);

	const [msgRead, setMsgRead] = useState<boolean[]>([]);
	const { loading, error, data } = useQuery(GET_CONVERSATIONS, {
		variables: { userId: userId },
	});

	useEffect(() => {
		if (data) {
			const initialReadStatus = data.conversationsByUserId.map(
				(conv: any) => conv.readByUser
			);
			setMsgRead(initialReadStatus);
		}
	}, [data]);

	const HandleRead = (index: number, id: String) => {
		updateConversation({
			variables: {
				id,
			},
		})
			.then((response) => {
				setMsgRead((prevState) => {
					const updatedReadStatus = [...prevState];
					updatedReadStatus[index] = !updatedReadStatus[index];
					return updatedReadStatus;
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const HandleConversation = (conversationId: String) => {
		navigate(`/conversation/${conversationId}`);
	};

	if (!data) {
		return null;
	}

	return (
		<>
			<NavbarCombined />
			{loading && <Loading />}
			{error && <p>Something went wrong ! </p>}
			{!loading && !error && (
				<div className="messages">
					<div className="container">
						<div className="title">
							<h1>Conversations</h1>
						</div>
						<table>
							<thead>
								<tr>
									<th>Username</th>
									<th>Last Message</th>
									<th>Date</th>
									<th></th>
								</tr>
							</thead>
							<tbody>
								{data.conversationsByUserId.map((conv: any, index: number) => (
									<tr className="active" key={conv.id}>
										<td onClick={() => HandleConversation(conv.id)}>
											{conv.receiver.username}
										</td>
										<td onClick={() => HandleConversation(conv.id)}>
											{conv.lastMessage}
										</td>
										<td onClick={() => HandleConversation(conv.id)}>
											2 hours ago
										</td>
										{msgRead[index] ? (
											<td>
												<p>Read</p>
											</td>
										) : (
											<td>
												<button
													className="btn-read"
													onClick={() => HandleRead(index, conv.id)}
												>
													Mark as Read
												</button>
											</td>
										)}
									</tr>
								))}
							</tbody>
						</table>
					</div>
				</div>
			)}
			<Footer />
		</>
	);
};

export default Conversations;
