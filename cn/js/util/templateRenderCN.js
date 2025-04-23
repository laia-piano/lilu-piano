
function init(cb) {
    document.write('<script src="../../static/pianoCN.js" type="text/javascript"></script>');
    return cb();
};

init(() => {});

function _getPianoId() {
    const templatePath = window.location.search;
    const urlParams = new URLSearchParams(templatePath);
    return urlParams.get("link");
}

function _getPianoDetails (pianoId) {
    return pianosList.find(piano => piano.link === pianoId)
}



function renderPianoDetails(json, document) {
    let pianoDetails = json;

    const node = document.querySelector("#piano-details-template-id");
    console.log("node html ", node.innerHTML);

    const folderMatch = json.uri.match(/^(.*)\/[^\/]+$/);
    const folder = folderMatch[1];


    const component =  `
                        <div class="images"><img width="600" height="600" src="../../${json.uri}"
                                                 class="attachment-shop_single size-shop_single wp-post-image"
                                                 alt="product-8"
                                                 title="product-8"/></a> </div>
                        <div class="summary entry-summary">
                            <h1 itemprop="name" class="product_title entry-title">${json.brand} ${json.modelName}</h1>
                            <h4 style="color: #59c6bc">Made in ${json.origin}</h4>
                            <div itemprop="offers" itemtype="http://schema.org/Offer">
                                <p class="price"><span class="woocommerce-Price-amount amount"><span
                                        class="woocommerce-Price-currencySymbol">S&#36;</span>${json.price}</span></p>

                            </div>
                            <div itemprop="description" style="text-align: justify">
                                <p>
                                    ${json.description}
                                </p>
                            </div>
                            <div class="sc_promo_button sc_item_button">
								<a href="https://wa.me/6581667290"><img src="../whatsapp2.png"><img></a>
							</div>
                        </div>    
                        <div class="clear"></div>
            `;

    let imageComponent = `
                        <article
                                class="itemscope post_item post_item_single post_featured_default post_format_standard post-408 page type-page hentry">
                            <section class="post_content" itemprop="articleBody">
                                <article class="myportfolio-container minimal-light" id="esg-grid-3-1-wrap">
                                    <div id="esg-grid-3-1" class="esg-grid">
                                        <ul>
    `;

    imageComponent += `
        <li data-cobblesw="3" data-cobblesh="2">
                                                <iframe width="560" height="315"
                                                        src="${json.videoLink}"
                                                        title="YouTube video player" frameborder="0"
                                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                        allowfullscreen></iframe>
                                            </li>
    `

    for (let i = 1; i <= json.imageCount; i ++) {
        imageComponent += `
                                            <li class="eg-melody-wrapper">
                                                <div class="esg-media-cover-wrapper">
                                                    <div class="esg-entry-media"><img
                                                            src="../../${folder}/${i}.jpg" alt=""></div>
                                                    <div class="esg-entry-cover esg-fade" data-delay="0">
                                                        <div class="esg-overlay esg-fade eg-melody-container"
                                                             data-delay="0"></div>
                                                        <div class="esg-center eg-melody-element-0-a esg-falldown"
                                                             data-delay="0.1"><a
                                                                class="eg-melody-element-0 esgbox"
                                                                href="../../${folder}/${i}.jpg"><i
                                                                class="eg-icon-search"></i></a></div>
                                                    </div>
                                                </div>
                                            </li>
        `
    }

    imageComponent += `
                                        </ul>
                                    </div>
                                </article>
                                <div class="clear"></div>
                            </section>
                        </article>
                            
    `;


    node.insertAdjacentHTML('afterbegin', `${component}${imageComponent}`);

    console.log("node html ", node.innerHTML);

    return component;
}

console.log(renderPianoDetails(_getPianoDetails(_getPianoId()), document));