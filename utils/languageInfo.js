export const getLanguageInfo = (ext) => {
    const extObj = {
        c: { languageName: "c", extension: "c", nameType: "camel" },
        cpp: { languageName: "cpp", extension: "cpp", nameType: "camel" },
        golang: { languageName: "golang", extension: "go", nameType: "camel" },
        java: { languageName: "java", extension: "java", nameType: "title" },
        javascript: { languageName: "javascript", extension: "js", nameType: "camel", },
        python3: { languageName: "python3", extension: "py", nameType: "camel", },
        rust: { languageName: "rust", extension: "rs", nameType: "snake" },
        typescript: { languageName: "typescript", extension: "ts", nameType: "camel", },
    };
    const extMap = new Map(Object.entries(extObj));
    return extMap.get(ext);
};
