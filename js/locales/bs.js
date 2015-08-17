(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Odaberite datum ...",
		        "buttonLabel": "Kliknite ili pritisnite tipku Enter ili razmaknicu da biste otvorili kalendar",
		        "prevButtonLabel": "Idi na prethodni mjesec",
		        "nextButtonLabel": "Idi na sljedećeg mjeseca",
		        "closeButtonTitle": "Zatvoriti",
		        "closeButtonLabel": "Zatvorite kalendar",
		        "prevMonthButtonLabel": "Prelazak na prethodnu godinu",
		        "prevYearButtonLabel": "Prelazak na prethodnu dvadeset godina",
		        "nextMonthButtonLabel": "Idite na sljedeću godinu",
		        "nextYearButtonLabel": "Idi na narednih dvadeset godina",
		        "changeMonthButtonLabel": "Kliknite ili pritisnite tipku Enter ili razmaknicu za promjenu mjesec",
		        "changeYearButtonLabel": "Kliknite ili pritisnite tipku Enter ili razmaknicu za promjenu godinu",
		        "changeRangeButtonLabel": "Kliknite ili pritisnite tipku Enter ili razmaknicu da idu u narednih dvadeset godina",
		        "calendarHelp": "- Strelica prema gore i dolje Arrow - ide na isti dan u tjednu u prethodnoj ili naredne sedmice respektivno. Ako je postignut do kraja mjeseca, nastavlja u sljedeći ili prethodni mjesec, prema potrebi.\r\n- Lijeva strelica i desno - avansa jednog dana u dan, također u kontinuumu. Vizualno fokus preselio iz dana u dan i obavija od reda do reda u mrežu dana.\r\n- Control + Page Up - Prelazak na isti dan prethodne godine.\r\n- Control + Page Down - Prelazi na isti datum u narednoj godini.\r\n- Home - Prelazak na prvi dan u tekućem mjesecu.\r\n- Kraj - Prelazak na zadnji dan u tekućem mjesecu.\r\n- Page Up - Prelazak na isti dan u prethodnom mjesecu.\r\n- Page Down - Prelazak na isti datum u narednih mjesec dana.\r\n- Enter ili Espace - zatvara kalendara, a odabrani datum će se prikazivati ​​u pridruženom okvir za tekst.\r\n- Escape - zatvara kalendar bez bilo kakve akcije."
		    },
		    "month_names": [
		        "januar",
		        "februar",
		        "mart",
		        "april",
		        "maj",
		        "juni",
		        "juli",
		        "august",
		        "septembar",
		        "oktobar",
		        "novembar",
		        "decembar"
		    ],
		    "month_names_abbreviated": [
		        "jan",
		        "feb",
		        "mar",
		        "apr",
		        "maj",
		        "jun",
		        "jul",
		        "aug",
		        "sep",
		        "okt",
		        "nov",
		        "dec"
		    ],
		    "month_names_narrow": [
		        "j",
		        "f",
		        "m",
		        "a",
		        "m",
		        "j",
		        "j",
		        "a",
		        "s",
		        "o",
		        "n",
		        "d"
		    ],
		    "day_names": [
		        "nedjelja",
		        "ponedjeljak",
		        "utorak",
		        "srijeda",
		        "četvrtak",
		        "petak",
		        "subota"
		    ],
		    "day_names_abbreviated": [
		        "ned",
		        "pon",
		        "uto",
		        "sri",
		        "čet",
		        "pet",
		        "sub"
		    ],
		    "day_names_short": [
		        "ned",
		        "pon",
		        "uto",
		        "sri",
		        "čet",
		        "pet",
		        "sub"
		    ],
		    "day_names_narrow": [
		        "N",
		        "P",
		        "U",
		        "S",
		        "Č",
		        "P",
		        "S"
		    ],
		    "day_periods": {
		        "am": "prije podne",
		        "noon": "podne",
		        "pm": "popodne"
		    },
		    "day_periods_abbreviated": {
		        "am": "prije podne",
		        "noon": "podne",
		        "pm": "popodne"
		    },
		    "day_periods_narrow": {
		        "am": "prijepodne",
		        "noon": "podne",
		        "pm": "popodne"
		    },
		    "quarter_names": [
		        "Prvi kvartal",
		        "Drugi kvartal",
		        "Treći kvartal",
		        "Četvrti kvartal"
		    ],
		    "quarter_names_abbreviated": [
		        "K1",
		        "K2",
		        "K3",
		        "K4"
		    ],
		    "quarter_names_narrow": [
		        "1.",
		        "2.",
		        "3.",
		        "4."
		    ],
		    "era_names": [
		        "Prije nove ere",
		        "Nove ere"
		    ],
		    "era_names_abbreviated": [
		        "p. n. e.",
		        "n. e."
		    ],
		    "era_names_narrow": [
		        "p. n. e.",
		        "n. e."
		    ],
		    "full_format": "EEEE, dd. MMMM y.",
		    "long_format": "dd. MMMM y.",
		    "medium_format": "dd. MMM. y.",
		    "short_format": "dd.MM.yy.",
		    "firstday_of_week": 0
		};
	}
})();