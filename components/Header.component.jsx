import Image from 'next/image';

const Header = ({ title, imageSrc, alt }) => {
  return (
    <header>
      <Image src={imageSrc} alt={alt} width={1920} height={650} />
      <h1>{title}</h1>
    </header>
  );
};

export default Header;
