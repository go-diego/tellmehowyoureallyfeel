import React from "react";
import Airtable from "../api/airtable.api";
import TextAnalytics from "../api/text-analytics.api";

const airtable = new Airtable();
const textAnalytics = new TextAnalytics();

const requiredWordCount = 20;

export default function FreeText(props) {
    const [feedback, setFeedBack] = React.useState(null);

    const {
        onSubmit,
        fields: { Question, QuestionType },
        id
    } = props;

    async function handleSubmit(event) {
        const documents = {
            documents: [
                {
                    language: "en",
                    id: "1",
                    text: feedback
                }
            ]
        };
        const sentimentResponsePromise = textAnalytics.getTextSentiment(
            documents
        );
        const keyPhrasesResponsePromise = textAnalytics.getTextKeyPhrases(
            documents
        );

        const sentimentResponse = await sentimentResponsePromise;
        const keyPhrasesResponse = await keyPhrasesResponsePromise;

        console.log("sentimentResponse", sentimentResponse);
        console.log("keyPhrasesResponse", keyPhrasesResponse);

        // const fields = {
        //     fields: {
        //         QuestionID: id,
        //         QuestionType,
        //         Question,
        //         Answer: feedback,
        //         Sentiment:
        //         KeyPhrases:
        //     }
        // };

        // const response = await airtable.createSubmission(fields);
        // console.log("response", response);

        //onSubmit();
    }

    function handleChange(event) {
        setFeedBack(event.target.value);
    }

    return (
        <div>
            <div className="field">
                <div className="control">
                    <textarea
                        onChange={handleChange}
                        className="textarea is-medium"
                        placeholder="Tell us how you really feel"
                    />
                </div>
                <small>{`${(feedback && feedback.length) ||
                    0}/${requiredWordCount}`}</small>
            </div>
            <button
                onClick={handleSubmit}
                disabled={!feedback || feedback.length < requiredWordCount}
                className={`button is-light is-uppercase}`}>
                Submit
            </button>
        </div>
    );
}
