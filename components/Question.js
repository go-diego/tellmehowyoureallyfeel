import React from "react";
import styled from "styled-components";
import Rating from "../components/Rating";
import FreeText from "../components/FreeText";
import Loader from "../components/Loader";

const QuestionContainer = styled.div`
    padding: 2.5rem 0;
`;

export default function Question(props) {
    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [isLoading, setIsLoading] = React.useState(true);

    const { onSubmit, question } = props;
    if (question) {
        setTimeout(() => setIsLoading(false), 1500);
    }

    function onSubmitting() {
        setIsSubmitting(true);
    }

    function handleSubmit() {
        onSubmit();
        setIsSubmitting(false);
    }

    return (
        (!isSubmitting && !isLoading && question && (
            <QuestionContainer>
                <h1 className="title">{question.fields.Question}</h1>
                <div>
                    {(() => {
                        switch (question.fields.QuestionType) {
                            case "RATING":
                                return (
                                    <Rating
                                        onSubmitting={onSubmitting}
                                        onSubmit={handleSubmit}
                                        {...question}
                                    />
                                );
                            case "FREE_TEXT":
                                return (
                                    <FreeText
                                        onSubmit={handleSubmit}
                                        {...question}
                                    />
                                );
                            default:
                                return null;
                        }
                    })()}
                </div>
            </QuestionContainer>
        )) || <Loader />
    );
}
