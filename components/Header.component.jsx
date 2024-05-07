import Image from 'next/image';

const Header = ({ title, imageSrc, alt }) => {
  return (
    <header className="page_header">
    <div className="page_header__text">
        <h1 className="page_header__h1">{title}</h1>
    </div>
    <Image 
        src={imageSrc}
        className="page_header__image"
        alt={alt} 
        width="1920" 
        height="400"
        priority 
    />
</header>
  );
};

export default Header;
