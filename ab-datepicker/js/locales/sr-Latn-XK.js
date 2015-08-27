(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Изабери датум ...",
		        "buttonLabel": "Кликните или притисните Ентер тастер или размак да отворите календар",
		        "prevButtonLabel": "Иди на претходни месец",
		        "nextButtonLabel": "Иди на следећи месец",
		        "closeButtonTitle": "Близу",
		        "closeButtonLabel": "Затворите календар",
		        "prevMonthButtonLabel": "Иди на претходну годину",
		        "prevYearButtonLabel": "Иди на претходним двадесет година",
		        "nextMonthButtonLabel": "Иди на наредну годину",
		        "nextYearButtonLabel": "Иди на наредних двадесет година",
		        "changeMonthButtonLabel": "Кликните или притисните тастер Ентер или размакницу да бисте променили месец",
		        "changeYearButtonLabel": "Кликните или притисните тастер Ентер или размакницу да бисте променили године",
		        "changeRangeButtonLabel": "Кликните или притисните Ентер тастер или тастер за размак да оде у наредних двадесет година",
		        "calendarHelp": "- Стрелица и Стрелица - иде на исти дан у недељи у претходној или следеће недеље, респективно. Ако се стигне до краја месеца, наставља у наредни или претходни месец, по потреби.\r\n- Стрелица лево и десно Стрелка - аванси једног дана у дан, такође у континуум. Визуелно фокус је померен из дана у дан и обавија из реда на ред у мрежу дана.\r\n- Контрола + Паге Уп - Прелазак на исти датум у претходној години.\r\n- Контрола + Паге Довн - Прелазак на исти датум у наредној години.\r\n- Хоме - Прелазак на снагу првог дана у месецу.\r\n- Енд - Мовес до последњег дана текућег месеца.\r\n- Паге Уп - Прелазак на исти датум у претходном месецу.\r\n- Паге Довн - Прелазак на исти датум у наредних месец дана.\r\n- Унесите или Еспаце - затвара календар, а изабрани датум ће се приказивати у поље за текст повезан.\r\n- Бекство - затвара календар без било какве акције."
		    },
		    "directionality": "LTR",
		    "month_names": [
		        "januar",
		        "februar",
		        "mart",
		        "april",
		        "maj",
		        "jun",
		        "jul",
		        "avgust",
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
		        "avg",
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
		        "nedelja",
		        "ponedeljak",
		        "utorak",
		        "sreda",
		        "četvrtak",
		        "petak",
		        "subota"
		    ],
		    "day_names_abbreviated": [
		        "ned",
		        "pon",
		        "uto",
		        "sre",
		        "čet",
		        "pet",
		        "sub"
		    ],
		    "day_names_short": [
		        "ned",
		        "pon",
		        "uto",
		        "sre",
		        "čet",
		        "pet",
		        "sub"
		    ],
		    "day_names_narrow": [
		        "n",
		        "p",
		        "u",
		        "s",
		        "č",
		        "p",
		        "s"
		    ],
		    "day_periods": {
		        "am": "pre podne",
		        "noon": "u podne",
		        "pm": "po podne"
		    },
		    "day_periods_abbreviated": {
		        "am": "pre podne",
		        "noon": "u podne",
		        "pm": "po podne"
		    },
		    "day_periods_narrow": {
		        "am": "a",
		        "noon": "n",
		        "pm": "p"
		    },
		    "quarter_names": [
		        "Prvo tromesečje",
		        "Drugo tromesečje",
		        "Treće tromesečje",
		        "Četvrto tromesečje"
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
		        "Pre nove ere",
		        "Nove ere"
		    ],
		    "era_names_abbreviated": [
		        "p. n. e.",
		        "n. e."
		    ],
		    "era_names_narrow": [
		        "p.n.e.",
		        "n.e."
		    ],
		    "full_format": "EEEE, dd. MMMM y.",
		    "long_format": "dd. MMMM y.",
		    "medium_format": "dd.MM.y.",
		    "short_format": "d.M.yy.",
		    "firstday_of_week": 0
		};
	}
})();