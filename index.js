/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);

const SlackBot = require("slackbots");
const http = require("http");
const fs = require("fs");
const Utility = require("./utility");

const config = JSON.parse(fs.readFileSync("config.json"));
const package = JSON.parse(fs.readFileSync("package.json"));

const commands = 

function startBot() {
    const bot = new SlackBot(config["bot"]);
    const commandObjects = 

    bot.on("start", () => {
        Utility.logData("Bot has started");
    });

    bot.on("open", () => {
        Utility.logData("Bot has opened");
    });

    bot.on("close", () => {
        Utility.logData("Bot has closed");
        startBot();
    });

    bot.on("error", data => {
        Utility.logData("Error occurrred", data);
    });

    startBot();
