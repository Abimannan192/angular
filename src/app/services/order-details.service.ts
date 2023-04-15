import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // fooddetails 

  foodDetails = [
    {
      id: 1,
      foodName: "Healthy Indian Food",
      foodDetails: "The staple foods are rice, wheat, and lentils, and spices are essential for adding flavor and taste",
      foodPrice: 219,
      foodImg: "https://i0.wp.com/www.healthfitnessrevolution.com/wp-content/uploads/2016/09/iStock_52908752_MEDIUM-2.jpg?fit=1697%2C1131"
    },
    {
      id: 2,
      foodName: "Healthy Indian Food",
      foodDetails: "The staple foods are rice, wheat, and lentils, and spices are essential for adding flavor and taste",
      foodPrice: 219,
      foodImg: "https://www.chezshuchi.com/images/north%20indian%20platter.JPG"
    },
    {
      id: 3,
      foodName: "Healthy Indian Food",
      foodDetails: "The staple foods are rice, wheat, and lentils, and spices are essential for adding flavor and taste",
      foodPrice: 219,
      foodImg: "https://im.whatshot.in/img/2019/Dec/shutterstock-1262587624-cropped-1577771453.jpg"
    },
    {
      id: 10,
      foodName: "Grill Chicken",
      foodDetails: " Best source for Protein Supply Grilled chicken is an excellent source of lean protein making it the best choice for people who hits the gym regularly.",
      foodPrice: 219,
      foodImg: "https://th.bing.com/th/id/R.faead6bb305713dea43b46a5d70367dc?rik=nATpccg9J9rNOQ&riu=http%3a%2f%2f2.bp.blogspot.com%2f-YIO-svIpiH0%2fTW7ugyFWLDI%2fAAAAAAAAGls%2foTXmdUlkQQo%2fs1600%2fchicken%2bdrumsticks.jpg&ehk=nDBeLEQRD09GmhWweT0lDAyFl4ziKsxYS4y7Cg3%2frSs%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id: 11,
      foodName: "Best Mutton Biryani",
      foodDetails: "Indian spices, rice, and usually some type of meat, or in some cases without any meat, and sometimes, in addition, eggs and potatoes.",
      foodPrice: 219,
      foodImg: "https://www.cubesnjuliennes.com/wp-content/uploads/2021/03/Best-Mutton-Biryani-Recipe.jpg"
    },
    {
      id: 12,
      foodName: "Southern Fish Fry",
      foodDetails: "A simple vegetable salad or sliced onion compliment the fish fry. It can be served as a side with any variety rice like Ghee rice, cumin or Jeera rice, simple coconut rice.",
      foodPrice: 219,
      foodImg: "https://thumbs.dreamstime.com/z/homemade-spicy-traditional-fried-fish-served-green-salads-rustic-wooden-table-healthy-meal-seafood-fresh-fish-fry-140768457.jpg"
    },
    
    {
      id: 7,
      foodName: "Veg Masala Roll In Naan",
      foodDetails: "A homely mix of mashed potato and veggies, seasoned with Indian spices. A filling sure to take you back to mom's kitchen.",
      foodPrice: 140,
      foodImg: "https://images.squarespace-cdn.com/content/v1/5aac28d0e2ccd1747b5760ef/1562544243144-HWHIS4R22EBR1NC2JBJM/ke17ZwdGBToddI8pDm48kNiEM88mrzHRsd1mQ3bxVct7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0s0XaMNjCqAzRibjnE_wBlkZ2axuMlPfqFLWy-3Tjp4nKScCHg1XF4aLsQJlo6oYbA/buffalo-chicpea-wrap-25.jpg"
    },
    {
      id: 8,
      foodName: "Indulgence Brownie",
      foodDetails: "(Eggless) Indulge in richly decadent chocolate brownie crafted with love & topped with bitter-sweet chocolate that provides ultra-rich chocolate experience.",
      foodPrice: 105,
      foodImg: "https://th.bing.com/th/id/R.84a77a98f91af4e294cf000acd22f0e5?rik=8RP75VjsbD5qwQ&riu=http%3a%2f%2fwww.agonyofdewheat.com%2fwp-content%2fuploads%2f2016%2f10%2fDSC_3060-675x450.jpg&ehk=bcIxWNsZDYQ8BRfoagppuhCyVZXaItMgEWLmXKv67Mk%3d&risl=&pid=ImgRaw&r=0"
    },
    {
      id: 9,
      foodName: "Oreo Cheesecake Ice Cream",
      foodDetails: "Oreo ice cream",
      foodPrice: 219,
      foodImg: "https://i.pinimg.com/474x/3f/2a/bf/3f2abfcff6e5b6ce3128b7280f4f6cc8--icecream-dubai.jpg"
    },
    {
      id: 4,
      foodName: "Paneer Grilled Sandwich",
      foodDetails: "Pan-fried masala paneer.",
      foodPrice: 200,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id: 5,
      foodName: "Veggie Supreme",
      foodDetails: "Onion| Green Capsicum|Mushroom |black olives , sweet corn , Red Paprika topped with Cheese",
      foodPrice: 369,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id: 6,
      foodName: "Paneer Burger",
      foodDetails: "panner",
      foodPrice: 149,
      foodImg: "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    }
  ]
}
