const indexShowAllProducts = async () => {
  const uri = `${host}/api/v1/product/getAll`;
  const h = new Headers({ 'Content-Type': 'application/json' });

  const req = new Request(uri, {
    method: 'GET',
    headers: h,
  });

  try {
    const response = await fetch(req);
    const data = await response.json();
    if(data.data){
      const result = data.data;
      let productString = '';
      result.forEach((item) => {
        if(item.is_available){
          const {id, image_url, description, price} = item;
          productString += `
          <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="single-product mb-60">
                <div className="product-img" style="margin-bottom: 0; border: 5px solid #f5f5f5; width: 100%; object-fit: cover;">
                    <img src="${image_url}" width="200px" height="250px" alt="">
                </div>
                <div className="product-caption" style="background-color: #f5f5f5; margin-top: 0; clear:both;>
                    <h4><a href="#">${description}</a></h4>
                    <div className="price">
                        <ul>
                            <li><strong>Size:</strong>XL</li>
                            <li>₦${price.toLocaleString()}</li>
                        </ul>
                    </div>
                    <div>
                        <button className="genric-btn info view-btn">View</button>
                        <button className="genric-btn info" onclick="modifyCart(${id}, '${image_url}', '${description}', ${price}, 'add')">Add to Cart</button>
                    </div>
                  </br>
                  </br>
                </div>
            </div>
          </div>
          `;
        }
      });
      console.log('initial check');
       document.getElementById("shopping-table").innerHTML = productString;
       return false;
    }else{
      document.getElementById("shopping-table").innerHTML = `
      <div id="errors">
        <p>No available product in store</p>
      </div>
      `;
      console.log('another check');
      return false;
    }
  } catch(error){
    document.getElementById("shopping-table").innerHTML = `
    <div id="errors">
      <p>Store under update, please check later</p>
    </div>
    `;
  }
  return false;
};
