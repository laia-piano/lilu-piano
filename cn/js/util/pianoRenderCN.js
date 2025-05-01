function init(cb) {
    document.write('<script src="../static/piano.js" type="text/javascript"></script>');
    return cb();
};

init(() => { });

// 1. render list and append
// 1.1 test for commit
let cachedList = [];
let currentBrand = '';
let currentPriceMax = 250000;
let currentPriceMin = 0;
let sortDir = 'descending';
let brands = new Set();

function getAllBrand(json) {
    brands = new Set(json.map(piano => piano["brand2"]));
}

function renderBrands(domId, document) {
    console.log(brands);

    const node = document.querySelector(domId);

    let component = '';
    brands.forEach(brand2 => {
        component += `
        <li class="cat-item"><a href="#" class="brand-anchor" id="${brand2.toLowerCase()}-anchor">${brand2}</a></li>
        `
    });

    node.insertAdjacentHTML('afterbegin', component);
}
function renderList(json, domId, domcument) {
    let renderingList = json;

    const node = domcument.querySelector("#piano-list-wrapper");
    node.innerHTML = "";
    console.log('render list', renderingList);

    if (!renderingList) {
        return;
    }

    renderingList = _sortDecider(renderingList, 'price', sortDir);
    cachedList = renderingList;

    let component = '';
    renderingList.forEach(piano => {
        const { uri, modelName2, price, brand2, link } = piano;
        component += `
                    <li class="product type-product has-post-thumbnail column-1_3">
                        <div class="post_item_wrap">
                        <div class="post_featured">
                            <div class="post_thumb">
                                <img width="300" height="300" src="../${uri}" alt="product-7" title="product-7" /> </a>
                        </div>
                        <div class="post_content">
                            <h3>${brand2} <br> ${modelName2}</h3>
                            <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#36;</span>${price}</span>
                            </span>
                            <form action="../cn/details.html" method="GET">
                                <input type="hidden" name="link" value="${link}">
                                <input type="submit" value="View Details"/ >                         
                            </form>

                            
                            </div>
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
        cachedList = sortedJson;

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

            console.log('brand filter', filteredList);
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