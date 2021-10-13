// 1. render list and append
function renderList (json) {
    console.log(json);

    let component = '';
    json.forEach(piano => {
        component += `<li>${JSON.stringify(piano)}</li>`;
    });

    return component;
}

// renderList(json);

// 2. sorting function
//      - sort by price
//      - sort by date
//      -
// const sortList = () => {
//
//
// }
// // module.exports = {
//     renderList, sortList
// };

