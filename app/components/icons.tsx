import type { IconType } from 'react-icons';
import { LuSearch, LuMenu, LuX, LuArrowRight, LuArrowUpRight, LuCalendarDays, LuMapPin, LuPhone, LuClock3, LuNavigation, LuShieldCheck, LuGem, LuHeart, LuSparkles, LuSparkle, LuStar, LuChevronDown, LuChevronUp, LuPlus, LuMinus, LuCheck, LuPencil, LuQuote, LuImages, LuAsterisk } from 'react-icons/lu';
import { FaInstagram, FaTiktok, FaFacebookF, FaPinterestP, FaYoutube, FaWhatsapp } from 'react-icons/fa6';
const icons = {
  search: LuSearch, menu: LuMenu, close: LuX, arrow: LuArrowRight,
  external: LuArrowUpRight, calendar: LuCalendarDays, location: LuMapPin,
  phone: LuPhone, clock: LuClock3, directions: LuNavigation,
  shield: LuShieldCheck, gem: LuGem, heart: LuHeart, sparkles: LuSparkles,
  sparkle: LuSparkle, star: LuStar, expand: LuChevronDown, collapse: LuChevronUp,
  plus: LuPlus, minus: LuMinus, check: LuCheck, edit: LuPencil,
  quote: LuQuote, gallery: LuImages, asterisk: LuAsterisk,
  instagram: FaInstagram, tiktok: FaTiktok, facebook: FaFacebookF,
  pinterest: FaPinterestP, youtube: FaYoutube, whatsapp: FaWhatsapp,
} satisfies Record<string, IconType>;
export type IconName = keyof typeof icons;
export function Icon({ name, className = '' }: { name: IconName; className?: string }) {
  const Glyph = icons[name];
  return <Glyph className={`ui-icon ${className}`} aria-hidden="true" focusable="false" />;
}
export function RatingStars() {
  return <span className="stars" role="img" aria-label="5 out of 5 stars">{Array.from({length:5},(_,i)=><Icon key={i} name="star" />)}</span>;
}
