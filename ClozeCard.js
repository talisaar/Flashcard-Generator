var ClozeCard = function (text, cloze) {


	this.fulltext = text;
	this.cloze = cloze;
	this.partial = this.fulltext.replace(this.cloze, "...");

	var n = this.fulltext.search(cloze);
	
	if (n === -1) {
		console.log("Oops! Broken cloze")
		return;
	}
	
};


module.exports = ClozeCard;

