document.addEventListener('DOMContentLoaded', () => {
    const targetAnchor = document.querySelector('.link-to-understanding-wcag22 a');
    if (!targetAnchor) return;

    const pathParts = window.location.pathname.split('/');
    const filename  = pathParts.at(-1);
    if (!filename) return;
    targetAnchor.href = targetAnchor.href + filename;
});


/*
この JavaScript ファイルは、WCAG 2.1 解説書の各ページから、WCAG 2.2 解説書の該当ページに誘導するためのスクリプトです。
各ページの head 要素内にある「<script src="link-to-understanding-wcag22.js"></script>」によって読み込まれます。
各ページの body 要素の直下にある「<div class="link-to-understanding-wcag22">」のリンクを上書きします。
*/
