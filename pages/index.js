import Emoji from "react-emoji-render";
import styled from "styled-components";
import Layout from "../containers/Layout";

const QuestionContainer = styled.div`
    padding: 2.5rem 0;
`;

export default function HomePage() {
    return (
        <Layout>
            <section className="hero is-bold is-primary is-fullheight">
                <div className="hero-head">
                    <header className="navbar">
                        <div className="container">
                            <div className="navbar-brand">
                                {/* <a className="navbar-item">
                                    <img
                                        style={{
                                            width: 200,
                                            height: "auto",
                                            maxHeight: "auto"
                                        }}
                                        src="https://www.bgcofcv.org/assets/images/hero-logo.png"
                                        alt="Logo"
                                    />
                                </a> */}
                                {/* <span
                                    className="navbar-burger burger"
                                    data-target="navbarMenuHeroC">
                                    <span />
                                    <span />
                                    <span />
                                </span> */}
                            </div>
                            {/* <div id="navbarMenuHeroC" className="navbar-menu">
                                <div className="navbar-end">
                                    <a className="navbar-item is-active">
                                        Home
                                    </a>
                                    <a className="navbar-item">Examples</a>
                                    <a className="navbar-item">Documentation</a>
                                    <span className="navbar-item">
                                        <a className="button is-success is-inverted">
                                            <span className="icon">
                                                <i className="fab fa-github" />
                                            </span>
                                            <span>Download</span>
                                        </a>
                                    </span>
                                </div>
                            </div> */}
                        </div>
                    </header>
                </div>

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
                            <QuestionContainer>
                                <h1 className="title">How did we do today?</h1>

                                <div className="buttons are-large is-flex is-justify-content-center">
                                    <a className="button">
                                        <span className="icon is-medium">
                                            <Emoji text=":heart_eyes:" />
                                        </span>
                                    </a>
                                    <a className="button">
                                        <span className="icon is-medium">
                                            <Emoji text=":smile:" />
                                        </span>
                                    </a>
                                    <a className="button">
                                        <span className="icon is-medium">
                                            <Emoji text=":neutral_face:" />
                                        </span>
                                    </a>
                                    <a className="button">
                                        <span className="icon is-medium">
                                            <Emoji text=":unamused:" />
                                        </span>
                                    </a>
                                    <a className="button">
                                        <span className="icon is-medium">
                                            <Emoji text=":confounded:" />
                                        </span>
                                    </a>
                                </div>
                            </QuestionContainer>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
}
