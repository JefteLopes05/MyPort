sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel"
], function (
	Controller, Device, JSONModel
) {
	"use strict";

	return Controller.extend("sap.devs.port.myport.controller.Menu", {
		onInit: function () {

			var oModel = new JSONModel({

			});

			this.getView().setModel(oModel);
		},


		onDownloadPDFCurriculum: function () {
			var pdfUrl = "image/LogoLinkedin.png"; // Substitua pelo URL real do seu PDF
			var fileName = "LogoLinkedin.png"; // Nome do arquivo a ser baixado

			var link = document.createElement("a");
			link.href = pdfUrl;
			link.download = fileName;
			link.click();
		},

		onRedirectToLinkedin: function () {
			var linkedinProfileURL = "https://www.linkedin.com/in/jeft%C3%A9-lopes-5a3776251";
			window.open(linkedinProfileURL);
		},
		onRedirectToGitHub: function () {
			var linkedinProfileURL = "https://github.com/JefteLopes05";
			window.open(linkedinProfileURL);
		}
	});
});