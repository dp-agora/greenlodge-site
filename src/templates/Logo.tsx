import { AppConfig } from '../utils/AppConfig';

type ILogoProps = {
  xl?: boolean;
};

const Logo = (props: ILogoProps) => {
  const fontStyle = props.xl
    ? 'font-light text-2xl tracking-widest'
    : 'font-light text-lg tracking-widest';

  return (
    <span className={`inline-flex items-center text-primary-500 ${fontStyle}`}>
      {AppConfig.site_name.toUpperCase()}
    </span>
  );
};

export { Logo };
