const trNote = "この文書内にあるリンクのうち、「Understanding WCAG 2.1」へのリンクについては、WAIC の公開する日本語版にリンク先を追加しています。WAIC の日本語訳は、 W3C の公開する英語版より内容が古い可能性がありますのでご注意ください。";
const jaLinkText = '[日本語訳]';
const jaLinkTitleSuffix = 'の日本語訳';
const taregtUrlString = ['Understanding', 'Techniques'];

document.addEventListener('DOMContentLoaded', function(){
	const lastTrNote = document.querySelector("aside.trnote>p:last-child");
	if(lastTrNote) lastTrNote.textContent = trNote;

	const w3cDocumentAnchors = document.querySelectorAll("a[href*=https\\:\\/\\/www\\.w3\\.org\\/WAI\\/WCAG21]");
	for(let i = 0; i < w3cDocumentAnchors.length; i++){
		const anchor = w3cDocumentAnchors[i];
		const href = anchor.getAttribute('href');
		taregtUrlString.forEach(taregtString => {
			if(href.indexOf(taregtString)!=-1 ){
				const jaLinkUrl = href.replace('\/\/www.w3.org\/WAI\/WCAG21\/', '//waic.jp/translations/WCAG21/');
				const jaLinkTitle = '"' + anchor.textContent + '"' + jaLinkTitleSuffix;
				const jaAnchor = document.createElement('a');
				jaAnchor.setAttribute('href', jaLinkUrl);
				jaAnchor.setAttribute('title', jaLinkTitle);
				jaAnchor.textContent = jaLinkText;
				anchor.parentNode.insertBefore(jaAnchor, anchor.nextSibling);
				jaAnchor.parentNode.insertBefore(document.createTextNode(" "), jaAnchor);
			}
		})
	}
});