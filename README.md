# Introduction
Here I have created a simple backend using convex and express.
Convex is a Backend Application Platform that keeps you focused on building your product. Convex Functions, Database, File Storage, Scheduling, and Search fit together cohesively, and are accessible from client libraries for your favorite environment. Everything in Convex is live and realtime.[publish](https://docs.convex.dev/home)

## How To Run

Run the following command

```bash
nodemon app.js && npx convex dev
```

## Base URL

ROOT URL: `http://localhost:4444`,
Live URL: `https://nodejs-convex.onrender.com/`

<br>

## Endpoints

### Get all 

-   **Endpoint:** `/`
-   **Method:** `GET`
-   **Description:** fetch all items.
-   **Response:** ```json {
    "message": "Items fetched successfully",
    "data": [
        {
            "_creationTime": 1710680813867.3306,
            "_id": "j972ajnekav8bwydghyr65ajex6nf604",
            "isCompleted": true,
            "text": "Buy groceries"
        },
        {
            "_creationTime": 1710680813867.3308,
            "_id": "j97akr3qgbrsjz7sc33y169wh56netq0",
            "isCompleted": true,
            "text": "Go for a swim"
        },
        {
            "_creationTime": 1710680813867.331,
            "_id": "j976wc6rd0ajyprs3ghfj6xc7s6nenhg",
            "isCompleted": false,
            "text": "Integrate Convex"
        },
        {
            "_creationTime": 1710686089679.0994,
            "_id": "j973t9snpe2de9me2gcyxg2hhd6nf5q8",
            "isCompleted": true,
            "text": "bijon"
        },
        {
            "_creationTime": 1710686814687.1716,
            "_id": "j97d8s2xfskwt5nx4s7s9vw5tx6nfwhm",
            "isCompleted": true,
            "text": "a"
        }
    ]
}```
    <br><br>




### Get single data
- **Endpoint:** `/123`
- **Method:** `GET`
- **Description:** Fetch only single data.
- **Response:** ```json {
    "message": "Item fetch successfully",
    "data": [
        {
            "_creationTime": 1710686814687.1716,
            "_id": "j97d8s2xfskwt5nx4s7s9vw5tx6nfwhm",
            "isCompleted": true,
            "text": "a"
        }
    ]
}```
### insert new data

-   **Endpoint:** `/create`
-   **Method:** `POST`
-   **Description:** create new data in database
-   **Body:** ```json{
    "text":"created new data",
    "isCompleted":true
}```
    <br>


### Get brandedFoods 

-   **Endpoint:** `/brandedFoods`
-   **Method:** `GET`
-   **Description:** fetch 25 items.
-   **Response:** ```json {
    "message": "Items fetched successfully",
    "data": [
        {
            "_creationTime": 1710691535776.716,
            "_id": "j5754wd9kw1zg3ns3m0jsdfbfd6nfdeq",
            "brandOwner": "MICHELE'S",
            "brandedFoodCategory": "Cereal",
            "calcium": 19.9,
            "calories": 140,
            "carbohydrates": 16,
            "cholesterol": 0,
            "description": "GRANOLA, CINNAMON, RAISIN, CINNAMON, RAISIN",
            "fat": 7,
            "fiber": 1.99,
            "iron": 1.08,
            "name": "food0",
            "protein": 3,
            "servingSize": 28,
            "servingSizeUnit": "g",
            "sodium": 45.1,
            "sugars": 5.99
        },
        {
            "_creationTime": 1710691535776.7163,
            "_id": "j57cfxefv2tzn8p9jf24p74ee16nff6f",
            "brandOwner": "VEETEE",
            "brandedFoodCategory": "Rice",
            "calcium": 0,
            "calories": 160,
            "carbohydrates": 36,
            "cholesterol": 0,
            "description": "SUPREME BASMATI RICE",
            "fat": 0,
            "fiber": 1.98,
            "iron": 0.36,
            "name": "food1",
            "protein": 4,
            "servingSize": 45,
            "servingSizeUnit": "g",
            "sodium": 0,
            "sugars": 2
        },
        {
            "_creationTime": 1710691535776.7166,
            "_id": "j5728jjh1a7psg91nkyq30gvms6nf1nv",
            "brandOwner": "Cookies Food Products Inc.",
            "brandedFoodCategory": "Ketchup, Mustard, BBQ & Cheese Sauce",
            "calcium": 0,
            "calories": 35.1,
            "carbohydrates": 8.01,
            "cholesterol": 0,
            "description": "ORIGINAL SWEET & SMOKY BAR \"\"B\"\" \"\"Q\"\" SAUCE, ORIGINAL",
            "fat": 0,
            "fiber": 0.99,
            "iron": 0,
            "name": "food2",
            "protein": 0,
            "servingSize": 30,
            "servingSizeUnit": "g",
            "sodium": 210,
            "sugars": 6.99
        },
        {
            "_creationTime": 1710691535776.7168,
            "_id": "j57en3h4k63vxcny69ggh9apnd6nfbgs",
            "brandOwner": "CRY BABY",
            "brandedFoodCategory": "Candy",
            "calcium": -1,
            "calories": 20,
            "carbohydrates": 5,
            "cholesterol": -1,
            "description": "EGGS, EGG SHAPED BUBBLE GUM FILLED WITH EXTRA SOUR FLAVOR CRYSTALS",
            "fat": 0,
            "fiber": -1,
            "iron": -1,
            "name": "food3",
            "protein": 0,
            "servingSize": 6,
            "servingSizeUnit": "g",
            "sodium": 0,
            "sugars": 4
        },
        {
            "_creationTime": 1710691535776.717,
            "_id": "j57fdeg9fq24dkyyfvr3n85r3s6nf3nt",
            "brandOwner": "DUBBLE BUBBLE",
            "brandedFoodCategory": "Chewing Gum & Mints",
            "calcium": -1,
            "calories": 20,
            "carbohydrates": 5,
            "cholesterol": -1,
            "description": "DUBBLE BUBBLE, BUBBLE GUM",
            "fat": 0,
            "fiber": -1,
            "iron": -1,
            "name": "food4",
            "protein": 0,
            "servingSize": 6,
            "servingSizeUnit": "g",
            "sodium": 0,
            "sugars": 5
        },
        {
            "_creationTime": 1710691535776.7173,
            "_id": "j57dz5ryjfmtjy38jd9rf725s56necsy",
            "brandOwner": "YAMAMOTOYAMA",
            "brandedFoodCategory": "Vegetable and Lentil Mixes",
            "calcium": 0,
            "calories": 10,
            "carbohydrates": 1,
            "cholesterol": 0,
            "description": "ROASTED SEAWEED",
            "fat": 0,
            "fiber": 0,
            "iron": 0.36,
            "name": "food5",
            "protein": 1,
            "servingSize": 2.5,
            "servingSizeUnit": "g",
            "sodium": 20,
            "sugars": 0
        },
        {
            "_creationTime": 1710691535776.7175,
            "_id": "j57ehfa9ev77t96bz9x4s3d3h96nf6tb",
            "brandOwner": "BAZOOKA",
            "brandedFoodCategory": "Chewing Gum & Mints",
            "calcium": -1,
            "calories": 20,
            "carbohydrates": 5,
            "cholesterol": -1,
            "description": "BUBBLE GUM, ORIGINAL & BLUE RAZZ",
            "fat": 0,
            "fiber": -1,
            "iron": -1,
            "name": "food6",
            "protein": 0,
            "servingSize": 6,
            "servingSizeUnit": "g",
            "sodium": 0,
            "sugars": 4
        },
        {
            "_creationTime": 1710691535776.7178,
            "_id": "j579ekwrk622cg4j637jbpqmv16nfr4c",
            "brandOwner": "NOT A BRANDED ITEM",
            "brandedFoodCategory": "Crusts & Dough",
            "calcium": 0,
            "calories": 340,
            "carbohydrates": 82.5,
            "cholesterol": 0,
            "description": "SPRING ROLL SKIN",
            "fat": 0.22,
            "fiber": 0,
            "iron": 0,
            "name": "food7",
            "protein": 2.13,
            "servingSize": 100,
            "servingSizeUnit": "g",
            "sodium": 860,
            "sugars": 0
        },
        {
            "_creationTime": 1710691535776.718,
            "_id": "j579t0j9b1gf3c52n9ypdw6aq96nest7",
            "brandOwner": "DEL SUR",
            "brandedFoodCategory": "Cake, Cookie & Cupcake Mixes",
            "calcium": 0,
            "calories": 60,
            "carbohydrates": 15,
            "cholesterol": 0,
            "description": "CORN FRITTER MIX, CORN FRITTER MIX",
            "fat": 0,
            "fiber": 0,
            "iron": 0,
            "name": "food8",
            "protein": 0,
            "servingSize": 17.5,
            "servingSizeUnit": "g",
            "sodium": 57.9,
            "sugars": 0.999
        },
        {
            "_creationTime": 1710691535776.7183,
            "_id": "j571z4ays229085cf1veymawgh6nehyx",
            "brandOwner": "GUNTHER'S GOURMET",
            "brandedFoodCategory": "Ketchup, Mustard, BBQ & Cheese Sauce",
            "calcium": 0,
            "calories": 10,
            "carbohydrates": 2,
            "cholesterol": 0,
            "description": "PINEAPPLE & ORANGE HABANERO HOT SAUCE, PINEAPPLE & ORANGE HABANERO",
            "fat": 0,
            "fiber": 0,
            "iron": 0,
            "name": "food9",
            "protein": 0,
            "servingSize": 15,
            "servingSizeUnit": "g",
            "sodium": 30,
            "sugars": 2
        },
        {
            "_creationTime": 1710691535776.7185,
            "_id": "j57bpa9qn9b1kha0ttshyf7dx56nexg3",
            "brandOwner": "NATURE'S PATH",
            "brandedFoodCategory": "Frozen Pancakes, Waffles, French Toast & Crepes",
            "calcium": 39.9,
            "calories": 180,
            "carbohydrates": 28,
            "cholesterol": 0,
            "description": "NATURE'S PATH, WAFFLES, MAPLE CINNAMON, MAPLE CINNAMON",
            "fat": 6,
            "fiber": 3.99,
            "iron": 1.08,
            "name": "food10",
            "protein": 4,
            "servingSize": 70,
            "servingSizeUnit": "g",
            "sodium": 310,
            "sugars": 6
        },
        {
            "_creationTime": 1710691535776.7188,
            "_id": "j57b7gg3e99q12pvpfy4tymh9h6nft3j",
            "brandOwner": "CLOVER VALLEY",
            "brandedFoodCategory": "Canned Fruit",
            "calcium": 12.6,
            "calories": 89.6,
            "carbohydrates": 22,
            "cholesterol": 0,
            "description": "YELLOW CLING PEACH SLICES IN LIGHT SYRUP",
            "fat": 0,
            "fiber": 0.98,
            "iron": 0,
            "name": "food11",
            "protein": 0,
            "servingSize": 140,
            "servingSizeUnit": "g",
            "sodium": 0,
            "sugars": 20
        },
        {
            "_creationTime": 1710691535776.719,
            "_id": "j57512y5nr11ng2fm4hpcpsy2d6nfmq8",
            "brandOwner": "HEMISFARES",
            "brandedFoodCategory": "Pasta by Shape & Type",
            "calcium": 0,
            "calories": 200,
            "carbohydrates": 39,
            "cholesterol": 0,
            "description": "ELBOW RIDGED PASTA ITALIAN MACARONI PRODUCT, BRONZE CUT CHIFFERINI",
            "fat": 1,
            "fiber": 2.02,
            "iron": 0,
            "name": "food12",
            "protein": 7,
            "servingSize": 56,
            "servingSizeUnit": "g",
            "sodium": 0,
            "sugars": 2
        },
        {
            "_creationTime": 1710691535776.7192,
            "_id": "j573aacw6nngg7c5d00578y0h96nevvb",
            "brandOwner": "CAVENDISH FARMS",
            "brandedFoodCategory": "Entrees, Sides & Small Meals",
            "calcium": 0,
            "calories": 130,
            "carbohydrates": 17,
            "cholesterol": 0,
            "description": "POTATO PATTIES, POTATO PATTIES",
            "fat": 7.98,
            "fiber": 1.02,
            "iron": 0.36,
            "name": "food13",
            "protein": 1,
            "servingSize": 60,
            "servingSizeUnit": "g",
            "sodium": 250,
            "sugars": 0
        },
        {
            "_creationTime": 1710691535776.7195,
            "_id": "j571mv9gmen9vw8j54jp0z9rh16ne4kj",
            "brandOwner": "CLOVER VALLEY",
            "brandedFoodCategory": "Seasoning Mixes, Salts, Marinades & Tenderizers",
            "calcium": 0,
            "calories": 5,
            "carbohydrates": 1,
            "cholesterol": 0,
            "description": "CHICKEN FLAVOR INSTANT BOUILLON CUBES, CHICKEN",
            "fat": 0,
            "fiber": 0,
            "iron": 0,
            "name": "food14",
            "protein": 0,
            "servingSize": 3.5,
            "servingSizeUnit": "g",
            "sodium": 900,
            "sugars": 1
        }
    ]
}```
    <br><br>
