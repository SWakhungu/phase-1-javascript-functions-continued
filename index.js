
function saturdayFun(funActivity= "roller-skate") {
    return `This Saturday, I want to ${funActivity}!`
}


function mondayWork(activity="go to the office") {
    return `This Monday, I will ${activity}.`
}

function wrapAdjective(result="*") {
    return function wrapAdjective(emphatic="a hard worker") {
    return `You are ${result}${emphatic}${result}!`
    }
}
