import fs, { closeSync } from "fs";
import path from "path";

import { fetchQuestion } from "./fetchData.js";
import { getFileName } from "../utils/fileNaming.js";
import { getLanguageInfo } from "../utils/languageInfo.js";
import { getAllProblems, getDailyCodingChallenge, getQuestionDetails, getTotal, } from "./queries.js";

export const getDailyProblem = async (dirPath, langList) => {
    const dailyQ = await fetchQuestion(getDailyCodingChallenge());
    const { data: { activeDailyCodingChallengeQuestion: { question } } } = await dailyQ.json();
    const slugTitle = question.titleSlug;

    const questionDetails = await fetchQuestion(getQuestionDetails(slugTitle));
    const quesDataPrimary = await questionDetails.json();

    const quesData = quesDataPrimary.data.question;
    const codeSnippets = quesData.codeSnippets;

    const fileContents = codeSnippets.filter((code) => {
        return langList.has(code.langSlug);
    });

    fileContents.forEach((code) => {
        const { extension, nameType } = getLanguageInfo(code.langSlug);
        const fileName = getFileName(question.title, nameType, extension);
        fs.writeFile(path.join(dirPath, fileName), code.code, (err) => {
            console.log(err);
        });
    });
};

export const mapAllProblems = async (fileName) => {
    const totalQues = await fetchQuestion(getTotal());
    const { data: { problemsetQuestionList: { total } } } = await totalQues.json();

    const getTotalQues = await fetchQuestion(getAllProblems(total));
    const { data: { problemsetQuestionList: { questions }, }, } = await getTotalQues.json();

    const TEMP_PATH = path.join(process.cwd(), "temp", `${fileName}.json`);

    fs.writeFile(TEMP_PATH, JSON.stringify(questions), (err) => {
        console.log(err);
    });
};
