sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel"
], function(
	Controller, Device, JSONModel
) {
	"use strict";

	return Controller.extend("sap.devs.port.myport.controller.Menu", {
		onInit: function () {
			var oProductsModel = new JSONModel(sap.ui.require.toUrl("sap/ui/demo/mock/products.json")),
				iPagesCount = 1;

			if (Device.system.desktop) {
				iPagesCount = 4;
			} else if (Device.system.tablet) {
				iPagesCount = 2;
			}

			var oSettingsModel = new JSONModel({ pagesCount: iPagesCount });
			oProductsModel.setSizeLimit(6);

			this.getView().setModel(oSettingsModel, "settings");
			this.getView().setModel(oProductsModel, "products");
		},


		onRedirectToLinkedin: function(){
			var linkedinProfileURL = "https://www.linkedin.com/in/jeft%C3%A9-lopes-5a3776251";
            window.open(linkedinProfileURL);
		},
		onRedirectToGitHub: function(){
			var linkedinProfileURL = "https://github.com/JefteLopes05";
            window.open(linkedinProfileURL);
		}
	});
});