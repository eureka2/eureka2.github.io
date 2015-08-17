(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Select date ...",
		        "buttonLabel": "Click or press the Enter key or the spacebar to open the calendar",
		        "prevButtonLabel": "Go to previous month",
		        "prevMonthButtonLabel": "Go to the previous year",
		        "prevYearButtonLabel": "Go to the previous twenty years",
		        "nextButtonLabel": "Go to next month",
		        "nextMonthButtonLabel": "Go to the next year",
		        "nextYearButtonLabel": "Go to the next twenty years",
		        "changeMonthButtonLabel": "Click or press the Enter key or the spacebar to change the month",
		        "changeYearButtonLabel": "Click or press the Enter key or the spacebar to change the year",
		        "changeRangeButtonLabel": "Click or press the Enter key or the spacebar to go to the next twenty years",
		        "closeButtonTitle": "Close",
		        "closeButtonLabel": "Close the calendar",
		        "calendarHelp": "- Up Arrow and Down Arrow - goes to the same day of the week in the previous or next week respectively. If the end of the month is reached, continues into the next or previous month as appropriate.\r\n- Left Arrow and Right Arrow - advances one day to the next, also in a continuum. Visually focus is moved from day to day and wraps from row to row in the grid of days.\r\n- Control+Page Up - Moves to the same date in the previous year.\r\n- Control+Page Down - Moves to the same date in the next year.\r\n- Home - Moves to the first day of the current month.\r\n- End - Moves to the last day of the current month.\r\n- Page Up - Moves to the same date in the previous month.\r\n- Page Down - Moves to the same date in the next month.\r\n- Enter or Espace - closes the calendar, and the selected date is shown in the associated text box.\r\n- Escape - closes the calendar without any action."
		    },
		    "month_names": [
		        "ဇန်နဝါရီ",
		        "ဖေဖော်ဝါရီ",
		        "မတ်",
		        "ဧပြီ",
		        "မေ",
		        "ဇွန်",
		        "ဇူလိုင်",
		        "ဩဂုတ်",
		        "စက်တင်ဘာ",
		        "အောက်တိုဘာ",
		        "နိုဝင်ဘာ",
		        "ဒီဇင်ဘာ"
		    ],
		    "month_names_abbreviated": [
		        "ဇန်",
		        "ဖေ",
		        "မတ်",
		        "ဧပြီ",
		        "မေ",
		        "ဇွန်",
		        "ဇူ",
		        "ဩ",
		        "စက်",
		        "အောက်",
		        "နို",
		        "ဒီ"
		    ],
		    "month_names_narrow": [
		        "ဇ",
		        "ဖ",
		        "မ",
		        "ဧ",
		        "မ",
		        "ဇ",
		        "ဇ",
		        "ဩ",
		        "စ",
		        "အ",
		        "န",
		        "ဒ"
		    ],
		    "day_names": [
		        "တနင်္ဂနွေ",
		        "တနင်္လာ",
		        "အင်္ဂါ",
		        "ဗုဒ္ဓဟူး",
		        "ကြာသပတေး",
		        "သောကြာ",
		        "စနေ"
		    ],
		    "day_names_abbreviated": [
		        "တနင်္ဂနွေ",
		        "တနင်္လာ",
		        "အင်္ဂါ",
		        "ဗုဒ္ဓဟူး",
		        "ကြာသပတေး",
		        "သောကြာ",
		        "စနေ"
		    ],
		    "day_names_short": [
		        "တနင်္ဂနွေ",
		        "တနင်္လာ",
		        "အင်္ဂါ",
		        "ဗုဒ္ဓဟူး",
		        "ကြာသပတေး",
		        "သောကြာ",
		        "စနေ"
		    ],
		    "day_names_narrow": [
		        "တ",
		        "တ",
		        "အ",
		        "ဗ",
		        "က",
		        "သ",
		        "စ"
		    ],
		    "day_periods": {
		        "am": "နံနက်",
		        "noon": "မွန်းတည့်",
		        "pm": "ညနေ"
		    },
		    "day_periods_abbreviated": {
		        "am": "နံနက်",
		        "noon": "မွန်းတည့်",
		        "pm": "ညနေ"
		    },
		    "day_periods_narrow": {
		        "am": "နံနက်",
		        "noon": "မွန်းတည့်",
		        "pm": "ညနေ"
		    },
		    "quarter_names": [
		        "ပထမ သုံးလပတ်",
		        "ဒုတိယ သုံးလပတ်",
		        "တတိယ သုံးလပတ်",
		        "စတုတ္ထ သုံးလပတ်"
		    ],
		    "quarter_names_abbreviated": [
		        "ပထမ သုံးလပတ်",
		        "ဒုတိယ သုံးလပတ်",
		        "တတိယ သုံးလပတ်",
		        "စတုတ္ထ သုံးလပတ်"
		    ],
		    "quarter_names_narrow": [
		        "ပ",
		        "ဒု",
		        "တ",
		        "စ"
		    ],
		    "era_names": [
		        "ခရစ်တော် မပေါ်မီကာလ",
		        "ခရစ်တော် ပေါ်ထွန်းပြီးကာလ"
		    ],
		    "era_names_abbreviated": [
		        "ဘီစီ",
		        "အေဒီ"
		    ],
		    "era_names_narrow": [
		        "ဘီစီ",
		        "အေဒီ"
		    ],
		    "full_format": "EEEE၊ dd MMMM y",
		    "long_format": "d MMMM y",
		    "medium_format": "d MMM y",
		    "short_format": "dd-MM-yy",
		    "firstday_of_week": 1
		};
	}
})();