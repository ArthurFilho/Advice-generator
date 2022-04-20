


// program to get a random item from an array

function getRandomItem(arr) {

    // get random index value
    const randomIndex = Math.floor(Math.random() * arr.length);

    // get random item
    const item = arr[randomIndex];

    return item;
}
//title and Text
titleAndTextArr = [{titleA:'Dont try to impress everyone.', textA:'"The unhappiest people are those who care the most about what other people think."'},
{titleA: 'Show up fully.' , textA: '"Dont dwell on the past, and dont daydream about the future, but concentrate on showing up fully in the present moment."' },
{titleA: 'Be patient and persistent.', textA: '"Life is not so much what you accomplish as what you overcome."' }, 
{titleA: 'Luck comes from hard work.', textA: '"Luck happens when hard work and timing and talent intersect."' },
{titleA: 'Be your best at all times.', textA: '"You never know what the future will bring, so always make the best use of the present."' }, 
{titleA: 'Dont try to impress everyone.', textA: '"The unhappiest people are those who care the most about what other people think."'},
{titleA: 'Listen to learn.', textA: '"Learn how to listen. You cant learn anything when youre talking."' }];


function generatingAdvice(){
   
    
    
    let title = document.getElementsByClassName("title");
    let text = document.getElementsByClassName("text");

    let resultTitleandtext = getRandomItem(titleAndTextArr) 

title[0].innerHTML = resultTitleandtext.titleA;
text[0].innerHTML = resultTitleandtext.textA;

}