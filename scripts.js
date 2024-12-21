// Implement the FAQ page with Vanilla Js

/*

const description = ["The word bonsai comes from the Japanese words \"bon\" (tray or pot) and \"sai\" (plant or tree). Together, it means \"planted in a tray\" or \"tray planting.\" It refers to the art of growing and shaping miniature trees in containers to replicate the appearance of full-size trees in nature.", " 1) Pruning and trimming: Regular pruning of branches and roots keeps the tree small and balanced. 2) Pot size: Planting the tree in a small container restricts its root growth, limiting the overall size. 3) Wiring: Metal wires are used to guide the tree's growth into a desired shape. 4) Controlled care: Specialized soil, water, and nutrients are provided in moderation to slow growth without compromising the tree's health.", "In principle, yes. Most trees and shrubs with woody stems and small leaves or needles can be cultivated as bonsai. Popular species include: 1) Juniper 2) Maple 3) Pine 4) Ficus Elm However, the tree should have the ability to withstand regular pruning and adapt to container growth" , "The type of bonsai you choose depends on your preferences, environment, and level of experience: For beginners: For beginners: Ficus: Hardy and low maintenance.Jade Plant (Portulacaria afra): Requires minimal watering.Indoor bonsai: Ficus, Jade, or Chinese Elm.Outdoor bonsai: Juniper, Pine, or Japanese Maple.If you want flowering bonsai: Azalea, Cherry Blossom, or Bougainvillea.Consider climate: Pick a species that thrives in your local environment."]

const questions = document.querySelectorAll('li')

console.log(questions);

questions.forEach((question, index) => {
    question.addEventListener('click', ()=> {
        // console.log(question,index);
        showAnswer(index)
    })
})

function showAnswer(index) {
    const allAnswers = document.querySelectorAll('p');
    const currentQuestion = questions[index];
    const existingAnswer = currentQuestion.querySelector('p');

    // Remove all existing answers first
    allAnswers.forEach(answer => answer.remove());

    // If clicking the same question that has an answer, just remove it (already done above)
    if (existingAnswer) {
        return;
    }

    // Create and append new answer
    const answer = document.createElement('p');
    answer.textContent = description[index];
    currentQuestion.appendChild(answer);
}


*/


// implemnt the FAQ page with jQuery

/*

const description = ["The word bonsai comes from the Japanese words \"bon\" (tray or pot) and \"sai\" (plant or tree). Together, it means \"planted in a tray\" or \"tray planting.\" It refers to the art of growing and shaping miniature trees in containers to replicate the appearance of full-size trees in nature.", " 1) Pruning and trimming: Regular pruning of branches and roots keeps the tree small and balanced. 2) Pot size: Planting the tree in a small container restricts its root growth, limiting the overall size. 3) Wiring: Metal wires are used to guide the tree's growth into a desired shape. 4) Controlled care: Specialized soil, water, and nutrients are provided in moderation to slow growth without compromising the tree's health.", "In principle, yes. Most trees and shrubs with woody stems and small leaves or needles can be cultivated as bonsai. Popular species include: 1) Juniper 2) Maple 3) Pine 4) Ficus Elm However, the tree should have the ability to withstand regular pruning and adapt to container growth" , "The type of bonsai you choose depends on your preferences, environment, and level of experience: For beginners: For beginners: Ficus: Hardy and low maintenance.Jade Plant (Portulacaria afra): Requires minimal watering.Indoor bonsai: Ficus, Jade, or Chinese Elm.Outdoor bonsai: Juniper, Pine, or Japanese Maple.If you want flowering bonsai: Azalea, Cherry Blossom, or Bougainvillea.Consider climate: Pick a species that thrives in your local environment."]


$("ul li").click(function() {
    const index = $(this).index(); // Get the index of clicked li
    console.log(index);
    const existingAnswer = $(this).find('p');
    
    // Remove all existing answers
    $('ul li p').remove();
    
    // If there wasn't already an answer under this question, add one
    if (existingAnswer.length === 0) {
        const answer = $('<p>').text(description[index]);
        $(this).append(answer);
    }
});

*/

// Method 2 - Using toggleClass

$('ul li').click(function(){
    // console.log(this);
    $(this).find('p').toggleClass('none');
})






