// Object of loginPage imported
var Objects = require('../obj_repo/objects.json')

var toolsTrackerPage = function(){

		/*
			POM design pattern - write return this; if the function takes you to the same page reference
			else give the reference of the next page...
		*/
	this.viewtoolsTrackers = function(){
		element(by.xpath(Objects.homePageLocators.toolsTrackers)).click();
		browser.sleep(30000);
	};

	this.selectedMemberValue = function(){
		return element(by.model(Objects.toolsTrackersPageLocators.member)).getText();
	};

	this.bmiMetertext = function(){
		element(by.xpath(Objects.toolsTrackersPageLocators.bmiMeter)).getText();
	};

	this.saltMetertext = function(){
		element(by.xpath(Objects.toolsTrackersPageLocators.saltMeter)).getText();
	};

	this.smokeMetertext = function(){
		element(by.xpath(Objects.toolsTrackersPageLocators.smokeMeter)).getText();
	};
};

module.exports = new toolsTrackerPage();