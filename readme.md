# Hide Messages about Wordle

This repo is for anyone looking to hide messages related to wordle copy-paste description and image in discord. Though it can be modified to hide all messages about Wordle. 

**Note: There will be a slight delay before the messages are hidden and you will still get Discord message notications.**

Lasted tested on  Windows 10 64-Bit Desktop Discord Version: Stable 113404 (30b719d)

### Run On Start Up

**This is considered client modification and could result in Discord banning your account.**

- Open your Discord directory likely found at: `%localappdata%/Discord`
- Open your Discord App Directory. There maybe multiple versions, you want to use the most recent one.
- Open the `modules` folder. 
- Open the `discord_krisp-1` folder.
- At this point you should be at `%localappdata%/Discord/<discord_app_current_version>/modules/discord_krisp-1`. There may be slight varations in this file path but should be relatively similar. 
- Open index.js and add:
```js
function hideBlocked(){
    const blocked = document.querySelectorAll('[class^="groupStart"]'); // Find all "Blocked Messages"
    blocked.forEach(blokMsg => {
        if(blokMsg.style.display !== "none") blokMsg.style.display = "none"; // Hide the message if it's not already hidden.
    });
};
setInterval(hideBlocked, 500); // Repeat every half second. Recommended to keep at 500, but raise/ lower if you wish.```

- Save
- Restart Discord


### Run Manually

Discord has recently remove the ability to open the inspector console to prevent social engineering. The steps below will walk you through how to reenable the inspector console and run the script. 

# Update Discord Settings JSON

- Open `%appdata%/discord/settings.json`
- Add `"DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true` to the file. The final version should look something like this.

```
{
  "IS_MAXIMIZED": false,
  "IS_MINIMIZED": false,
  "WINDOW_BOUNDS": {
    "x": 851,
    "y": 281,
    "width": 1403,
    "height": 743
  },
  "BACKGROUND_COLOR": "#202225",
  "DANGEROUS_ENABLE_DEVTOOLS_ONLY_ENABLE_IF_YOU_KNOW_WHAT_YOURE_DOING": true
}```

- Save the changes made to `settings.json`. 

# Execute the Script

Note: You will have to execute these steps everytime you startup Discord for it to work. Refer to [Run On Start Up](#run-on-start-up) section if that's something you wish to do instead. 

- Open Discord
- Press <i>Ctrl + Shift + I</i>, this will open the inspector console.
- Discord displays a bunch of giant warning messages about how pasting things inside the inspector console could be a scam. Make sure you understand whatever you're pasting into the console to prevent this (INCLUDING this script). **Never** paste in anything you don't understand.
- Copy the lines from the script or below:
```function hideWordle(){
    const chatMessage = document.querySelectorAll('li[id^="chat-message"]'); // Find all chat messages
    chatMessage.forEach(chatMsg => {
		//Find all messages that contain Wordle. NOTE: this will only effect the copy-paste Worlde, if you wish to exclude ALL MESSAGE about Worlde you will need to modify this line to be case insensitive. Please reference: https://bobbyhadz.com/blog/javascript-includes-case-insensitive about making something case insensitive. 
        if(chatMsg.textContent.includes('Wordle')){ 
                chatMsg.style.display = "none"; //Sets the message to not display.
        }
    });
};
setInterval(hideWordle, 500); // Repeat every half second. You can modify this if you wish. ```
