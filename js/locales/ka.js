(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "აირჩიეთ თარიღი ...",
		        "buttonLabel": "დაწკაპეთ და დააჭირეთ ღილაკს Enter და spacebar გახსნას კალენდარი",
		        "prevButtonLabel": "გადადით წინა თვე",
		        "nextButtonLabel": "გადადით მომდევნო თვეში",
		        "closeButtonTitle": "Close",
		        "closeButtonLabel": "დახურვა კალენდარი",
		        "prevMonthButtonLabel": "გადავიდეთ წინა წელს",
		        "prevYearButtonLabel": "გადასვლა წინა ოცი წლის",
		        "nextMonthButtonLabel": "წასვლა მომდევნო წელს",
		        "nextYearButtonLabel": "გადადით მომდევნო ოცი წლის განმავლობაში",
		        "changeMonthButtonLabel": "დაწკაპეთ და დააჭირეთ ღილაკს Enter და spacebar შეცვალოს თვის",
		        "changeYearButtonLabel": "დაწკაპეთ და დააჭირეთ ღილაკს Enter და spacebar შეცვალოს წელი",
		        "changeRangeButtonLabel": "დაწკაპეთ და დააჭირეთ ღილაკს Enter და spacebar წასვლა მომდევნო ოცი წლის განმავლობაში",
		        "calendarHelp": "- ისარი და Down Arrow - ღებულობენ იგივე დღე კვირაში წინა ან მომდევნო კვირას შესაბამისად. იმ შემთხვევაში, თუ თვის ბოლოს მიაღწია, გრძელდება მომდევნო ან წინა თვის შესაბამისი.\r\n- მარცხენა Arrow და მარჯვენა ისრის - მიღწევების ერთი დღის შემდეგ, ასევე მუდმივი. ვიზუალურად აქცენტი გადავიდა, ყოველდღე და სრულდება ეხლა რიგიდან ქსელის დღის განმავლობაში.\r\n- საკონტროლო + Page Up - Moves იგივე თარიღი წინა წელს.\r\n- საკონტროლო + Page Down - Moves იგივე თარიღი მომავალ წელს.\r\n- მთავარი - Moves პირველ დღეს მიმდინარე თვის.\r\n- End - Moves ბოლო დღეს მიმდინარე თვის.\r\n- Page Up - Moves იგივე თარიღი წინა თვის.\r\n- Page Down - Moves იგივე თარიღი მომდევნო თვეში.\r\n- შეიყვანეთ ან Espace - ხურავს კალენდარი, და არჩეული თარიღიდან ნაჩვენებია დაკავშირებული ტექსტში ყუთი.\r\n- Escape - ხურავს კალენდარი ყოველგვარი ქმედება."
		    },
		    "month_names": [
		        "იანვარი",
		        "თებერვალი",
		        "მარტი",
		        "აპრილი",
		        "მაისი",
		        "ივნისი",
		        "ივლისი",
		        "აგვისტო",
		        "სექტემბერი",
		        "ოქტომბერი",
		        "ნოემბერი",
		        "დეკემბერი"
		    ],
		    "month_names_abbreviated": [
		        "იან",
		        "თებ",
		        "მარ",
		        "აპრ",
		        "მაი",
		        "ივნ",
		        "ივლ",
		        "აგვ",
		        "სექ",
		        "ოქტ",
		        "ნოე",
		        "დეკ"
		    ],
		    "month_names_narrow": [
		        "ი",
		        "თ",
		        "მ",
		        "ა",
		        "მ",
		        "ი",
		        "ი",
		        "ა",
		        "ს",
		        "ო",
		        "ნ",
		        "დ"
		    ],
		    "day_names": [
		        "კვირა",
		        "ორშაბათი",
		        "სამშაბათი",
		        "ოთხშაბათი",
		        "ხუთშაბათი",
		        "პარასკევი",
		        "შაბათი"
		    ],
		    "day_names_abbreviated": [
		        "კვი",
		        "ორშ",
		        "სამ",
		        "ოთხ",
		        "ხუთ",
		        "პარ",
		        "შაბ"
		    ],
		    "day_names_short": [
		        "კვ",
		        "ორ",
		        "სმ",
		        "ოთ",
		        "ხთ",
		        "პრ",
		        "შბ"
		    ],
		    "day_names_narrow": [
		        "კ",
		        "ო",
		        "ს",
		        "ო",
		        "ხ",
		        "პ",
		        "შ"
		    ],
		    "day_periods": {
		        "am": "AM",
		        "noon": "შუადღე",
		        "pm": "PM"
		    },
		    "day_periods_abbreviated": {
		        "am": "AM",
		        "noon": "შუადღე",
		        "pm": "PM"
		    },
		    "day_periods_narrow": {
		        "am": "a",
		        "noon": "შუადღე",
		        "pm": "p"
		    },
		    "quarter_names": [
		        "I კვარტალი",
		        "II კვარტალი",
		        "III კვარტალი",
		        "IV კვარტალი"
		    ],
		    "quarter_names_abbreviated": [
		        "I კვ.",
		        "II კვ.",
		        "III კვ.",
		        "IV კვ."
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "ძველი წელთაღრიცხვით",
		        "ახალი წელთაღრიცხვით"
		    ],
		    "era_names_abbreviated": [
		        "ძვ. წ.",
		        "ახ. წ."
		    ],
		    "era_names_narrow": [
		        "ძვ. წ.",
		        "ახ. წ."
		    ],
		    "full_format": "EEEE, dd MMMM, y",
		    "long_format": "d MMMM, y",
		    "medium_format": "d MMM, y",
		    "short_format": "dd.MM.yy",
		    "firstday_of_week": 0
		};
	}
})();