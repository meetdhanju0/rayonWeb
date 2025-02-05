import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Header = lazy(()=> import('../component/core/Header'))
const Home = lazy(()=> import('../page/Home'))
const About = lazy(()=> import('../page/About'));
const Service = lazy(()=> import('../page/Services'))
const Portfolio = lazy(()=> import('../page/Portfolio'))
const Contact = lazy(()=> import('../page/Contact'))
const Career = lazy(()=> import('../page/Career'))
const Policy = lazy(()=> import('../page/privacy-policy'))
const FQblock = lazy(()=> import('../page/f&q'))
const Footer = lazy(()=> import('../component/core/Footer'))
const NotFound = lazy(()=> import('../page/NotFound'))
const Training = lazy(()=> import('../page/Training'))

//Services route
const ServicePython = lazy(() => import('../page/services/web-development/python'))
const ServicePHP = lazy(() => import('../page/services/web-development/php'))
const ServiceReact = lazy(() => import('../page/services/web-development/react'))
const ServiceVue = lazy(() => import('../page/services/web-development/vue'))
const ServiceNode = lazy(() => import('../page/services/web-development/node'))
const ServiceAngular = lazy(() => import('../page/services/web-development/angular'))

const ServiceDevOps = lazy(()=> import('../page/services/devOps-services/devops'))
const ServiceCICD = lazy(()=> import('../page/services/devOps-services/CI-CD'))
const ServiceCloudAutomation = lazy(()=> import('../page/services/devOps-services/Cloud_Automation'))

const ServiceAwsS3 = lazy(()=> import('../page/services/aws-cloud-services/Aws-S3'))
const ServiceAwsEC2 = lazy(()=> import('../page/services/aws-cloud-services/Aws-Ec2'))
const ServiceAwsLambda = lazy(()=> import('../page/services/aws-cloud-services/Aws-lambda'))

const ServiceDataIntegration = lazy(()=> import('../page/services/data-engineering-services/Data_Integration'))
const ServiceDataVisualization = lazy(()=> import('../page/services/data-engineering-services/Data_Visualization'))
const ServiceDataMigration = lazy(()=> import('../page/services/data-engineering-services/Data_Migration'))


const ServiceUIUX = lazy(()=> import('../page/services/web-designing/UI_UX'))
const ServiceResponsive = lazy(()=> import('../page/services/web-designing/Responsive_Design'))
const ServiceWireframing = lazy(()=> import('../page/services/web-designing/WireFraming'))

const ServiceSeo = lazy(()=> import('../page/services/digital-marketing/SEO'))
const ServiceContentMarketing = lazy(()=> import('../page/services/digital-marketing/Content_Marketing'))
const ServiceSocialMediaMarketing = lazy(()=> import('../page/services/digital-marketing/Social_Media_Marketing'))


const AppRoutes = () =>{
    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About/>}/>
                <Route path="/service" element={<Service/>}/>
                <Route path="/portfolio" element={<Portfolio/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/f&q" element={<FQblock/>}/>
                <Route path="/privacy-policy" element={<Policy/>}/>
                <Route path="/career" element={<Career/>}/>
                <Route path="/training" element={<Training />}/>
                <Route path="*" element={<NotFound/>}/>

                {/* Services route */}
                <Route path="/services/python" element={<ServicePython/>}/>
                <Route path="/services/php" element={<ServicePHP/>}/>
                <Route path="/services/react" element={<ServiceReact/>}/>
                <Route path="/services/vue" element={<ServiceVue/>}/>
                <Route path="/services/node" element={<ServiceNode/>}/>
                <Route path="/services/angular" element={<ServiceAngular/>}/>

                <Route path="/services/devOps" element={<ServiceDevOps/>}/>
                <Route path="/services/ci-cd" element={<ServiceCICD/>}/>
                <Route path="/services/cloud" element={<ServiceCloudAutomation/>}/>

                <Route path="/services/aws-s3" element={<ServiceAwsS3/>}/>
                <Route path="/services/aws-ec2" element={<ServiceAwsEC2/>}/>
                <Route path="/services/aws-lambda" element={<ServiceAwsLambda/>}/>

                <Route path="/services/data-integration" element={<ServiceDataIntegration/>}/>
                <Route path="/services/data-visualization" element={<ServiceDataVisualization/>}/>
                <Route path="/services/data-migration" element={<ServiceDataMigration/>}/>

                <Route path="/services/uiux" element={<ServiceUIUX/>}/>
                <Route path="/services/responsive-design" element={<ServiceResponsive/>}/>
                <Route path="/services/wireframing" element={<ServiceWireframing/>}/>

                <Route path="/services/seo" element={<ServiceSeo/>}/>
                <Route path="/services/content-marketing" element={<ServiceContentMarketing/>}/>
                <Route path="/services/social-media-marketing" element={<ServiceSocialMediaMarketing/>}/>
                
            </Routes>
            <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes