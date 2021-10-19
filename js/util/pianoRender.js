// 1. render list and append
// 1.1 test for commit
let cachedList = [];

function renderList (json, domId, domcument) {
    const node = domcument.querySelector("#piano-list-wrapper");
    node.innerHTML = "";
    console.log(json);
    cachedList = json;

    if (!json) {
        return;
    }

    let component = '';
    json.forEach(piano => {
        const {uri, modelName, price, brand,link} = piano;
        component += `
                    <li class="product type-product has-post-thumbnail column-1_3">
                      <div class="post_item_wrap">
                        <div class="post_featured">
                          <div class="post_thumb">
                            <a class="hover_icon hover_icon_link" href="product.html">
                              <img width="300" height="300" src="${uri}" alt="product-7" title="product-7" /> </a>
                          </div>
                        </div>
                        <div class="post_content">
                          <h3><a href="${link}">${brand} - ${modelName}</a></h3>
                          <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#36;</span>${price}</span>
                          </span>
                          <a rel="nofollow" href="${link}" class="button product_type_simple add_to_cart_button ajax_add_to_cart">View Detail</a> </div>
                      </div>
                    </li>
`;
    });

    node.insertAdjacentHTML('afterbegin', component);

    return component;
}

// renderList(json);

// 2. sorting function
//      - sort by price
//      - sort by date
//      -
function sortList(document, sortBy, id) {
    let elem = document.getElementById(id);
    // console.log(elem);
    elem.addEventListener('change', function (evt) {
        let direction = evt.target.value;

        let sortedJson = _decider(cachedList, sortBy, direction);
        return renderList(sortedJson, '#piano-list-wrapper', document);
    });

}

function filterList(json, document, filterBy, id) {
    console.log(arguments);

    let elem = document.getElementById(id);
    let filteredList = [];

    if (filterBy === 'price') {
        elem.onmousemove = function (evt) {
            console.log(evt);

            let r = /\d+/;

            let from = document.querySelector('span.from').innerHTML.match(r)[0];
            let to = document.querySelector('span.to').innerHTML.match(r)[0];

            console.log(from);
            console.log(to);

            filteredList = json.filter(piano => piano[filterBy] >= from && piano[filterBy] <= to);
            cachedList = filteredList;
            return renderList(filteredList, '#piano-list-wrapper', document);

        };
    }

    if (filterBy === 'brand') {
        let elems = document.getElementsByClassName('brand-anchor');

        console.log(elems);

        if (!elems) {
            return;
        }

        [...elems].forEach(elem => {
            console.log(elem);
            elem.onclick = function (evt) {
                evt.preventDefault();
                // console.log(filterBy);
                // console.log(elem.innerHTML);
                filteredList = json.filter(piano => {
                    console.log('\t', piano[filterBy], elem.innerText);
                    return piano[filterBy].toLowerCase() === elem.innerText.toLowerCase();
                });

                // for (j of json) {
                //     if (j[filterBy].toLowerCase() === elem.innerText.toLowerCase()) {
                //         filteredList = [...filteredList, j];
                //     }
                // }

                console.log(filteredList);
                cachedList = filteredList;
                return renderList(filteredList, '#piano-list-wrapper', document);

            }
        });

        // for (elem of elems) {
        //     console.log(elem);
        //     elem.onclick = function (evt) {
        //         evt.preventDefault();
        //         // console.log(filterBy);
        //         // console.log(elem.innerHTML);
        //         filteredList = json.filter(piano => {
        //             console.log('\t', piano[filterBy], elem.innerText);
        //             return piano[filterBy].toLowerCase() === elem.innerText.toLowerCase();
        //         });
        //
        //         // for (j of json) {
        //         //     if (j[filterBy].toLowerCase() === elem.innerText.toLowerCase()) {
        //         //         filteredList = [...filteredList, j];
        //         //     }
        //         // }
        //
        //         console.log(filteredList);
        //         cachedList = filteredList;
        //         return renderList(filteredList, '#piano-list-wrapper', document);
        //
        //     }
        // }
    }


}

function _decider(json, sortBy, direction) {
    let sorted;
    if (!json) {
        return;
    }

    if (direction === 'ascending') {
        sorted = json.sort(function (a, b) {
            if (a[sortBy] > b[sortBy]) {
                return 1;
            } else if (a[sortBy] < b[sortBy]) {
                return -1;
            } else {
                return 0;
            }
        });
    }

    if (direction === 'descending') {
        sorted = json.sort(function (a, b) {
            if (a[sortBy] < b[sortBy]) {
                return 1;
            } else if (a[sortBy] > b[sortBy]) {
                return -1;
            } else {
                return 0;
            }
        });
    }
    return sorted;
}

function test(evt) {
    console.log(evt);
}
