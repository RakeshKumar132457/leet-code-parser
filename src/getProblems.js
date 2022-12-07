import fs from "fs";
import path from "path";

import { fetchQuestion } from "./fetchData.js";
import { getFileName } from "../utils/fileNaming.js";
import { getLanguageInfo } from "../utils/languageInfo.js";
import { getDailyCodingChallenge, getQuestionDetails } from "../src/queries.js";

export const getDailyProblem = async (dirPath, langList) => {
	const {
		data: {
			activeDailyCodingChallengeQuestion: { question },
		},
	} = await fetchQuestion(getDailyCodingChallenge());

	const slugTitle = question.titleSlug;

	const questionDetails = await fetchQuestion(getQuestionDetails(slugTitle));

	const quesData = questionDetails.data.question;
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
