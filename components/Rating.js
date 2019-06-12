import React from "react";
import Emoji from "react-emoji-render";
import Airtable from "../api/airtable.api";

const airtable = new Airtable();

export default function Rating(props) {
    const {
        onSubmitting,
        onSubmit,
        fields: { Question, QuestionType },
        id
    } = props;

    async function handleSubmit(event) {
        onSubmitting();
        const value = event.currentTarget.getAttribute("data-value");
        const fields = {
            fields: {
                QuestionID: id,
                QuestionType,
                Question,
                Answer: value
            }
        };

        const response = await airtable.createSubmission(fields);
        console.log("response", response);
        onSubmit();
    }

    return (
        <div className="buttons are-large is-flex is-justify-content-center">
            <a data-value="5" className="button" onClick={handleSubmit}>
                <span className="icon is-medium">
                    <Emoji text=":heart_eyes:" />
                </span>
            </a>
            <a data-value="4" className="button" onClick={handleSubmit}>
                <span className="icon is-medium">
                    <Emoji text=":smile:" />
                </span>
            </a>
            <a data-value="3" className="button" onClick={handleSubmit}>
                <span className="icon is-medium">
                    <Emoji text=":neutral_face:" />
                </span>
            </a>
            <a data-value="2" className="button" onClick={handleSubmit}>
                <span className="icon is-medium">
                    <Emoji text=":unamused:" />
                </span>
            </a>
            <a data-value="1" className="button" onClick={handleSubmit}>
                <span className="icon is-medium">
                    <Emoji text=":confounded:" />
                </span>
            </a>
        </div>
    );
}
