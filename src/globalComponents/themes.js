const darkTheme = {
    type: "dark",
    primaryColor: "#FFFFFF",
    secondaryColor: "#eb4a4c",
    borderColor: "#ffffff",
    textColor: "#FFFFFF",
    backgroundColor: "#1c1c1c",
    cardBackgroundColor:"#232323"
}

const lightTheme = {
    type: "light",
    primaryColor: "#000000",
    secondaryColor: "#eb4a4c",
    borderColor: "#1c1c1c",
    textColor: "#000000",
    backgroundColor: "#FFFFFF",
    cardBackgroundColor:"#f7f7f7"
}

export const themesList = {
    light: {
        ...lightTheme
    },
    dark: {
        ...darkTheme
    }
}
let themeName = "dark"; //default value
export const getThemeName = () => {
    return themeName;
}

export const getTheme = (tName) => {
    if(tName){
        themeName = tName;
        return themesList[tName] ? themesList[tName] : themesList["dark"];
    }

    return themesList["dark"];
}