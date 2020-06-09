hljs.initHighlightingOnLoad();
const questions = [
    {
    evalTo: 'true',
    statement: `'yellow' !== 'green'`
},
{
    evalTo: 'false',
    statement: `'cat' === 'dog'` 
},
{
    evalTo: 'false',
    statement: `7 > 14`,
},
{
    evalTo: 'true',
    statement: `1 > 2 || 3 === 3`,
},
{
    evalTo: 'false',
    statement: `const year = 2014;</br>year === 2015`,
},
{
    evalTo: 'false',
    statement: `'one' !== 'one' || 5 !== 5`,
},
{
    evalTo: 'false',
    statement: `0`,
},
{
    evalTo: 'true',
    statement: `const num = 2;</br>num + 2 === 4`,
},
{
    evalTo: 'true',
    statement: `const age = 18;</br>age <= 18`,
},
{
    evalTo: 'true',
    statement: `const cheese = 'gouda';</br>cheese === 'gouda' || cheese === 'brie'`,
},
{
    evalTo: 'false',
    statement: `const amSleepy = true;</br>const hour = 14;</br>amSleepy === false && hour > 18`,
},
{
    evalTo: 'false',
    statement: `const isRaining = true;</br>const month = 12;</br>month < 6 && isRaining === false
    `
},

]
let currentQuestion = 0;
const firstQuestion = questions[0];
$('#addQuestion').text(firstQuestion.statement)
$('#check').on('click', function() {
    console.log('hello?');
    const question = questions[currentQuestion];
    const { evalTo } = question;
    const input = $('input[name=answer]:checked').val();
    if (evalTo === input) {
        $('#result').text('Correct!!!').removeClass('wrong').addClass('correct');
    } else {
        $('#result').text('Try again!').removeClass('correct').addClass('wrong');
    }
})
$('#next').on('click', function() {
    if (questions.length - 1 === currentQuestion) {
        $('#result').text(`Great job! You've solved all the problems!`).addClass('correct');
        return;
    } 
    currentQuestion = currentQuestion + 1;
    const newQuestion = questions[currentQuestion];
    $('#addQuestion').html(newQuestion.statement)
    $('#result').text('').removeClass('wrong', 'correct');
    document.querySelectorAll('pre code').forEach((block) => {
         hljs.highlightBlock(block);
    });
})