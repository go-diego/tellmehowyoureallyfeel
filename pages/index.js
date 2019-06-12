import React from "react";
import styled from "styled-components";
import Layout from "../containers/Layout";
import Rating from "../components/Rating";
import Notification from "../components/Notification";
import Airtable from "../api/airtable.api";

const airtable = new Airtable();

const QuestionContainer = styled.div`
    padding: 2.5rem 0;
`;

class HomePage extends React.Component {
    state = {
        activeQuestion: null,
        isNotificationOn: false
    };

    showNotification = () => {
        this.setState({ isNotificationOn: true });
    };

    hideNotification = () => {
        this.setState({ isNotificationOn: false });
    };

    async componentDidMount() {
        const questionRecord = await airtable.getActiveQuestion();
        const question = questionRecord.records[0];
        if (question) this.setState({ activeQuestion: question });
    }

    render() {
        const { activeQuestion, isNotificationOn } = this.state;
        return (
            <Layout>
                <section className="hero is-bold is-primary is-fullheight">
                    <div className="hero-body">
                        <div className="container has-text-centered">
                            <div>
                                <img
                                    style={{
                                        width: 300
                                    }}
                                    src="https://www.bgcofcv.org/assets/images/hero-logo.png"
                                    alt="Logo"
                                />
                                {(!isNotificationOn && (
                                    <QuestionContainer>
                                        {(() => {
                                            if (activeQuestion) {
                                                switch (
                                                    activeQuestion.fields
                                                        .QuestionType
                                                ) {
                                                    case "RATING":
                                                        return (
                                                            <Rating
                                                                showNotification={
                                                                    this
                                                                        .showNotification
                                                                }
                                                                {...activeQuestion}
                                                            />
                                                        );
                                                    default:
                                                        return null;
                                                }
                                            }
                                        })()}
                                    </QuestionContainer>
                                )) || (
                                    <Notification
                                        onClose={this.hideNotification}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        );
    }
}

export default HomePage;
