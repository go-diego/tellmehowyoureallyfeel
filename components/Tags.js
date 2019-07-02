import React from "react";
import Airtable from "../api/airtable.api";
import { CITIES } from "../constants/cities";

const airtable = new Airtable();

export default function Tags(props) {
    const {
        onSubmitting,
        onSubmit,
        fields: { Question, QuestionType, ID },
        id
    } = props;

    let items;
    if (ID === 4) {
        items = CITIES;
    }

    async function handleSubmit(event) {
        onSubmitting();
        const value = event.target.name;
        const fields = {
            fields: {
                QuestionID: id,
                QuestionType,
                Question,
                Answer: value
            }
        };

        const response = await airtable.createSubmission(fields);
        onSubmit();
    }

    return (
        <div className="tags are-large">
            {items.map((item, i) => (
                <a
                    key={i}
                    name={item}
                    className="tag is-rounded"
                    onClick={handleSubmit}>
                    {item}
                </a>
            ))}
        </div>
    );
}
