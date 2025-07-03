import 'bootstrap/dist/css/bootstrap.min.css';  
import '@fortawesome/fontawesome-free/css/all.min.css';  
import "./globals.css";
import { AddToCartProvider } from '@/Context/Addtocart';
import { DataAddtocart } from '@/Context/DataAddtoCart';
import { MenuProvider } from '@/Context/MenuProvider';
import CustomCursor from '@/components/CustomCursor';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body> 
         <CustomCursor/>
          <AddToCartProvider>
              <DataAddtocart>
                <MenuProvider>{children}</MenuProvider>
              </DataAddtocart>
          </AddToCartProvider> 
      </body>
    </html>
  );
}
