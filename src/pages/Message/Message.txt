import React, { FunctionComponent, FormEvent, useState } from "react";
import { gql, useMutation, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import NavbarCombined from "../../components/navbarCombined/NavbarCombined";
import Loading from "../../components/loading/loading";

interface Message {
	id: string;
	desc: string;
	userId: string;
}

interface Conversation {
	id: string;
	messages: Message[];
}

const GET_MESSAGES = gql`
  query getMessageId($userId: ID!,$conversationId:ID!) {
    message(userId: $userId,
    conversationId:$conversationId) {
          id
          User {
            username
          }
          Conversation {
            id
            seller {
              id
            }
            
            lastMessage
          }
          desc
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
			desc
			
		}
	}
`;

interface MessageProps {}

const Message: FunctionComponent<MessageProps> = () => {
	const { conversationId } = useParams<{ conversationId: string }>();
    const userId =Cookies.get("userId");

	const [createMessage] = useMutation(CREATE_MESSAGE);

	const handleCreateMessage = (
		e: FormEvent<HTMLFormElement>,
		conversationId: string,
		userId: string
	) => {
		e.preventDefault();
		const desc = (e.currentTarget[0] as HTMLTextAreaElement).value;
		createMessage({
			variables: {
				conversationId: conversationId,
				userId: userId,
				desc: desc,
			},
		})
			.then((response) => {
				Swal.fire({
					icon: "success",
					title: "Your message is created",
					// showConfirmButton: false,
					timer: 2000,
				});
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const { loading, error, data } = useQuery(GET_MESSAGES, {
		variables: { userId: userId,conversationId: conversationId },
	});

	if (loading) {
		// Affichage pendant le chargement
		return <Loading />;
	}

	if (error) {
		// Gestion de l'erreur
		return <div>Error occurred.</div>;
	}

	return (
		<>
			<NavbarCombined />
			<div className="message">
				<div className="container">
					<span className="breadcrumbs">
						<Link to="/messages">Messages</Link> / John Doe
					</span>

					<div className="messages">
						{data?.message.conversation.messages.map((m: Message) => (
							<div
								className={m.userId === userId ? "owner item" : "item"}
								key={m.id}
							>
								<img
									src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
									alt=""
								/>
								<p>{m.desc}</p>
							</div>
						))}
					</div>

					<hr />

					<form
						className="write"
						onSubmit={(e) =>
							handleCreateMessage(
								e,
								data?.message.conversation.id,
								userId ?? ""
							)
						}
					>
						<textarea placeholder="write a message" />
						<button type="submit">Send</button>
					</form>
				</div>
			</div>
		</>
	);
};

export default Message;

// import React from "react";
// import { FunctionComponent, useEffect, useState } from "react";
// import {  gql,useMutation, useQuery } from "@apollo/client";
// import { Link, useParams } from "react-router-dom";
// import Cookies from "js-cookie";
// import "./Message.scss";
// import Swal from "sweetalert2";
// import NavbarCombined from "../../components/navbarCombined/NavbarCombined";
// import Loading from "../../components/loading/loading";

// interface Message {
//   id: string;
//   desc: string;
//   userId: string;
// }

// interface Conversation {
//   id: string;
//   messages: Message[];
// }

// const GET_MESSAGES = gql`
// 	query getMessageId($userId: ID!) {
// 		message(userId: $userId) {
// 			id
// 			user {
// 				username
// 			}
// 			conversation {
// 				id
// 				lastMessage
// 			}
// 			desc
// 		}
// 	}
// `;

// const CREATE_MESSAGE = gql`
//   mutation CreateMessage($conversationId: ID!, $userId: ID!, $desc: String!) {
//     createMessage(conversationId: $conversationId, userId: $userId, desc: $desc) {
//       id
//       desc
//       userId
//     }
//   }
// `;

// interface MessageProps {}
// const Message: FunctionComponent<MessageProps> = () => {
// 	const userId = Cookies.get("userId");

// const [createMessage] = useMutation(CREATE_MESSAGE);

// 	const handleCreateMessage = (conversationId: string, userId: string, desc: string) => {
// 		createMessage({
// 			variables: {
// 				conversationId: conversationId,
// 				userId: userId,
// 				desc: desc,
// 			},
// 		})
// 			.then((response) => {
// 				Swal.fire({
// 					icon: "success",
// 					title: "Your message is created",
// 					//showConfirmButton: false,
// 					timer: 2000,
// 				});
// 			})
// 			.catch((error) => {
// 				console.log(error);
// 			});
// 	};

// 	const { loading, error, data } = useQuery(GET_MESSAGES, {
// 		variables: { userId: userId },
// 	});

// 	if (loading) {
// 		// Affichage pendant le chargement
// 		return <div>Loading...</div>;
// 	}

// 	if (error) {
// 		// Gestion de l'erreur
// 		return <div>Error occurred.</div>;
// 	}

// 	if (!data) {
// 		return null;
// 	}
// }

//   return (
//     <>
//           <NavbarCombined />
// 			{loading && <Loading />}
// 			{error && <p>Something went wrong ! </p>}
// 			{!loading && !error && (
//     <div className="message">
//       <div className="container">
//         <span className="breadcrumbs">
//           <Link to="/messages">Messages</Link> / John Doe
//         </span>

//           <div className="messages">
//             {data?.conversation.messages.map((m) => (
//               <div
//                 className={m.userId === currentUser._id ? "owner item" : "item"}
//                 key={m.id}
//               >
//                 <img
//                   src="https://images.pexels.com/photos/270408/pexels-photo-270408.jpeg?auto=compress&cs=tinysrgb&w=1600"
//                   alt=""
//                 />
//                 <p>{m.desc}</p>
//               </div>
//             ))}
//           </div>
//         )}
//         <hr />
//         <form className="write" onSubmit={handleSubmit}>
//           <textarea type="text" placeholder="write a message" />
//           <button type="submit">Send</button>
//         </form>
//       </div>
//     </div>
//     </>
//   );
//             };

// export default Message;
