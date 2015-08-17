(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Vyberte dátum ...",
		        "buttonLabel": "Kliknite na alebo stlačte klávesu Enter alebo medzerník otvorte kalendár",
		        "prevButtonLabel": "Prejsť na predchádzajúci mesiac",
		        "nextButtonLabel": "Prejsť na ďalší mesiac",
		        "closeButtonTitle": "Zavrieť",
		        "closeButtonLabel": "Zatvorte kalendár",
		        "prevMonthButtonLabel": "Prejsť na predchádzajúci rok",
		        "prevYearButtonLabel": "Prejsť na dvadsaťročnej",
		        "nextMonthButtonLabel": "Prejsť na budúci rok",
		        "nextYearButtonLabel": "Prejsť na nasledujúcich dvadsiatich rokoch",
		        "changeMonthButtonLabel": "Kliknite na alebo stlačte klávesu Enter alebo medzerníka zmeniť mesiac",
		        "changeYearButtonLabel": "Kliknite na alebo stlačte klávesu Enter alebo medzerníka zmeňte rok",
		        "changeRangeButtonLabel": "Kliknite na alebo stlačte klávesu Enter alebo medzerníka ísť do nasledujúcich dvadsiatich rokoch",
		        "calendarHelp": "- Šípka hore a šípka dole - ide na rovnaký deň v týždni v predchádzajúcej alebo nasledujúcej týždeň, resp. Ak je dosiahnutá konca mesiaca, pokračuje do ďalšej alebo predchádzajúci mesiac podľa potreby.\r\n- Šipky vľavo alebo vpravo - posunie o jeden deň na ďalší, rovnako v kontinuu. Vizuálne fokus je presunutý zo dňa na deň a zábaly z radu do radu v rastri dní.\r\n- Control + Page Up - Presun k rovnakému dátumu predchádzajúceho roka.\r\n- Control + Page Down - Presun k rovnakému dátumu v budúcom roku.\r\n- Home - Presun na prvý deň aktuálneho mesiaca.\r\n- End - Presun na posledný deň aktuálneho mesiaca.\r\n- Page Up - Presun k rovnakému dátumu v predchádzajúcom mesiaci.\r\n- Page Down - Presun na rovnaký dátum v horizonte jedného mesiaca.\r\n- Enter alebo Espace - zavrie kalendár, a vybraný dátum je zobrazený v pridruženej textového poľa.\r\n- Escape - zatvorí kalendár bez akejkoľvek akcie."
		    },
		    "month_names": [
		        "januára",
		        "februára",
		        "marca",
		        "apríla",
		        "mája",
		        "júna",
		        "júla",
		        "augusta",
		        "septembra",
		        "októbra",
		        "novembra",
		        "decembra"
		    ],
		    "month_names_abbreviated": [
		        "jan",
		        "feb",
		        "mar",
		        "apr",
		        "máj",
		        "jún",
		        "júl",
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
		        "nedeľa",
		        "pondelok",
		        "utorok",
		        "streda",
		        "štvrtok",
		        "piatok",
		        "sobota"
		    ],
		    "day_names_abbreviated": [
		        "ne",
		        "po",
		        "ut",
		        "st",
		        "št",
		        "pi",
		        "so"
		    ],
		    "day_names_short": [
		        "Ne",
		        "Po",
		        "Ut",
		        "St",
		        "Št",
		        "Pi",
		        "So"
		    ],
		    "day_names_narrow": [
		        "N",
		        "P",
		        "U",
		        "S",
		        "Š",
		        "P",
		        "S"
		    ],
		    "day_periods": {
		        "am": "dopoludnia",
		        "noon": "poludnie",
		        "pm": "odpoludnia"
		    },
		    "day_periods_abbreviated": {
		        "am": "dopoludnia",
		        "noon": "poludnie",
		        "pm": "odpoludnia"
		    },
		    "day_periods_narrow": {
		        "am": "dop.",
		        "noon": "pol.",
		        "pm": "odp."
		    },
		    "quarter_names": [
		        "1. štvrťrok",
		        "2. štvrťrok",
		        "3. štvrťrok",
		        "4. štvrťrok"
		    ],
		    "quarter_names_abbreviated": [
		        "Q1",
		        "Q2",
		        "Q3",
		        "Q4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "pred Kristom",
		        "po Kristovi"
		    ],
		    "era_names_abbreviated": [
		        "pred Kr.",
		        "po Kr."
		    ],
		    "era_names_narrow": [
		        "pred Kr.",
		        "po Kr."
		    ],
		    "full_format": "EEEE, d. MMMM y",
		    "long_format": "d. MMMM y",
		    "medium_format": "d. M. y",
		    "short_format": "dd.MM.yy",
		    "firstday_of_week": 1
		};
	}
})();