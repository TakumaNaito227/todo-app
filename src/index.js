// import "./styles.css"

const onClickAdd = () => {
    // テキストボックスの値を取得し、初期化
    const inputText = document.getElementById("add-text").value;
    document.getElementById("add-text").value = "";
    createIncompleteList(inputText);
}

// 未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
    document.getElementById("incomplete-list").removeChild(target);
}

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
    // li 生成
    const li = document.createElement("li");
    li.className = "list-row";

    // p生成
    const p = document.createElement("p");
    p.innerText = text;

    // button生成
    const completeButton = document.createElement("button");
    completeButton.innerText = "完了";
    completeButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグを未完了リストから削除
        deleteFromIncompleteList(completeButton.parentNode);

        // 完了リストに追加する要素
        const addTarget = completeButton.parentNode;

        // TODO内容テキスト取得
        const text = addTarget.firstElementChild.innerText;

        //  div以下を初期化
        addTarget.textContent = null;

        // p生成
        const p = document.createElement("p");
        p.innerText = text;

        //buton生成
        const backButton = document.createElement("button");
        backButton.innerText = "戻す";
        backButton.addEventListener("click", () =>{
            // 押された戻すボタンの親タグを完了リストから削除
            const deleteTarget = backButton.parentNode;
            document.getElementById('complete-list').removeChild(deleteTarget);

            // テキスト取得
            const text = backButton.parentNode.firstElementChild.innerText;
            createIncompleteList(text);

        })

        // liの子要素に各要素を設定
        addTarget.appendChild(p);
        addTarget.appendChild(backButton);

        // 完了リストに追加
        document.getElementById('complete-list').appendChild(addTarget);
    });

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "削除";
    deleteButton.addEventListener("click", () => {
        // 押された削除ボタンの親タグを未完了リストから削除
        deleteFromIncompleteList(deleteButton.parentNode);
    });

    // liタグ、divタグの子要素に各要素を設定
    li.appendChild(p);
    li.appendChild(completeButton);
    li.appendChild(deleteButton);

    // 未完了リストに追加
    document.getElementById("incomplete-list").appendChild(li);
}

document
    .getElementById("add-button").addEventListener('click', () => onClickAdd());