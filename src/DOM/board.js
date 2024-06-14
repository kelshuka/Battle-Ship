
//import './style.css';

/* const board1 = document.querySelector('.board1');
const board2 = document.querySelector('.board2'); */


function gridStructure(board, num =10) {
    //let gSize = 640 / num;
    let gSize = 400 / num;
    for (let i=0;i<num ; i++ ) {
        const content = document.createElement('div');
        //content.classList.add('content');
        content.innerText = i;

        for (let j=0;j< num ; j++) {
            const contents = document.createElement('div');
            contents.classList.add('contents');
            contents.id = `${j},${i}`
            //contents.innerText = (i * num) + j;
            contents.style.height = `${gSize}px`;
            contents.style.width = `${gSize}px`;
            content.appendChild(contents);
        }
        board.appendChild(content);
        board.classList.add('container');
    }

    const contents = document.querySelectorAll('.contents');
    contents.forEach(contents => {
        contents.addEventListener('click', function(){
            contents.style.backgroundColor = 'grey';
        })
    })

    /* const contents = document.querySelectorAll('.contents');

    contents.forEach(contents => {
        contents.addEventListener('mouseover', function(){
            //contents.style.backgroundColor = 'purple';
            let randomColor = Math.floor(Math.random() * 16777215).toString(16);
            contents.style.backgroundColor = "#" + randomColor;
        })
    })
 */
}


export {gridStructure};
