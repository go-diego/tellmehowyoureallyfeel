import React from "react";
import Layout from "../containers/Layout";
import Question from "../components/Question";
import Notification from "../components/Notification";
import Airtable from "../api/airtable.api";

const airtable = new Airtable();

class HomePage extends React.Component {
    state = {
        question: null,
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
        if (question) this.setState({ question });
    }

    render() {
        const { question, isNotificationOn } = this.state;
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
                                    <Question
                                        question={question}
                                        onSubmit={this.showNotification}
                                    />
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
