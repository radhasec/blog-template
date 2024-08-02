import Subscribe from 'components/Subscribe';
import Footer from './Footer';
import Header from './Navbar';
import { MetaHead } from './MetaHead';
import DarkModeToggle from '../components/DarkModeToggle';

export function Layout(props) {
  const { children, date, imageUrl, title, description, ogUrl, blog } = props;

  const FORM_ID = process.env.NEXT_PUBLIC_CONVERTKIT_FORM_ID;
  const API_KEY = process.env.NEXT_PUBLIC_CONVERTKIT_API_KEY;

  const metaHeadProps = {
    date,
    imageUrl,
    description,
    ogUrl,
    title
  };

  return (
    <>
      <MetaHead {...metaHeadProps} />
      <Header />
      <div className="pt-14">
        <DarkModeToggle />
        {children}
      </div>
      {FORM_ID && API_KEY && <Subscribe />}
      <Footer blog={blog} />
    </>
  );
}
