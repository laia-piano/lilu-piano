document.write('<script src="../../static/piano.js" type="text/javascript"></script>');

// 1. render list and append
// 1.1 test for commit
let cachedList = [];
let currentBrand = '';
let currentPriceMax = 200000;
let currentPriceMin = 0;
let sortDir = 'descending';

function renderList (json, domId, domcument) {
    let renderingList = json;

    const node = domcument.querySelector("#piano-list-wrapper");
    node.innerHTML = "";
    console.log('render list', renderingList);

    if (!renderingList) {
        return;
    }

    renderingList = _sortDecider(renderingList, 'price', sortDir)

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

// 2. sorting function
//      - sort by price
//      - sort by date
//      -
function addSortListener(document, sortBy, id) {
    let elem = document.getElementById(id);
    elem.addEventListener('change', function (evt) {
        let direction = evt.target.value;

        sortDir = direction;

        let sortedJson = _sortDecider(cachedList.length === 0 ? pianosList : cachedList, sortBy, direction);
        return renderList(sortedJson, '#piano-list-wrapper', document);
    });
}

function addFilterListener(json, document) {

    const filterButton = document.querySelector('#price-filter-confirm-button');

    filterButton.onclick = function (evt) {
        let filteredList = [];

        console.log(evt);

        let r = /\d+/;

        let from = document.querySelector('span.from').innerHTML.match(r)[0];
        let to = document.querySelector('span.to').innerHTML.match(r)[0];

        currentPriceMax = Number.parseInt(to);
        currentPriceMin = Number.parseInt(from);

        console.log(currentPriceMin);
        console.log(currentPriceMax);
        cachedList = filteredList;

        console.log('evt: ', evt, currentBrand);
        if (currentBrand !== '') {
            filteredList = _filterWithPrice(_filterWithBrand(pianosList));
        } else {
            filteredList = _filterWithPrice(pianosList);
        }
        return renderList(filteredList, '#piano-list-wrapper', document);
    };

    let brandLinks = document.getElementsByClassName('brand-anchor');

    if (!brandLinks) {
        return;
    }

    [...brandLinks].forEach(brandLink => {
        brandLink.onclick = function (evt) {
            let filteredList = [];

            console.log(brandLink);
            console.log('currentbrand-old:' + currentBrand);
            evt.preventDefault();

            currentBrand = brandLink.innerText.toLowerCase();

            cachedList = filteredList;
            console.log('currentbrand-new:' + currentBrand);
            if (currentBrand !== '') {
                filteredList = _filterWithPrice(_filterWithBrand(pianosList));
            } else {
                filteredList = _filterWithPrice(pianosList);
            }

            console.log('brand filter' , filteredList);
            return renderList(filteredList, '#piano-list-wrapper', document);
        }
    });
}

function _filterWithPrice(json) {
    return json.filter(piano => piano['price'] >= currentPriceMin && piano['price'] <= currentPriceMax)

}

function _filterWithBrand(json) {
    return json.filter(piano => {
        return piano.brand.toLowerCase() === currentBrand.toLowerCase();
    });
}

function resetFilter(document) {
    let resetButton = document.querySelector("#price-filter-reset-button");

    resetButton.onclick = function () {
        window.location.reload('/pianos.html');
    }
}

function _sortDecider(json, sortBy, direction) {
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