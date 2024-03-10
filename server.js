// sk_test_51MlsQZA5KUVkF7qQm3RoSFsAGJfdebjtor148SLtL7vj1QJPHh5YVOYjDOEvWVz9jU8aaUUoZAPzBNEEaB5HzmbA00ZiZWM3u7
// Coffee: price_1Os4UfA5KUVkF7qQnmSOzit2
// sunglasses: price_1Os4WuA5KUVkF7qQaZFEXw4Y
// camera : price_1Os4YXA5KUVkF7qQwkrGUGfy

const express = require("express");
var cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51MlsQZA5KUVkF7qQm3RoSFsAGJfdebjtor148SLtL7vj1QJPHh5YVOYjDOEvWVz9jU8aaUUoZAPzBNEEaB5HzmbA00ZiZWM3u7"
);

const app = express();
app.use(cors());
app.use(express.static("public"));
app.use(express.json());

app.post("/checkout", async (req, res) => {
  /*
    req.body.items
    [
        {
            id: 1,
            quantity: 3
        }
    ]

    stripe wants
    [
        {
            price: 1,
            quantity: 3
        }
    ]
    */
  console.log(req.body);
  const items = req.body.items;
  let lineItems = [];
  items.forEach((item) => {
    lineItems.push({
      price: item.id,
      quantity: item.quantity,
    });
  });

  const session = await stripe.checkout.sessions.create({
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/success",
    cancel_url: "http://localhost:3000/cancel",
  });

  res.send(
    JSON.stringify({
      url: session.url,
    })
  );
});

app.listen(4000, () => console.log("Listening on port 4000!"));
