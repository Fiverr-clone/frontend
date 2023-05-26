import { FunctionComponent } from "react";

import "./addGig.css";

interface AddGigNotesProps {}

const AddGigNotes: FunctionComponent<AddGigNotesProps> = () => {
	return (
		<>
			<div className="AddServiceNotes">
				<h1 className="AddServiceNotes_title1">
					Add your Gig and start earning
				</h1>
				<p className="AddServiceNotes_parag">
					Fiverr allows you to make profits by adding Gigs that you are good at
					implementing and making them available for sale to interested
					customers. Enter the Gig details carefully for the Fiverr team to
					review and publish.
				</p>
				<h1 className="AddServiceNotes_title1">
					Tips for adding the correct Gig{" "}
				</h1>
				<h2 className="AddServiceNotes_title2"> Gig address</h2>
				<p className="AddServiceNotes_parag">
					Choose a short and clear title that reflects exactly what you will
					provide in your Gig, so that buyers can find it when they search for
					words related to the field of Gig.
				</p>
				<h2 className="AddServiceNotes_title2">Gig description</h2>
				<p className="AddServiceNotes_parag">
					Write a distinct description of the Gig in proper language without
					errors, during which you explain in detail what the customer will
					receive when purchasing the Gig.
				</p>
				<h2 className="AddServiceNotes_title2">Gig gallery</h2>
				<p className="AddServiceNotes_parag">
					Add an expressive picture of the Gig, in addition to at least three
					exclusive forms through which the buyer will know your work style and
					skills.
				</p>
				<h2 className="AddServiceNotes_title2">Gig price</h2>
				<p className="AddServiceNotes_parag">
					Be sure to set an appropriate price for the Gig based on the volume of
					work and effort, taking into account the commission of the site, and
					set an appropriate delivery period to complete the Gig perfectly.
				</p>
			</div>
		</>
	);
};
export default AddGigNotes;
