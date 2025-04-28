import React, { useState } from 'react'
import Home from './componets/home/Home'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import ProductPage from './componets/productpage/ProductPage';
import IphonePage from './componets/iphonepage/IphonePage';
import SamsungPage from './componets/samsungpage/SamsungPage'
import MenCloth from './componets/mencloth/MenCloth'
import FemaleCloth from './componets/femalecloth/FemaleCloth'
import MenShoe from './componets/menshoe/MenShoe'
import FemaleShoe from './componets/femaleshoe/FemaleShoe'


const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="productpage" element={<ProductPage />}>
            <Route path="iphonepage" element={<IphonePage />} />
            <Route path="samsungpage" element={<SamsungPage />} />
            <Route path="mencloth" element={<MenCloth />} />
            <Route path="femalecloth" element={<FemaleCloth />} />
            <Route path="menshoe" element={<MenShoe />} />
            <Route path="femaleshoe" element={<FemaleShoe />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App


//  for search 
{/* <Router>
        <Navbar
          setSearchProduct={setSearchProduct}
          searchProduct={searchProduct}
        />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="productpage"
            element={<ProductPage searchProduct={searchProduct} />}
          >
            <Route
              path="iphonepage"
              element={<IphonePage searchProduct={searchProduct} />}
            />
            <Route
              path="samsungpage"
              element={<SamsungPage searchProduct={searchProduct} />}
            />
            <Route
              path="mencloth"
              element={<MenCloth searchProduct={searchProduct} />}
            />
            <Route
              path="femalecloth"
              element={<FemaleCloth searchProduct={searchProduct} />}
            />
            <Route
              path="menshoe"
              element={<MenShoe searchProduct={searchProduct} />}
            />
            <Route
              path="femaleshoe"
              element={<FemaleShoe searchProduct={searchProduct} />}
            />
          </Route>
        </Routes>
      </Router> */}