import React from "react";
import Airtable from "../api/airtable.api";

const airtable = new Airtable();

export default function FreeText(props) {
    const [feedback, setFeedBack] = React.useState(null);

    const {
        onSubmit,
        fields: { Question, QuestionType },
        id
    } = props;

    async function handleSubmit(event) {
        const fields = {
            fields: {
                QuestionID: id,
                QuestionType,
                Question,
                Answer: feedback
            }
        };

        // const response = await airtable.createSubmission(fields);
        // console.log("response", response);
        onSubmit();
        event.preventDefault();
    }

    function handleChange(event) {
        setFeedBack(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="field">
                <div className="control">
                    <textarea
                        onChange={handleChange}
                        className="textarea is-medium"
                        placeholder="Tell us how you really feel"
                    />
                </div>
            </div>
            <button class="button is-light is-uppercase">Submit</button>
        </form>
    );
}
