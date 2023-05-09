import { FunctionComponent } from "react";

import "./AddService.css";

interface AddServiceNotesProps {}

const AddServiceNotes: FunctionComponent<AddServiceNotesProps> = () => {
	return (<>
    <div className="AddServiceNotes" >
        <h1 className="AddServiceNotes_title1">Add your service and start earning</h1>
        <p className="AddServiceNotes_parag">Fiverr allows you to make profits by adding services that you are good at implementing and making them available for sale to interested customers. Enter the service details carefully for the Fiverr team to review and publish.
        </p>
        <h1 className="AddServiceNotes_title1">Tips for adding the correct service </h1>
        <h2 className="AddServiceNotes_title2"> Service address</h2>
        <p className="AddServiceNotes_parag">Choose a short and clear title that reflects exactly what you will provide in your service, so that buyers can find it when they search for words related to the field of service.
</p>
        <h2 className="AddServiceNotes_title2">Service description</h2>
        <p className="AddServiceNotes_parag">Write a distinct description of the service in proper language without errors, during which you explain in detail what the customer will receive when purchasing the service.

        </p>
        <h2 className="AddServiceNotes_title2">Service gallery</h2>
        <p className="AddServiceNotes_parag">Add an expressive picture of the service, in addition to at least three exclusive forms through which the buyer will know your work style and skills.
        </p>
        <h2 className="AddServiceNotes_title2">Service price</h2>
        <p className="AddServiceNotes_parag">Be sure to set an appropriate price for the service based on the volume of work and effort, taking into account the commission of the site, and set an appropriate delivery period to complete the service perfectly.
        </p>
       
    </div>
    	</>
	);
};
export default AddServiceNotes;