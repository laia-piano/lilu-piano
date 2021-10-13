// 1. render list and append

function renderList (json, domId, domcument) {
    const node = domcument.querySelector("#piano-list-wrapper");
    node.innerHTML = "";
    console.log(json);

    let component = '';
    json.forEach(piano => {
        const {uri, brand, price} = piano;
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
                          <h3><a href="product.html">${brand}</a></h3>
                          <span class="price"><span class="woocommerce-Price-amount amount"><span class="woocommerce-Price-currencySymbol">&#36;</span>${price}</span>
                          </span>
                          <a rel="nofollow" href="product.html" class="button product_type_simple add_to_cart_button ajax_add_to_cart">View Detail</a> </div>
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
// const sortList = () => {
//
//
// }
// // module.exports = {
//     renderList, sortList
// };

