import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import CareerDetail, { careerDetailLoader } from "./pages/careers/CareerDetail";
import Careers, { careersLoader } from "./pages/careers/Careers";
import CareersError from "./pages/careers/CareersError";
import Contact, { contactAction } from "./pages/help/Contact";
import Faq from "./pages/help/Faq";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import CareersLayout from "./partials/CareersLayout";
import HelpLayout from "./partials/HelpLayout";
import RootLayout from "./partials/RootLayout";

// create the browser router for the application
const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="help" element={<HelpLayout />}>
                <Route path="faq" element={<Faq />} />
                <Route path="contact" element={<Contact />} action={contactAction}/>
            </Route>
            <Route path="careers" element={<CareersLayout />}>
                <Route index element={<Careers />} loader={careersLoader} />
                <Route path=":id" element={<CareerDetail />} loader={careerDetailLoader} errorElement={<CareersError />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
