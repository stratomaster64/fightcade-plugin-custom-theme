# fightcade-plugin-custom-theme

Plugin to customize a theme for your Fightcade client, if the included themes are not exactly to your liking. Note that this will override your default theme.

## Installation

This plugin requires nmur's [fightcade-plugin-manager](https://github.com/nmur/fightcade-plugin-manager), so download and install that first.
From there, insert the `customTheme.js` into your plugin directory, which is located at `Fightcade/fc2-electron/resources/app/inject/plugins` by default.
Additionally, please make sure that your `config.json` contains the following:
```json
	"customThemeGeneralConfig": {
		"--errorColor": "#ff0031",
		"--patreonUserColor": "#f5b50e",
		"--devUserColor": "#f5b50e",
		"--state-online": "#59b240",
		"--state-away": "#ef9f00"
    },
    "customThemeWindowConfig": {
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
```
The colors shown in this example are the colors used in the Fightcade default theme.

## About Colors
This plugin interacts with the stylesheets of the web document that Fightcade uses (since it is an Electron application, which just runs a web browser). As such, colors are expected to be represented in hex format, like #123456.
RGBA values for transparency colors are formatted as `rgba(r,g,b,a)`. `a` should be a decimal between 0.0 and 1.0.

| type                        | description                                                                                                           | default color    |
| --------------------------- | --------------------------------------------------------------------------------------------------------------------- | ---------------- |
| errorColor                  | Color for error text                                                                                                  | ff0031           |
| patreonUserColor            | Color for Patreon user display names                                                                                  | f5b50e           |
| devUserColor                | Color for Fightcade dev display names                                                                                 | f5b50e           |
| state-online                | Color for status indicator when not away                                                                              | 59b240           |
| state-away                  | Color for status indicator when away                                                                                  | ef9f00           |
| mainColor                   | Main background color for client                                                                                      | 351b30           |
| accentColor                 | Primary accent color (logo, highlights/selects)                                                                       | 33f1e5           |
| accentColor2                | Secondary accent color (links, chat mentions)                                                                         | ff007a           |
| mainColor-light             | Complements main color, handles chat/channel sidebar borders. should be lighter than mainColor                        | 5e3550           |
| mainColor-dark              | Complements main color, handles fills for main areas. should be darker than mainColor                                 | 260f23           |
| mainColor-lighter           | Complements main color, handles text in side areas. should be lighter that mainColor-light                            | 854b71           |
| mainColor-lightest          | Complements main color, handles text in MOTD. should be lighter than mainColor-lighter                                | d8bace           |
| mainColor-darker            | Complements main color, handles shading of "FIGHTCADE" logo in about page. should be darker than mainColor-dark       | 260f23           |
| mainColor-lightest-trans-hi | Transparent color mask for mainColor-lightest, handles text in channel title, player list. Transparency is usually .7 | (216,186,206,.7) |
| mainColor-lightest-trans-md | Same as above, but more opaque. Handles chat timestamps. Transparency is usually .5                                   | (216,186,206,.5) |
| mainColor-dark-trans-lo     | Transparent color mask for mainColor-dark, handles inactive window space. Transparency is usually .3                  | (38,15,35,.3)    |
| mainColor-darker-trans-hi   | Transparent color mask for mainColor-darker, handles some shading in about page. Transparency is usually .7           | (20,8,18,.7)     |
| mainColor-darker-trans-lo   | Same as above, but more opaque. Handles button shadows. Transparency is usually .3                                    | (20,8,18,.7)     |

Based on the raw values:
- `mainColor-light` is ~10% brighter than `mainColor`, `lighter` is ~25% and `lightest` is ~65%. Experimentation is encouraged.
- `maincolor-dark` is ~45% darker than `mainColor`, and `darker` is ~75%. Experimentation is encouraged.
- All transparent colors are the same as their non-transparent counterparts. For example, #d8bace is the same as (216,186,206) in RGB.

## Limitations

If you have the [fightcade-plugin-theme-select](https://github.com/stratomaster64/fightcade-plugin-theme-select) plugin installed, you will not see your custom theme unless you set your theme to "default". However, this will not apply to general colors as they are theme-independent.
