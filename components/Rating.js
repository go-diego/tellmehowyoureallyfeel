import React from "react";
import Emoji from "react-emoji-render";
import Airtable from "../api/airtable.api";

const airtable = new Airtable();

export default function Rating(props) {
    const [isProcessing, setIsProcessing] = React.useState(false);

    const {
        showNotification,
        fields: { Question, QuestionType },
        id
    } = props;

    async function handleClick(event) {
        setIsProcessing(true);
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
        setTimeout(() => setIsProcessing(false), 3000);
        setTimeout(() => showNotification(), 3000);
    }

    return (
        (!isProcessing && (
            <React.Fragment>
                <h1 className="title">{Question}</h1>
                <div className="buttons are-large is-flex is-justify-content-center">
                    <a data-value="5" className="button" onClick={handleClick}>
                        <span className="icon is-medium">
                            <Emoji text=":heart_eyes:" />
                        </span>
                    </a>
                    <a data-value="4" className="button" onClick={handleClick}>
                        <span className="icon is-medium">
                            <Emoji text=":smile:" />
                        </span>
                    </a>
                    <a data-value="3" className="button" onClick={handleClick}>
                        <span className="icon is-medium">
                            <Emoji text=":neutral_face:" />
                        </span>
                    </a>
                    <a data-value="2" className="button" onClick={handleClick}>
                        <span className="icon is-medium">
                            <Emoji text=":unamused:" />
                        </span>
                    </a>
                    <a data-value="1" className="button" onClick={handleClick}>
                        <span className="icon is-medium">
                            <Emoji text=":confounded:" />
                        </span>
                    </a>
                </div>
            </React.Fragment>
        )) || (
            <React.Fragment>
                <p>Magic is happening...</p>
                <progress className="progress is-small is-danger" max="100">
                    15%
                </progress>
            </React.Fragment>
        )
    );
}
