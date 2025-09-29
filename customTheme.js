const config = require('./config.json');

module.exports = (FCADE) => { runPlugin(FCADE) };

const defaultGeneralConfig = {		
    "--errorColor": "#ff0031",
	"--patreonUserColor": "#f5b50e",
	"--devUserColor": "#f5b50e",
	"--state-online": "#59b240",
	"--state-away": "#ef9f00"
}

const defaultWindowConfig = {
    "--mainColor": "#351b30",
	"--accentColor": "#33f1e5",
	"--accentColor2": "#ff007a",
	"--mainColor-light": "#5e3550",
	"--mainColor-dark": "#260f23",
	"--mainColor-lighter": "#854b71",
	"--mainColor-lightest": "#d8bace",
	"--mainColor-darker": "#140812",
	"--mainColor-lightest-trans-hi": "rgba(216,186,206,.7)",
	"--mainColor-lightest-trans-md": "rgba(216,186,206,.5)",
	"--mainColor-dark-trans-lo": "rgba(38,15,35,.3)",
	"--mainColor-darker-trans-hi": "rgba(20,8,18,.7)",
	"--mainColor-darker-trans-lo": "rgba(20,8,18,.3)"
}

const runPlugin = (FCADE) => {
    applyCustomColors(FCADE, config.customThemeGeneralConfig, config.customThemeWindowConfig);
}

const applyCustomColors = (FCADE, customThemeGeneralConfig, customThemeWindowConfig) => {
    if (!customThemeGeneralConfig) {
        console.log("Can't load custom general theme config! Defaulting")
        customThemeGeneralConfig = defaultGeneralConfig
    }
    if (!customThemeWindowConfig) {
        console.log("Can't load custom window theme config! Defaulting")
        customThemeWindowConfig = defaultWindowConfig
    }
    console.log(customThemeGeneralConfig)
    console.log(customThemeWindowConfig)

    //Fightcade uses two stylesheets, so pick the first one
    const stylesheet = document.styleSheets[0];
    //There are way too many rules, so choose index 92 for general colors and 93 for window colors
    const generalColors = stylesheet.cssRules[92].style;
    const windowColors = stylesheet.cssRules[93].style;
    Object.entries(customThemeGeneralConfig).forEach(color => {
        const [key, value] = color;
        generalColors.setProperty(key, value);
    });
    console.log("Applied general colors for custom theme.")
    Object.entries(customThemeWindowConfig).forEach(color => {
        const [key, value] = color;
        windowColors.setProperty(key, value);
    });
    console.log("Applied window colors for custom theme.")    
}