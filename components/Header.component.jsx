import Image from 'next/image';

const Header = ({ title, imageSrc, alt }) => {
  return (
    // Page Header 
    <header className="page_header">
    <div className="page_header__text">
        <h1 className="page_header__h1">{title}</h1>
    </div>
    <Image 
        src={imageSrc}
        className="page_header__image"
        alt={alt}         
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority 
    />
    </header>
  );
};

export default Header;
