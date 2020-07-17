var strategies = {
    's': function(salary) {
        return salary * 100
    },
    'A': function(salary) {
        return salary * 20
    },
    'B': function(salary) {
        return salary * 18
    },
    'C': function(salary) {
        return salary * 16
    },
    'D': function(salary) {
        return salary * 12
    }
}

function calculateBonus(salary, level = 'C') {
   console.log(strategies[level])
   console.log(typeof strategies[level])
    return strategies[level](salary)
}

console.log(calculateBonus(20000))


