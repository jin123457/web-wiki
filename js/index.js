console.log(
    '%c' +
        ' __      __  ______   __  __   ______     ' +
        '\n' +
        '/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    ' +
        '\n' +
        "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
        '\n' +
        ' \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    ' +
        '\n' +
        '  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ ' +
        '\n' +
        '   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ ' +
        '\n' +
        "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
    'color: #d81b60; font-size: 16px; font-weight: bold;'
);

const addComment = () => {
    const input = document.getElementById('commentInput');
    const commentList = document.getElementById('commentList');

    if (input.value.trim() !== '') {
        // 댓글 아이템 생성
        const commentItem = document.createElement('div');
        commentItem.className = 'comment-item';

        // 작성자 영역 생성
        const commentAuthor = document.createElement('div');
        commentAuthor.className = 'comment-author';

        const authorImg = document.createElement('img');
        authorImg.src = './images/comment-author-icon.png';
        authorImg.alt = '사용자 프로필 이미지';

        const authorName = document.createElement('span');
        authorName.textContent = '방문자';

        commentAuthor.appendChild(authorImg);
        commentAuthor.appendChild(authorName);

        // 댓글 내용 영역 생성
        const commentContent = document.createElement('div');
        commentContent.className = 'comment-content';
        commentContent.textContent = input.value;

        // 요소 조립
        commentItem.appendChild(commentAuthor);
        commentItem.appendChild(commentContent);
        commentList.appendChild(commentItem);

        input.value = ''; // 입력창 초기화
    }
};
