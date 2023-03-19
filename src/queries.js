export const getDailyCodingChallenge = () => {
    return {
        query: `
            query questionOfToday {
                activeDailyCodingChallengeQuestion {
                    date
                    userStatus
                    link
                    question {
                        acRate
                        difficulty
                        freqBar
                        frontendQuestionId: questionFrontendId
                        isFavor
                        paidOnly: isPaidOnly
                        status
                        title
                        titleSlug
                        hasVideoSolution
                        hasSolution
                        topicTags {
                            name
                            id
                            slug
                        }
                    }
                }
            }`,
    };
};

export const getQuestionDetails = (questionNameSlug) => {
    return {
        query: `
            query questionData($titleSlug: String!) {
            question(titleSlug: $titleSlug) {
                questionId
                questionFrontendId
                boundTopicId
                title
                titleSlug
                content
                translatedTitle
                translatedContent
                isPaidOnly
                canSeeQuestion
                difficulty
                likes
                dislikes
                isLiked
                similarQuestions
                exampleTestcases
                categoryTitle
                contributors {
                username
                profileUrl
                avatarUrl
                __typename
                }
                topicTags {
                name
                slug
                translatedName
                __typename
                }
                companyTagStats
                codeSnippets {
                lang
                langSlug
                code
                __typename
                }
                stats
                hints
                solution {
                id
                canSeeDetail
                paidOnly
                hasVideoSolution
                paidOnlyVideo
                __typename
                }
                status
                sampleTestCase
                metaData
                judgerAvailable
                judgeType
                mysqlSchemas
                enableRunCode
                enableTestMode
                enableDebugger
                envInfo
                libraryUrl
                adminUrl
                challengeQuestion {
                id
                date
                incompleteChallengeCount
                streakCount
                type
                __typename
                }
                __typename
            }
        }`,
        variables: {
            titleSlug: `${questionNameSlug}`,
        },
    };
};

export const getCompanyDetails = () => {
    return {
        query: `
        query interviewOptions {
                interviewed {
                    interviewedUrl
                    companies {
                        id
                        name
                        slug
                        __typename
                    }
                    timeOptions {
                        id
                        name
                        __typename
                    }
                    stageOptions {
                        id
                        name
                        __typename
                    }
                    __typename
                }
            }
    `,
    };
};

export const getStates = (userName) => {
    return {
        query: `
            {
                matchedUser(username: "${userName}") {
                    username
                    submitStats: submitStatsGlobal {
                        acSubmissionNum {
                            difficulty
                            count
                            submissions
                        }
                    }
                }
            }
        `,
    };
};

export const getAllProblems = (limitQuestion) => {
    return {
        query: `
           query problemsetQuestionList(
                $categorySlug: String,
                $limit: Int,
                $skip: Int,
                $filters: QuestionListFilterInput
                ) {
                problemsetQuestionList: questionList(
                    categorySlug: $categorySlug,
                    limit: $limit,
                    skip: $skip,
                    filters: $filters
                ) {
                    total: totalNum
                    questions: data {
                    acRate
                    difficulty
                    freqBar
                    frontendQuestionId: questionFrontendId
                    isFavor
                    paidOnly: isPaidOnly
                    status
                    title
                    titleSlug
                    topicTags {
                        name
                        id
                        slug
                    }
                    hasSolution
                    hasVideoSolution
                    }
                }
            }
        `,
        variables: {
            categorySlug: "",
            filters: {},
            limit: limitQuestion,
            skip: 0,
        },
    };
};

export const getTotal = () => {
    return {
        query: `
          query problemsetQuestionList(
            $categorySlug: String,
            $limit: Int,
            $skip: Int,
            $filters: QuestionListFilterInput
            ) {
            problemsetQuestionList: questionList(
                categorySlug: $categorySlug,
                limit: $limit,
                skip: $skip,
                filters: $filters
            ) {
                total: totalNum
            }
            }

 `,
        variables: {
            categorySlug: "",
            filters: {},
            limit: 50,
            skip: 0,
        },
    };
};
