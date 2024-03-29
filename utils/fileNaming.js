export const getFileName = (fileName, nameType, extension) => {
	if (nameType === "title") {
		return `${titleCase(fileName)}.${extension}`;
	} else if (nameType === "snake") {
		return `${snakeCase(fileName)}.${extension}`;
	} else {
		return `${camelCase(fileName)}.${extension}`;
	}
};

let snakeCase = (fileName) => {
	fileName = fileName.replace(/\W/g, " ");
	return fileName
		.split(" ")
		.map((s) => {
			return isUpper(s) ? s : s.charAt(0).toLowerCase() + s.slice(1);
		})
		.join("_");
};

const titleCase = (fileName) => {
	fileName = fileName.replace(/\W/g, " ");
	return fileName
		.split(" ")
		.map((s) => {
			return isUpper(s) ? s : s.charAt(0).toUpperCase() + s.slice(1);
		})
		.join("");
};

const camelCase = (fileName) => {
	fileName = fileName.replace(/\W/g, " ");
	return fileName
		.split(" ")
		.map((s, i) => {
			if (i == 0) {
				return isUpper(s) ? s : s.charAt(0).toLowerCase() + s.slice(1);
			} else {
				return isUpper(s) ? s : s.charAt(0).toUpperCase() + s.slice(1);
			}
		})
		.join("");
};

const isUpper = (str) => {
	return str === str.toUpperCase();
};
