import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const UserCreate = React.lazy(() => import("pages/UserCreate"));
const UserListQuickEdit = React.lazy(() => import("pages/UserListQuickEdit"));
const UserList = React.lazy(() => import("pages/UserList"));
const UserCards = React.lazy(() => import("pages/UserCards"));
const UserAccountChangePassword = React.lazy(
  () => import("pages/UserAccountChangePassword"),
);
const ProductHomeDetailsNewReview = React.lazy(
  () => import("pages/ProductHomeDetailsNewReview"),
);
const ProductHomeDetailsReview = React.lazy(
  () => import("pages/ProductHomeDetailsReview"),
);
const UserAccountSocialLinks = React.lazy(
  () => import("pages/UserAccountSocialLinks"),
);
const UserProfileGallery = React.lazy(() => import("pages/UserProfileGallery"));
const ProductCheckoutComplete = React.lazy(
  () => import("pages/ProductCheckoutComplete"),
);
const UserAccountNotifications = React.lazy(
  () => import("pages/UserAccountNotifications"),
);
const TourNew = React.lazy(() => import("pages/TourNew"));
const BlogPostNew = React.lazy(() => import("pages/BlogPostNew"));
const BlogPostNewPreview = React.lazy(() => import("pages/BlogPostNewPreview"));
const JobNew = React.lazy(() => import("pages/JobNew"));
const UserProfileFriends = React.lazy(() => import("pages/UserProfileFriends"));
const ChatDetailsGroupUserInfo = React.lazy(
  () => import("pages/ChatDetailsGroupUserInfo"),
);
const MailEmpty = React.lazy(() => import("pages/MailEmpty"));
const ProductNew = React.lazy(() => import("pages/ProductNew"));
const InvoiceCreateSelectClient = React.lazy(
  () => import("pages/InvoiceCreateSelectClient"),
);
const InvoiceCreate = React.lazy(() => import("pages/InvoiceCreate"));
const FileManagerDetails = React.lazy(() => import("pages/FileManagerDetails"));
const ProductCheckoutPaymentNewCard = React.lazy(
  () => import("pages/ProductCheckoutPaymentNewCard"),
);
const ProductCheckoutPayment = React.lazy(
  () => import("pages/ProductCheckoutPayment"),
);
const UserProfileFollowers = React.lazy(
  () => import("pages/UserProfileFollowers"),
);
const UserAccountBillingSelectCard = React.lazy(
  () => import("pages/UserAccountBillingSelectCard"),
);
const ChatDetailsGroup = React.lazy(() => import("pages/ChatDetailsGroup"));
const MailNewFullScreen = React.lazy(() => import("pages/MailNewFullScreen"));
const MailNew = React.lazy(() => import("pages/MailNew"));
const BlogPostDetails = React.lazy(() => import("pages/BlogPostDetails"));
const ProductHomeDetails = React.lazy(() => import("pages/ProductHomeDetails"));
const BlogPost = React.lazy(() => import("pages/BlogPost"));
const JobDetailsCandidates = React.lazy(
  () => import("pages/JobDetailsCandidates"),
);
const JobDetails = React.lazy(() => import("pages/JobDetails"));
const UserAccountBillingSelectAddress = React.lazy(
  () => import("pages/UserAccountBillingSelectAddress"),
);
const UserAccountBilling = React.lazy(() => import("pages/UserAccountBilling"));
const TourDetailsBooker = React.lazy(() => import("pages/TourDetailsBooker"));
const TourDetails = React.lazy(() => import("pages/TourDetails"));
const FileManagerGrid = React.lazy(() => import("pages/FileManagerGrid"));
const InvoiceDetails = React.lazy(() => import("pages/InvoiceDetails"));
const OrderDetails = React.lazy(() => import("pages/OrderDetails"));
const ProductDetails = React.lazy(() => import("pages/ProductDetails"));
const ProductCheckoutNewAddress = React.lazy(
  () => import("pages/ProductCheckoutNewAddress"),
);
const ProductCheckoutAddress = React.lazy(
  () => import("pages/ProductCheckoutAddress"),
);
const CalendarAddEditEvent = React.lazy(
  () => import("pages/CalendarAddEditEvent"),
);
const ChatDetailsCollapseNav = React.lazy(
  () => import("pages/ChatDetailsCollapseNav"),
);
const ChatDetailsSingle = React.lazy(() => import("pages/ChatDetailsSingle"));
const KanbanTaskDetails = React.lazy(() => import("pages/KanbanTaskDetails"));
const MailSelected = React.lazy(() => import("pages/MailSelected"));
const KanbanScroll = React.lazy(() => import("pages/KanbanScroll"));
const Kanban = React.lazy(() => import("pages/Kanban"));
const CalendarFilters = React.lazy(() => import("pages/CalendarFilters"));
const Calendar = React.lazy(() => import("pages/Calendar"));
const Chat = React.lazy(() => import("pages/Chat"));
const Mail = React.lazy(() => import("pages/Mail"));
const FileManagerList = React.lazy(() => import("pages/FileManagerList"));
const TourListFilters = React.lazy(() => import("pages/TourListFilters"));
const TourList = React.lazy(() => import("pages/TourList"));
const JobListFilters = React.lazy(() => import("pages/JobListFilters"));
const JobList = React.lazy(() => import("pages/JobList"));
const Blog = React.lazy(() => import("pages/Blog"));
const BlogPostList = React.lazy(() => import("pages/BlogPostList"));
const Invoice = React.lazy(() => import("pages/Invoice"));
const OrderList = React.lazy(() => import("pages/OrderList"));
const ProductCheckoutCartEmpty = React.lazy(
  () => import("pages/ProductCheckoutCartEmpty"),
);
const ProductCheckoutCart = React.lazy(
  () => import("pages/ProductCheckoutCart"),
);
const ProductHomeShopFilters = React.lazy(
  () => import("pages/ProductHomeShopFilters"),
);
const ProductHomeShop = React.lazy(() => import("pages/ProductHomeShop"));
const ProductList = React.lazy(() => import("pages/ProductList"));
const UserAccount = React.lazy(() => import("pages/UserAccount"));
const UserProfile = React.lazy(() => import("pages/UserProfile"));
const HORIZONTALFile = React.lazy(() => import("pages/HORIZONTALFile"));
const MINIFile = React.lazy(() => import("pages/MINIFile"));
const File = React.lazy(() => import("pages/File"));
const HORIZONTALBooking = React.lazy(() => import("pages/HORIZONTALBooking"));
const MINIBooking = React.lazy(() => import("pages/MINIBooking"));
const Booking = React.lazy(() => import("pages/Booking"));
const HORIZONTALBanking = React.lazy(() => import("pages/HORIZONTALBanking"));
const MINIBanking = React.lazy(() => import("pages/MINIBanking"));
const Banking = React.lazy(() => import("pages/Banking"));
const HORIZONTALAnalytics = React.lazy(
  () => import("pages/HORIZONTALAnalytics"),
);
const MINIAnalytics = React.lazy(() => import("pages/MINIAnalytics"));
const Analytics = React.lazy(() => import("pages/Analytics"));
const HORIZONTALEcommerce = React.lazy(
  () => import("pages/HORIZONTALEcommerce"),
);
const MINIEcommerce = React.lazy(() => import("pages/MINIEcommerce"));
const Ecommerce = React.lazy(() => import("pages/Ecommerce"));
const HORIZONTALApp = React.lazy(() => import("pages/HORIZONTALApp"));
const MINIApp = React.lazy(() => import("pages/MINIApp"));
const App = React.lazy(() => import("pages/App"));
const ComingSoon = React.lazy(() => import("pages/ComingSoon"));
const Maintenance = React.lazy(() => import("pages/Maintenance"));
const PaymentsNewCard = React.lazy(() => import("pages/PaymentsNewCard"));
const Payments = React.lazy(() => import("pages/Payments"));
const Error500 = React.lazy(() => import("pages/Error500"));
const Error404 = React.lazy(() => import("pages/Error404"));
const Error403 = React.lazy(() => import("pages/Error403"));
const FAQs = React.lazy(() => import("pages/FAQs"));
const Contact = React.lazy(() => import("pages/Contact"));
const About = React.lazy(() => import("pages/About"));
const Pricing = React.lazy(() => import("pages/Pricing"));
const PreviewComponents = React.lazy(() => import("pages/PreviewComponents"));
const Home1 = React.lazy(() => import("pages/Home1"));
const VerifyModern = React.lazy(() => import("pages/VerifyModern"));
const VerifyClassic = React.lazy(() => import("pages/VerifyClassic"));
const NewPasswordModern = React.lazy(() => import("pages/NewPasswordModern"));
const NewPasswordClassic = React.lazy(() => import("pages/NewPasswordClassic"));
const ForgotPasswordModern = React.lazy(
  () => import("pages/ForgotPasswordModern"),
);
const ForgotPasswordClassic = React.lazy(
  () => import("pages/ForgotPasswordClassic"),
);
const RegisterModern = React.lazy(() => import("pages/RegisterModern"));
const RegisterClassic = React.lazy(() => import("pages/RegisterClassic"));
const LoginModern = React.lazy(() => import("pages/LoginModern"));
const LoginClassic = React.lazy(() => import("pages/LoginClassic"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/loginclassic" element={<LoginClassic />} />
          <Route path="/loginmodern" element={<LoginModern />} />
          <Route path="/registerclassic" element={<RegisterClassic />} />
          <Route path="/registermodern" element={<RegisterModern />} />
          <Route
            path="/forgotpasswordclassic"
            element={<ForgotPasswordClassic />}
          />
          <Route
            path="/forgotpasswordmodern"
            element={<ForgotPasswordModern />}
          />
          <Route path="/newpasswordclassic" element={<NewPasswordClassic />} />
          <Route path="/newpasswordmodern" element={<NewPasswordModern />} />
          <Route path="/verifyclassic" element={<VerifyClassic />} />
          <Route path="/verifymodern" element={<VerifyModern />} />
          <Route path="/home1" element={<Home1 />} />
          <Route path="/previewcomponents" element={<PreviewComponents />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/error403" element={<Error403 />} />
          <Route path="/error404" element={<Error404 />} />
          <Route path="/error500" element={<Error500 />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/paymentsnewcard" element={<PaymentsNewCard />} />
          <Route path="/maintenance" element={<Maintenance />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
          <Route path="/app" element={<App />} />
          <Route path="/miniapp" element={<MINIApp />} />
          <Route path="/horizontalapp" element={<HORIZONTALApp />} />
          <Route path="/ecommerce" element={<Ecommerce />} />
          <Route path="/miniecommerce" element={<MINIEcommerce />} />
          <Route
            path="/horizontalecommerce"
            element={<HORIZONTALEcommerce />}
          />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/minianalytics" element={<MINIAnalytics />} />
          <Route
            path="/horizontalanalytics"
            element={<HORIZONTALAnalytics />}
          />
          <Route path="/banking" element={<Banking />} />
          <Route path="/minibanking" element={<MINIBanking />} />
          <Route path="/horizontalbanking" element={<HORIZONTALBanking />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/minibooking" element={<MINIBooking />} />
          <Route path="/horizontalbooking" element={<HORIZONTALBooking />} />
          <Route path="/file" element={<File />} />
          <Route path="/minifile" element={<MINIFile />} />
          <Route path="/horizontalfile" element={<HORIZONTALFile />} />
          <Route path="/userprofile" element={<UserProfile />} />
          <Route path="/useraccount" element={<UserAccount />} />
          <Route path="/productlist" element={<ProductList />} />
          <Route path="/producthomeshop" element={<ProductHomeShop />} />
          <Route
            path="/producthomeshopfilters"
            element={<ProductHomeShopFilters />}
          />
          <Route
            path="/productcheckoutcart"
            element={<ProductCheckoutCart />}
          />
          <Route
            path="/productcheckoutcartempty"
            element={<ProductCheckoutCartEmpty />}
          />
          <Route path="/orderlist" element={<OrderList />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/blogpostlist" element={<BlogPostList />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/joblist" element={<JobList />} />
          <Route path="/joblistfilters" element={<JobListFilters />} />
          <Route path="/tourlist" element={<TourList />} />
          <Route path="/tourlistfilters" element={<TourListFilters />} />
          <Route path="/filemanagerlist" element={<FileManagerList />} />
          <Route path="/mail" element={<Mail />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/calendarfilters" element={<CalendarFilters />} />
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/kanbanscroll" element={<KanbanScroll />} />
          <Route path="/mailselected" element={<MailSelected />} />
          <Route path="/kanbantaskdetails" element={<KanbanTaskDetails />} />
          <Route path="/chatdetailssingle" element={<ChatDetailsSingle />} />
          <Route
            path="/chatdetailscollapsenav"
            element={<ChatDetailsCollapseNav />}
          />
          <Route
            path="/calendaraddeditevent"
            element={<CalendarAddEditEvent />}
          />
          <Route
            path="/productcheckoutaddress"
            element={<ProductCheckoutAddress />}
          />
          <Route
            path="/productcheckoutnewaddress"
            element={<ProductCheckoutNewAddress />}
          />
          <Route path="/productdetails" element={<ProductDetails />} />
          <Route path="/orderdetails" element={<OrderDetails />} />
          <Route path="/invoicedetails" element={<InvoiceDetails />} />
          <Route path="/filemanagergrid" element={<FileManagerGrid />} />
          <Route path="/tourdetails" element={<TourDetails />} />
          <Route path="/tourdetailsbooker" element={<TourDetailsBooker />} />
          <Route path="/useraccountbilling" element={<UserAccountBilling />} />
          <Route
            path="/useraccountbillingselectaddress"
            element={<UserAccountBillingSelectAddress />}
          />
          <Route path="/jobdetails" element={<JobDetails />} />
          <Route
            path="/jobdetailscandidates"
            element={<JobDetailsCandidates />}
          />
          <Route path="/blogpost" element={<BlogPost />} />
          <Route path="/producthomedetails" element={<ProductHomeDetails />} />
          <Route path="/blogpostdetails" element={<BlogPostDetails />} />
          <Route path="/mailnew" element={<MailNew />} />
          <Route path="/mailnewfullscreen" element={<MailNewFullScreen />} />
          <Route path="/chatdetailsgroup" element={<ChatDetailsGroup />} />
          <Route
            path="/useraccountbillingselectcard"
            element={<UserAccountBillingSelectCard />}
          />
          <Route
            path="/userprofilefollowers"
            element={<UserProfileFollowers />}
          />
          <Route
            path="/productcheckoutpayment"
            element={<ProductCheckoutPayment />}
          />
          <Route
            path="/productcheckoutpaymentnewcard"
            element={<ProductCheckoutPaymentNewCard />}
          />
          <Route path="/filemanagerdetails" element={<FileManagerDetails />} />
          <Route path="/invoicecreate" element={<InvoiceCreate />} />
          <Route
            path="/invoicecreateselectclient"
            element={<InvoiceCreateSelectClient />}
          />
          <Route path="/productnew" element={<ProductNew />} />
          <Route path="/mailempty" element={<MailEmpty />} />
          <Route
            path="/chatdetailsgroupuserinfo"
            element={<ChatDetailsGroupUserInfo />}
          />
          <Route path="/userprofilefriends" element={<UserProfileFriends />} />
          <Route path="/jobnew" element={<JobNew />} />
          <Route path="/blogpostnewpreview" element={<BlogPostNewPreview />} />
          <Route path="/blogpostnew" element={<BlogPostNew />} />
          <Route path="/tournew" element={<TourNew />} />
          <Route
            path="/useraccountnotifications"
            element={<UserAccountNotifications />}
          />
          <Route
            path="/productcheckoutcomplete"
            element={<ProductCheckoutComplete />}
          />
          <Route path="/userprofilegallery" element={<UserProfileGallery />} />
          <Route
            path="/useraccountsociallinks"
            element={<UserAccountSocialLinks />}
          />
          <Route
            path="/producthomedetailsreview"
            element={<ProductHomeDetailsReview />}
          />
          <Route
            path="/producthomedetailsnewreview"
            element={<ProductHomeDetailsNewReview />}
          />
          <Route
            path="/useraccountchangepassword"
            element={<UserAccountChangePassword />}
          />
          <Route path="/usercards" element={<UserCards />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/userlistquickedit" element={<UserListQuickEdit />} />
          <Route path="/usercreate" element={<UserCreate />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
