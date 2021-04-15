import { addLocaleData } from "react-intl";
import locale_en from 'react-intl/locale-data/en';
import locale_es from 'react-intl/locale-data/es';
import locale_pt from 'react-intl/locale-data/pt';

addLocaleData([...locale_en, ...locale_es, ...locale_pt]);