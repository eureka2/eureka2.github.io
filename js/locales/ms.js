(function () {
	"use strict";

	if (typeof Date.dp_locales === 'undefined') {
		Date.dp_locales = {
		    "texts": {
		        "buttonTitle": "Pilih tarikh ...",
		        "buttonLabel": "Klik atau tekan kekunci Enter atau bar ruang untuk membuka kalendar",
		        "prevButtonLabel": "Pergi ke bulan sebelumnya",
		        "nextButtonLabel": "Pergi ke bulan depan",
		        "closeButtonTitle": "Tutup",
		        "closeButtonLabel": "Tutup kalendar",
		        "prevMonthButtonLabel": "Pergi ke tahun sebelumnya",
		        "prevYearButtonLabel": "Pergi ke dua puluh tahun-tahun sebelumnya",
		        "nextMonthButtonLabel": "Pergi ke tahun hadapan",
		        "nextYearButtonLabel": "Pergi ke dua puluh tahun akan datang",
		        "changeMonthButtonLabel": "Klik atau tekan kekunci Enter atau bar ruang untuk menukar bulan",
		        "changeYearButtonLabel": "Klik atau tekan kekunci Enter atau bar ruang untuk menukar tahun",
		        "changeRangeButtonLabel": "Klik atau tekan kekunci Enter atau bar ruang untuk pergi ke dua puluh tahun akan datang",
		        "calendarHelp": "- Panah dan Down Arrow - pergi ke hari yang sama dalam minggu masing-masing pada minggu sebelumnya atau seterusnya. Jika hujung bulan tiba, terus ke bulan seterusnya atau sebelumnya yang mana bersesuaian.\r\n- Panah Kiri dan anak panah kanan - pendahuluan satu hari ke depan, juga dalam kontinum. Tumpuan visual digerakkan dari hari ke hari dan wrap dari baris ke baris di grid hari.\r\n- Kawalan + Page Up - Pergerakan ke tarikh yang sama pada tahun sebelumnya.\r\n- Kawalan + Page Down - Pergerakan ke tarikh yang sama pada tahun hadapan.\r\n- Laman Utama - Pergerakan untuk hari pertama bulan semasa.\r\n- Tamat - Pergerakan ke hari terakhir bulan semasa.\r\n- Page Up - Pergerakan ke tarikh yang sama pada bulan sebelumnya.\r\n- Page Down - Pergerakan ke tarikh yang sama pada bulan depan.\r\n- Masukkan atau Espace - menutup kalendar, dan tarikh yang dipilih ditunjukkan di dalam kotak teks yang berkaitan.\r\n- Escape - menutup kalendar tanpa apa-apa tindakan."
		    },
		    "month_names": [
		        "Januari",
		        "Februari",
		        "Mac",
		        "April",
		        "Mei",
		        "Jun",
		        "Julai",
		        "Ogos",
		        "September",
		        "Oktober",
		        "November",
		        "Disember"
		    ],
		    "month_names_abbreviated": [
		        "Jan",
		        "Feb",
		        "Mac",
		        "Apr",
		        "Mei",
		        "Jun",
		        "Jul",
		        "Ogo",
		        "Sep",
		        "Okt",
		        "Nov",
		        "Dis"
		    ],
		    "month_names_narrow": [
		        "J",
		        "F",
		        "M",
		        "A",
		        "M",
		        "J",
		        "J",
		        "O",
		        "S",
		        "O",
		        "N",
		        "D"
		    ],
		    "day_names": [
		        "Ahad",
		        "Isnin",
		        "Selasa",
		        "Rabu",
		        "Khamis",
		        "Jumaat",
		        "Sabtu"
		    ],
		    "day_names_abbreviated": [
		        "Ahd",
		        "Isn",
		        "Sel",
		        "Rab",
		        "Kha",
		        "Jum",
		        "Sab"
		    ],
		    "day_names_short": [
		        "Ah",
		        "Is",
		        "Se",
		        "Ra",
		        "Kh",
		        "Ju",
		        "Sa"
		    ],
		    "day_names_narrow": [
		        "A",
		        "I",
		        "S",
		        "R",
		        "K",
		        "J",
		        "S"
		    ],
		    "day_periods": {
		        "am": "PG",
		        "noon": "t/hari",
		        "pm": "PTG"
		    },
		    "day_periods_abbreviated": {
		        "am": "pg",
		        "noon": "t/hari",
		        "pm": "ptg"
		    },
		    "day_periods_narrow": {
		        "am": "a",
		        "noon": "t",
		        "pm": "p"
		    },
		    "quarter_names": [
		        "Suku pertama",
		        "Suku Ke-2",
		        "Suku Ke-3",
		        "Suku Ke-4"
		    ],
		    "quarter_names_abbreviated": [
		        "S1",
		        "S2",
		        "S3",
		        "S4"
		    ],
		    "quarter_names_narrow": [
		        "1",
		        "2",
		        "3",
		        "4"
		    ],
		    "era_names": [
		        "S.M.",
		        "TM"
		    ],
		    "era_names_abbreviated": [
		        "S.M.",
		        "TM"
		    ],
		    "era_names_narrow": [
		        "S.M.",
		        "TM"
		    ],
		    "full_format": "EEEE, d MMMM y",
		    "long_format": "d MMMM y",
		    "medium_format": "d MMM y",
		    "short_format": "d/MM/yy",
		    "firstday_of_week": 0
		};
	}
})();