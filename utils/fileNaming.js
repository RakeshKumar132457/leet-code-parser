export const getFileName = (fileName, nameType, extension) => {
	if (nameType === "title") {
		return `${titleCase(fileName)}.${extension}`;
	} else if (nameType === "snake") {
		return `${snakeCase(fileName)}.${extension}`;
	} else {
		return `${camelCase(fileName)}.${extension}`;
	}
};

const snakeCase = (fileName) => {
	return fileName
		.split(" ")
		.map((s, i) => {
			return s.charAt(0).toLowerCase() + s.slice(1);
		})
		.join("_");
};

const titleCase = (fileName) => {
	return fileName
		.split(" ")
		.map((s, i) => {
			return s.charAt(0).toUpperCase() + s.slice(1);
		})
		.join("");
};

const camelCase = (fileName) => {
	return fileName
		.split(" ")
		.map((s, i) => {
			if (i == 0) {
				return s.charAt(0).toLowerCase() + s.slice(1);
			} else {
				return s.charAt(0).toUpperCase() + s.slice(1);
			}
		})
		.join("");
};
