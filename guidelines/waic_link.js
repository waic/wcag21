const trNote = "この文書内にあるリンクのうち、「Understanding WCAG 2.1」へのリンクについては、WAIC の公開する日本語版にリンク先を追加しています。WAIC の日本語訳は、 W3C の公開する英語版より内容が古い可能性がありますのでご注意ください。";
const jaLinkText = '[日本語訳]';
const jaLinkTitleSuffix = 'の日本語訳';

document.addEventListener('DOMContentLoaded', () => {
	const lastTrNote = document.querySelector("aside.trnote>p:last-child");
	if(lastTrNote) lastTrNote.textContent = trNote;

	const w3cDocumentAnchors = document.querySelectorAll("a[href*=https\\:\\/\\/www\\.w3\\.org\\/WAI\\/WCAG21]")
	w3cDocumentAnchors.forEach((anchor, index)=>{
		const href = anchor.getAttribute('href');
		if(href.indexOf("Understanding")!=-1 ){
			const jaLinkUrl = href.replace('\/\/www.w3.org\/WAI\/WCAG21\/Understanding','//waic.jp/docs/WCAG21/Understanding');
			const jaLinkTitle = '"' + anchor.textContent + '"' + jaLinkTitleSuffix;
			const jaAnchor = document.createElement('a');
			jaAnchor.setAttribute('href', jaLinkUrl);
			jaAnchor.setAttribute('title', jaLinkTitle);
			jaAnchor.textContent = jaLinkText;
			anchor.parentNode.insertBefore(jaAnchor,anchor.nextSibling);
		}		
	});
});