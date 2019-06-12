import Emoji from "react-emoji-render";
import styled from "styled-components";

const StyledEmoji = styled(Emoji)`
    font-size: 2rem;
    padding-right: 0.5rem;
`;

const NotificationContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const StyledNotification = styled.div`
    margin-top: 2rem;
`;

const FEEDBACK_MESSAGES = [
    {
        message: "Thank you Earthling. Your feedback has been received",
        emoji: ":alien:"
    },
    {
        message: "You.Are.Awesome! Thanks for your feedback",
        emoji: ":+1:"
    },
    {
        message: "Your insight is the cat's meow",
        emoji: ":heart_eyes_cat:"
    },
    {
        message: "You're the bees' knees! Thanks for your feedback",
        emoji: ":honeybee:"
    },
    {
        message: "You are the cat's pajamas! Thanks for your feedback",
        emoji: ":smile_cat:"
    },
    {
        message: "Double high five for your awesomeness",
        emoji: ":raised_hands:"
    },
    {
        message: "Mooochas gracias!",
        emoji: ":cow:"
    },
    {
        message: "Whoah you're cool! Thanks for your feedback",
        emoji: ":sunglasses:"
    },
    {
        message: "Congratulations! We received your feedback!",
        emoji: ":clap:"
    }
];

export default function Notification({ onClose }) {
    const feedbackMessage =
        FEEDBACK_MESSAGES[Math.floor(Math.random() * FEEDBACK_MESSAGES.length)];
    return (
        <StyledNotification className="notification is-dark">
            <button
                onClick={onClose}
                className="delete is-danger button is-large"
            />
            <NotificationContent>
                <StyledEmoji text={feedbackMessage.emoji} />
                <p className="title is-size-4 is-size-6-mobile">
                    {feedbackMessage.message}
                </p>
            </NotificationContent>
        </StyledNotification>
    );
}
