import ky from "ky/umd";

export default function TextAnalytics() {
    // TODO: create ky instance and define urlPreffix
    const baseOptions = {
        headers: {
            "Content-Type": "application/json",
            "Ocp-Apim-Subscription-Key": process.env.PAPAYA_KEY1
        }
    };

    async function getTextSentiment(body) {
        const url = `${process.env.PAPAYA_URL}/sentiment`;
        const options = {
            ...baseOptions,
            json: body
        };
        const response = await ky.post(url, options).json();
        return response;
    }

    async function getTextKeyPhrases(body) {
        const url = `${process.env.PAPAYA_URL}/keyPhrases`;
        const options = {
            ...baseOptions,
            json: body
        };
        const response = await ky.post(url, options).json();
        return response;
    }

    return Object.freeze({
        getTextSentiment,
        getTextKeyPhrases
    });
}
