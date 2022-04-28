const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

// function findMatching(drivers, names) {
    // return drivers.filter((matchNames) => matchNames() === names());
// }

function findMatching(drivers, string) {
    return drivers.filter(
      (name) => name.toLowerCase() === string.toLowerCase()
    );
  }

function fuzzyMatch(drivers, string) {
    // if(array.length = 0) {
        return drivers.filter(
            (people) => people.charAt(0) === string.charAt(0)
        )
    }
function matchName(array, string) {
    return array.filter((obj) => obj.name === string
    )
}