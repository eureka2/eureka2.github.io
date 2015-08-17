(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Scegli la data ...",
		        "buttonLabel": "Fare clic o premere il tasto Invio o la barra spaziatrice per aprire il calendario",
		        "prevButtonLabel": "Vai al mese precedente",
		        "nextButtonLabel": "Vai al mese successivo",
		        "closeButtonTitle": "Chiudere",
		        "closeButtonLabel": "Chiudere il calendario",
		        "prevMonthButtonLabel": "Vai al precedente esercizio",
		        "prevYearButtonLabel": "Vai a vent'anni precedenti",
		        "nextMonthButtonLabel": "Vai al prossimo anno",
		        "nextYearButtonLabel": "Vai ai prossimi 20 anni",
		        "changeMonthButtonLabel": "Fare clic o premere il tasto Invio o la barra spaziatrice per cambiare il mese",
		        "changeYearButtonLabel": "Fare clic o premere il tasto Invio o la barra spaziatrice per cambiare l'anno",
		        "changeRangeButtonLabel": "Fare clic o premere il tasto Invio o la barra spaziatrice per andare ai prossimi 20 anni",
		        "calendarHelp": "- Freccia e Freccia giù - va allo stesso giorno della settimana in settimana precedente o successiva, rispettivamente. Se viene raggiunta la fine del mese, continua nel mese precedente o successivo a seconda dei casi.\r\n- Freccia Sinistra e Freccia destra - avanza un giorno all'altro, anche in un continuum. Visivamente fuoco viene spostato da un giorno all'altro e avvolge da riga a riga nella griglia di giorni.\r\n- Control + Pagina Su - Passa alla stessa data dell'anno precedente.\r\n- Control + Pagina giù - Passa alla stessa data nel prossimo anno.\r\n- Home - Passa al primo giorno del mese in corso.\r\n- End - Passa l'ultimo giorno del mese corrente.\r\n- Pagina Su - Passa alla stessa data del mese precedente.\r\n- Pagina giù - Passa alla stessa data del mese successivo.\r\n- Invio o Espace - chiude il calendario e la data selezionata viene visualizzata nella casella di testo associato.\r\n- Escape - chiude il calendario senza alcuna azione."
		    },
		    "month_names": [
		        "gennaio",
		        "febbraio",
		        "marzo",
		        "aprile",
		        "maggio",
		        "giugno",
		        "luglio",
		        "agosto",
		        "settembre",
		        "ottobre",
		        "novembre",
		        "dicembre"
		    ],
		    "month_names_abbreviated": [
		        "gen",
		        "feb",
		        "mar",
		        "apr",
		        "mag",
		        "giu",
		        "lug",
		        "ago",
		        "set",
		        "ott",
		        "nov",
		        "dic"
		    ],
		    "month_names_narrow": [
		        "G",
		        "F",
		        "M",
		        "A",
		        "M",
		        "G",
		        "L",
		        "A",
		        "S",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "domenica",
		        "lunedì",
		        "martedì",
		        "mercoledì",
		        "giovedì",
		        "venerdì",
		        "sabato"
		    ],
		    "day_names_abbreviated": [
		        "dom",
		        "lun",
		        "mar",
		        "mer",
		        "gio",
		        "ven",
		        "sab"
		    ],
		    "day_names_short": [
		        "dom",
		        "lun",
		        "mar",
		        "mer",
		        "gio",
		        "ven",
		        "sab"
		    ],
		    "day_names_narrow": [
		        "D",
		        "L",
		        "M",
		        "M",
		        "G",
		        "V",
		        "S"
		    ],
		    "day_periods": {
		        "am": "AM",
		        "noon": "mezzogiorno",
		        "pm": "PM"
		    },
		    "day_periods_abbreviated": {
		        "am": "AM",
		        "noon": "mezzogiorno",
		        "pm": "PM"
		    },
		    "day_periods_narrow": {
		        "am": "m.",
		        "noon": "n",
		        "pm": "p."
		    },
		    "quarter_names": [
		        "1º trimestre",
		        "2º trimestre",
		        "3º trimestre",
		        "4º trimestre"
		    ],
		    "quarter_names_abbreviated": [
		        "T1",
		        "T2",
		        "T3",
		        "T4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "a.C.",
		        "d.C."
		    ],
		    "era_names_abbreviated": [
		        "aC",
		        "dC"
		    ],
		    "era_names_narrow": [
		        "aC",
		        "dC"
		    ],
		    "full_format": "EEEE d MMMM y",
		    "long_format": "d MMMM y",
		    "medium_format": "dd MMM y",
		    "short_format": "dd/MM/yy",
		    "firstday_of_week": 1
		};
	}
})();