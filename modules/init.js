Hooks.once("ready", function() {
    game.dsa5.apps.CommunitySound = new CommunitySound()
    game.dsa5.apps.CommunitySound.setCurrentSoundConfig()
})

Hooks.once("ready", () => {
    let moduleEnabled = (id) => {
        return game.modules.get(id)
    }
    let modules = [
        "gAudioBundle-1",
        "gAudioBundle-2",
        "gAudioBundle-3",
        "gAudioBundle-4",
    ]
    modules = modules.filter(x => {!moduleEnabled(x) })
    if (modules.length > 0) {
        let infoMsg = `Community Sound Config makes heavy usage of some sound modules. You might need to install those modules: <b>${modules.join("</b><br/>,<b>")}</b>.`
        ChatMessage.create(game.dsa5.apps.DSA5_Utility.chatDataSetup(infoMsg));
    }
})

class CommunitySound {
    constructor() {
        this.choices = {
            "demo": `modules/dsa5-communitysoundconfig/configs/default${game.i18n.lang}.json`,
            "none": "",
            "SkyOne": "modules/dsa5-communitysoundconfig/configs/SkyOne.json"
        }
    }
    async setCurrentSoundConfig() {
        await game.settings.set("dsa5", "soundConfig", this.choices[await game.settings.get("dsa5-communitysoundconfig", "selectedConfig")])
    }
}

Hooks.once("init", () => {
    game.settings.register("dsa5-communitysoundconfig", "selectedConfig", {
        name: "DSASOUNDCONFIG.config",
        hint: "DSASOUNDCONFIG.configHint",
        scope: "user",
        config: true,
        default: "SkyOne",
        type: String,
        choices: {
            "none": "none",
            "demo": "Demo",
            "SkyOne": "SkyOne"
        },
        onChange: async(li) => {
            game.dsa5.apps.CommunitySound.setCurrentSoundConfig()
        }
    });
})