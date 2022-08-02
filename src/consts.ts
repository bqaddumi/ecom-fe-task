const NAVBAR_ITEMS = [
   { name: 'HOME', link: '/' },
   { name: 'SHOP', link: '/shop' },
   { name: 'PAGES', link: '/' },
   { name: 'LOOKBOOK', link: '/' },
   { name: 'BRANDS', link: '/' },
   { name: 'CREATE PRODUCT', link: '/add-product' },
];

const HEADER_TITLE = 'CAMARO';
const DARK = 'Dark';
const LIGHT = 'light';
const SHOPPING_CART = 'Shopping Cart';

const CART_TABLE_COLS = {
  PRODUCT_NAME: 'Product Name',
  PRICE: 'Price',
  QUANTITY: 'Quantity',
  TOTAL: 'Total',
};

const CART_SUMMARY_TABLE_COLS = {
  SUMMARY: 'Summary',
  SUBTOTAL: 'Subtotal',
  SHIPPING: 'Shipping (Flat Rate - Fixed)',
  ORDER_TOTAL: 'Order Total',
};

const CHECKOUT_BUTTON = 'GO TO CHECKOUT';
const CHECKOUT_MULTIPLE_ADDRESS = 'Check Out with Multiple Addresses';

const FOOTER = {
  TITLE: 'Newsletter',
  SUBTITLE: 'Subscribe to recieve coupons and gift cards',
  EMAIL_PLACEHOLDER: 'Email address',
  SUBSCRIBE_BTN: 'SUBSCRIBE',
  SUBSCRIBED: 'SUBSCRIBED!',
};

const CART_LINK = 'Your cart';

const SECTION_FOOTER =
  'Save your moneys with super promotion, available every Sunday in the weekend!';
const LEARN_MORE = 'LEARN MORE';

const BRANDS_IMAGES = [
  'https://cdn.shopify.com/s/files/1/0217/8424/files/Screen_Shot_2016-09-17_at_2.19.17_PM_e1eecf9c-c095-4684-b652-52d17efa12bd.png?v=1630504007',
  'https://w7.pngwing.com/pngs/971/572/png-transparent-swachh-bharat-abhiyan-clean-india-android-india-text-logo-waste.png',
  'https://www.bydesignjewellers.co.za/wp-content/uploads/2020/06/Swatch-Logo-1.jpg',
  'https://i.etsystatic.com/21535773/r/il/22da3a/2613601560/il_340x270.2613601560_32oc.jpg',
  'https://www.channelinfoline.com/wp-content/uploads/2021/09/Toshiba-Logo.jpg',
  'https://thumb.danhsachcuahang.com/image/2019/11/thoi-trang-nu-yody-fashion-thumb-580.png',
];

const ADD_TO_CART = 'Add To Cart';

const PRODUCT_TABS = ['DETAILS', 'MORE INFORMATION', 'REVIEWS'];

const FOOTER_LINKS_SECOND_SECTION = [
  {
    NAME: 'Our Stores',
    LINKS: [
      '501 Floor, Nguyen Ngoc Vu, Cau Giay, Ha Noi',
      '741 - 11A Sandiago, L.A City, USA',
      '5thFloor, 169 Green Lakes, WestBrown, Liverpool City',
      '628 Brooklyn Street, Fulham District, Wales',
      '10001 Street, WinLow District, Mexico',
      '1st Floor BrickHouse, 250 Wall Street, C.A City UK',
    ],
  },
  {
    NAME: 'My Account',
    LINKS: [
      'My Cart',
      'Check Out',
      'Wishlist',
      'Team & Policy',
      'Your Account',
    ],
  },
  {
    NAME: 'Information',
    LINKS: [
      'Shipping & Return',
      'Gift Cards',
      'Track My Order',
      'Team & Policy',
      'FAQs',
    ],
  },
  {
    NAME: 'How to Buy',
    LINKS: [
      'Making Payments',
      'Delivary Options',
      'Buyer Protection',
      'New User Guide',
      'Partner Ship',
    ],
  },
];

const FOOTER_LINKS_FIRST_SECTION = [
  { NAME: 'Our Office Address', VALUE: '169 Florida Ave, L.A City' },
  { NAME: 'Please call us', VALUE: '(+84) 12346869669' },
];

export {
  CART_LINK,
  NAVBAR_ITEMS,
  HEADER_TITLE,
  DARK,
  LIGHT,
  SHOPPING_CART,
  CART_TABLE_COLS,
  CART_SUMMARY_TABLE_COLS,
  CHECKOUT_BUTTON,
  CHECKOUT_MULTIPLE_ADDRESS,
  FOOTER,
  SECTION_FOOTER,
  LEARN_MORE,
  BRANDS_IMAGES,
  ADD_TO_CART,
  PRODUCT_TABS,
  FOOTER_LINKS_SECOND_SECTION,
  FOOTER_LINKS_FIRST_SECTION,
};
