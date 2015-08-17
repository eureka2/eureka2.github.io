(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Hautatu data bat ...",
		        "buttonLabel": "Egin klik edo sakatu Sartu tekla edo zuriune egutegi irekitzeko",
		        "prevButtonLabel": "Aurreko hilabetearekin Joan",
		        "nextButtonLabel": "Hurrengo hilabetean Joan",
		        "closeButtonTitle": "Itxi",
		        "closeButtonLabel": "Itxi egutegian",
		        "prevMonthButtonLabel": "Aurreko urteko Joan",
		        "prevYearButtonLabel": "Azken hogei urtean Joan",
		        "nextMonthButtonLabel": "Hurrengo urtean Joan",
		        "nextYearButtonLabel": "Hurrengo hogei urte Joan",
		        "changeMonthButtonLabel": "Egin klik edo sakatu Sartu tekla edo zuriune hilabetea aldatzeko",
		        "changeYearButtonLabel": "Egin klik edo sakatu Sartu tekla edo zuriune urteko aldatzeko",
		        "changeRangeButtonLabel": "Egin klik edo sakatu Sartu tekla edo zuriune hurrengo hogei urte joan",
		        "calendarHelp": "- Arrow Up eta behera gezi - asteko egun bera doa aurreko edo hurrengo astean, hurrenez hurren. Hilaren amaieran iristen bada, hurrengo edo aurreko hilabetean dagokion bezala jarraitzen.\r\n- Ezker gezi eta eskuineko gezi - Egun bat aurreratzen hurrengo, halaber, continuum batean. Ikusmen ikuspegia da egun batetik mugitu eta ilaratik biltzen den egun-sarera arraunean.\r\n- Kontrol + Page Up -, aurreko urtean data berean joaten da.\r\n- Kontrol + Page Down - hurrengo urtean data berean joaten da.\r\n- Hasiera - hilabeteko lehen egunean joaten da.\r\n- Amaiera - hilabeteko azken egunean joaten da.\r\n- Orria - Aurreko hilabetean data berean joaten da.\r\n- Orria behera - hurrengo hilabetean data berean joaten da.\r\n- Idatzi edo Espace - egutegian itxi egiten da eta hautatutako datarekin lotutako testu-koadroan erakusten da.\r\n- Ihes - ekintzarik gabe egutegi ixten."
		    },
		    "month_names": [
		        "urtarrilak",
		        "otsailak",
		        "martxoak",
		        "apirilak",
		        "maiatzak",
		        "ekainak",
		        "uztailak",
		        "abuztuak",
		        "irailak",
		        "urriak",
		        "azaroak",
		        "abenduak"
		    ],
		    "month_names_abbreviated": [
		        "urt.",
		        "ots.",
		        "mar.",
		        "api.",
		        "mai.",
		        "eka.",
		        "uzt.",
		        "abu.",
		        "ira.",
		        "urr.",
		        "aza.",
		        "abe."
		    ],
		    "month_names_narrow": [
		        "U",
		        "O",
		        "M",
		        "A",
		        "M",
		        "E",
		        "U",
		        "A",
		        "I",
		        "U",
		        "A",
		        "A"
		    ],
		    "day_names": [
		        "igandea",
		        "astelehena",
		        "asteartea",
		        "asteazkena",
		        "osteguna",
		        "ostirala",
		        "larunbata"
		    ],
		    "day_names_abbreviated": [
		        "ig.",
		        "al.",
		        "ar.",
		        "az.",
		        "og.",
		        "or.",
		        "lr."
		    ],
		    "day_names_short": [
		        "ig.",
		        "al.",
		        "ar.",
		        "az.",
		        "og.",
		        "or.",
		        "lr."
		    ],
		    "day_names_narrow": [
		        "I",
		        "A",
		        "A",
		        "A",
		        "O",
		        "O",
		        "L"
		    ],
		    "day_periods": {
		        "am": "AM",
		        "noon": "eguerdia",
		        "pm": "PM"
		    },
		    "day_periods_abbreviated": {
		        "am": "AM",
		        "noon": "eguerdia",
		        "pm": "PM"
		    },
		    "day_periods_narrow": {
		        "am": "g",
		        "noon": "e",
		        "pm": "a"
		    },
		    "quarter_names": [
		        "1. hiruhilekoa",
		        "2. hiruhilekoa",
		        "3. hiruhilekoa",
		        "4. hiruhilekoa"
		    ],
		    "quarter_names_abbreviated": [
		        "1Hh",
		        "2Hh",
		        "3Hh",
		        "4Hh"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "K.a.",
		        "K.o."
		    ],
		    "era_names_abbreviated": [
		        "K.a.",
		        "K.o."
		    ],
		    "era_names_narrow": [
		        "K.a.",
		        "K.o."
		    ],
		    "full_format": "y('e')'ko' MMMM d, EEEE",
		    "long_format": "y('e')'ko' MMMM d",
		    "medium_format": "y MMM d",
		    "short_format": "y/MM/dd",
		    "firstday_of_week": 0
		};
	}
})();