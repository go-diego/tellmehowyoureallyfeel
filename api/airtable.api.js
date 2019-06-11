import ky from "ky/umd";

export default function Airtable() {
    // TODO: create ky instance and define urlPreffix
    const baseUrl = "https://api.airtable.com/v0";
    const QUESTIONS_BASE = "appMCSWRv9HqlvajJ";
    const ANSWERS_BASE = "appMCSWRv9HqlvajJ";
    const baseOptions = {
        headers: { Authorization: `Bearer ${process.env.ATKEY}` }
    };
    async function getActiveQuestion() {
        const url = `${baseUrl}/${QUESTIONS_BASE}/Questions?filterByFormula=NOT({isActive} = FALSE())`;
        const response = await ky.get(url, baseOptions).json();
        return response;
    }

    async function getAnswerType(answerTypeId) {
        const url = `${baseUrl}/${ANSWERS_BASE}/Answers/${answerTypeId}`;
        const response = await ky.get(url, baseOptions).json();
        return response;
    }

    return Object.freeze({
        getActiveQuestion,
        getAnswerType
    });
}
