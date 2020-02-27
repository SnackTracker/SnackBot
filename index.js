/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

var SlackBot = require('slackbots');

// create a bot
var bot = new SlackBot({
    token: 'xoxb-12666592240-972641672128-umbgL64GFzb2NlK0rLfZuYc3',  
    name: 'snackbothack2020'
});

bot.on('start', function() {
    var params = {
        icon_emoji: ':cat:'
    };
    
    bot.postMessageToChannel('general', 'meow!', params);
    
    bot.postMessageToUser('aditi', 'meow!', params); 
    
    
    bot.postMessageToUser('aditi', 'meow!', { 'slackbot': true, icon_emoji: ':cat:' }); 
    
    bot.postMessageToGroup('snack_bot', 'meow!', params); 
});