import { lazy , Suspense } from 'react';
import {
    Routes,
    Route,
} from "react-router-dom";

import Container from './components/Layout/Container';
import NavBar from './components/Navbar';
import RouteLoader from './components/RouteLoader';

const Home = lazy(()=>import('./pages/Home'));
const NotFound = lazy(()=>import('./pages/NotFound'));

const Short = lazy(()=>import('./pages/Short'));
const UrlProvider = lazy(()=>import('./provider/UrlProvider'));

const Search = lazy(()=>import('./pages/Search'));
const SearchProvider = lazy(()=>import('./provider/SearchProvider'));

const Routing = ()=>{
    return (
        <Suspense fallback={<RouteLoader/>}>
            <NavBar/>
            <Container margin="mx-6">
                <Routes>
                    <Route index element={<Home/>}/>
                    <Route path='shortify' element={<UrlProvider><Short/></UrlProvider>}/>
                    <Route path='s/:term' element={<SearchProvider><Search/></SearchProvider>}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Container>
        </Suspense>
    
    )
} 

export default Routing;