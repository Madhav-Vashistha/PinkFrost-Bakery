export const siteData = {
  brandName: "Pink Frost Patisserie",
  tagline: "Noida Cake Artist | Custom Celebration Cakes",
  bio: "Specializing in custom luxury cakes, engagement cakes, and bespoke desserts. Winner of Bakers Studio Season 2 on Zee TV and IICM 2026 Promising Talent.",
  owner: {
    name: "Deepaali Arora",
    role: "Founder & Executive Pastry Chef",
    image: "/owner.png",
    bio: "Ranked among the Top 25 Bakers in Noida, Deepaali is a celebrated cake artist known for her intricate designs, wafer paper art, and luxurious flavor profiles. As the winner of Bakers Studio Season 2, she brings passion and precision to every custom creation."
  },
  location: "Noida, UP",
  address: "Noida, UP (Online/Home-based Bakery)",
  phone: "+91 88001 92976",
  email: "hello@pinkfrostpatisserie.com",
  instagram: "https://www.instagram.com/pinkfrost_patisserie/",
  whatsappLink: "https://wa.me/918800192976?text=Hi!%20I%20would%20like%20to%20inquire%20about%20a%20custom%20cake.",
  
  awards: [
    {
      title: "Top 25 Baker Noida",
      org: "@homebakers_com"
    },
    {
      title: "Winner",
      org: "Bakers Studio Season 2 (Zee TV)"
    },
    {
      title: "Promising Talent",
      org: "IICM 2026"
    }
  ],

  categories: [
    { id: "wedding", name: "Wedding Cakes", image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800" },
    { id: "engagement", name: "Engagement Cakes", image: "/engagement_cake.png" },
    { id: "vintage", name: "Vintage Cakes", image: "/vintage_cake.png" },
    { id: "theme", name: "Theme Cakes", image: "/theme_cake.png" },
    { id: "wafer", name: "Wafer Paper Cakes", image: "/wafer_cake.png" },
  ],

  products: [
    {
      id: 1,
      categoryId: "wedding",
      name: "Luxury Floral Wedding Cake",
      description: "A beautiful multi-tiered cake with handcrafted sugar flowers and delicate piping.",
      price: "Price on request",
      image: "https://images.unsplash.com/photo-1535254973040-607b474cb50d?auto=format&fit=crop&q=80&w=800",
      isEggless: true
    },
    {
      id: 11,
      categoryId: "wedding",
      name: "Classic White Tiered Cake",
      description: "Traditional white wedding cake with smooth buttercream and subtle gold leaf accents.",
      price: "Price on request",
      image: "https://images.unsplash.com/photo-1535141192574-5d4897c12636?auto=format&fit=crop&q=80&w=800",
      isEggless: true
    },
    {
      id: 12,
      categoryId: "wedding",
      name: "Rustic Buttercream Cake",
      description: "A beautiful rustic wedding cake with fresh berries and floral accents.",
      price: "Price on request",
      image: "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=800",
      isEggless: false
    },
    {
      id: 2,
      categoryId: "engagement",
      name: "Classic Engagement Ring Cake",
      description: "Elegant semi-fondant cake with a gold acrylic topper and fresh orchids.",
      price: "Price on request",
      image: "/engagement_cake.png",
      isEggless: true
    },
    {
      id: 21,
      categoryId: "engagement",
      name: "Elegant Pink Ribbon Cake",
      description: "Soft pink frosting with a beautiful edible ribbon and delicate pearls.",
      price: "Price on request",
      image: "https://images.unsplash.com/photo-1514517220017-8ce97a34a7b6?auto=format&fit=crop&q=80&w=800",
      isEggless: true
    },
    {
      id: 3,
      categoryId: "vintage",
      name: "Heart Shaped Vintage Cake",
      description: "Trendy Lambeth style piping with cherry details and a personalized message.",
      price: "Price on request",
      image: "/vintage_cake.png",
      isEggless: true
    },
    {
      id: 31,
      categoryId: "vintage",
      name: "Chocolate Drip Vintage Cake",
      description: "Rich dark chocolate layers with a vintage drip style and buttercream rosettes.",
      price: "Price on request",
      image: "https://images.unsplash.com/photo-1574085733277-851d9d856a3a?auto=format&fit=crop&q=80&w=800",
      isEggless: false
    },
    {
      id: 4,
      categoryId: "theme",
      name: "Kids Safari Theme Cake",
      description: "Fun and colorful custom cake featuring edible fondant animals.",
      price: "Price on request",
      image: "/theme_cake.png",
      isEggless: true
    },
    {
      id: 41,
      categoryId: "theme",
      name: "Party Celebration Cake",
      description: "Bright and festive cake covered in sprinkles and fun birthday toppers.",
      price: "Price on request",
      image: "https://images.unsplash.com/photo-1588195538326-c5b1e9f80a1b?auto=format&fit=crop&q=80&w=800",
      isEggless: true
    },
    {
      id: 5,
      categoryId: "wafer",
      name: "Modern Wafer Paper Art Cake",
      description: "Contemporary design with delicate, translucent wafer paper sails.",
      price: "Price on request",
      image: "/wafer_cake.png",
      isEggless: false
    },
    {
      id: 51,
      categoryId: "wafer",
      name: "Textured Wafer Creation",
      description: "Stunning textured buttercream base adorned with delicate wafer paper fans.",
      price: "Price on request",
      image: "https://images.unsplash.com/photo-1627834377411-8da5f4f09de8?auto=format&fit=crop&q=80&w=800",
      isEggless: true
    }
  ]
};
