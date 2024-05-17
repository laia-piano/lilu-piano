function init(cb) {
    document.write('<script src="../../static/piano.js" type="text/javascript"></script>');
    return cb();
};

init(() => {});

// 1. render list and append
// 1.1 test for commit
let cachedList = [];
let currentBrand = '';
let currentPriceMax = 200000;
let currentPriceMin = 0;
let sortDir = 'descending';
let brands = new Set();

function getAllBrand(json) {
    brands = new Set(json.map(piano => piano["brand"]));
}

function renderBrands(domId, document) {
    console.log(brands);

    const node = document.querySelector(domId);

    let component = '';
    brands.forEach(brand => {
        component += `
        <li class="cat-item"><a href="#" class="brand-anchor" id="${brand.toLowerCase()}-anchor">${brand}</a></li>
        `
    });

    node.insertAdjacentHTML('afterbegin', component);
}

function renderList (json, domId, document) {
    let renderingList = json;

    const node = document.querySelector("#piano-list-wrapper");
    node.innerHTML = "";
    console.log('render list', renderingList);

    if (!renderingList) {
        return;
    }

    renderingList = _sortDecider(renderingList, 'price', sortDir);
    cachedList = renderingList;

    let component = '';
    renderingList.forEach(piano => {
        const {uri, modelName, price, brand,link} = piano;
        component += `
                    <li class="product type-product has-post-thumbnail column-1_3">
                      <div class="post_item_wrap">
                        <div class="post_featured">
                          <div class="post_thumb">
                            <a class="hover_icon hover_icon_link" href="${link}" target="_blank">
                              <img width="300" height="300" src="${uri}" alt="product-7" title="product-7" /> </a>
                          </div>
                        </div>
                        <div class="post_content">
                          <h3>${brand} <br> ${modelName}</h3>
                          <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#36;</span>${price}</span>
                          </span>
                          <form action="testRender/testPiano.html" method="GET">
                                <input type="text" name="link" value="${link}">
                                <input type="submit" value="View Details"/ >                         
                                <a rel="nofollow" target="_blank" class="button product_type_simple add_to_cart_button ajax_add_to_cart">View Detail</a>  
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

function renderPianoDetail(json, domId, document) {

    let template = `
                  <h1 itemprop="name" class="product_title entry-title">${json.brandName}</h1>
                  <h4 style="color: #59c6bc">${json.model}</h4>
                  <h4 style="color: #59c6bc">${json.serialNumber}</h4>
                  <div itemprop="offers" itemtype="http://schema.org/Offer">
                    <p class="price">
                      <span class="woocommerce-Price-amount amount">
                        <span class="woocommerce-Price-currencySymbol">S&#36;</span>7500
                      </span>
                    </p>
                  </div>
                  <div itemprop="description" style="text-align: justify">
                    <div>
                        ${json.description}
                    </div>
                  </div>
                  <form class="cart" method="post" enctype='multipart/form-data'>
                    <input type="hidden" name="add-to-cart" value="287" />
                    <a href="contact.html" type="submit" class="single_add_to_cart_button button alt">Contact Us to
                      View</a>
                  </form>
                  <div class="product_meta"> <span class="posted_in">Categories: <a href="#" rel="tag">${json.brandName}</a></span>
                  </div>
    
    `;

    const node = document.getElementById("piano-detail");
    node.insertAdjacentHTML("afterbegin", template);
}
