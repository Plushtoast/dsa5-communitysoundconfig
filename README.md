# dsa5-communitysoundconfig

This is a future module for the Foundry VTT System The Dark Eye to provide a preset for sounds playing on usage of any ability.

F.e. shooting someone with an arrow? Hear a PHLING

Hitting someone with an axe? SCHDOONGSSSS

Using Stealth? SSSSSSH

# Installation
Use the module manifest url 'https://raw.githubusercontent.com/Plushtoast/dsa5-communitysoundconfig/master/module.json'
This module is unfinished and needs some development.

# Community Created & Help
## foundry-dsa-sounds.ods
You can easily create your own configs with the foundry-dsa-sounds.ods found in the src-directory. It is an OpenOffice-Calc-file but Excel should also be able to open it..
### Explanation
There are 4 Tabs
#### Übersicht
Column D holds the results from the Sound-Configuration-Tabs.
Cell E15 has everything you need for your own configuration.
Just copy and paste the content into the SkyOne.json in the configs directory.
#### Audiodaten
This Tab has a List of all Filenames of the 4 Game Audio Bundles for Foundry and the corresponding directory path.
#### Sound-Configuration-Tabs
The following Tabs are use for configuring your sounds:

* Kampf (Battle)
* Talente (Skills)
* Zauber (Spells)
* Rituale (Rituals)
* Liturgien (Liturgies)
* Zeremonien (Ceremonies)

In this tab you can enter the sounds you want to hear when a Check is done. 
Just put a Filename into the yellow area of the corresponding Cell.
If you want to change the damage sound for Peitschen (Whips) to be a screaming man just put "Scream_Frightened_Male_Bb_07_Scream_Library_Brfx-004.ogg" into Cell J24.
You just need the Filename, the Tab Audiodaten will figure out the path.
The lists are derived from https://de.wiki-aventurica.de/, the names might be different to Foundry names.
### Future 
* At the moment only "Kampftechniken" are supported by the sheet, no single Weapons. If I find a list of weapons I'll add them.
* There is no translation. If someone gives me some lists for other languages I'll make a corresponding file also.
* Further Sound-Sources? For now only the gAudio-Data is used. If you point out a different module I'll add those Sounds to the library-tab.

# HowTo
Find matching sounds to skill usages, weapon usage, spells and so on and provide a link for the config files.
Good sources of sounds can be the game audio bundle modules and some other free Foundry sound libraries.
