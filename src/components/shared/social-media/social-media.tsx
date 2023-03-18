import styles from './social-media.module.css';

/* eslint-disable-next-line */
export interface SocialMediaProps {
  variant: 'github' | 'facebook' | 'instagram' | 'twitter';
  color: 'light' | 'dark';
  href?: string;
}

const icons = {
  github: 'fa-github',
  facebook: 'fa-facebook',
  instagram: 'fa-instagram',
  twitter: 'fa-twitter',
};

export function SocialMedia({ variant, color, href }: SocialMediaProps) {
  return (
    <a href={href} className={styles[color]}>
      <i className={`fab ${icons[variant]} fa-2x`}></i>
    </a>
  );
}

export default SocialMedia;
