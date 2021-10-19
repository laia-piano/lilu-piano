document.write('<script src="../../static/piano.js" type="text/javascript"></script>');

// 1. render list and append
// 1.1 test for commit
let cachedList = [];
let currentBrand = '';
let currentPriceMax = 200000;
let currentPriceMin = 0;
let sortDir = 'ascending';

function renderList (json, domId, domcument) {
    let renderingList = currentBrand === '' ? json : cachedList;

    const node = domcument.querySelector("#piano-list-wrapper");
    node.innerHTML = "";
    console.log(renderingList);
    cachedList = renderingList;

    if (!renderingList) {
        return;
    }

    renderingList = _decider(renderingList, 'price', sortDir)

    let component = '';
    renderingList.forEach(piano => {
        const {uri, modelName, price, brand,link} = piano;
        component += `
                    <li class="product type-product has-post-thumbnail column-1_3">
                      <div class="post_item_wrap">
                        <div class="post_featured">
                          <div class="post_thumb">
                            <a class="hover_icon hover_icon_link" href="${link}">
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

        sortDir = direction;

        let sortedJson = _decider(cachedList, sortBy, direction);
        return renderList(sortedJson, '#piano-list-wrapper', document);
    });

}

function filterList(json, document, filterBy) {
    let filteredList = [];

    if (filterBy === 'price') {
        const confirmButton = document.querySelector('#price-filter-confirm-button');

        confirmButton.onclick = function (evt) {
            console.log(evt);

            let r = /\d+/;

            let from = document.querySelector('span.from').innerHTML.match(r)[0];
            let to = document.querySelector('span.to').innerHTML.match(r)[0];

            // console.log(from);
            // console.log(to);

            currentPriceMax = Number.parseInt(to);
            currentPriceMin = Number.parseInt(from);

            console.log(currentPriceMin);
            console.log(currentPriceMax);

            // if currentBrand = '' -> render all
            // if currentBrand = 'xxx' -> render xxx
            filteredList = (currentBrand === '' ? json : cachedList).filter(piano => piano[filterBy] >= currentPriceMin
                                                                                && piano[filterBy] <= currentPriceMax);
            cachedList = filteredList;
            return renderList(filteredList, '#piano-list-wrapper', document);

        };
    }

    if (filterBy === 'brand') {
        let elems = document.getElementsByClassName('brand-anchor');

        if (!elems) {
            return;
        }

        [...elems].forEach(elem => {
            elem.onclick = function (evt) {
                console.log('currentbrand-old:' + currentBrand);
                evt.preventDefault();

                currentBrand = elem.innerText.toLowerCase();
                // filteredList = json.filter(piano => {
                //     console.log('\t', piano[filterBy], elem.innerText);
                //     return piano[filterBy].toLowerCase() === elem.innerText.toLowerCase();
                // });

                filteredList = filterWithBrands(elem, json, currentBrand)
                console.log(filteredList, 'filterList');
                filteredList = filteredList.filter(piano => piano['price'] >= currentPriceMin && piano['price'] <= currentPriceMax);

                console.log(filteredList);
                cachedList = filteredList;
                console.log('currentbrand-new:' + currentBrand);
                return renderList(_decider(filteredList, 'price', sortDir), '#piano-list-wrapper', document);

            }
        });
    }
}

function filterWithBrands(elem, pianoList, brand) {
    let filteredBrandList;

    filteredBrandList = pianoList.filter(piano => {
        console.log('\t', brand, elem.innerText);
        return piano.brand.toLowerCase() === elem.innerText.toLowerCase();
    });

    return filteredBrandList;
}

function resetFilter(document) {
    let resetButton = document.querySelector("#price-filter-reset-button");

    resetButton.onclick = function () {
        window.location.reload('/pianos.html');
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
